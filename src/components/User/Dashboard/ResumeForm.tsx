import { DefaultUser } from "@/backend/functions";
import { InternalLinks } from "@/content/Links";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ResumeDataType } from "./types";




const ResumeFormProvider: FC<ResumeDataType> = ({ children, ...data }) => {
  // let resumeState: ResumeDataType = DEFAULT;
  const { data: session } = useSession();
  const user: DefaultUser = session?.user as DefaultUser;
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();



  const methods = useForm({
    mode: "onChange",
    defaultValues: { ...DEFAULT, ...data },
  });

  methods.watch((data) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("resumeAutoSaveData", JSON.stringify(data));
    }
  });

  const handleFestFormSubmit = async (data: ResumeDataType) => {
    const link = user ? `${InternalLinks.DEV_DASHBOARD}${user.username}` : `${InternalLinks.SIGNIN_PAGE}`
    const RESUME: ResumeDataType = {
      info: data.info,
      education: data.education,
      experience: data.experience,
      skills: data.skills,
      projects: data.projects,
      languages: data.languages,
      dummyData: data.dummyData,
      username: data.username
    };
    try {
      const accessToken = "Token " + user.accessToken;
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/user/createProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ profileObj: RESUME }),
        }
      );
      if (res.ok) {
        const { message, error } = await res.json();
        if (!!message) {
          const newuser = user;
          newuser.name = RESUME.info.name;
          newuser.profileImage = RESUME.info.profileImage;
          localStorage.setItem('user', JSON.stringify(newuser));

          enqueueSnackbar("Profile Updated", { variant: "success" })
          localStorage.removeItem("resumeAutoSaveData");
          router.push(link)
        } else {
          console.log(error);
        }
      } else if (res.status == 401) {
        enqueueSnackbar("Unauthorised access!!", { variant: "error" })
      }
      else {
        throw new Error("ON FEST DETAIL SAVE: ERROR");
      }
    } catch (error) {
      console.log("Fest details could not be saved");
      console.log(error);
    }
  };

  return <FormProvider {...methods}>
    <form
      onSubmit={methods.handleSubmit((data: ResumeDataType) =>
        handleFestFormSubmit(data)
      )}
    >
      {children}
    </form>
  </FormProvider>;
};

export default ResumeFormProvider;

export const DEFAULT: ResumeDataType = {
  info: {
    name: "",
    profileImage: "",
    email: "",
    bio: "",
    mobile: 0,
    socials: {
      facebookUrl: "",
      instagramUrl: "",
      twitterUrl: "",
      githubUrl: "",
      linkedinUrl: "",
    },
    Username: "",
  },
  experience: [
    {
      urlName: "",
      endDate: "",
      name: "",
      description: "",
      position: "",
      id: "",
      urlLink: "",
      startDate: ""
    }
  ],
  education: [
    {
      institution: "",
      endDate: "",
      course: "",
      description: "",
      id: "",
      startDate: ""
    }
  ],
  skills: [
    {
      name: ""
    },
  ],
  languages: [
    {
      fluency: "",
      language: ""
    }
  ],
  projects: [
    {
      highlights: [
        ""
      ],
      name: "",
      description: "",
      project_url: "",
      id: "",
      github_repo: "",
      tags: [
        {
          name: ""
        }
      ]
    }
  ],
  dummyData: {
    LineChartGraph: [],
    PiChartGraph: [],
    RadarChartGraph: [],
    gitscore: 0,
  },
  username: ""
};
