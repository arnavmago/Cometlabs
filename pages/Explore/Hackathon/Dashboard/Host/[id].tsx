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
// import UserProfile from "@/components/User/Dashboard/Profiles";
// import CardArea from "@/components/event/ApprovedCard";
// import ArenaCard from "@/components/event/GridCard";
import { CodeArena, viewOnly } from "@/components/event/types";
import dynamic from "next/dynamic";
import { Allsubmissions } from "@/components/Fest/Dashboard/Submission/index"
import { SubmissionData } from "@/components/Fest/Dashboard/Submission/SubmissonForm"
import Organiser, { RegUserInfo } from "@/components/Organiser";
import { IoMdSettings } from "react-icons/io";
import CodeArenaForm from "@/components/event";
// import Analytics from "@/components/TeamDashboard/Analytics/index";

interface UserDashboardProps extends viewOnly {
    user: DefaultUser;
    resumedata: ResumeDataType;
    Profiles: ResumeInfo[];
    LastEvaluatedKey: lastkey;
    codearenas: CodeArena[];
    data: RegUserInfo[];
    fest: CodeArena;
    submissions: SubmissionData[];
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

export default function FestDashboard({ user, data, fest, submissions }: UserDashboardProps) {
    console.log(data);
    // const festname = fest.details.title;

    const tabs: DashboardProps["tabs"] = [
        // { label: "CodeArenas", disabled: false, icon: <MdLeaderboard />, component: <ArenaCard view data={data} Data={arenas} Title={"CodeArenas"} /> },
        { label: 'Registered Users', disabled: false, icon: <MdLeaderboard />, component: <Organiser Data={data} Title={`${fest.details.title} Registered Users`} /> },
        { label: 'All Submissions', disabled: false, icon: <MdLeaderboard />, component: <Allsubmissions props={submissions} Title={`${fest.details.title} Submissions`} /> },
        {
            label: 'Edit Request', disabled: false, icon: <IoMdSettings />, component: <div style={{ margin: "30px" }}>
                <CodeArenaForm fest {...fest} />
            </div>
        },

    ];

    return (
        <>
            <Head>
                <title>Organiser's Dashboard | COMETLABS</title>
            </Head>
            {(user.role == "admin" || "org") &&
                <Dashboard title={"Host Dashboard"} subtitle={user.username} tabs={tabs} />
            }
        </>
    )
}



export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    const { id } = context.query;
    console.log(id)

    if (!!session) {
        const user: DefaultUser = session.user as DefaultUser;
        try {
            const accessToken = "Token " + user.accessToken;
            let [registeredusers, festdetails, eventsubmissions] = await Promise.all([
                fetch(process.env.NEXT_PUBLIC_API_URL + "/organize/getRegistered",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                            Authorization: accessToken,
                        },
                        body: JSON.stringify({
                            eventId: id
                        }),
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
                ),
                fetch(process.env.NEXT_PUBLIC_API_URL + "/organize/getEventSubmissions",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                            Authorization: accessToken,
                        },
                        body: JSON.stringify({ eventId: id })
                    }
                )
            ]);

            // return { props: { user } }

            if ([registeredusers.ok]) {
                const data = await registeredusers.json();
                const fest = await festdetails.json()
                const submissions = await eventsubmissions.json()

                return {
                    props: {
                        user,
                        data,
                        fest,
                        submissions,
                    },
                };
            } else if (registeredusers.status == 401) {
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