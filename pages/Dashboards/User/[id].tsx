import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import * as React from "react";

import { DefaultUser } from "@/backend/functions";
import { ResumeDataType } from "@/components/User/Dashboard/types";
import Head from "next/head";
import { SCORE } from "@/components/User/Analytics";
import { DashboardProps } from "@/layout/Dashboard";
import dynamic from "next/dynamic";
import { MdLeaderboard } from "react-icons/md";
// import { IoMdSettings } from "react-icons/io";
import { FaUserCircle } from 'react-icons/fa';
// import Settings from "@/components/User/Dashboard/Settings";
interface UserDashboardProps {
    user: DefaultUser;
    id: string;
    result: ResumeDataType;
    langs: {};
    score: SCORE,
    submission: ALLSUBMISSIONS[];
    freelabs: LABS[];
}

export interface LABS {
    files: {},
    modifiedAt: Date;
    question_id: string;
    type: string;
    user_id: string;
    name: string;
    framework: string;
    public: boolean;
    question: string;
}

export interface ALLSUBMISSIONS {
    sub_id: string;
    question_id: string;
    user_id: string;
    type: 'f' | 'h' | 'l';
    files: Record<string, string>;
    output: {
        stderr: string;
        stdout: string;
    };
    screenshot: string;
    Status: string;
    Testcase_Passed: number;
    Testcase_Total: number;
    Submission_Time: Date;
    framework: string;
}

// const Header = dynamic(() => import("@/layout/Header"), {
//     ssr: false,
// });

const Resume = dynamic(() => import("@/components/User/Dashboard/Resume"), {
    ssr: false,
});

const Projects = dynamic(() => import("@/components/User/Projects"), {
    ssr: false,
});

const Dashboard = dynamic(() => import("@/layout/Dashboard"), {
    ssr: false,
});

export default function FestDashboard({ user, id, result, langs, score, submission, freelabs }: UserDashboardProps) {

    let isUser;

    if (user.id != id) {
        isUser = false;
    }

    if (user.id == id) {
        isUser = true;
    }

    const tabs: DashboardProps["tabs"] = [
        // { label: `${festname}`, disabled: false, icon: <MdLeaderboard />, component: <Organiser Data={data} Title={`${fest.details.title} Registered Users`} /> },
        // { label: 'submissions', disabled: false, icon: <MdLeaderboard />, component: <Allsubmissions props={submissions} Title={`${fest.details.title} Submissions`} /> },
        { label: 'Profile', disabled: false, icon: <FaUserCircle />, component: <Resume isUser={isUser} ResumeData={result} langs={langs} score={score} freelabs={freelabs} /> },
        // { label: 'Setting', disabled: false, icon: <IoMdSettings />, component: <Settings /> },
        { label: 'Projects', disabled: false, icon: <MdLeaderboard />, component: <Projects submission={submission} freelabs={freelabs} /> }
    ];


    return (
        <>
            <Head>
                <title>Dev's Dashboard | COMETLABS</title>
            </Head>
            <Dashboard title={""} tabs={tabs} subtitle={`@${user.username}`} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    const { id } = context.query;
    if (!!session) {
        const user: DefaultUser = session!.user as DefaultUser;

        try {
            const accessToken = "Token " + user.accessToken;
            let [res] = await Promise.all([
                fetch(
                    process.env.NEXT_PUBLIC_API_URL + `/user/getProfile?username=${id}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                            Authorization: accessToken,
                        },
                    }
                ),
            ])
            if (res.ok) {
                let score = {}
                let langs = {}
                let freelabs = {}
                let submission = {}
                const result = await res.json();
                console.log(result);
                const userid = result.id;
                let [submissions, freeproject] = await Promise.all([
                    fetch(
                        process.env.NEXT_PUBLIC_API_URL + "/labs/getPlaygroundSubmissions",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8",
                                Authorization: accessToken,
                            },
                            body: JSON.stringify({ user_id: userid }),
                        }
                    ),
                    fetch(
                        process.env.NEXT_PUBLIC_API_URL + "/labs/getSavedUserCode",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8",
                                Authorization: accessToken
                            },
                            body: JSON.stringify({ user_id: userid })
                        }
                    ),
                ])
                if (freeproject.ok && submissions.ok) {
                    freelabs = await freeproject.json();
                    submission = await submissions.json();
                }
                // if (!result.error) {
                //     delete result.email;
                const github = result.info.socials.githubUrl
                if (github) {
                    const gitlang = await fetch(
                        process.env.NEXT_PUBLIC_API_URL + "/userAnalytics/github/getUserRepoLangs",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8",
                                Authorization: accessToken,
                            },
                            body: JSON.stringify({ username: github.replace("https://github.com/", "") }),
                        }
                    )
                    const scor = await fetch(
                        process.env.NEXT_PUBLIC_API_URL + "/userAnalytics/score/getUserScore",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json;charset=utf-8",
                                Authorization: accessToken,
                            },
                            body: JSON.stringify({ username: result.username, github_username: result.info.socials.githubUrl.replace("https://github.com/", ""), leetcode_username: result.info.socials.leetcodeUrl.replace("https://leetcode.com/", "") }),
                        }
                    )
                    if (gitlang.ok) {
                        langs = await gitlang.json();
                    }
                    if (scor.ok) {
                        score = await scor.json();
                    }
                }
                return {
                    props: { user, id, result, langs, score, submission, freelabs },
                };
            } else if (res.status == 401) {
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
        props: { id }
    };
};
