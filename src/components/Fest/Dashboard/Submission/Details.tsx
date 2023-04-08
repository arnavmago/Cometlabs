import * as React from 'react';
import { Autocomplete, Box, Stack, TextField } from "@mui/material";
// import { HiOutlineCloudUpload, HiOutlineXCircle } from 'react-icons/hi';
import { Controller, useFormContext } from 'react-hook-form';
// import { handleSingleImageUpload } from '@/backend/functions';
import { Details, Problem } from "./SubmissonForm";
// import Dropzone from '@/components/Dropzone';
// import Image from 'next/image';
// import { Teamm } from '../CreateTeam';
// import { CardContainer } from '@/styles/theme';
// import { useSession } from "next-auth/react";
// import { DefaultUser } from "@/backend/functions";
// import { Accept } from 'react-dropzone'
import { type } from '@/components/User/Dashboard/types';
export interface ReadOnly {
  readOnly?: boolean;
}

export interface DetailsProps {
  details?: Details;
  problems?: Problem;
}

const Details = ({ details }: DetailsProps
  // team: Teamm
) => {
  // const { data: session } = useSession()
  const { setValue } = useFormContext();

  const [data, setData] = React.useState<type[]>([]);
  const [text, setText] = React.useState("A");

  React.useEffect(() => {
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

  console.log(details)



  // const handleUpload = async (acceptedFiles: Array<File>) => {
  //   const user: DefaultUser = session?.user as DefaultUser;
  //   const accessToken = "Token " + user.accessToken
  //   const imageUrl = await handleSingleImageUpload(
  //     team.team_id,
  //     acceptedFiles[0],
  //     accessToken
  //   );
  //   if (!!imageUrl) {
  //     setValue("details.imageUrl", imageUrl);
  //   } else {
  //     alert("Image Upload Error");
  //   }
  // };

  return (
    <Stack rowGap={2} sx={{ pb: "20px", width: "100%" }}>
      <Box>
        {/* { editDetails ? ( */}
        <Controller
          name="details.title"
          defaultValue={(details && details.title) || ""}
          render={({ field: { ref, ...field }, fieldState: { error } }) => (
            <TextField
              fullWidth
              required
              variant="outlined"
              placeholder={(details && details.title) || "Product Title"}
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
        {/* ) : (
                    <Typography variant="subtitle1">{details.title}</Typography>
                )} */}
      </Box>
      <Box>
        <Controller
          name="details.subtitle"
          defaultValue={(details && details.subtitle)}
          render={({ field: { ref, ...field }, fieldState: { error } }) => (
            <TextField
              fullWidth
              required
              variant="outlined"
              placeholder={(details && details.subtitle) || "Product Description"}
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
      </Box>
      <Box>
        {/* <Typography paragraph variant="LabelLarge">What are the technologies you are gonna use?</Typography> */}
        {/* <Controller
          name="problem.tags"
          render={() => ( */}
        <Autocomplete
          //   multiple
          //   getOptionLabel={(data) => data.name}
          //   options={data}
          //   defaultValue={Problems!.tags}
          //   value={Problems!.tags}
          //   onChange={(_e, value) => {
          //     // value.forEach((val))
          //     setValue("problem.tags", ...value)
          //     // skills = value;
          //     console.log(...problem.tags)
          //   }}
          //   isOptionEqualToValue={(option, value) => option.name === value.name}
          //   renderInput={(params) => {
          //     if (((params.inputProps as any).value) !== "") {
          //       setText((params.inputProps as any).value);
          //     }
          //     return (
          //       <TextField {...params}
          //         label="What are the technologies you are gonna use?"
          //         placeholder="Type Tags" variant='outlined' />
          //     );
          //   }
          //   }
          // />
          multiple
          getOptionLabel={(data) => data.name}
          options={data}
          onChange={(_e, value) => {
            // value.forEach((val))
            setValue("details.tags", [
              ...value
            ])
          }}
          // defaultValue={Details!.tags}
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
        {/* <Autocomplete
                multiple
                value={problem.tags || []}
                isOptionEqualToValue={(option: Technology, value: Technology) => {
                    return option.name === value.name;
                }}
                id="tech-skills-input"
                onChange={(_e: any, value: Technology[]) => {
                    onChange(value);
                }}
                sx={{ mt: 1.5 }}
                options={FestecTechnologies}
                getOptionLabel={(option) => option.name}
                renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => (
                        <Tag
                            label={option.name}
                            {...getTagProps({ index })}
                            key={index + "-skill-" + option.name}
                        />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Technologies used"
                        placeholder="Select the technologies used"
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
                        fullWidth
                    />
                )}
            />
          )}
        /> */}
      </Box>
      {/* <Box>
        <CardContainer
          sx={{
            height: 340,
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
              <Stack sx={{ mb: 1 }} alignItems="center" spacing={2}>
                <HiOutlineCloudUpload fontSize="3rem" />
                <Typography variant="LabelLarge">
                  Drop poster here or click to Browse
                </Typography>
                <Typography variant="LabelLarge">
                  Accepts images (Png, Jpeg, Jpg) of dimension 640×360 or larger
                  upto 1Mb
                </Typography>
              </Stack>
            </Dropzone>
          )}
        </CardContainer>
      </Box> */}
    </Stack>
  );
}



export default Details;