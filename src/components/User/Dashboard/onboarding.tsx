import * as React from "react";
import { PaperCard } from "pages/onboarding";
import Image from "next/image";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import Head from "next/head";
import { DefaultUser } from "@/backend/functions";
// import { getSession } from "next-auth/react";
import { ResumeInfo } from "@/components/User/Dashboard/types";
// import { GetServerSideProps } from "next";
// import ResumeForm from "@/components/User/Dashboard/ResumeForm";
import { CardContainer } from "@/styles/theme";
import { Stack, TextField, Tooltip, IconButton } from "@mui/material";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTwitter, SiLeetcode } from "react-icons/si";
import { HiOutlineXCircle, HiOutlineCloudUpload } from "react-icons/hi";
import Dropzone from "@/components/Dropzone";
import { useFormContext, Controller } from "react-hook-form";
// import Link from "@/components/Link";
// import { BsArrowRightShort } from 'react-icons/bs'
import { Education, Experience, Projects, Skills } from "@/components/User/Dashboard/ResumeDetails";
// import { InternalLinks } from "@/content/Links";
// import Header from "@/layout/Header";
// import { useRouter } from "next/router";
import { Accept } from 'react-dropzone';
import { handleProfileImageUpload } from "@/backend/functions";

// type onboarding = {
//     setProfile: React.Dispatch<React.SetStateAction<string>>
// }

