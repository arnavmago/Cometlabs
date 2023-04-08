import * as React from 'react';
import { Stack, Box, Typography, Grid, styled, Paper, Modal } from "@mui/material";
import Details from "./Details";
import SubmissionFormProvider, { SubmissionData } from "./SubmissonForm";
// import { AiOutlineSave } from 'react-icons/ai';
import { Teamm } from '../CreateTeam';
import Problems from './Problems';
import Links from './Links';
import PlayArea from '@/components/MainArea/PlaygroundArea';
import { FilledButton } from '@/styles/theme';
// import { SiGithub } from 'react-icons/si';
// import { HiOutlineLink } from 'react-icons/hi';
import Image from "next/image";
import { CodeArena } from '@/components/event/types';
import { ReadOnly } from '../../types';

interface Submit extends ReadOnly {
    props: SubmissionData;
    team: Teamm;
    id: string;
    user: string;
    hack?: boolean;
    fest: CodeArena;
    type: string
}


const Submission = ({ team, props, id, user, fest, type }: Submit) => {
    const disabled = team ? false : true;
    const time = Date.now() > new Date(fest.details.startDate).getTime();
    // const [playground, setPlayground] = React.useState<string>('react');
    const [open, setOpen] = React.useState(false);

    return (
        <Box sx={{ width: "100%" }}>
            <SubmissionFormProvider data={props} team={team} id={id} setOpen={setOpen}>
                {disabled ? (
                    <>
                        <Typography variant="LabelLarge" sx={{
                            height: "80vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>Create team to continue</Typography>
                    </>
                ) : (
                    time ? (
                        <>
                            <Stack spacing={2} sx={{ margin: "20px 5vw 0 50px" }}>
                                <div><Typography paragraph variant="LabelLarge">{user}</Typography>
                                    <Typography paragraph variant="TitleLarge">{fest.details.title} organizers require following details about the {fest.type} for evaluation.</Typography>
                                </div>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography sx={{ width: "20%" }} variant="LabelLarge">Product</Typography>
                                    <Details details={props && props.details} problems={props && props.problem}
                                    //  {...team}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography sx={{ width: "20%" }} variant="LabelLarge">Problem Details</Typography>
                                    <Problems Problems={props && props.problem} />
                                </Box>
                                {fest.type != "CodeArena" &&
                                    <Box sx={{ display: "flex", alignContent: "center" }}>
                                        <Typography sx={{ width: "20%" }} variant="LabelLarge">Links</Typography>
                                        <Links Links={props && props.link} />
                                    </Box>
                                }
                                {
                                    (type != "Hackathon") &&
                                    <Box sx={{ display: "flex" }}>
                                        <Typography sx={{ width: "20%" }} variant="LabelLarge">CodeArena Environment</Typography>
                                        <PlayArea />
                                    </Box>
                                }
                            </Stack>
                            <Box sx={{ width: "100%", mb: 2 }}>
                                <FilledButton
                                    variant="contained"
                                    type="submit"
                                    sx={{ display: "flex", justifyContent: "center", m: "auto" }}
                                >
                                    <Typography variant="LabelLarge" sx={{ fontWeight: 500 }}>Save and Continue</Typography>
                                </FilledButton>
                                <Modal open={open} onClose={() => setOpen(false)}>
                                    <Grid container>
                                        <Grid item sx={{ borderRadius: "4px", textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", justifyContent: "space-between", alignContent: "center", width: { xs: "80%", sm: "70%", md: "50%" } }}>
                                            <CardContainer elevation={0} sx={{ p: 3, pb: { md: 7, xs: 4 }, width: "100%" }}>
                                                <Typography paragraph sx={{ mb: 5 }} variant="TitleLarge">Explore COMETLABS</Typography>
                                                <PlayArea />
                                                <FilledButton
                                                    variant="contained"
                                                    type="submit"
                                                    sx={{ display: "flex", justifyContent: "center", m: "auto" }}
                                                    onClick={() => { console.log(props) }}
                                                >
                                                    <Typography variant="LabelLarge" sx={{ fontWeight: 500 }}>Continue to Playground</Typography>
                                                </FilledButton>
                                            </CardContainer>
                                        </Grid>
                                    </Grid>
                                </Modal>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Typography variant="LabelLarge" sx={{
                                height: "80vh",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>Submission Protal will open from {fest.details.startDate}</Typography>
                        </>
                    )
                )
                }
            </SubmissionFormProvider>
        </Box>
    )
}


export default Submission;

interface AllSubmissions {
    props: SubmissionData[];
    Title: string;
}

const CardContainer = styled(Paper)(({ theme }) => ({
    width: 320,
    // minHeight: 457,
    // padding: "20px",
    margin: "20px 50px 20px 0",
    // border: "1px solid rgba(255, 255, 255, 0.2)",
    border: 0,
    backgroundColor: theme.palette.newbackground.main,
}));

const SubmissionCard = (props: SubmissionData) => {
    console.log(props);
    return (
        <CardContainer sx={{ backgroundColor: "transparent", border: "2px solid", borderImageSource: "linear-gradient(180deg, #003B93 0%, rgba(102, 164, 255, 0.1) 100%)", borderImageSlice: 1, backgroundImage: "none" }}>
            <Box sx={{
                overflow: "hidden",
                mb: "20px"
            }}>
                <Image
                    // src={`https://logo-cover.s3.ap-south-1.amazonaws.com/${props.playground}-cover.png`}
                    src={`https://logo-cover.s3.ap-south-1.amazonaws.com/react-cover.png`}
                    alt={"logo"}
                    height={9}
                    width={16}
                    layout="responsive"
                />
            </Box>
            <div style={{ margin: "20px" }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="TitleLarge">{props.details.title}</Typography>
                </Box>
                <Typography paragraph variant="BodyLarge" color="onsurfacevariant.main">{props.details.subtitle}</Typography>
            </div>
        </CardContainer>
    )
}

export const Allsubmissions = ({ Title, props }: AllSubmissions) => {
    console.log(props);
    if (props.length == 0) {
        return (
            <div style={{ margin: "30px" }}>
                <Typography paragraph variant="TitleLarge">{Title}</Typography>
                <Typography paragraph variant="TitleMedium" sx={{ textAlign: 'center' }}>Currently, there are NO Submissions</Typography>
            </div>
        )
    }
    return (
        <Box sx={{ m: 2 }}>
            <Typography variant="TitleLarge">{Title}</Typography>
            <Grid sx={{ ml: 2 }} container>
                {props.map((prop) => {
                    return (
                        <Grid item key={prop.id}>
                            <SubmissionCard {...prop} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}