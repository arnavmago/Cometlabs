// import Image from "next/image";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";

import {
  SignupData
} from "@/backend/functions";
import { InternalLinks } from "@/content/Links";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import * as NextAuth from "next-auth/react";
import { SiGithub, SiGoogle } from "react-icons/si";
import Head from "next/head";
import { auth } from "../lib/firebase";
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Checkbox, Divider, Grid, IconButton, MenuItem } from "@mui/material";
import { CardContainer, FilledButton, OutlinedButton, TextButton } from "@/styles/theme";
import MuiPhoneNumber from "material-ui-phone-number";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const session = await NextAuth.getSession({ req });
  if (session && res && session.user) {
    return {
      redirect: {
        destination: InternalLinks.LANDING_PAGE,
        permanent: false,
      },
    };
  }
  return {
    props: {
      providers: await NextAuth.getProviders(),
    },
  };
};

interface SignInProps {
  providers: Record<
    NextAuth.LiteralUnion<BuiltInProviderType, string>,
    NextAuth.ClientSafeProvider
  >;
  csrfToken: "",
}

const DEFAULT: SignupData = {
  email: "",
  password: "",
  confirm: "",
  firstName: "",
  lastName: "",
  mobile: "",
  mobileLocal: 0,
  countryCode: "",
  role: "",
  otpm: "",
  otpe: "",
}