const Onboarding = () => {
    const { setValue, watch, control, getValues } = useFormContext();
    const info: ResumeInfo = watch("info");
    // const router = useRouter();
    const username: string = watch("username");
    // const [submit, setSubmit] = React.useState(true);

    const handleDpUpload = async (acceptedFiles: Array<File>) => {
        const user: DefaultUser = JSON.parse(localStorage.getItem("user") || "{}") as DefaultUser;
        const accessToken = "Token " + user.accessToken
        const profImage = await handleProfileImageUpload(
            getValues("info.email"),
            acceptedFiles[0],
            accessToken,
        );
        if (!!profImage) {
            setValue("info.profileImage", profImage);
            const user: DefaultUser = JSON.parse(localStorage.getItem("user") || "{}") as DefaultUser;
            user.profileImage = profImage;
            localStorage.setItem("user", JSON.stringify(user));
            window.dispatchEvent(new Event("storage"));
        } else {
            alert("Image Upload Error");
        }
    };

    return (
        <>
            <PaperCard>
                <Typography paragraph variant="TitleLarge">Basic Details</Typography>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ border: "2px solid white", height: "148px", width: "148px", borderRadius: "50%" }}>
                        <div style={{ position: "relative", overflow: "hidden", width: "144px", height: "144px", borderRadius: "50%" }}>
                            {info && !!info.profileImage ? (
                                <>
                                    <IconButton
                                        color="secondary"
                                        sx={{
                                            position: "absolute",
                                            bottom: "8px",
                                            right: "8px",
                                            zIndex: 10,
                                        }}
                                        onClick={() => setValue("info.profileImage", "")}
                                    >
                                        <HiOutlineXCircle />
                                    </IconButton>
                                    <Image
                                        src={info.profileImage}
                                        layout="fill"
                                        objectFit={"cover"}
                                        alt={"Uploaded Poster"}
                                    />
                                </>
                            ) : (
                                <Dropzone
                                    multiple={false}
                                    accept={"image/jpeg, image/jpg, image/png" as unknown as Accept}
                                    maxFiles={1}
                                    onDrop={handleDpUpload}
                                >
                                    <div style={{ textAlign: "center" }}>
                                        <HiOutlineCloudUpload fontSize={"1.2rem"} />
                                        <Typography paragraph variant="LabelLarge">Upload your Profile</Typography>
                                    </div>
                                </Dropzone>
                            )}
                        </div>
                    </div>
                    <div style={{ maxWidth: "50%", width: "100%", paddingLeft: "8px" }}>
                        <Box sx={{ width: "100%" }}>
                            <Controller
                                name="info.name"
                                control={control}
                                defaultValue={info.name || ""}
                                rules={{
                                    required: "Name required",
                                }}
                                render={({ field, fieldState: { error } }) => (
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Your Name"
                                        error={!!error}
                                        helperText={error ? error.message : null}
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
                                        {...field}
                                        ref={null}
                                    />
                                )}
                            />
                        </Box>
                        <Tooltip title="change username from settings" placement="left">
                            <Box sx={{ width: "100%", m: "auto" }}>
                                <Controller
                                    name="username"
                                    control={control}
                                    defaultValue={username || ""}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            disabled
                                            label="Your username"
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
                                            ref={null}
                                        />
                                    )}
                                />
                            </Box>
                        </Tooltip>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <Tooltip title="change email from settings" placement="left">
                        <Box width="100%">
                            <Controller
                                name="info.email"
                                control={control}
                                defaultValue={info.email || ""}
                                rules={{
                                    required: "Email required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email",
                                    },
                                }}
                                render={({ field, fieldState: { error } }) => {
                                    return (
                                        <TextField
                                            margin="normal"
                                            required
                                            disabled
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
                                            label="Email Address"
                                            autoComplete="email"
                                            autoFocus
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                            {...field}
                                            ref={null}
                                        // onChange={e => { setSignEmail(field.value), console.log(sign_email) }}
                                        />
                                    )
                                }}
                            />
                        </Box>
                    </Tooltip>
                    <Tooltip title="change mobile from settings" placement="left">
                        <div style={{ width: '100%', marginLeft: "16px" }}>
                            <Controller
                                name="info.mobile"
                                control={control}
                                defaultValue={info.mobile || ""}
                                rules={{
                                    required: "MObile number required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters",
                                    },
                                }}
                                render={({ field, fieldState: { error } }) => {
                                    // setSignPassword(field.value)
                                    return (
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            disabled
                                            label="Mobile number"
                                            type="text"
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
                                            autoComplete="current-password"
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                            {...field}
                                            ref={null}
                                        />
                                    )
                                }}
                            />
                        </div>
                    </Tooltip>
                </div>
                <Controller
                    name="info.bio"
                    control={control}
                    defaultValue={info.bio || ""}
                    render={({ field, fieldState: { error } }) => {
                        return (
                            <TextField
                                margin="normal"
                                fullWidth
                                multiline
                                rows={4}
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
                                placeholder={`Hey there, I'm ${info.name}`}
                                autoFocus
                                error={!!error}
                                helperText={error ? error.message : null}
                                {...field}
                                ref={null}
                            // onChange={e => { setSignEmail(field.value), console.log(sign_email) }}
                            />
                        )
                    }}
                />
            </PaperCard>
            <PaperCard>
                <Skills />
            </PaperCard>
            <PaperCard>
                <Typography paragraph variant="TitleLarge">Link to the web</Typography>
                <Stack rowGap={2}>
                    <CardContainer sx={{ backgroundColor: "surfacevariant.main" }}>
                        <Box sx={{ p: 1, px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                            <Stack direction="row">
                                <SiFacebook fontSize="24px" />
                                <Typography variant="TitleMedium" sx={{ ml: 1 }}>Facebook</Typography>
                            </Stack>
                            <Controller
                                name="info.socials.facebookUrl"
                                defaultValue={info.socials.facebookUrl}
                                rules={{
                                    pattern: {
                                        value:
                                            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                                        message: "Please enter a valid URL",
                                    },
                                }}
                                render={({ field: { ref, ...field }, fieldState: { error } }) => (
                                    <TextField
                                        label="Link Facebook"
                                        placeholder="https://www.facebook.com/"
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
                                        size="small"
                                        error={!!error}
                                        {...field}
                                    />
                                )}
                            />
                        </Box>
                    </CardContainer>
                    <CardContainer sx={{ backgroundColor: "surfacevariant.main" }}>
                        <Box sx={{ p: 1, px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                            <Stack direction="row">
                                <SiLinkedin fontSize="24px" />
                                <Typography variant="TitleMedium" sx={{ ml: 1 }}>Linkedin</Typography>
                            </Stack>
                            <Controller
                                name="info.socials.linkedinUrl"
                                defaultValue={info.socials.linkedinUrl}
                                rules={{
                                    pattern: {
                                        value:
                                            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                                        message: "Please enter a valid URL",
                                    },
                                }}
                                render={({ field: { ref, ...field }, fieldState: { error } }) => (
                                    <TextField
                                        label="Link LinkedIn"
                                        placeholder="https://www.linkedin.com/"
                                        size="small"
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
                        </Box>
                    </CardContainer>
                    <CardContainer sx={{ backgroundColor: "surfacevariant.main" }}>
                        <Box sx={{ p: 1, px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                            <Stack direction="row">
                                <SiInstagram fontSize="24px" />
                                <Typography variant="TitleMedium" sx={{ ml: 1 }}>Instagram</Typography>
                            </Stack>
                            <Controller
                                name="info.socials.instagramUrl"
                                defaultValue={info.socials.instagramUrl}
                                rules={{
                                    pattern: {
                                        value:
                                            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                                        message: "Please enter a valid URL",
                                    },
                                }}
                                render={({ field: { ref, ...field }, fieldState: { error } }) => (
                                    <TextField
                                        label="Link Instagram"
                                        placeholder="https://www.instagram.com/"
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
                                        size="small"
                                        error={!!error}
                                        {...field}
                                    />
                                )}
                            />
                        </Box>
                    </CardContainer>
                    <CardContainer sx={{ backgroundColor: "surfacevariant.main" }}>
                        <Box sx={{ p: 1, px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                            <Stack direction="row">
                                <SiTwitter fontSize="24px" />
                                <Typography variant="TitleMedium" sx={{ ml: 1 }}>Twitter</Typography>
                            </Stack>
                            <Controller
                                name="info.socials.twitterUrl"
                                defaultValue={info.socials.twitterUrl}
                                rules={{
                                    pattern: {
                                        value:
                                            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                                        message: "Please enter a valid URL",
                                    },
                                }}
                                render={({ field: { ref, ...field }, fieldState: { error } }) => (
                                    <TextField
                                        label="Link Twitter"
                                        placeholder="https://www.twitter.com/"
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
                                        size="small"
                                        error={!!error}
                                        {...field}
                                    />
                                )}
                            />
                        </Box>
                    </CardContainer>
                    <CardContainer sx={{ backgroundColor: "surfacevariant.main" }}>
                        <Box sx={{ p: 1, px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                            <Stack direction="row">
                                <SiGithub fontSize="24px" />
                                <Typography variant="TitleMedium" sx={{ ml: 1 }}>Github</Typography>
                            </Stack>
                            <Controller
                                name="info.socials.githubUrl"
                                defaultValue={info.socials.githubUrl}
                                rules={{
                                    pattern: {
                                        value:
                                            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                                        message: "Please enter a valid URL",
                                    },
                                }}
                                render={({ field: { ref, ...field }, fieldState: { error } }) => (
                                    <TextField
                                        label="Link Github"
                                        placeholder="https://www.github.com/"
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
                                        size="small"
                                        // variant="standard"
                                        error={!!error}
                                        {...field}
                                    />
                                )}
                            />
                        </Box>
                    </CardContainer>
                    <CardContainer sx={{ backgroundColor: "surfacevariant.main" }}>
                        <Box sx={{ p: 1, px: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                            <Stack direction="row">
                                <SiLeetcode fontSize="24px" />
                                <Typography variant="TitleMedium" sx={{ ml: 1 }}>Leetcode</Typography>
                            </Stack>
                            <Controller
                                name="info.socials.leetcodeUrl"
                                defaultValue={info.socials.leetcodeUrl}
                                rules={{
                                    pattern: {
                                        value:
                                            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                                        message: "Please enter a valid URL",
                                    },
                                }}
                                render={({ field: { ref, ...field }, fieldState: { error } }) => (
                                    <TextField
                                        label="Link LeetCode"
                                        placeholder="https://www.leetcode.com/"
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
                                        size="small"
                                        // variant="standard"
                                        error={!!error}
                                        {...field}
                                    />
                                )}
                            />
                        </Box>
                    </CardContainer>
                </Stack>
            </PaperCard>
            <PaperCard>
                <Education />
            </PaperCard>
            <PaperCard>
                <Experience />
            </PaperCard>
            <PaperCard>
                <Projects />
            </PaperCard>
        </>
    )
}

export default Onboarding;