import { DefaultUser } from "@/backend/functions";
import { InternalLinks } from "@/content/Links";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useSnackbar } from "notistack";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CodeArena } from "./types";




const ArenaForm: FC<CodeArena> = ({ children, ...data }) => {
  // let resumeState: ResumeDataType = DEFAULT;
  const { data: session } = useSession();
  const user: DefaultUser = session?.user as DefaultUser;
  const { enqueueSnackbar } = useSnackbar();


  const methods = useForm({
    mode: "onChange",
    defaultValues: { ...DEFAULT, ...data },
  });

  methods.watch((data) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("CodeArenaData", JSON.stringify(data));
    }
  });

  const handleFestFormSubmit = async (data: CodeArena) => {
    const Data: CodeArena = {
      festId: data.festId,
      details: data.details,
      organiser: data.organiser,
      description: data.description,
      ticket: data.ticket,
      tracks: data.tracks,
      type: data.type,
      mode: data.mode,
      prizes: data.prizes,
      count: 0
    };
    try {
      const accessToken = "Token " + user.accessToken;
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/fests/createFestRequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ festObj: Data }),
        }
      );
      if (res.ok) {
        const { success, error } = await res.json();
        if (!!success) {
          if (data.approvedBy) {
            enqueueSnackbar("Arena is updated, you can see it in request. Changes will be visible after admin approves", { variant: "success" })
          } else {
            enqueueSnackbar(`${Data.type} Updated`, { variant: "success" })
          }
          Router.push(InternalLinks.LANDING_PAGE + `/Explore/${Data.type}/Edit${Data.type}/` + data.festId)
          console.log(success);
          localStorage.removeItem("CodeArenaData");
        } else {
          console.log(error);
        }
      } else {
        throw new Error("ON CodeArena DETAIL SAVE: ERROR");
      }
    } catch (error) {
      console.log("CodeArena details could not be saved");
      console.log(error);
    }
  };

  return <FormProvider {...methods}>
    <form
      onSubmit={methods.handleSubmit((data: CodeArena) =>
        handleFestFormSubmit(data)
      )}
    >
      {children}
    </form>
  </FormProvider>;
};

export default ArenaForm;

export const DEFAULT: CodeArena = {
  festId: "",
  details: {
    title: "",
    startDate: "",
    endDate: "",
    imageUrl: "",
    tags: [],
    desc: "",
    regStartDate: "",
    regEndDate: "",
  },
  organiser: {
    imageUrl: "",
    title: "",
    description: "",
    facebookUrl: "",
    linkedinUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    mobile: "",
    email: "",
  },
  description: {
    description: "",
    videoUrl: "",
  },
  ticket: [],
  tracks: [],
  type: "Hackathon",
  mode: "Online",
  prizes: [],
  count: 0
};
