import dynamic from "next/dynamic";
// import Image from "next/image";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { RiPencilFill } from "react-icons/ri";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTwitter, SiLeetcode } from "react-icons/si";
import { useSession } from 'next-auth/react';
import { DefaultUser } from "@/backend/functions";
import { handleProfileImageUpload } from "@/backend/functions";
import {
  Grid,
  IconButton,
  Skeleton,
  Stack,
  TextField,
  Typography,
  Divider,
  Box, Avatar
} from "@mui/material";
import { Accept } from 'react-dropzone'

import { ReadOnly, ResumeInfo, ResumeEducation } from "./types";

const Dropzone = dynamic(() => import("@/components/Dropzone"), {
  loading: () => <Skeleton height={400} width={"100%"} />,
});

interface profileOptions extends ReadOnly {
  bioo?: boolean;
  social?: boolean;
  images?: boolean;
  clg?: boolean;
  naam?: boolean;
}

// will be displaying the real time data during editmore and backend data in readonly mode
export default function ProfileDetails({ readOnly, bioo, social, images, clg, naam }: profileOptions) {
  const { setValue, getValues, watch } = useFormContext();
  const info: ResumeInfo = watch("info");
  const username: string = watch("username");
  const education: ResumeEducation[] = watch("education");
  const educa = education[0];
  const { data: session } = useSession();
  const usr: DefaultUser = session?.user as DefaultUser;
  // const defaultImage = "/bgimage.png";
  const dummy = "https://profileimage-bucket.s3.ap-south-1.amazonaws.com/shivamsoni1737%40gmail.com/uIt-n4T4g2UIAZ7HDG-TT_LinkedIn%20cover%20-%201.png";

  // function for ProfileImage upload
  const handleDpUpload = async (acceptedFiles: Array<File>) => {
    const accessToken = await "Token " + usr.accessToken
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


  // function for uploading background image
  // const handleBgUpload = async (acceptedFiles: Array<File>) => {
  //   const user: DefaultUser = await session?.user as DefaultUser;
  //   const accessToken = await "Token " + user.accessToken
  //   const backgroundImage = await handleProfileImageUpload(
  //     getValues("info.email"),
  //     acceptedFiles[0],
  //     accessToken,
  //   );
  //   if (!!backgroundImage) {
  //     setValue("info.backgroundImage", backgroundImage);
  //   } else {
  //     alert("Image Upload Error");
  //   }
  // };


  // background image section for readOnly and editmode
  // const BackgroundImage = (
  //   <Box
  //     sx={{
  //       height: "120px",
  //       position: "relative",
  //       overflow: "hidden",
  //     }}
  //   >
  //     {!!info.backgroundImage || readOnly ? (
  //       <>
  //         <Image
  //           src={!!info.backgroundImage ? info.backgroundImage : defaultImage}
  //           height={1}
  //           width={1.6}
  //           layout={"responsive"}
  //           objectFit={"contain"}
  //           alt={"User bg"}
  //         />
  //         {!readOnly && (
  //           <IconButton
  //             size="small"
  //             color="secondary"
  //             sx={{
  //               position: "absolute",
  //               bottom: "4px",
  //               right: "4px",
  //               zIndex: 10,
  //             }}
  //             onClick={() => setValue("info.backgroundImage", "")}
  //           >
  //             <HiOutlineXCircle />
  //           </IconButton>
  //         )}
  //       </>
  //     ) : (
  //       <Dropzone
  //         multiple={false}
  //         accept="image/jpeg, image/jpg, image/png"
  //         maxFiles={1}
  //         onDrop={handleBgUpload}
  //       >
  //         <Stack alignItems="center">
  //           <HiOutlineCloudUpload fontSize={"1.2rem"} />
  //           <Typography>Upload Background Image</Typography>
  //         </Stack>
  //       </Dropzone>
  //     )}
  //   </Box>
  // );


  // profile image section for readonly and editmode
  const ProfileImage = (
    <Box
      sx={{
        borderRadius: "100%",
        height: "160px",
        width: "160px",
      }}
    >
      {!!info.profileImage || readOnly ? (
        <>
          <Avatar
            src={info.profileImage || dummy}
            alt={"Profile"}
            sx={{
              height: "160px",
              width: "160px",
            }}
          />
          {!readOnly && (
            <IconButton
              size="small"
              sx={{
                zIndex: 10,
                position: "relative",
                left: 120,
                top: -30,
                color: "onprimary.main",
                backgroundColor: "primary.main",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "primary.main"
                }
              }}
              onClick={() => setValue("info.profileImage", "")}
            >
              <RiPencilFill />
            </IconButton>
          )}
        </>
      ) : (
        <Dropzone
          multiple={false}
          accept={"image/jpeg, image/jpg, image/png" as unknown as Accept}
          maxFiles={1}
          onDrop={handleDpUpload}
        >
          <HiOutlineCloudUpload fontSize={"1.2rem"} />
        </Dropzone>
      )}
    </Box>
  );


  // bio section for both, readonly and editmode
  const bio = (
    <div>
      {readOnly ? (
        <>
          <Divider sx={{ mb: 2, mt: 2 }} />
          <Typography
            paragraph
            variant="BodyLarge"
            color="onsurfacevariant.main"
            align="left"
            sx={{ mb: 2 }}
          >
            {info.bio}
          </Typography>
        </>
      ) : (
        <>
          <Divider sx={{ mb: 2, mt: 2 }} />
          <Controller
            name="info.bio"
            defaultValue={info.bio}
            rules={{}}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                label="Bio"
                placeholder={"Developer's bio"}
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
                error={!!error}
                {...field}
              />
            )}
          />
        </>
      )}
    </div>
  )

  // contains readonly and edit both details for education
  const edu = (
    <div>
      {readOnly ? (
        <>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="BodyLarge" sx={{}}>
            {educa && educa.institution || ""}
          </Typography></>
      ) : (
        <Box >
          <Controller
            name="education[0].institution"
            defaultValue={educa && educa.institution || ""}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                label="College Name"
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
                size="small"
                error={!!error}
                {...field}
              />
            )}
          />
        </Box>
      )}
    </div>
  )

  // contains socials UI for both readOnly and edit mode, along with controlls on input
  const socials = (
    <div>
      {readOnly ? (
        <>
          <Divider sx={{ mb: 2 }} />
          {info.socials && (
            <Stack direction="row" spacing={1} justifyContent="center">
              <IconButton color="primary" target="_blank" href={(info.socials.facebookUrl) || ("#")}>
                <SiFacebook />
              </IconButton>
              <IconButton color="primary" target="_blank" href={(info.socials.linkedinUrl) || ("#")}>
                <SiLinkedin />
              </IconButton>
              <IconButton color="primary" target="_blank" href={(info.socials.githubUrl) || ("#")}>
                <SiGithub />
              </IconButton>
              <IconButton color="primary" target="_blank" href={(info.socials.twitterUrl) || ("#")}>
                <SiTwitter />
              </IconButton>
              <IconButton color="primary" target="_blank" href={(info.socials.instagramUrl) || ("#")}>
                <SiInstagram />
              </IconButton>
              <IconButton color="primary" target="_blank" href={(info.socials.leetcodeUrl) || ("#")}>
                <SiLeetcode />
              </IconButton>
            </Stack>
          )}
        </>
      ) : (
        <>
          {info.socials && (
            <>
              <Box sx={{ mb: 2, mt: 2 }}>
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
                      fullWidth
                      error={!!error}
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
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
                      fullWidth
                      error={!!error}
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
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
                      fullWidth
                      size="small"
                      error={!!error}
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
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
                      fullWidth
                      size="small"
                      error={!!error}
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
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
                      fullWidth
                      size="small"
                      // variant="standard"
                      error={!!error}
                      {...field}
                    />
                  )}
                />
              </Box>
              <Box >
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
                      fullWidth
                      size="small"
                      // variant="standard"
                      error={!!error}
                      {...field}
                    />
                  )}
                />
              </Box>
            </>
          )}
        </>
      )}
    </div>
  )

  // contains readOnly and edit mode both components for name and mobile number section
  const nameuser = (
    <div>
      {readOnly ? (
        <Grid item xs={12} sx={{ mt: 0.5 }}>
          {/* <Typography variant="TitleLarge" component="p">
            {info.name}
          </Typography> */}
          <Typography variant="BodyLarge" color="onsurfacevariant.main">
            {username}
          </Typography>
        </Grid>
      ) : (
        <Stack spacing={2}>
          {/* <Controller
            name="info.name"
            defaultValue={info.name || ""}
            rules={{
              required: "Enter your name",
            }}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                fullWidth
                label="Name"
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
                placeholder="Enter Your Name"
                error={!!error}
                helperText={error ? error.message : null}
                {...field}
              />
            )}
          /> */}
          <Controller
            name="username"
            defaultValue={username || ""}
            rules={{
              required: "Enter your username",
            }}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <TextField
                fullWidth
                size="small"
                label="Username"
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
                placeholder="Enter Your Username"
                error={!!error}
                helperText={error ? error.message : null}
                {...field}
              />
            )}
          />
        </Stack>
      )}
    </div>
  )

  // this is main return statement which is returning the basic structure of profile card
  return (
    <div>
      {images &&
        <Grid container>
          {/* <Grid item xs={12}>
            {BackgroundImage}
          </Grid> */}
          <Grid item xs={12} sx={{ height: "180px", display: "flex" }}>
            {ProfileImage}
          </Grid>
        </Grid>}
      <Grid container sx={{ pl: 2, pr: 2, pb: 2 }}>
        {naam &&
          <Grid item xs={12} sx={{ mt: 0.5 }}>
            {nameuser}
          </Grid>
        }
        {bioo &&
          <Grid item xs={12}>
            {bio}
          </Grid>
        }
        <Grid item xs={12}>
          <Stack spacing={2}>
            {social &&
              <>
                {socials}
              </>
            }
            {clg &&
              <>
                {edu}
              </>
            }
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
