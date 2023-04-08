import { arenaDetails, ReadOnly, type } from './types';
import { Grid, IconButton, Skeleton, TextField, Stack, Typography, Divider, Autocomplete, Box, TextFieldProps } from "@mui/material";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import {
  HiOutlineCloudUpload,
  HiOutlineXCircle
} from "react-icons/hi";
import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import moment from "moment";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { handleSingleImageUpload } from "@/backend/functions";
import { useSession } from 'next-auth/react';
import { DefaultUser } from "@/backend/functions";
import React, { useEffect } from "react";
// import MomentUtils from "@date-io/moment";
import DateAdapter from "@mui/lab/AdapterMoment";
import { CardContainer } from '@/styles/theme';
import { Accept } from 'react-dropzone';



const Dropzone = dynamic(() => import("@/components/Dropzone"), {
  loading: () => <Skeleton height={400} width={"100%"} />,
});

const ArenaDetails = ({ readOnly }: ReadOnly) => {
  const { setValue, getValues, watch } = useFormContext();
  const details: arenaDetails = watch("details");
  const type = useWatch({ name: "type" });
  const { data: session } = useSession();
  const [data, setData] = React.useState<type[]>([]);
  const [text, setText] = React.useState("A");

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/fests/getTechnology", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify({ name: text })
    })
      .then(async (res) => res.json())
      .then((json) => {
        setData(json);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [text]);

  const handleUpload = async (acceptedFiles: Array<File>) => {
    const user: DefaultUser = session?.user as DefaultUser;
    const accessToken = "Token " + user.accessToken
    const imageUrl = await handleSingleImageUpload(
      getValues("festId"),
      acceptedFiles[0],
      accessToken
    );
    if (!!imageUrl) {
      setValue("details.imageUrl", imageUrl);
      // console.log(details.imageUrl)
    } else {
      alert("Image Upload Error");
    }
  };

  if (readOnly) {
    return (
      <Grid
        container
        alignItems="flex-end"
        justifyContent="space-between"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="HeadlineLarge" sx={{ mb: 1 }}>
            {details.title}
          </Typography>
          <Typography variant="TitleMedium" color="onsurfacevariant.main" component="p">{details.desc}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack sx={{ display: "flex", flexDirection: "row", mt: 0.5, justifyContent: "flex-start", alignItems: "flex-start" }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
              <Typography variant="BodyLarge" color="onsurfacevariant.main" sx={{ textAlign: "left", width: "100%" }}>Start Date</Typography>
              <Typography variant="BodyLarge" component="p">{` ${new Date(details.startDate).toLocaleDateString() + " " + new Date(details.startDate).toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}
              `}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mr: 3 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }} alignItems="center">
              <Typography variant="BodyLarge" color="onsurfacevariant.main" sx={{ textAlign: "left", width: "100%" }}>End Date</Typography>
              <Typography variant="BodyLarge" component="p">
                {` ${new Date(details.endDate).toLocaleDateString() + " " + new Date(details.endDate).toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}
                `}
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <CardContainer
            variant="outlined"
            sx={{
              height: 340,
              display: "flex",
              position: "relative",
              overflow: "hidden",
              border: 0,
              borderRadius: "2px",
            }}
          >
            <Image
              src={details.imageUrl || `https://source.unsplash.com/400x120/?technology,${details.title}`}
              layout="fill"
              objectFit={"cover"}
              alt={"Uploaded Poster"}
            />
          </CardContainer>
        </Grid>
      </Grid >
    );
  }


  return (
    <>
      <Grid
        container
        alignItems="flex-end"
        justifyContent="space-between"
        spacing={6}
      >
        <Grid item xs={12}>
          <Controller
            name="details.title"
            defaultValue={details.title || ""}
            rules={{
              required: `Please provide a title for your ${type}`,
            }}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                fullWidth
                variant="standard"
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
                InputProps={{ sx: { fontSize: "1.2rem", fontWeight: 400 } }}
                placeholder={`Enter ${type} name`}
                error={!!error}
                helperText={error ? error.message : null}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="details.desc"
            defaultValue={details.desc || ""}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                fullWidth
                variant="standard"
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
                label={`Enter ${type} tagline (Not Compulsory)`}
                error={!!error}
                helperText={error ? error.message : null}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="details.startDate"
            defaultValue={details.startDate}
            rules={{
              required: "Please provide a start date",
            }}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={DateAdapter} >
                <DateTimePicker
                  value={!!field.value ? new Date(field.value) : ""}
                  onChange={(newValue: Date | null) => {
                    if (!!newValue) {
                      field.onChange(moment(newValue).toISOString());
                    } else {
                      field.value = "";
                    }
                  }}
                  renderInput={(params: TextFieldProps) => <TextField
                    {...params}
                    label="Event Start Date"
                    variant="standard"
                    fullWidth
                    onChange={(e) => { details.startDate = e.target.value }}
                    error={!!error}
                    helperText={error ? error.message : null} />}

                />
              </LocalizationProvider>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="details.endDate"
            defaultValue={details.endDate || ""}
            rules={{
              required: "Please provide a end date",
            }}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={DateAdapter}  >
                <DateTimePicker
                  label="Event End Date"
                  value={!!field.value ? new Date(field.value) : ""}
                  onChange={(newValue: Date | null) => {
                    if (!!newValue) {
                      field.onChange(moment(newValue).toISOString());
                    } else {
                      field.value = "";
                    }
                  }}
                  renderInput={(params: TextFieldProps) => <TextField
                    {...params}
                    variant="standard"
                    fullWidth
                    onChange={(e) => { details.endDate = e.target.value }}
                    error={!!error}
                    helperText={error ? error.message : null} />}
                />
              </LocalizationProvider>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="details.regStartDate"
            defaultValue={details.regStartDate || ""}
            rules={{
              required: "Please provide a start date",
            }}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={DateAdapter} >
                <DateTimePicker
                  label="Registration Start Date"
                  value={!!field.value ? new Date(field.value) : ""}
                  onChange={(newValue: Date | null) => {
                    if (!!newValue) {
                      field.onChange(moment(newValue).toISOString());
                    } else {
                      field.value = "";
                    }
                  }}
                  renderInput={(params: TextFieldProps) => <TextField
                    {...params}
                    variant="standard"
                    fullWidth
                    onChange={(e) => { details.startDate = e.target.value }}
                    error={!!error}
                    helperText={error ? error.message : null} />}
                />
              </LocalizationProvider>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="details.regEndDate"
            defaultValue={details.regEndDate || ""}
            rules={{
              required: "Please provide a end date",
            }}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={DateAdapter}  >
                <DateTimePicker
                  label="Registration End Date"
                  value={!!field.value ? new Date(field.value) : ""}
                  onChange={(newValue: Date | null) => {
                    if (!!newValue) {
                      field.onChange(moment(newValue).toISOString());
                    } else {
                      field.value = "";
                    }
                  }}
                  renderInput={(params: TextFieldProps) => <TextField
                    {...params}
                    variant="standard"
                    fullWidth
                    onChange={(e) => { details.endDate = e.target.value }}
                    error={!!error}
                    helperText={error ? error.message : null} />}
                />
              </LocalizationProvider>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="details.websiteUrl"
            defaultValue={details.websiteUrl || ""}
            rules={{
              pattern: {
                value:
                  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                message: "Please enter a valid URL",
              },
            }}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                label="Enter Website link (or any other relevance link)"
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
                variant="standard"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            multiple
            getOptionLabel={(data) => data.name}
            options={data}
            onChange={(_e, value) => {
              // value.forEach((val))
              setValue("details.tags", [
                ...value
              ])
            }}
            defaultValue={details.tags}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            renderInput={(params) => {
              if (((params.inputProps as any).value) !== "") {
                setText((params.inputProps as any).value);
              }
              return (
                <TextField {...params}
                  label="Technologies" placeholder="Type Tags" variant='standard' />
              );
            }
            }
          />
        </Grid>
        <Grid item xs={12}>
          <CardContainer
            sx={{
              height: 340,
              width: "100%",
              display: "flex",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {!!details.imageUrl ? (
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
                  onClick={() => setValue("details.imageUrl", "")}
                >
                  <HiOutlineXCircle />
                </IconButton>
                <Image
                  src={details.imageUrl}
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
                <Stack sx={{ mb: 1 }} alignItems="center" spacing={1}>
                  <HiOutlineCloudUpload fontSize="3rem" />
                  <Typography variant="TitleMedium">
                    Drop poster here or click to Browse
                  </Typography>
                  <Typography variant="LabelMedium" color="onsurfacevariant.main">
                    Accepts images (Png, Jpeg, Jpg) of dimension 640×360 or larger
                    upto 10Mb
                  </Typography>
                </Stack>
              </Dropzone>
            )}
          </CardContainer>
        </Grid>
      </Grid>
    </>
  )
}

export default ArenaDetails;
