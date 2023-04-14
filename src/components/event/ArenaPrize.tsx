import { ReadOnly, arenaPrize } from "./types";
import { Typography, Stack, Box, TextField, Skeleton } from "@mui/material";
import React from "react";
import { HiOutlineLockClosed, HiOutlineTrash, HiOutlinePlusCircle, } from 'react-icons/hi'
import { Controller, useFormContext } from "react-hook-form";
import dynamic from "next/dynamic";
import style from "@/styles/markdown-styles.module.css";
import ReactMarkdown from "react-markdown";
import { CardContainer, FilledButton } from "@/styles/theme";


const Editor = dynamic(() => import("react-markdown-editor-lite"), {
    loading: () => <Skeleton height={350} width={"100%"} />,
});


const ArenaPrize = ({ readOnly }: ReadOnly) => {
    const [open, setOpen] = React.useState(false);
    const prize = ["title", "description.text"];
    const { trigger, setValue, getValues, watch } = useFormContext();
    const prizesArray: Array<arenaPrize> = watch("prizes") || [];
    console.log(prizesArray);


    const handleDelete = (title: string) => {
        setValue(
            "prizes",
            prizesArray.filter((prize) => prize.title !== title)
        );
    };

    const reset = () => {
        prize.forEach((p) => {
            setValue(p, "");
        });
    };

    const handleSubmit = async (_e: any) => {
        const isValid = await trigger(prize);
        if (isValid) {
            const values = getValues(prize);
            setValue("prizes", [
                ...prizesArray,
                { title: values[0], description: values[1] },
            ]);
            console.log(prizesArray);
            reset();
            setOpen(false)
        }
    };
    return (
        <Stack rowGap={2}>
            <Box>
                {!readOnly && (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <HiOutlineLockClosed fontSize={"1.5rem"} />
                        <Typography variant="TitleMedium" sx={{ ml: "12px" }}>
                            Is your Event Got Prizes, add from here (Optional)
                        </Typography>
                    </Box>
                )}
            </Box>
            <Box>
                {prizesArray.length === 0 ? (
                    <Typography variant="LabelLarge" component="p" align="center">
                        No Prices Added
                    </Typography>
                ) : (
                    <>
                        {prizesArray.map((prize) => {
                            return (
                                <CardContainer sx={{ padding: "20px 0", mb: 4, position: "relative", backgroundColor: "surfacevariant.main", border: 0 }} key={prize.title}>
                                    {/* {!readOnly && (
                                        <IconButton
                                            color="error"
                                            sx={{ position: "absolute", top: "10px", right: "16px" }}
                                            onClick={() => {
                                                handleDelete(prize.title);
                                            }}
                                        >
                                            <HiOutlineTrash />
                                        </IconButton>
                                    )} */}
                                    {!readOnly && (
                                        <a
                                            href="#"
                                            onClick={() => {
                                                handleDelete(prize.title);
                                            }}
                                            style={{
                                                position: "absolute",
                                                top: "10px",
                                                right: "16px",
                                            }}
                                        >
                                            <HiOutlineTrash />
                                        </a>
                                    )}

                                    <Stack sx={{ margin: "0 20px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                                        <Typography variant="TitleLarge" color="onsurfacevariant.main">{prize.title}</Typography>
                                        <Typography variant="BodyLarge" className="content">
                                            <ReactMarkdown className={style.reactMarkDown}>
                                                {prize.description}
                                            </ReactMarkdown>
                                        </Typography>
                                    </Stack>
                                </CardContainer>
                            )
                        })}
                    </>
                )}
            </Box>
            <Box>
                {open ? (
                    <CardContainer
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            overflow: "hidden",
                            padding: "8px 24px"
                        }}
                    >
                        <Stack direction="row" sx={{ justifyContent: "space-between", padding: "8px 24px 8px 0" }}>
                            {/* <IconButton
                                color="error"
                                onClick={() => {
                                    setOpen(false);
                                    // reset();
                                }}
                            >
                                <HiOutlineTrash />
                            </IconButton>
                            <IconButton color="primary"
                                onClick={handleSubmit}
                            >
                                <HiOutlinePlusCircle />
                            </IconButton> */}
                            <a
                                href="#"
                                onClick={() => {
                                    setOpen(false);
                                    // reset();
                                }}
                            >
                                <HiOutlineTrash />
                            </a>
                            <a
                                href="#"
                                onClick={handleSubmit}
                            >
                                <HiOutlinePlusCircle />
                            </a>

                        </Stack>
                        <Box sx={{ pb: 3 }}>
                            <Controller
                                name="title"
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
                                        variant="standard"
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
                                        label="Prize Title, e.g. First prize"
                                        error={!!error}
                                        {...field}
                                    />
                                )}
                            />
                        </Box>
                        <Box sx={{ pb: 2 }}>
                            {/* <Typography variant="body2" sx={{ pb: 0.5 }}>
                                Track Description
                            </Typography> */}
                            <Controller
                                name={"description.text"}
                                defaultValue={""}
                                rules={{
                                    required: "Price Details here...",
                                }}
                                render={({ field }) => {
                                    return (
                                        <div>
                                            <Editor
                                                style={{ height: 350 }}
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
                                        </div>
                                    );
                                }}
                            />
                        </Box>
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
                            Add Prizes
                        </Typography>
                    </FilledButton>
                )}
            </Box>
        </Stack>
    )
}

export default ArenaPrize 