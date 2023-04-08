import React from "react";
import { Typography, Stack, Box, IconButton, Skeleton, TextField } from "@mui/material";
import Image from "next/image";
import { arenaTrack, ReadOnly } from './types'
import { Controller, useFormContext } from "react-hook-form";
import { HiOutlineXCircle, HiOutlineCloudUpload, HiOutlineTrash, HiOutlinePlusCircle, HiOutlineLockClosed } from "react-icons/hi";
import dynamic from 'next/dynamic';
import { handleSingleImageUpload } from "@/backend/functions";
import { useSession } from 'next-auth/react';
import { DefaultUser } from "@/backend/functions";
import { nanoid } from "nanoid";
import { CardContainer, FilledButton } from "@/styles/theme";
import { Accept } from 'react-dropzone';


const Dropzone = dynamic(() => import("@/components/Dropzone"), {
    loading: () => <Skeleton height={400} width={"100%"} />,
});

const ArenaTracks = ({ readOnly }: ReadOnly) => {
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState("");
    const { trigger, setValue, getValues, watch } = useFormContext();
    const trackArray: Array<arenaTrack> = watch("tracks") || [];
    const trackFields = ["trackTitle", "trackDescription"];
    const { data: session } = useSession();
    console.log(trackArray);

    const handleUpload = async (acceptedFiles: Array<File>) => {
        const user: DefaultUser = await session?.user as DefaultUser;
        const accessToken = await "Token " + user.accessToken
        const imageUrl = await handleSingleImageUpload(
            getValues("festId"),
            acceptedFiles[0],
            accessToken
        );

        if (!!imageUrl) {
            setImage(imageUrl);
        } else {
            alert("Image Upload Error");
        }
    };

    const handleDelete = (id: string) => {
        setValue(
            "tracks",
            trackArray.filter((track) => track.id !== id)
        );
    };

    const reset = () => {
        trackFields.forEach((field) => {
            setValue(field, "");
        });
        setImage("");
    };

    const handleSubmit = async (_e: any) => {
        const isValid = await trigger(trackFields);
        if (isValid) {
            const values = getValues(trackFields);
            setValue("tracks", [
                ...trackArray,
                { imageUrl: image, name: values[0], description: values[1], id: nanoid(7) },
            ]);
            console.log(trackArray);
            reset();
            setOpen(false)
        }
    };


    return (
        <Stack rowGap={2}>
            {!readOnly && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <HiOutlineLockClosed fontSize={"1.5rem"} />
                    <Typography variant="TitleMedium" sx={{ ml: "12px" }}>
                        Create Tracks (Optional)
                    </Typography>
                </Box>
            )}
            <Box>
                {trackArray.length === 0 ? (
                    <Typography variant="LabelLarge" component="p" align="center">
                        No Tracks Added
                    </Typography>
                ) : (
                    <>
                        {trackArray.map((track) => {
                            return (
                                <CardContainer elevation={1} sx={{ padding: "20px 0", backgroundColor: "surfacevariant.main", mb: 4, position: "relative", border: 0 }} key={track.id}>
                                    {!readOnly && (
                                        <IconButton
                                            color="error"
                                            sx={{ position: "absolute", top: "10px", right: "16px" }}
                                            onClick={() => {
                                                handleDelete(track.id);
                                            }}
                                        >
                                            <HiOutlineTrash />
                                        </IconButton>
                                    )}
                                    <Stack sx={{ margin: "0 20px", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                                        <Image src={track.imageUrl || `https://source.unsplash.com/400x120/?technology`}
                                            height={140}
                                            width={140}
                                            objectFit="contain"
                                            alt={track.name} />
                                        <Stack sx={{ ml: "36px" }}>
                                            <Typography variant="TitleLarge" sx={{ mb: "10px" }}>{track.name}</Typography>
                                            <Typography variant="BodyLarge" color="onsurfacevariant.main" sx={{ maxWidth: "50vw" }}>{track.description}</Typography>
                                        </Stack>
                                    </Stack>
                                </CardContainer>
                            )
                        })}
                    </>
                )}
            </Box>
            <Box>
                {open ? (
                    <CardContainer elevation={2}
                        sx={{
                            height: 300,
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            overflow: "hidden",
                            padding: "8px 24px 24px 24px"
                        }}
                    >
                        <Stack direction="row" sx={{ justifyContent: "space-between", padding: "8px 24px" }}>
                            <IconButton
                                color="error"
                                onClick={() => {
                                    setOpen(false);
                                    reset();
                                }}
                            >
                                <HiOutlineTrash />
                            </IconButton>
                            <IconButton color="primary"
                                onClick={handleSubmit}
                            >
                                <HiOutlinePlusCircle />
                            </IconButton>
                        </Stack>
                        <Stack direction="row" columnGap={2}>
                            <Box width="40%" sx={{ position: "relative", height: "100%" }}>
                                {!!image ? (
                                    <>
                                        <IconButton
                                            size="small"
                                            color="secondary"
                                            sx={{
                                                position: "absolute",
                                                top: "12px",
                                                right: "12px",
                                                zIndex: 10,
                                            }}
                                            onClick={() => setImage("")}
                                        >
                                            <HiOutlineXCircle />
                                        </IconButton>
                                        <Image
                                            src={image}
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
                                        onDrop={handleUpload}
                                    >
                                        <Stack sx={{ mb: 1, width: "90%" }} alignItems="center" spacing={2}>
                                            <HiOutlineCloudUpload fontSize="3rem" />
                                            <Typography variant="TitleMedium">
                                                Drop poster here or click to Browse
                                            </Typography>
                                            <Typography variant="LabelMedium" color="onsurfacevariant.main" sx={{ textAlign: "center" }}>
                                                Accepts images (Png, Jpeg, Jpg) of dimension 640×360 or larger
                                                upto 10Mb
                                            </Typography>
                                        </Stack>
                                    </Dropzone>
                                )}
                            </Box>
                            <Stack width="60%">
                                <Box sx={{ pb: 2 }}>
                                    {/* <Typography variant="h6">
                                        Track Title
                                    </Typography> */}
                                    <Controller
                                        name="trackTitle"
                                        defaultValue={""}
                                        rules={{
                                            required: "Required",
                                        }}
                                        render={({
                                            field: { ref, ...field },
                                            fieldState: { error },
                                        }) => (
                                            <TextField
                                                fullWidth
                                                margin={"none"}
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
                                                label="Track Title"
                                                error={!!error}
                                                {...field}
                                            />
                                        )}
                                    />
                                </Box>
                                {/* <Typography variant="h6">
                                    Track Description
                                </Typography> */}
                                <Controller
                                    name="trackDescription"
                                    defaultValue={""}
                                    rules={{
                                        required: "Required",
                                    }}
                                    render={({ field: { ref, ...field }, fieldState: { error } }) => (
                                        <TextField
                                            placeholder="Track Description"
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
                                            fullWidth
                                            multiline
                                            rows={4}
                                            variant="filled"
                                            error={!!error}
                                            {...field}
                                        />
                                    )}
                                />
                            </Stack>
                        </Stack>
                    </CardContainer>
                ) : (!readOnly &&
                    <FilledButton
                        fullWidth
                        onClick={
                            // handleSubmit
                            () => setOpen(true)
                        }
                    >
                        <Typography variant="LabelLarge">
                            Add Tracks
                        </Typography>
                    </FilledButton>
                )}
            </Box>
        </Stack>
    )
}

export default ArenaTracks


// const TrackCard = (props: arenaTrack) => {
//   return (
//     <Paper sx={{padding: "20px 0"}}>
//         <Stack sx={{margin: "0 20px", display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
//                   <Image src={props.imageUrl || `https://source.unsplash.com/400x120/?technology`}
//                 height={140}
//                 width={140}
//                 objectFit="contain"
//                 alt={props.name} />
//             <Stack sx={{ml: "20px"}}>
//                 <Typography variant="h6" sx={{mb: "10px"}}>{props.name}</Typography>
//                 <Typography variant="body2" sx={{maxWidth: "30vw"}}>{props.description}</Typography>
//             </Stack>
//         </Stack>
//     </Paper>
//   );
// }