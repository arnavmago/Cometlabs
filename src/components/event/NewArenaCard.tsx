import { Typography, Stack, Modal, Grid, styled, Paper, TextField, MenuItem, IconButton } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { CodeArena } from './types';
import { v4 as uuidv4 } from 'uuid';
import { DefaultUser } from "@/backend/functions";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { InternalLinks } from '@/content/Links';
import { FilledButton, OutlinedButton, CardContainer } from '@/styles/theme';
// import Image from 'next/image';

const NewCardContainer = styled(Paper)(({ theme }) => ({
    width: 350,
    minHeight: 457,
    padding: "20px",
    margin: "20px auto",
    // border: "1px solid rgba(255, 255, 255, 0.2)",
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.08)"
    border: 0,
    backgroundColor: theme.palette.newbackground.main,
}));



const CreateNewCard = () => {
    const [open, setOpen] = React.useState(false);
    const { trigger, getValues } = useFormContext();
    const data = ["name", "type", "mode"];
    const { data: session } = useSession();
    const user: DefaultUser = session?.user as DefaultUser;
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    // const [color, setColor] = React.useState("#1b1b1b");

    // React.useEffect(() => {

    //     const data = localStorage.getItem('theme');
    //     if (data == "0" || 0) {
    //         setColor("#1b1b1b");
    //     } else {
    //         setColor("#060606");
    //     }

    // }, [])

    const handleSubmit = async (_e: any) => {
        const isValid = await trigger(data);
        if (isValid) {
            const values = getValues(data);
            const Data: CodeArena = {
                festId: uuidv4(),
                details: { title: values[0], startDate: "", endDate: "", imageUrl: "", tags: [], regStartDate: "", regEndDate: "", desc: "" },
                organiser: {
                    imageUrl: "",
                    title: "",
                    description: "",
                    facebookUrl: "",
                    linkedinUrl: "",
                    twitterUrl: "",
                    instagramUrl: "",
                    mobile: "",
                    email: "",
                },
                description: {
                    description: "",
                    videoUrl: "",
                },
                type: values[1],
                mode: values[2],
                count: 0
            };
            try {
                const accessToken = "Token " + user.accessToken;
                let res = await fetch(
                    process.env.NEXT_PUBLIC_API_URL + "/fests/createFestRequest",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                            Authorization: accessToken,
                        },
                        body: JSON.stringify({ festObj: Data }),
                    }
                );
                if (res.ok) {
                    const { success, error } = await res.json();
                    if (!!success) {
                        enqueueSnackbar(`${Data.type} Created`, { variant: "success" })
                        router.push(InternalLinks.LANDING_PAGE + `/Explore/${Data.type}/Edit${Data.type}/` + Data.festId + "/edit")

                        localStorage.removeItem("CodeArenaData");
                    } else {
                        console.log(error);
                    }
                } else {
                    throw new Error("ON CodeArena DETAIL SAVE: ERROR");
                }
            } catch (error) {
                console.log("CodeArena details could not be saved");
            }
            setOpen(false)
        }
    };



    return (
        <>
            <Modal open={open}>
                <Grid container>
                    <Grid item sx={{ borderRadius: "4px", textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", justifyContent: "space-between", alignContent: "center" }} xs={10} md={4}>
                        <CardContainer sx={{ borderRadius: "4px" }}>
                            <Stack rowGap={6} sx={{ margin: "40px" }}>
                                <Typography variant="TitleLarge">
                                    Organise Hackathon, CodeArena and Labs for your Technical Community, College or your Enterprise
                                </Typography>
                                <Grid
                                    container
                                    alignItems="flex-end"
                                    justifyContent="space-between"
                                    spacing={3}
                                >
                                    <Grid item xs={12} sx={{ textAlign: 'left' }}>
                                        <Controller
                                            name="name"
                                            defaultValue={""}
                                            rules={{
                                                required: "Please provide a title for your event",
                                            }}
                                            render={({ field: { ref, ...field }, fieldState: { error } }) => (
                                                <TextField
                                                    fullWidth
                                                    label="Enter Event Name"
                                                    variant="outlined"
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
                                                    helperText={error ? error.message : null}
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{ textAlign: 'left' }}>
                                        <Controller
                                            name="type"
                                            defaultValue={""}
                                            render={({ field: { ref, ...field }, fieldState: { error } }) => (
                                                <TextField
                                                    select
                                                    placeholder={"Select Type"}
                                                    fullWidth
                                                    label="Select Event Type"
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
                                                    error={!!error}
                                                    {...field}
                                                    ref={null}
                                                >
                                                    <MenuItem value={"Hackathon"}>{"Hackathon"}</MenuItem>
                                                    <MenuItem value={"CodeArena"}>{"CodeArena"}</MenuItem>
                                                    <MenuItem value={"Labs"}>{"Labs"}</MenuItem>
                                                </TextField>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{ textAlign: 'left' }}>
                                        <Controller
                                            name="mode"
                                            render={({ field: { ref, ...field }, fieldState: { error } }) => (
                                                <TextField
                                                    select
                                                    label="Enter Event Mode"
                                                    fullWidth
                                                    {...field}
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
                                                    ref={null}
                                                >
                                                    <MenuItem value={"Online"}>{"Online"}</MenuItem>
                                                    <MenuItem value={"Offline"}>{"Offline"}</MenuItem>
                                                </TextField>
                                            )}
                                        />
                                    </Grid>
                                </Grid>
                                <Stack direction="row" sx={{ justifyContent: "space-evenly", display: "flex", flexDirection: "row", mb: "10px" }}>
                                    <FilledButton
                                        type="submit"
                                        onClick={(e) => handleSubmit(e)}
                                        variant="contained">
                                        <Typography variant="LabelLarge" >
                                            Proceed
                                        </Typography>
                                    </FilledButton>
                                    <OutlinedButton onClick={() => setOpen(false)} variant="outlined">
                                        <Typography variant="LabelLarge" >
                                            Cancel
                                        </Typography>
                                    </OutlinedButton>
                                </Stack>
                            </Stack>
                        </CardContainer>
                    </Grid>
                </Grid>
            </Modal>
            <NewCardContainer elevation={1} sx={{ cursor: "pointer", transition: "transform 0.3s", ':hover': { transform: "scale(1.05)" } }} onClick={() => { setOpen(true) }}>
                <Typography variant="TitleLarge" sx={{ mb: 2, textAlign: "center" }} color="primary">Create a New Hackathon, CodeArena & Labs</Typography>
                <IconButton disabled>
                    <HiOutlinePlusCircle style={{ fontSize: "5rem" }} />
                </IconButton>
            </NewCardContainer>
        </>
    )
}

export default CreateNewCard;


// Router.push(InternalLinks.ORGANIZE_NEW)