import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import * as React from "react";
import { DefaultUser } from "@/backend/functions";
// import Resume from "@/components/User/Dashboard/Resume";
import { Teamm } from "@/components/Fest/Dashboard/CreateTeam";
// import Invite from "@/components/Fest/Dashboard/Invite";
import { ResumeDataType } from "@/components/User/Dashboard/types";
// import { useSnackbar } from "notistack";
import Head from "next/head";
import { SubmissionData } from "@/components/Fest/Dashboard/Submission/SubmissonForm";
import { ref } from "@/components/Fest/Dashboard/Invite";
// import Invite from "@/components/Fest/Dashboard/Invite";
// import { TeamDetailComponent } from "@/components/Fest/Dashboard";
import dynamic from "next/dynamic";
import { CodeArena } from "@/components/event/types";

interface UserDashboardProps {
  user: DefaultUser;
  result: ResumeDataType;
  teamm: Teamm;
  submission: SubmissionData;
  reff: ref;
  id: string;
  fest: CodeArena;
  type: string;
}

export type UserProps = {
  user: DefaultUser;
};

const TeamDetailComponent = dynamic(() => import("@/components/Fest/Dashboard"), {
  ssr: false,
});

// const UnderConstruction = () => {
//   return (
//     <Typography sx={{justifyContent: "center", alignItems: "center", textAlign: "center"}} variant="h6">The Page Under Construction</Typography>
//   );
// }
// { user, result, team, id, submission, reff, hack }: UserDashboardProps

export default function FestDashboard({ user, teamm, id, submission, fest, type }: UserDashboardProps) {

  // enqueueSnackbar("Please Update Your Profile", { variant: "info" })
  // const tabs: DashboardProps["tabs"] = [
  // { label: "Profile Submitted", disabled: false, icon: <FaUser />, component: <Resume ResumeData={result} /> },
  // { label: "Team Section", disabled: false, icon: <FaUsers />, component: <Team user={user} team={team} id={id} /> },
  // { label: "Refer and Earn", disabled: false, icon: <FaUsers />, component: <Invite user={user} team={team} reff={reff} /> },
  // { l abel: "My Submission", disabled: false, icon: <FaFileAlt />, component: <Submission id={id} props={submission} team={team} /> },
  // ];

  return (
    <>
      <Head>
        <title>Organiser Dashboard | COMETLABS</title>
      </Head>
      <TeamDetailComponent hack user={user} teamm={teamm} id={id} type={type} submission={submission} fest={fest} />
      {/* <Invite user={user} reff={reff} /> */}
      {/* <Dashboard title={"Event Dashboard"} subtitle={user.email} tabs={tabs} /> */}
    </>
  )
}



export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  // const { enqueueSnackbar } = useSnackbar();
  const { id } = context.query;

  if (!!session) {
    const user: DefaultUser = session.user as DefaultUser;
    const accessToken = "Token " + user.accessToken;
    const isRegistered = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/organize/isRegistered",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: accessToken,
        },
        body: JSON.stringify({ eventId: id })
      }
    )
    if (isRegistered.ok) {
      try {
        let submission = null;
        let type = null;
        let [res, team, festDetails] = await Promise.all([
          fetch(process.env.NEXT_PUBLIC_API_URL + "/user/getProfile",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: accessToken,
              },
            }
          ),
          fetch(process.env.NEXT_PUBLIC_API_URL + "/organize/getTeam",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: accessToken,
              },
              body: JSON.stringify({ eventId: id })
            }
          ),
          fetch(process.env.NEXT_PUBLIC_API_URL + "/fests/viewFest",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: accessToken,
              },
              body: JSON.stringify({ id: id })
            }
          )
        ]);
        if ([team.ok && res.ok]) {
          const result = await res.json();
          let teamm = await team.json();
          const fest = await festDetails.json();
          type = fest.type;
          if (teamm.error) {
            teamm = null;
          }
          if (teamm && teamm.team_id) {
            const [submit] = await Promise.all([
              fetch(process.env.NEXT_PUBLIC_API_URL + "/organize/getsubmission",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: accessToken,
                  },
                  body: JSON.stringify({ eventId: id, team_id: teamm.team_id })
                }
              ),
            ])
            if (submit.ok) {
              const submision = await submit.json();
              submission = submision.submission;
            }
          }
          // const reff = await ref.json();
          // if (team.error === "Not Registered") {
          //   return {
          //     redirect: {
          //       permanent: false,
          //       destination: InternalLinks.LANDING_PAGE + "fest/" + id,
          //     },
          //   }
          // }
          return {
            props: {
              user,
              result,
              teamm,
              id,
              submission,
              fest,
              type,
              // reff,
            },
          };
        } else if (team.status == 401) {
          return {
            redirect: {
              permanent: false,
              destination: "/logout",
            }
          }
        } else {
          throw new Error("ERROR");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        }
      }
    }

  }

  return {
    redirect: {
      permanent: false,
      destination: "/signin",
    },
  };
};
