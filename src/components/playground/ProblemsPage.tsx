import * as React from "react";
import { Tag } from "@/components/Fest/Dashboard/AllSubmission";
// import { Box, Grid, Typography } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { InternalLinks } from "@/content/Links";
// import { useSession } from "next-auth/react";
import { DefaultUser } from "@/backend/functions";
import { CardContainer, FilledButton } from "@/styles/theme";
// import { async } from "@firebase/util";
import { useRouter } from "next/router";
import style from "@/styles/typography-styles.module.css";


export type Problem = {
    id: string;
    name: string;
    Tags: string[];
    frameworks: string;
    singleLiner: string;
    // dependencies: Record<string, string>;
    files: Record<string, string>;
    Markdown: string;
};

export type ProblemsProps = {
    questions: Problem[];
};

export default function Problems(problem: Problem) {
    console.log(problem.id)
    const [user, setUser] = React.useState<DefaultUser>()
    console.log(user);
    const router = useRouter();
    React.useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")!));
    }, [])

    // const handleClick = async (id: string) => {
    //     console.log(id)
    //     if (!!session) {
    //         try {
    //             const accessToken = "Token " + user!.accessToken;
    //             let check = await fetch(
    //                 process.env.NEXT_PUBLIC_API_URL + "/labs/getQuestion",
    //                 {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-Type": "application/json;charset=utf-8",
    //                         Authorization: accessToken,
    //                     },
    //                     body: JSON.stringify({ id: id }),
    //                 }
    //             );
    //             if (check.ok) {
    //                 const question = await check.json();
    //                 console.log(question)
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     } else {
    //         Router.push(InternalLinks.SIGNIN_PAGE)
    //     }
    // }

    const handleClick = () => {
        localStorage.setItem('question', JSON.stringify(problem))
        router.push(InternalLinks.LABS_PAGE + '/' + (problem.frameworks).toLowerCase() + "/" + user!.username + "/l/" + problem.id)
    }

    return (
        <>
            {/* {questions.map((problem, i) => ( */}
            <CardContainer sx={{ padding: "10px 20px", mt: "20px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {/* <Typography variant="LabelLarge" sx={{ mt: 1, mb: 1, mr: 1, fontWeight: 600 }}> */}
                        <p className={style.LabelLarge}>
                            {problem.name}
                            {/* </Typography> */}
                        </p>
                        <Grid container spacing={1} sx={{ width: "auto" }}>
                            {problem.Tags.map((tag, index) => (
                                <Grid item xs="auto" key={index}>
                                    <Tag label={tag} size="small" />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    {user &&
                        <FilledButton variant="contained"
                            onClick={handleClick}
                        // href={InternalLinks.LABS_PAGE + problem.name}
                        // href={ExternalLinks.LAB_PAGE.href + '/' + (problem.frameworks).toLowerCase() + "/" + user.username + "/l/" + problem.id}
                        >Solve Now</FilledButton>
                    }
                </Box>
                {/* <Typography sx={{
                    padding: "0 10px",
                    maxWidth: '100%',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}> */}
                <p style={{
                    padding: "0 10px",
                    maxWidth: '100%',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {problem.singleLiner}
                    {/* </Typography> */}
                </p>
            </CardContainer>
            {/* ))} */}
        </>
    );
}