import { ReadOnly } from './types';
import { Grid, Stack, Typography, TextField } from "@mui/material";
import { arenaOrganiser } from "./types";
// import dynamic from "next/dynamic";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';
// import { HiOutlineCloudUpload, HiOutlineXCircle } from "react-icons/hi";
// import { handleSingleImageUpload } from "@/backend/functions";
// import { useSession } from 'next-auth/react';
// import { DefaultUser } from "@/backend/functions";

// const Dropzone = dynamic(() => import("@/components/Dropzone"), {
//   loading: () => <Skeleton height={70} width={70} />,
// });

const ArenaOrganiser = ({ readOnly }: ReadOnly) => {
  const { watch } = useFormContext();
  const organiser: arenaOrganiser = watch("organiser");
  // const { data: session } = useSession();

  //   const handleUpload = async (acceptedFiles: Array<File>) => {
  //       const user: DefaultUser = await session?.user as DefaultUser;
  //       const accessToken = await "Token " + user.accessToken
  //   const imageUrl = await handleSingleImageUpload(
  //     getValues("id"),
  //     acceptedFiles[0],
  //       accessToken
  //   );
  //   if (!!imageUrl) {
  //     setValue("organiser.imageUrl", imageUrl);
  //   } else {
  //     alert("Image Upload Error");
  //   }
  // };

  if (readOnly) {
    return (
      <div>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <Stack>
              <Typography variant="TitleMedium" color="onsurfacevariant.main" sx={{ mb: 0.3 }}>
                Organized by
              </Typography>
              <Typography
                variant="TitleMedium"
                color="primary"
                sx={{ mb: 1 }}
              >
                {!!organiser.title
                  ? organiser.title
                  : "NO ORGANIZATION SELECTED"}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        {!!organiser.description
          &&
          <Typography variant="BodyMedium" component="p" sx={{ mt: 1, mb: 2 }}>
            {organiser.description}
          </Typography>}
        <Stack direction="row" spacing={2} sx={{ mt: 1, display: "flex", justifyContent: "space-around" }}>
          {/* {!!organiser.facebookUrl && (
            <IconButton href={organiser.facebookUrl} color="default">
              <SiFacebook />
            </IconButton>
          )}
          {!!organiser.instagramUrl && (
            <IconButton href={organiser.instagramUrl} color="default">
              <SiInstagram />
            </IconButton>
          )}
          {!!organiser.linkedinUrl && (
            <IconButton href={organiser.linkedinUrl} color="default">
              <SiLinkedin />
            </IconButton>
          )}
          {!!organiser.twitterUrl && (
            <IconButton href={organiser.twitterUrl} color="default">
              <SiTwitter />
            </IconButton>
          )} */}
          {!!organiser.facebookUrl &&
            <a href={organiser.facebookUrl} target="_blank" rel="noopener noreferrer">
              <SiFacebook />
            </a>
          }
          {!!organiser.instagramUrl &&
            <a href={organiser.instagramUrl} target="_blank" rel="noopener noreferrer">
              <SiInstagram />
            </a>
          }
          {!!organiser.linkedinUrl &&
            <a href={organiser.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <SiLinkedin />
            </a>
          }
          {!!organiser.twitterUrl &&
            <a href={organiser.twitterUrl} target="_blank" rel="noopener noreferrer">
              <SiTwitter />
            </a>
          }

        </Stack>
      </div>
    )
  }

  return (
    <div>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12}>
          <Controller
            name="organiser.title"
            defaultValue={""}
            rules={{
              required: "Required",
            }}
            render={({
              field: { ref, ...field },
              fieldState: { error },
            }) => (
              <TextField
                placeholder="Organization name..."
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
          <Controller
            name="organiser.mobile"
            defaultValue={""}
            rules={{
              required: "Required",
              pattern: {
                value:
                  /^([+]\d{2})?\d{10}$/gi,
                message: "Please enter a valid URL",
              },
            }}
            render={({
              field: { ref, ...field },
              fieldState: { error },
            }) => (
              <TextField
                placeholder="Mobile Number"
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
          <Controller
            name="organiser.email"
            defaultValue={""}
            rules={{
              required: "Required",
            }}
            render={({
              field: { ref, ...field },
              fieldState: { error },
            }) => (
              <TextField
                placeholder="Email Id"
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
          <Controller
            name="organiser.description"
            defaultValue={organiser.description || ""}
            rules={{
              required: "Required",
              maxLength: {
                value: 250,
                message: "Max length 250 cahracters",
              },
            }}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                placeholder="Organisation tagline"
                variant="standard"
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
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="organiser.facebookUrl"
            defaultValue={organiser.facebookUrl}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                placeholder="Facebook URL"
                variant="standard"
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
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="organiser.linkedinUrl"
            defaultValue={organiser.linkedinUrl}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                placeholder="Linkedin URL"
                variant="standard"
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
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="organiser.instagramUrl"
            defaultValue={organiser.instagramUrl}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                placeholder="Instagram URL"
                variant="standard"
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
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="organiser.twitterUrl"
            defaultValue={organiser.twitterUrl}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                placeholder="Twitter URL"
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
                variant="standard"
                error={!!error}
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </div>
  )
}


export default ArenaOrganiser;

