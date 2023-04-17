import { Box, Stack, Paper, Grid } from "@mui/material";
import { GrRefresh } from "react-icons/gr";
import * as React from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi"
import { useSession } from "next-auth/react";
import { DefaultUser } from "@/backend/functions";
import style from "@/styles/typography-styles.module.css";

export interface submis {
    user_id: string;
    sub_id: string;
    Testcase_Status: string;
    Testcase_Failed: number;
    Testcase_Passed: number;
    Testcase_Total: number;
    Status: string;
    Submission_Time: string;
    output: string;
    files: Record<string, string>;
    question_id: string;
    Testcase_Run: string;
}

export interface submission {
    submission: submis[];
}



const FetchQtnSolution = ({ submission }: submission) => {
    let [submit, setSubmit] = React.useState(submission);
    const { data: session } = useSession();
    const user: DefaultUser = session?.user as DefaultUser;
    const accessToken = "Token " + user.accessToken;
    const qid = submit && submit[0] && submit[0].question_id
    // let qid = "dsfg";

    const HandleLoad = async () => {
        if (!!session) {
            const user: DefaultUser = session.user as DefaultUser;
            try {

                let getSaved = await fetch(
                    process.env.NEXT_PUBLIC_API_URL + "/labs/getPlaygroundSubmissions",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: accessToken,
                        },
                        body: JSON.stringify({ question_id: qid, user_id: user.id })
                    }
                )
                if (getSaved.ok) {
                    const submi = await getSaved.json();
                    console.log(submi);
                    submit = submi;
                    //     const length = submit.length;

                    //     submit.push(...submi.slice(length));
                    // console.log(submit);
                    setSubmit([...submit])
                } else {
                    throw new Error("ERROR");
                }
            } catch (error) {
                console.log(error);
            }

        }
    }

    return (
        <Box sx={{ width: "100%", padding: "44px 0", position: "relative", "& .MuiGrid-item": { padding: 0, m: 1 } }}>
            <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: "center" }}>
                {/* <Typography
                    variant="LabelLarge"
                    sx={{ flexGrow: 1, maxWidth: `calc(100vw - 200px)`, marginBottom: "30px" }}
                    noWrap>
                    Past Submissions
                </Typography> */}
                <p className={style.TitleLarge} style={{ maxWidth: 'calc(100vw-200px)' }}>Past Submissions</p>
                {/* <IconButton
                    color="primary"
                    onClick={() => HandleLoad()}
                >
                    <GrRefresh color="white" />
                </IconButton> */}
                <a href="#" onClick={() => HandleLoad()}>
                    <GrRefresh color="white" />
                </a>
            </Stack>
            {submit && submit.length > 0 ? (
                <Grid direction="row" sx={{ padding: "0 20px" }} container spacing={2} justifyContent="center" alignItems="center">
                    {submit.map((submit) => {
                        return (
                            <Grid item xs={12} key={submit.sub_id}>
                                <SubmitCard {...submit} />
                            </Grid>
                        );
                    })}
                </Grid>
            ) : (
                // <Typography variant="LabelLarge">NO Past Submissions found</Typography>
                <p className={style.LabelLarge}>NO Past Submissions found</p>
            )}
        </Box>
    )
}


const SubmitCard = (prop: submis) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Box sx={{ width: "100%" }}>
            <Paper onClick={() => { setExpanded(!expanded) }} sx={{ padding: 2, height: "100%", borderRadius: "20px", transition: "1s", display: "flex", flexDirection: "column" }}>
                <Stack sx={{ pl: 3, pr: 3 }}>
                    <Stack direction="row" sx={{ display: "flex", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}>
                        {/* <Typography variant="LabelLarge">{prop.Status}</Typography> */}
                        <p className={style.LabelLarge}>{prop.Status}</p>
                        {/* <Typography variant="LabelLarge">{new Date(parseInt(prop.Submission_Time)).toLocaleTimeString().replace("T", " ").split(".")[0]}</Typography> */}
                        <p className={style.LabelLarge}>{new Date(parseInt(prop.Submission_Time)).toLocaleTimeString().replace("T", " ").split(".")[0]}</p>
                        {/* <IconButton
                            color="primary"
                            onClick={() => { setExpanded(!expanded) }}
                        >
                            {expanded ? (
                                <BiChevronUp />
                            ) : (
                                <BiChevronDown />
                            )}
                        </IconButton> */}
                        <a
                            href="#"
                            onClick={() => { setExpanded(!expanded) }}
                        >

                            {expanded ? (
                                <BiChevronUp />
                            ) : (
                                <BiChevronDown />
                            )}
                        </a>
                    </Stack>
                    {!!expanded &&
                        <Stack rowGap={1} sx={{ pt: 2, justifyContent: "center", alignItems: "center" }}>
                            <Stack direction="row" sx={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
                                {/* <Typography variant="LabelLarge">{`Total : ${prop.Testcase_Total}`}</Typography> */}
                                <p className={style.LabelLarge}>{`Total : ${prop.Testcase_Total}`}</p>
                                {/* <Typography variant="LabelLarge">{`Failed : ${prop.Testcase_Failed}`}</Typography> */}
                                <p className={style.LabelLarge}>{`Failed : ${prop.Testcase_Failed}`}</p>
                                {/* <Typography variant="LabelLarge">{`Passed : ${prop.Testcase_Passed}`}</Typography> */}
                                <p className={style.LabelLarge}>{`Passed : ${prop.Testcase_Passed}`}</p>
                            </Stack>
                            {/* <Typography variant="LabelLarge">{`Output : ${prop.Testcase_Run}`}</Typography> */}
                            <p className={style.LabelLarge}>{`Output : ${prop.Testcase_Run}`}</p>
                        </Stack>
                    }
                </Stack>
            </Paper>
        </Box >
    )
}

export default FetchQtnSolution;