import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import { DefaultUser } from "@/backend/functions";
import { getSession } from "next-auth/react";
import { ResumeDataType } from "@/components/User/Dashboard/types";
import { GetServerSideProps } from "next";
import { CardContainer, FilledButton, TextButton } from "@/styles/theme";
import { Stack, styled } from "@mui/material";
// import Dropzone from "@/components/Dropzone";
import { BsArrowRightShort } from 'react-icons/bs'
import { InternalLinks } from "@/content/Links";
import dynamic from "next/dynamic";

const Onboarding = dynamic(() => import('@/components/User/Dashboard/onboarding'),
    { ssr: false });

const Header = dynamic(() => import('@/layout/Header'),
    { ssr: false });

const ResumeForm = dynamic(() => import('@/components/User/Dashboard/ResumeForm'),
    { ssr: false });

export const PaperCard = styled(CardContainer)({
    // width: "700px",
    marginTop: "40px",
    padding: "48px"
})


interface UserDashboardProps {
    result: ResumeDataType;
    user: DefaultUser;
}



export default function SignUp({ result, user }: UserDashboardProps) {

    React.useEffect(() => {
        const newuser = user;
        newuser.name = result.info.name;
        newuser.profileImage = result.info.profileImage;
        newuser.username = result.username;
        localStorage.setItem("user", JSON.stringify(newuser));
    })

    return (
        <>
            <Head>
                <title>Profile | COMETLABS</title>
            </Head>
            <Header noLink user={user} />
            <Container component="main" sx={{ mt: 5 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <div>
                        <Typography variant="TitleLarge" color="onsurfacevariant.main" sx={{ mr: 1 }}>
                            Hi, {user.name?.split(' ').slice(0, 1).join(' ')}!
                        </Typography>
                        <Typography variant="HeadlineSmall">Let&apos;s build your comet profile together!</Typography>
                    </div>
                    <TextButton onClick={() => { window.location.href = (InternalLinks.DEV_DASHBOARD + user.username) }}
                        endIcon={<BsArrowRightShort />} sx={{ float: "right" }}><Typography variant="LabelLarge">I&apos;ll do it later</Typography>
                    </TextButton>
                </Stack>
                <Box sx={{ width: { xs: "90%", md: "60%", lg: "750px" }, margin: "auto" }}>
                    <ResumeForm {...result}>
                        <Onboarding />
                        <FilledButton
                            type="submit" endIcon={<BsArrowRightShort />} sx={{ mt: "48px", mb: "108px", float: "right" }}><Typography variant="LabelLarge">Next</Typography>
                        </FilledButton>
                    </ResumeForm>
                </Box>
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!!session) {
        const user: DefaultUser = session.user as DefaultUser;
        try {
            const accessToken = "Token " + user.accessToken;
            let res = await fetch(
                process.env.NEXT_PUBLIC_API_URL + "/user/getProfile",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        Authorization: accessToken,
                    },
                }
            );
            if (res.ok) {
                const result = await res.json();
                if (!result.error) {
                    delete result.email;
                    return {
                        props: { user, result },
                    };
                } else {
                    console.log(result.error);
                }
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
        redirect: {
            permanent: false,
            destination: "/signin",
        },
    };
};
