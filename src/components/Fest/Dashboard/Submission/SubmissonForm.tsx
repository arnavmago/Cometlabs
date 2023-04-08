import { useSession } from "next-auth/react";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { DefaultUser } from "@/backend/functions";
import { Technology } from "@/content/Technology";
import { Teamm } from "../CreateTeam";
import * as React from 'react';
// import { useRouter } from "next/router";

export interface Details {
  title: string;
  subtitle: string;
  tags: Technology[];
}

export interface Problem {
  description: string;
  solution: string;
}

export interface Links {
  deployment: string;
  github: string;
  video: string;
}

export interface SubmissionData {
  id: string;
  details: Details;
  problem: Problem;
  link: Links;
  team?: Teamm;
}

interface Submit {
  data: SubmissionData;
  id: string;
  team: Teamm;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const SubmissionFormProvider: FC<Submit> = ({ children, team, id, setOpen, data }) => {
  let formState: SubmissionData = data;
  const { data: session } = useSession();
  // const router = useRouter();
  const user: DefaultUser = session?.user as DefaultUser;
  const { enqueueSnackbar } = useSnackbar();

  if (typeof window !== "undefined") {
    const autoSavedSubmissionData = JSON.parse(
      String(localStorage.getItem("autoSavedSubmissionData"))
    ) as SubmissionData;
    formState = !!data
      ? { ...DEFAULT, ...autoSavedSubmissionData, ...data }
      : { ...DEFAULT, ...autoSavedSubmissionData };
  }

  const methods = useForm({
    mode: "onChange",
    defaultValues: formState,
  });

  methods.watch((data) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("autoSavedSubmissionData", JSON.stringify(data));
    }
  });

  const handleSubmissionFormSubmit = async (data: SubmissionData) => {
    const Submission: SubmissionData = {
      id: team.team_id,
      details: data.details,
      problem: data.problem,
      link: data.link
    };
    try {
      const accessToken = "Token " + user.accessToken;
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/organize/createSubmission",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ submission: Submission, team_id: team.team_id, eventId: id }),
        }
      );
      if (res.ok) {
        const { success, error } = await res.json();
        if (!!success) {
          enqueueSnackbar("Submission Updated!!", { variant: "success" });
          localStorage.setItem("submission", JSON.stringify(Submission));
          localStorage.removeItem("autoSavedSubmissionData");
          setOpen && setOpen(true);
          // window.location.href = `https://cometlabs.in/lab/${Submission.playground}/${user.username}/h/${id}`
          // https://cometlabs.in/lab/react/shivam@cometlabs.in/f/db39cb21-3e9a-468b-9d3f-d23dbb640436
        } else {
          enqueueSnackbar(error, { variant: "error" });
        }
      } else {
        throw new Error("ON Submission DETAIL SAVE: ERROR");
      }
    } catch (error) {
      console.log("Submission details could not be saved");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data: SubmissionData) =>
          handleSubmissionFormSubmit(data)
        )}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default SubmissionFormProvider;

export const DEFAULT: SubmissionData = {
  id: "",
  details: {
    title: "",
    subtitle: "",
    tags: [],
  },
  problem: {
    description: "",
    solution: "",
  },
  link: {
    deployment: "",
    github: "",
    video: "",
  },
};
