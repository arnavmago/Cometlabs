
import * as React from 'react';
import { Stack, TextField, Typography, } from "@mui/material";
import { Controller, useFormContext } from 'react-hook-form';
import { Links } from "./SubmissonForm";

export interface LinksProps {
    Links?: Links;
}

const Links = ({ Links }: LinksProps) => {
    const { watch } = useFormContext();
    const link: Links = watch("link");

    return (
        <Stack rowGap={2} sx={{ pb: "20px", width: '100%' }}>
            <div>
                <Typography variant="LabelLarge">
                    Github repository link
                </Typography>
                <Controller
                    name="link.github"
                    defaultValue={link && link.github}
                    rules={{
                        pattern: {
                            value:
                                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                            message: "Please enter a valid URL",
                        },
                    }}
                    render={({ field: { ref, ...field }, fieldState: { error } }) => (
                        <TextField
                            placeholder={(Links && Links!.github) || "eg, https://www.github.com/myproject"}
                            fullWidth
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
                            error={!!error}
                            variant="outlined"
                            {...field}
                        />
                    )}
                />
            </div>
            <div>
                <Typography variant="LabelLarge">
                    Deployment link
                </Typography>
                <Controller
                    name="link.deployment"
                    defaultValue={(link && link.deployment)}
                    rules={{
                        pattern: {
                            value:
                                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                            message: "Please enter a valid URL",
                        },
                    }}
                    render={({ field: { ref, ...field }, fieldState: { error } }) => (
                        <TextField
                            placeholder={(Links && Links!.deployment) || "eg, https://myproject.vercel.app"}
                            fullWidth
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
                            error={!!error}
                            {...field}
                        />
                    )}
                />
            </div>
            {/* <Box>
                <Typography variant="LabelLarge">
                    Demo Video URL
                </Typography>
                <Controller
                    name="link.video"
                    defaultValue={link && link.video}
                    rules={{
                        pattern: {
                            value:
                                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                            message: "Please enter a valid URL",
                        },
                    }}
                    render={({ field: { ref, ...field }, fieldState: { error } }) => (
                        <TextField
                            placeholder={(Links && Links!.video) || "Enter or Paste a valid Video URL"}
                            fullWidth
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
                            error={!!error}
                            // variant="standard"
                            {...field}
                        />
                    )}
                />
            </Box> */}
        </Stack>
    );
}

export default Links;