export default function SignUp(props: SignInProps) {
  const { handleSubmit, control, watch, formState: { isSubmitting } } = useForm<SignupData>();
  const { providers } = props;
  const { enqueueSnackbar } = useSnackbar();
  const password = React.useRef({});
  password.current = watch("password");
  const router = useRouter();
  // const [signtype, setType] = React.useState(true);
  // const [sign_password, setSignPassword] = React.useState("");
  const [data, setData] = React.useState<SignupData>(DEFAULT);
  const [userData, setUserData] = React.useState<Omit<SignupData, "confirm"> | null>(null);
  const [confResult, setConfResult] = React.useState<ConfirmationResult>();
  const [status, setStatus] = React.useState<"signup" | "otp">("signup");
  const [otpVerified, setOtpVerified] = React.useState<boolean>(false);
  const [emailSuccess, setemailSuccess] = React.useState<boolean>(false);
  const [otpMobileVerified, setOtpMobileVerified] = React.useState<boolean>(false);
  const [mobileSuccess, setmobileSuccess] = React.useState<boolean>(false);
  const [checked, setchecked] = React.useState<boolean>(false);

  const sendOtp = async (data: string, type: string) => {
    try {
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/signup/mailotp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ email: data }),
        }
      );
      if (res.ok) {

        const mailer = await res.json();
        if (type === "RESEND" && mailer.success) {
          enqueueSnackbar("OTP sent to " + data);
        } else return mailer;
      } else {
        throw new Error("ON OTP_SEND: Bad response from server");
      }
    } catch (error) {
      console.log("Oops! Unable to send OTP.");
    }
  };

  const handleEmailOtpSend = async (email: string) => {
    if (userData) {
      const data = userData;
      data.email = email;
      setUserData(data);
      const { error } = await sendOtp(email, "");
      if (!!error) {
        enqueueSnackbar(error, { variant: "error" });
      } else {
        enqueueSnackbar("OTP sent to " + email, { variant: "info" });
        setOtpVerified(true);
      }
    }
  }

  const handleSignupComplete = async (_e: any) => {
    if (userData === null) return;
    try {
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/signupwithpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ ...userData }),
        }
      );
      if (res.ok) {
        await (NextAuth.signIn("credentials", {
          username: userData.email,
          password: userData.password,
          callbackUrl: process.env.NEXT_PUBLIC_AUTH_CALLBACK_URL || "https://cometlabs.in/onboarding/"
        }))
        router.push(InternalLinks.ONBOARDING_PAGE);
      } else {
        throw new Error("ON SIGNUP_COMPLETE: Bad response from server");
      }
    } catch (error) {
      enqueueSnackbar("User signup failed", { variant: "error" });
    }
  };

  const OtpForm = (
    <>
      <Grid container spacing={2} sx={{
        my: "auto",
        marginTop: 2,
        width: "100%",
        justifyContent: "center",
      }}>
        <Grid item container xs={12} md={8} spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={12} sm={7}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email",
                },
              }}
              render={({ field, fieldState: { error } }) => {
                return (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    sx={{ mr: 1 }}
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
                    InputProps={{
                      endAdornment: (
                        <OutlinedButton
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ borderRadius: "4px" }}
                          onClick={() => { handleEmailOtpSend(field.value) }}
                        >
                          <Typography variant="LabelMedium">Verify</Typography>
                        </OutlinedButton>
                      ),
                    }}
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    error={!!error}
                    helperText={error ? error.message : null}
                    {...field}
                    ref={null}
                  // onChange={e => { setSignEmail(field.value), console.log(sign_email) }}
                  />
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Controller
              name="otpe"
              control={control}
              defaultValue=""
              rules={{
                required: "Otp required",
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Enter OTP"
                  type="number"
                  disabled={!otpVerified}
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
                  InputProps={{
                    endAdornment: (
                      <TextButton
                        color="primary"
                        disabled={!otpVerified}
                        onClick={async () => {
                          let options = {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json;charset=utf-8",
                            },
                            body: JSON.stringify({ email: data?.email, otp: field.value }),
                          };

                          try {
                            let res = await fetch(
                              process.env.NEXT_PUBLIC_API_URL + "/api/verifyotp",
                              options
                            );
                            if (res.ok) {
                              const verified = await res.json();
                              if (!!verified.temporaryToken) {
                                setemailSuccess(true);
                                enqueueSnackbar("OTP verified", { variant: "success" });
                              } else {
                                throw new Error("ON OTP_VERIFICATION: NO TEMP");
                              }
                            } else {
                              throw new Error("ON OTP_VERIFICATION: Bad response from server");
                            }
                          } catch (error) {
                            enqueueSnackbar("Couldn't verify OTP", { variant: "error" });
                          }
                        }}
                      >
                        <Typography variant="LabelMedium">Submit</Typography>
                      </TextButton>
                    ),
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                  {...field}
                  ref={null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Controller
              name="mobileLocal"
              control={control}
              rules={{
                required: "Mobile required",
              }}
              render={({ field, fieldState: { error } }) => (
                <MuiPhoneNumber
                  margin="normal"
                  required
                  defaultCountry={'in'}
                  fullWidth
                  autoFormat
                  sx={{
                    '& .MuiIconButton-sizeMedium': {
                      width: "24px",
                      height: '30px',
                      "& .margin": {
                        width: "24px",
                        height: '30px',
                      }
                    }
                  }}
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
                  InputProps={{
                    endAdornment: (
                      <OutlinedButton
                        variant="outlined"
                        size="small"
                        color="primary"
                        id="newid"
                        onClick={(_) => {
                          const mobile = field.value.toString().replaceAll(' ', '').replaceAll('-', '')
                          const formData = { ...data, mobile }

                          let verify = new RecaptchaVerifier("newid", {
                            'size': 'invisible',
                            'callback': () => { },
                            'expired-callback': () => { }
                          }, auth);

                          signInWithPhoneNumber(auth, mobile, verify).then((
                            confirmationResult
                          ) => {
                            setConfResult(confirmationResult);
                            setStatus("otp");
                            setUserData(formData);
                            setOtpMobileVerified(true)
                          })
                            .catch((err: any) => {
                              console.log(err);
                            });
                        }}
                      >
                        <Typography variant="LabelMedium">Verify</Typography>
                      </OutlinedButton>
                    ),
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                  {...field}
                  ref={null}
                />

              )}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Controller
              name="otpm"
              control={control}
              defaultValue=""
              rules={{
                required: "Otp required",
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Enter OTP"
                  type="number"
                  disabled={!otpMobileVerified}
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
                  InputProps={{
                    endAdornment: (
                      <TextButton
                        color="primary"
                        disabled={!otpMobileVerified}
                        onClick={() => {
                          confResult!.confirm(field.value).then(() => {
                            setmobileSuccess(true)
                            enqueueSnackbar("OTP verified", { variant: "success" });
                          }).catch((_error: any) => {
                          });
                        }}
                      >
                        <Typography variant="LabelMedium">Submit</Typography>
                      </TextButton>
                    ),
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                  {...field}
                  ref={null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <FilledButton
              color="primary"
              disabled={!emailSuccess || !mobileSuccess}
              sx={{ mt: 3, mb: 2, float: "right" }}
              onClick={handleSignupComplete}
            >
              <Typography variant="LabelLarge">Submit</Typography>
            </FilledButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );


  const getIcon = (name: string) => {
    switch (name) {
      case "Google":
        return <SiGoogle fontSize="2rem" />;
      case "GitHub":
        return <SiGithub fontSize="2rem" />;
      default:
        return <SiGoogle />;
    }
  };

  const onSubmit = async (data: SignupData) => {
    const formData = { ...data };
    setData(formData);
    setUserData(formData);
    setStatus("otp");
  };

  const SignupForm = (
    <Grid container
      sx={{
        marginTop: "66px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Grid item component="form" xs={11} sm={8} sx={{
        width: "100%", "& .MuiFormHelperText-root ": {
          fontWeight: 500,
          fontSize: "11px",
          lineHeight: "16px",
        }
      }} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div style={{ display: "flex" }}>
          <Typography component="span" sx={{ fontWeight: 500, pr: 3, typography: { xs: 'TitleMedium', md: 'TitleLarge' } }}>
            {"Signup for"}
          </Typography>
          <Controller
            name="role"
            defaultValue={"Dev"}
            control={control}
            rules={{
              required: "Please provide a title for your arena",
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField style={{ paddingBottom: "0px", width: "150px", maxWidth: "200px" }}
                size="small"
                select
                variant="standard"
                defaultValue="Dev"
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
                // onChange={(e) => { handleFreeLabsbyType(e.target.value) }}
                ref={null}
                {...field}
              >
                <MenuItem value="Dev">Developer</MenuItem>
                <MenuItem disabled value="Biz">Business</MenuItem>
                <MenuItem disabled value="Org">Organiser</MenuItem>
              </TextField>
            )}
          />
        </div>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center", mt: 1, mb: 2 }}>
          <Typography variant="BodyLarge" align="center">
            Or
          </Typography>
          {/* <Typography><Link href={InternalLinks.SIGNIN_PAGE} variant="BodyLarge"> */}
          <Typography><a href={InternalLinks.SIGNIN_PAGE} style={{ color:"#aac6fe", textDecoration: "none", borderBottom: '1px solid rgba(170, 198, 254, 0.2)' }} onMouseOver={(event) => { event.currentTarget.style.borderBottom = '1px solid rgba(170, 198, 254, 1.0)'; }} onMouseOut={(event) => { event.currentTarget.style.borderBottom = '1px solid rgba(170, 198, 254, 0.2)'; }}>
            {" login"}
          </a></Typography>
          <Typography variant="BodyLarge" align="center">
            to an existing account
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="baseline">
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{
              required: "First Name required",
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                label="First Name"
                error={!!error}
                helperText={error ? error.message : null}
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
                ref={null}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{
              required: "Last Name required",
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                label="Last Name"
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
                ref={null}
              />
            )}
          />
        </Stack>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email",
            },
          }}
          render={({ field, fieldState: { error } }) => {
            return (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
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
                label="Email Address"
                autoComplete="email"
                autoFocus
                error={!!error}
                helperText={error ? error.message : null}
                {...field}
                ref={null}
              // onChange={e => { setSignEmail(field.value), console.log(sign_email) }}
              />
            )
          }}
        />
        <Stack direction="row" spacing={2} alignItems="baseline">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
            render={({ field, fieldState: { error } }) => {
              // setSignPassword(field.value)
              return (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
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
                  autoComplete="current-password"
                  error={!!error}
                  helperText={error ? error.message : null}
                  {...field}
                  ref={null}
                />
              )
            }}
          />
          <Controller
            name="confirm"
            control={control}
            defaultValue=""
            rules={{
              required: "Required",
              validate: (value) =>
                value === password.current || "Password doesn't match",
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                margin="normal"
                required
                fullWidth
                label="Confirm Password"
                type="password"
                id="password-confirm"
                autoComplete="current-password"
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
                ref={null}
              />
            )}
          />
        </Stack>
        <Stack direction="row" sx={{ display: 'flex', flexDirection: { xs: "column", md: "row" }, justifyContent: 'space-between', alignItems: 'stretch', mt: 3 }}>
          <div>
            <Checkbox checked={checked} onClick={() => { setchecked(!checked) }} />
            <Typography variant="LabelSmall">Agree to our 
            <a href="https://cometlabs.in/About/TermsConditions" target="_blank" style={{ color:"#aac6fe", textDecoration: "none", borderBottom: '1px solid rgba(170, 198, 254, 0.2)' }} onMouseOver={(event) => { event.currentTarget.style.borderBottom = '1px solid rgba(170, 198, 254, 1.0)'; }} onMouseOut={(event) => { event.currentTarget.style.borderBottom = '1px solid rgba(170, 198, 254, 0.2)'; }}> Terms & Conditions </a>
            {/* <Link href="https://cometlabs.in/About/TermsConditions" target="_blank">Terms & Conditions</Link>  */}
            and 
            <a href="https://cometlabs.in/About/TermsPrivacy" target="_blank" style={{ color:"#aac6fe", textDecoration: "none", borderBottom: '1px solid rgba(170, 198, 254, 0.2)' }} onMouseOver={(event) => { event.currentTarget.style.borderBottom = '1px solid rgba(170, 198, 254, 1.0)'; }} onMouseOut={(event) => { event.currentTarget.style.borderBottom = '1px solid rgba(170, 198, 254, 0.2)'; }}> Privacy Policy </a>
            {/* <Link href="https://cometlabs.in/About/TermsPrivacy" target="_blank">Privacy Policy</Link> */}
            </Typography>
          </div>
          <FilledButton
            type="submit"
            variant="contained"
            sx={{ mt: 3 }}
            disabled={isSubmitting || !checked}
          >
            <Typography variant="LabelMedium">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Typography>
          </FilledButton>
        </Stack>
        {/* <Stack direction="row" justifyContent="space-between" sx={{ mt: "44px", mb: "38px" }}> */}
        <Divider sx={{ mt: "34px", mb: "28px" }} color="onsurfacevariant.main">
          <Typography variant="LabelLarge">Or Sign up with</Typography>
        </Divider>
        {/* </Stack> */}
        <Stack direction="row" columnGap={1} sx={{ mb: "45px", justifyContent: "center" }}>
          {Object.values(providers).map((provider) => {
            const providerId = String(provider.name).toLowerCase();
            if (providerId !== "credentials") {
              return (
                <IconButton
                  onClick={() => NextAuth.signIn(providerId)}
                  key={provider.name}
                  color="inherit"
                >
                  {getIcon(provider.name)}
                </IconButton>
              );
            }
          })}
        </Stack>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Head>
        <title>Signup | COMETLABS</title>
      </Head>
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Container component="main" sx={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <CardContainer sx={{ width: "100%", border: 0, backgroundColor: "tempcolor.main" }}>
            {status === "signup" && SignupForm}
            {status === "otp" && OtpForm}
          </CardContainer>
        </Container>
      </Box>
    </>
  );
}
