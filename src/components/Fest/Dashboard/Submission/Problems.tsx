
import * as React from 'react';
import { Box, Skeleton, Stack, Typography, } from "@mui/material";
import { Controller, useFormContext } from 'react-hook-form';
import { Problem } from "./SubmissonForm";
import ReactMarkdown from 'react-markdown';
import dynamic from 'next/dynamic';
import style from "@/styles/markdown-styles.module.css";
import "react-markdown-editor-lite/lib/index.css";
// import { type } from '@/components/User/Dashboard/types';

const Editor = dynamic(() => import("react-markdown-editor-lite"), {
    loading: () => <Skeleton height={350} width={"100%"} />,
});

export interface ProblemProps {
    Problems?: Problem;
}

const Problem = ({ Problems }: ProblemProps) => {
    const { watch } = useFormContext();
    const problem: Problem = watch("problem");

    // const [data, setData] = React.useState<type[]>(problem.tags);
    // const [text, setText] = React.useState("A");

    // React.useEffect(() => {
    //     fetch(process.env.NEXT_PUBLIC_API_URL + "/fests/getTechnology", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json;charset=utf-8"
    //         },
    //         body: JSON.stringify({ name: text })
    //     })
    //         .then(async (res) => res.json())
    //         .then((json) => {
    //             setData(json);
    //             // console.log(data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [text]);

    return (
        <Stack rowGap={2} sx={{ pb: "20px", width: "100%" }}>
            {/* <Box>
                <Typography variant="LabelLarge">What Problem statement your hack solves?</Typography>
                <Controller
                    name="problem.statement"
                    defaultValue={problem.statement || ""}
                    rules={{
                        required: "Please provide a title for your submission",
                    }}
                    render={({ field: { ref, ...field }, fieldState: { error } }) => (
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter Submission title"
                            error={!!error}
                            inputProps={{
                                style: {
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                }
                            }}
                            InputLabelProps={{
                                style: {
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                }
                            }}
                            helperText={error ? error.message : null}
                            {...field}
                        />
                    )}
                />
            </Box> */}
            <Box>
                <Typography variant="LabelLarge">Describe the Problem that your Product solves</Typography>
                <Controller
                    name="problem.description"
                    defaultValue={problem.description || ''}
                    render={({ field }) => {
                        return (
                            <Box sx={{ mt: 2, mb: 2 }}>
                                <Editor
                                    placeholder={(Problems && Problems.description) || "Problem Statement"}
                                    style={{ height: 300 }}
                                    value={field.value}
                                    renderHTML={(text: string) => {
                                        field.onChange(text);
                                        return (
                                            <Typography variant="BodyMedium" className="content">
                                                <ReactMarkdown className={style.reactMarkDown}>
                                                    {text}
                                                </ReactMarkdown>
                                            </Typography>
                                        );
                                    }}
                                />
                            </Box>
                        );
                    }}
                />
            </Box>
            <Box>
                <Typography variant="LabelLarge">What is the proposed solution?</Typography>
                <Controller
                    name="problem.solution"
                    defaultValue={problem.solution || ''}
                    render={({ field }) => {
                        return (
                            <Box sx={{ mt: 2, mb: 2 }}>
                                <Editor
                                    placeholder={(Problems && Problems.solution) || "Proposed Solution"}
                                    style={{ height: 300 }}
                                    value={field.value}
                                    renderHTML={(text: string) => {
                                        field.onChange(text);
                                        return (
                                            <Typography variant="BodyMedium" className="content">
                                                <ReactMarkdown className={style.reactMarkDown}>
                                                    {text}
                                                </ReactMarkdown>
                                            </Typography>
                                        );
                                    }}
                                />
                            </Box>
                        );
                    }}
                />
            </Box>
            {/* <Box>
                <Typography variant="LabelLarge">Please Enter title here</Typography>
                <Controller
                    name="problem.problemfaced"
                    defaultValue={problem.problemfaced || ""}
                    rules={{
                        required: "Any problems you faced?",
                    }}
                    render={({ field: { ref, ...field }, fieldState: { error } }) => (
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Any Problems you faced?"
                            error={!!error}
                            inputProps={{
                                style: {
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                }
                            }}
                            InputLabelProps={{
                                style: {
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                }
                            }}
                            helperText={error ? error.message : null}
                            {...field}
                        />
                    )}
                />
            </Box> */}
            {/* <Box>
                <Typography variant="LabelLarge">Any improvements that you want to do?</Typography>
                <Controller
                    name="problem.improvements"
                    defaultValue={problem.improvements || ""}
                    render={({ field: { ref, ...field }, fieldState: { error } }) => (
                        <TextField
                            fullWidth
                            variant="outlined"

                            placeholder="Any other improvements you have in mind?"
                            error={!!error}
                            inputProps={{
                                style: {
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                }
                            }}
                            InputLabelProps={{
                                style: {
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                }
                            }}
                            multiline
                            helperText={error ? error.message : null}
                            {...field}
                        />
                    )}
                />
            </Box> */}
        </Stack>
    )
}


export default Problem;