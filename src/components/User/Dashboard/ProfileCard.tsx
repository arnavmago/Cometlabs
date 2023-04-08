import Image from "next/image";
import * as React from "react";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

import {
    Grid,
    IconButton,
    Stack,
    Typography,
    Divider,
    Box, Avatar, CircularProgress, Tooltip
} from "@mui/material";
import { ResumeInfo } from "./types";
import { CardContainer } from "@/styles/theme";
import { TiTick } from 'react-icons/ti';

type DynamicCardProps = {
    data: ResumeInfo;
    percentage?: number;
}

export default function ProfileCard({ data, percentage }: DynamicCardProps) {

    const BackgroundImage = (
        <Box
            sx={{
                height: "120px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Image
                src={`https://source.unsplash.com/400x120/?tech,${data.name}`}
                layout="fill"
                alt={"User bg"}
            />
        </Box>
    );


    const ProfileImage = (
        <Box
            sx={{
                height: "88px",
                width: "88px",
                position: "relative",
                borderRadius: "100%",
                bgcolor: "white",
                margin: "4px"
            }}
        >
            <Avatar
                // src={`https://ui-avatars.com/api/?name=${data.name}&background=random`}
                src="/"
                alt={"Profile"}
                sx={{
                    height: "80px",
                    width: "80px",
                    margin: "4px"
                }}
            />
        </Box>
    );

    return (
        <CardContainer sx={{
            width: 350,
            minHeight: 457,
            padding: "20px",
            margin: "20px auto",
            // border: "1px solid rgba(255, 255, 255, 0.2)",
            border: 0,
            backgroundColor: "newbackground.main",
            transition: "transform 0.3s",
            ':hover': {
                transform: "scale(1.05)",
            },
        }}
        // onClick={() => { window.location.href = `${InternalLinks.DEV_DASHBOARD}${data.username}` }}
        >
            <Grid container>
                <Grid item xs={12}>
                    {BackgroundImage}
                </Grid>
                <Grid item xs={12} sx={{ marginTop: "-60px", mb: "10px", height: "80px", display: "flex", justifyContent: "center" }}>
                    {ProfileImage}
                </Grid>
            </Grid>
            <Grid container sx={{ pl: 2, pr: 2 }}>
                <Grid item xs={12} sx={{ mt: 1.5 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="TitleLarge" component="p" sx={{ height: "28px", overflow: "hidden" }}>
                            {data.name}
                        </Typography>
                        {percentage && <Tooltip title={`${percentage}% profile is completed.`} placement="bottom"><div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", }}>
                            {percentage != 100 ?
                                <>
                                    <Typography sx={{ position: "absolute", display: "flex" }} variant="LabelLarge">{percentage}</Typography>
                                    <CircularProgress variant="determinate" value={percentage} />
                                </>
                                : <TiTick />}
                        </div></Tooltip>}
                    </div>
                    <Typography variant="BodyLarge" color="onsurfacevariant.main">
                        {data.Username}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {/* {edu} */}
                    <Divider sx={{ my: 2 }} />
                    {data.socials && (
                        <Stack direction="row" spacing={1} justifyContent="center">
                            <IconButton color="primary" target="_blank" href={(data.socials.facebookUrl) || ("#")}>
                                <SiFacebook />
                            </IconButton>
                            <IconButton color="primary" target="_blank" href={(data.socials.linkedinUrl) || ("#")}>
                                <SiLinkedin />
                            </IconButton>
                            <IconButton color="primary" target="_blank" href={(data.socials.githubUrl) || ("#")}>
                                <SiGithub />
                            </IconButton>
                            <IconButton color="primary" target="_blank" href={(data.socials.twitterUrl) || ("#")}>
                                <SiTwitter />
                            </IconButton>
                            <IconButton color="primary" target="_blank" href={(data.socials.instagramUrl) || ("#")}>
                                <SiInstagram />
                            </IconButton>
                        </Stack>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ mb: 2, mt: 2 }} />
                    {data.bio ? (
                        <Typography
                            paragraph
                            variant="BodyLarge"
                            color="onsurfacevariant.main"
                            align="left"
                            sx={{ mb: 2, height: "72px", overflow: "hidden" }}
                        >
                            {data.bio}
                        </Typography>
                    ) : (
                        <Typography
                            paragraph
                            variant="BodyLarge"
                            color="onsurfacevariant.main"
                            align="left"
                            sx={{ mb: 2, height: "72px", overflow: "hidden" }}
                        >
                            Hi there, this is {data.name}.
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </CardContainer>
    )
}