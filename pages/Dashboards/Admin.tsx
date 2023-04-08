import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import * as React from "react";
import { DefaultUser } from "@/backend/functions";
// import Resume from "@/components/User/Dashboard/Resume";
import { DashboardProps } from "@/layout/Dashboard";
// import { FaUser } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { ResumeDataType, ResumeInfo } from "@/components/User/Dashboard/types";
import Head from "next/head";
import UserProfile from "@/components/User/Dashboard/Profiles";
// import CardArea from "@/components/event/ApprovedCard";
import { CodeArena, viewOnly } from "@/components/event/types";
import { Hack } from "@/components/Fest/Dashboard/AllSubmission";
import dynamic from "next/dynamic";
// import { FaUserCircle } from "react-icons/fa";
// import Resume from "@/components/User/Dashboard/Resume";
import { SCORE } from "@/components/User/Analytics";
import { LABS } from "./Dev/[id]";
// import { IoMdSettings } from "react-icons/io";
// import Settings from "@/components/User/Dashboard/Settings";
import DummyIndex from "@/components/User/Analytics/DummyIndex";
// import Analytics from "@/components/TeamDashboard/Analytics/index";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const ArenaCard = dynamic(
  () => import('@/components/event/GridCard'),
  {
    loading: () =>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Skeleton variant="rectangular" sx={{ mb: "20px", mr: "50px", mt: "20px" }} width={320} height={430} />
        <Skeleton variant="rectangular" sx={{ mb: "20px", mr: "50px", mt: "20px" }} width={320} height={430} />
        <Skeleton variant="rectangular" sx={{ mb: "20px", mr: "50px", mt: "20px" }} width={320} height={430} />
      </div>
  }
)

interface UserDashboardProps extends viewOnly {
  user: DefaultUser;
  Profiles: ResumeInfo[];
  realProfils: ResumeDataType[];
  LastEvaluatedKey: lastkey;
  codearenas: CodeArena[];
  hack: Hack[];
  data: CodeArena;
  arenas: CodeArena[];
  result: ResumeDataType;
  langs: {};
  score: SCORE,
  freelabs: LABS[];
  TotalUsers: { count: number };
}

export type UserProps = {
  user: DefaultUser;
};

export interface lastkey {
  Username: string;
}

const Dashboard = dynamic(() => import("@/layout/Dashboard"), {
  ssr: false,
});

// const UnderConstruction = () => {
//   return (
//     <Typography sx={{justifyContent: "center", alignItems: "center", textAlign: "center"}} variant="h6">The Page Under Construction</Typography>
//   );
// }

export default function FestDashboard({ user, realProfils, Profiles, LastEvaluatedKey, data, codearenas, arenas, TotalUsers
  //  result, langs, score, freelabs 
}: UserDashboardProps) {

  const tabs: DashboardProps["tabs"] = [
    // { label: 'Profile', disabled: false, icon: <FaUserCircle />, component: <Resume isUser ResumeData={result} langs={langs} score={score} freelabs={freelabs} /> },
    // { label: 'Setting', disabled: false, icon: <IoMdSettings />, component: <Settings info={result.info} Username={user.username} /> },
    { label: "Developers", disabled: false, icon: <MdLeaderboard />, component: <UserProfile TotalUsers={TotalUsers} realProfils={realProfils} profile={Profiles} LastKey={LastEvaluatedKey} /> },
    {
      label: "Past CodeArenas", disabled: false, icon: <MdLeaderboard />, component:
        <Box sx={{ mt: { xs: "32px", md: "64px" }, mx: { md: "40px", xs: "20px" } }}>
          <ArenaCard view data={data} Data={arenas} Title={"CodeArenas"} />
        </Box>
    },
    {
      label: "Arena Requests", disabled: false, icon: <MdLeaderboard />, component:
        <Box sx={{ mt: { xs: "32px", md: "64px" }, mx: { md: "40px", xs: "20px" } }}>
          <ArenaCard view data={data} Data={codearenas} Title={"CodeArenas under request"} createNew />
        </Box>
    },
    { label: "Platform Analytics", disabled: false, icon: <MdLeaderboard />, component: <DummyIndex /> }
  ];

  return (
    <>
      <Head>
        <title>Admin Dashboard | COMETLABS</title>
      </Head>
      <Dashboard title={"Admin Dashboard"} subtitle={user.email} tabs={tabs} />
    </>
  )
}



export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!!session) {
    const user: DefaultUser = session.user as DefaultUser;
    try {
      const accessToken = "Token " + user.accessToken;
      let [resume, profil, request, confirmArena, users, noOfDevelopers] = await Promise.all([
        fetch(process.env.NEXT_PUBLIC_API_URL + "/user/getProfile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
              Authorization: accessToken,
            },
          }
        ),
        fetch(process.env.NEXT_PUBLIC_API_URL + "/fest/viewDevProfileInfoList",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
              Authorization: accessToken,
            },
          }
        ),
        fetch(process.env.NEXT_PUBLIC_API_URL + "/fests/getFestRequests",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
              Authorization: accessToken,
            }
          }
        ),
        fetch(process.env.NEXT_PUBLIC_API_URL + "/fests/getFest",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
              Authorization: accessToken,
            }
          }
        ),
        fetch(process.env.NEXT_PUBLIC_API_URL + "/user/getAllUsers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
              Authorization: accessToken,
            },
          }
        ),
        fetch(process.env.NEXT_PUBLIC_API_URL + "/user/getNoOfUsers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
              Authorization: accessToken,
            },
          }
        )
      ]);



      if ([resume.ok && profil.ok && request.ok && confirmArena.ok]) {
        const result = await resume.json();
        const { Profiles, LastEvaluatedKey } = await profil.json();
        // const hack = await hackathon.json();
        // console.log(hack);
        const codearenas = await request.json();
        const TotalUsers = await noOfDevelopers.json(); // noOfDevelopers return { count : count }
        const arenas = await confirmArena.json();
        // let score = {}
        // let langs = {}
        const realProfils = await users.json();

        if (!result.error) {
          delete result.email;
          // const github = result.info.socials.githubUrl
          // if (github) {
          //   const gitlang = await fetch(
          //     process.env.NEXT_PUBLIC_API_URL + "/userAnalytics/github/getUserRepoLangs",
          //     {
          //       method: "POST",
          //       headers: {
          //         "Content-Type": "application/json;charset=utf-8",
          //         Authorization: accessToken,
          //       },
          //       body: JSON.stringify({ username: github.replace("https://github.com/", "") }),
          //     }
          //   )
          //   const scor = await fetch(
          //     process.env.NEXT_PUBLIC_API_URL + "/userAnalytics/score/getUserScore",
          //     {
          //       method: "POST",
          //       headers: {
          //         "Content-Type": "application/json;charset=utf-8",
          //         Authorization: accessToken,
          //       },
          //       body: JSON.stringify({ username: result.username, github_username: result.info.socials.githubUrl.replace("https://github.com/", ""), leetcode_username: result.info.socials.leetcodeUrl.replace("https://leetcode.com/", "") }),
          //     }
          //   )
          //   if (gitlang.ok) {
          //     langs = await gitlang.json();
          //   }
          //   if (scor.ok) {
          //     score = await scor.json();
          //   }
          // }
          return {
            props: {
              user,
              // result,
              Profiles,
              LastEvaluatedKey,
              codearenas,
              arenas,
              // langs,
              // score,
              realProfils,
              TotalUsers,
            },
          };
        } else {
          console.log(result.error);
        }
      } else if (resume.status == 401) {
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

  }

  return {
    redirect: {
      permanent: false,
      destination: "/signin",
    },
  };
};
