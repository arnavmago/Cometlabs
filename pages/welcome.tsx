import * as React from "react";
import Head from "next/head";
import { DefaultUser } from "@/backend/functions";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";


interface UserDashboardProps {
    user: DefaultUser;
}



export default function Welcome({ user }: UserDashboardProps) {

    React.useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
        if (new Date().getUTCMilliseconds() - new Date(user.createdAt!).getTime() <= 3000) {
            window.location.href = '/onboarding'
        } else {
            window.location.href = '/'
        }
    })

    return (
        <>
            <Head>
                <title>Welcome | COMETLABS</title>
            </Head>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!!session) {
        const user: DefaultUser = session.user as DefaultUser;
        return {
            props: { user },
        };
    }

    return {
        redirect: {
            permanent: false,
            destination: "/signin",
        },
    };
};
