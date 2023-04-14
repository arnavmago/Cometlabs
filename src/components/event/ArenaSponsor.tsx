import { ReadOnly, arenaSponsorType, Sponsors } from './types';
import { Stack, Box, Typography, Paper, TextField, Skeleton, Modal, Grid, MenuItem } from "@mui/material";
import { HiOutlineLockClosed, HiOutlineXCircle, HiOutlineCloudUpload } from 'react-icons/hi';
import Image from "next/image";
import React from "react";
import { Controller, useFormContext } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { DefaultUser, handleSingleImageUpload } from "@/backend/functions";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";
import { styled } from "@mui/system";
import { FilledButton, OutlinedButton } from '@/styles/theme';
import { Accept } from 'react-dropzone';

export const Line = styled("div")({
    height: "3px",
    flexGrow: 1,
    borderRadius: "8px",
});

const PosterContainer = styled(Paper)({
    borderRadius: "12px",
    height: "inherit",
    width: "100%",
    overflow: "hidden",
    position: "relative",
    padding: "8px",
});


const Dropzone = dynamic(() => import("@/components/Dropzone"), {
    loading: () => <Skeleton height={400} width={"100%"} />,
});

const ArenaSponsor = ({ readOnly }: ReadOnly) => {
    const [open, setOpen] = React.useState(false);
    const { trigger, setValue, getValues, watch } = useFormContext();
    const trackArray: Array<arenaSponsorType> = watch("sponsor") || [];
    const sponsorNew = ["sponsorTitle", "sponsorBanner"];
    // const [images, setImages] = React.useState([]);
    const { data: session } = useSession();
    console.log(trackArray);


    const handleAdd = async (_e: any) => {
        console.log("inside")
        const isValid = await trigger(sponsorNew);
        if (isValid) {
            const values = getValues(sponsorNew);
            setValue("sponsor", [
                ...trackArray,
                { sponsorLabel: values[0], bannerSize: values[1], sponsor: [] },
            ]);
            // console.log(trackArray, "new array")
        }
    };

    const handleUpload = async (acceptedFiles: Array<File>) => {
        const user: DefaultUser = await session?.user as DefaultUser;
        const accessToken = await "Token " + user.accessToken
        const imageUrl = await handleSingleImageUpload(
            getValues("festId"),
            acceptedFiles[0],
            accessToken
        );

        if (!!imageUrl) {
            // setImages(images.push(imageUrl));
            const isValid = await trigger(sponsorNew);
            if (isValid) {
                const values = getValues(sponsorNew)
                console.log(values);
                // const values = ["Gold", "Silver"]
                const newSponsor: Sponsors = { imageUrl, id: nanoid() };
                console.log(newSponsor);
                // setValue(`${(trackArray.filter((track) => track.sponsorLabel === values[0]))}`, [
                //     ...trackArray.filter((track) => track.sponsorLabel === values[0]), {
                //         imageUrl: imageUrl, id: nanoid()
                //     }
                // ])
                // let index: number = 0;

                for (let i in trackArray) {
                    if (values[0] == trackArray[i].sponsorLabel) {
                        console.log(i)
                        // index = i;
                    }
                }
                // setValue(`sponsor[${index}].sponsor`, [
                //     ...trackArray[index].sponsor,
                //     { imageUrl: imageUrl, id: nanoid() },
                // ]);

                // setValue(
                //     "sponsor[0].sponsors." + values[0],
                //     !!trackArray[values[0]]
                //         ? [...trackArray, { sponsorLabel: values[0], bannerSize: values[1], sponsors: [] }]
                //         : [newSponsor]
                // );
                // console.log("sponsors." + values[0]);
            }
        } else {
            alert("Image Upload Error");
        }
    }


    // if (readOnly) {
    //     return (
    //         <div>Sponsor Section</div>
    //     )
    // }

    return (
        <Stack rowGap={2}>
            {!readOnly && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <HiOutlineLockClosed fontSize={"1.5rem"} />
                    <Typography variant="TitleMedium" sx={{ fontWeight: 500, ml: "12px" }}>
                        Got any Sponsors? Add here (Optional)
                    </Typography>
                </Box>
            )}
            <Box>
                {trackArray.length === 0 ? (
                    <Typography variant="LabelLarge" align="center">
                        No Sponsors Added
                    </Typography>
                ) : (
                    <>
                        {trackArray.map((track) => {
                            return (
                                <Box key={track.sponsorLabel}>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Line sx={{ backgroundColor: track.sponsorLabel || `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` }} />
                                        <Typography variant="BodyMedium" sx={{ textTransform: "capitalize" }}>
                                            {track.sponsorLabel}
                                        </Typography>
                                        <Line sx={{ backgroundColor: track.sponsorLabel || `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` }} />
                                    </Stack>
                                    <Grid container sx={{ padding: "16px 8px 8px" }} spacing={2}>
                                        {track.sponsor &&
                                            track.sponsor.map((sponsor: Sponsors) => (
                                                <Grid item xs={track.bannerSize * 3} key={sponsor.id}>
                                                    <PosterContainer
                                                        elevation={2}
                                                        sx={{ height: track.bannerSize * 100 }}
                                                    >
                                                        {/* {!readOnly && (
                                                            <IconButton
                                                                size="small"
                                                                color="secondary"
                                                                sx={{
                                                                    position: "absolute",
                                                                    top: "12px",
                                                                    right: "12px",
                                                                    zIndex: 10,
                                                                }}
                                                            // onClick={() => handleDelete(props.label, poster.id)}
                                                            >
                                                                <HiOutlineXCircle />
                                                            </IconButton>
                                                        )} */}
                                                        {!readOnly && (
                                                            <a
                                                                href="#"
                                                                style={{
                                                                    position: "absolute",
                                                                    top: "12px",
                                                                    right: "12px",
                                                                    zIndex: 10,
                                                                }}
                                                            >
                                                                <HiOutlineXCircle />
                                                            </a>
                                                        )}

                                                        <Image
                                                            height={track.bannerSize * 100 || 100}
                                                            width={track.bannerSize * 100 || 100}
                                                            layout="responsive"
                                                            objectFit={"contain"}
                                                            src={sponsor.imageUrl}
                                                            alt={sponsor.imageUrl + " sponsor poster"}
                                                        />
                                                    </PosterContainer>
                                                </Grid>
                                            ))}
                                        {!readOnly && (
                                            <Grid item xs={track.bannerSize * 3} sx={{ height: track.bannerSize * 100 }}>
                                                <PosterContainer elevation={2}>
                                                    <Dropzone
                                                        multiple={true}
                                                        accept={"image/jpeg, image/jpg, image/png" as unknown as Accept}
                                                        maxFiles={10}
                                                        onDrop={handleUpload}
                                                    >
                                                        <HiOutlineCloudUpload fontSize="1.5rem" />
                                                    </Dropzone>
                                                </PosterContainer>
                                            </Grid>
                                        )}
                                    </Grid>
                                </Box>
                            )
                        })}
                    </>
                )}
            </Box>
            <Box>
                {open ? (
                    <>
                        <Modal open={open} aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">
                            <Grid container>
                                <Grid item xs={2} md={4} sx={{ textAlign: "center", backgroundColor: "white", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", justifyContent: "space-between", alignContent: "center" }}>
                                    <Stack rowGap={6} sx={{ margin: "20px 40px" }}>
                                        <Typography id="modal-modal-title" variant="TitleMedium">
                                            Sponsor Title and Banner Size
                                        </Typography>
                                        <Grid
                                            container
                                            alignItems="flex-end"
                                            justifyContent="space-between"
                                            spacing={3}
                                        >
                                            <Grid item xs={12} sx={{ textAlign: 'left' }}>
                                                <Typography variant="BodyMedium" sx={{ mb: 1 }}>Sponsor Label</Typography>
                                                <Controller
                                                    name="sponsorTitle"
                                                    defaultValue={""}
                                                    rules={{
                                                        required: "Please provide Label for your Sponsor",
                                                    }}
                                                    render={({ field: { ref, ...field }, fieldState: { error } }) => (
                                                        <TextField
                                                            size="small"
                                                            fullWidth
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
                                                <Typography variant="BodyMedium" sx={{ mb: 1 }}>Select Event Type</Typography>
                                                <Controller
                                                    name="sponsorBanner"
                                                    defaultValue={""}
                                                    rules={{
                                                        required: "Please provide a title for your arena",
                                                    }}
                                                    render={({ field: { ref, ...field }, fieldState: { error } }) => (
                                                        <TextField
                                                            size="small"
                                                            select
                                                            placeholder={"Select Type"}
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
                                                            {...field}
                                                            error={!!error}
                                                            {...field}
                                                            ref={null}
                                                        >
                                                            <MenuItem value={4}>{"1 Banner in a row"}</MenuItem>
                                                            <MenuItem value={3}>{"2 Banners in a row"}</MenuItem>
                                                            <MenuItem value={2}>{"3 Banners in a row"}</MenuItem>
                                                            <MenuItem value={1}>{"4 Banneers in a row"}</MenuItem>
                                                        </TextField>
                                                    )}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Stack direction="row" sx={{ justifyContent: "space-evenly", display: "flex", flexDirection: "row" }}>
                                            <FilledButton
                                                type="submit"
                                                onClick={(e) => {
                                                    handleAdd(e)
                                                    setOpen(false)
                                                }}
                                                color="primary"
                                                variant="contained" sx={{ mb: "10px" }}
                                            >
                                                Proceed
                                            </FilledButton>
                                            <OutlinedButton onClick={() => setOpen(false)} variant="outlined" size="small" sx={{ mb: "10px" }}>
                                                <Typography variant="LabelLarge" sx={{ fontWeight: 500 }}>
                                                    Cancel
                                                </Typography>
                                            </OutlinedButton>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Modal>
                    </>
                ) : (!readOnly &&
                    <FilledButton
                        color="primary"
                        variant="contained"
                        fullWidth
                        onClick={
                            // handleSubmit
                            () => setOpen(true)
                        }
                    >
                        <Typography variant="LabelLarge">
                            Add Sponsors
                        </Typography>
                    </FilledButton>
                )}
            </Box>
        </Stack>
    )
}

export default ArenaSponsor;