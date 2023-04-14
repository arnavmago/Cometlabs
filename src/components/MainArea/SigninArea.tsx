import { Grid, Stack, Typography, Box, TextField, IconButton, InputAdornment, Divider, Container } from '@mui/material';
import { OutlinedButton, FilledButton, TextButton, CardContainer } from "@/styles/theme";
import React from 'react'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { Controller, useForm } from "react-hook-form";
import { InternalLinks } from '@/content/Links';
import { useSnackbar } from 'notistack';
import * as NextAuth from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import Providers from './Providers';

export type SignInFormData = {
    email: string;
    password: string;
    remember: boolean;
    confirm: string;
};

interface SignIn {
    providers: Record<NextAuth.LiteralUnion<BuiltInProviderType, string>, NextAuth.ClientSafeProvider>,
    setPassword: React.Dispatch<React.SetStateAction<boolean>>,
    setauthToken: React.Dispatch<React.SetStateAction<string>>
}

const SigninArea = ({ providers, setPassword, setauthToken }: SignIn) => {
    const { handleSubmit, control, formState: { isSubmitting } } = useForm<SignInFormData>();
    const { enqueueSnackbar } = useSnackbar();
    const [forgot, setForgot] = React.useState<boolean>(false);
    const [emailstatus, setEmailstatus] = React.useState<boolean>(false);
    const [email, setEmail] = React.useState<string>();
    const [otp, setOtp] = React.useState<string>();

    const [forgetEmail, setForgetEmail] = React.useState<string>();

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const onForgotSubmit = async (email: string) => {
        const { error } = await forgototp(email, "");
        if (!!error) {
            enqueueSnackbar(error, { variant: "error" });
        } else {
            enqueueSnackbar("OTP sent to " + email, { variant: "info" });
            setEmailstatus(true)
            setEmail(email);
        }
    }

    const forgototp = async (data: string, type: string) => {
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
                } else return mailer;
            } else {
                throw new Error("ON OTP_SEND: Bad response from server");
            }
        } catch (error) {
            console.log("Oops! Unable to send OTP.");
            return error
        }
    };

    const onSubmit = async ({ email, password, remember }: SignInFormData) => {
        try {
            let res = await fetch(
                process.env.NEXT_PUBLIC_API_URL + "/api/checkloginerror",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify({ email: email, password: password, remember: remember }),
                }
            );
            if (res.ok) {
                const { success, error } = await res.json();
                if (!!success) {
                    enqueueSnackbar("Welcome to COMETLABS", { variant: "success" })
                    NextAuth.signIn("credentials", {
                        username: email,
                        password: password,
                        callbackUrl: (process.env.NEXT_PUBLIC_AUTH_CALLBACK_URL)
                    })
                } else {
                    enqueueSnackbar(error, { variant: "error" })
                }
            } else {
                throw new Error("SOME ERROR OCCURRED: ERROR");
            }

        }
        catch (error) {
            enqueueSnackbar("Some error occurred", { variant: "error" });
        }
    };

    const handleOtp = () => {
        return (
            async () => {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify({ email: email, otp: otp }),
                };

                try {
                    let res = await fetch(
                        process.env.NEXT_PUBLIC_API_URL + "/api/verifyotp",
                        options
                    );
                    if (res.ok) {
                        const verified = await res.json();
                        if (!!verified.temporaryToken) {
                            setauthToken(verified.temporaryToken);
                            enqueueSnackbar("OTP verified", { variant: "success" });
                            setPassword(true)
                        } else {
                            throw new Error("ON OTP_VERIFICATION: NO TEMP");
                        }
                    } else {
                        throw new Error("ON OTP_VERIFICATION: Bad response from server");
                    }
                } catch (error) {
                    enqueueSnackbar("Couldn't verify OTP", { variant: "error" });
                }
                setOtp("");
            }
        )
    }

    return (
        <Container component="main" sx={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <CardContainer sx={{ pb: "20px", width: "100%", border: 0, backgroundColor: "tempcolor.main" }}>
                <Grid container sx={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                }}>
                    <Grid item md={6}>
                        {!forgot ? (
                            <>
                                <Typography variant="TitleLarge" paragraph sx={{ mb: 0 }}>
                                    Sign In
                                </Typography>
                                <Typography variant="BodyLarge">
                                    {"Don't have   account? "}
                                    {/* <Link href={InternalLinks.SIGNUP_PAGE} variant="BodyLarge">/ */}
                                    <a href={InternalLinks.SIGNUP_PAGE} style={{ color:"#aac6fe", textDecoration: "none", borderBottom: '1px solid rgba(170, 198, 254, 0.2)' }} onMouseOver={(event) => { event.currentTarget.style.borderBottom = '1px solid rgba(170, 198, 254, 1.0)'; }} onMouseOut={(event) => { event.currentTarget.style.borderBottom = '1px solid rgba(170, 198, 254, 0.2)'; }}>
                                        Sign Up
                                    </a>
                                    {/* </Link> */}
                                </Typography>
                                <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)} noValidate>
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
                                        render={({ field, fieldState: { error } }) => (
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                autoComplete="email"
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
                                                autoFocus
                                                error={!!error}
                                                helperText={error ? error.message : null}
                                                {...field}
                                                ref={null}
                                            />
                                        )}
                                    />
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
                                        render={({ field, fieldState: { error } }) => (
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                label="Password"
                                                type={values.showPassword ? "text" : "password"}
                                                id="password"
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
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                edge="end"
                                                            >
                                                                {values.showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                helperText={error ? error.message : null}
                                                {...field}
                                                ref={null}
                                            />
                                        )}
                                    />
                                    <div style={{ margin: "34px auto" }}>
                                        <Typography color="primary" variant="LabelSmall" sx={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => { setForgot(true) }}>
                                            Forgot password?
                                        </Typography>
                                    </div>
                                    <Stack direction="row" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <FilledButton
                                            type="submit"
                                            variant="contained"
                                            disabled={isSubmitting}
                                        >
                                            <Typography variant="LabelMedium">
                                                {isSubmitting ? "Signing you in..." : "Sign In"}
                                            </Typography>
                                        </FilledButton>
                                    </Stack>
                                    <Divider sx={{ mt: "34px", mb: "28px" }} color="onsurfacevariant.main">
                                        <Typography variant="LabelLarge">Or Sign up with</Typography>
                                    </Divider>
                                    <Providers providers={providers} />
                                </Box>
                            </>
                        ) : (
                            <>
                                <div>
                                    <Typography variant="TitleLarge">
                                        Reset Password
                                    </Typography>
                                    <div style={{ marginBottom: "24px" }}>
                                        <Typography variant="BodyLarge">
                                            Or
                                        </Typography>
                                        <Typography sx={{ ml: 1, cursor: 'pointer', textDecoration: "underline" }} color="primary" onClick={(e) => { setForgot(false), e.preventDefault(); }} variant="BodyLarge">
                                            Sign In
                                        </Typography>
                                    </div>
                                </div>
                                <Box>
                                    {/* <Controller
                                        name="email"
                                        control={control}
                                        rules={{
                                            required: "Email required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email",
                                            },
                                        }}
                                        render={({ field, fieldState: { error } }) => { */}
                                    {/* return ( */}
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
                                            },
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email",
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: {
                                                fontWeight: 500,
                                                fontSize: "14px",
                                                lineHeight: "20px",
                                            }
                                        }}
                                        onChange={(e) => { setForgetEmail(e.target.value) }}
                                        InputProps={{
                                            endAdornment: (
                                                <OutlinedButton
                                                    color="primary"
                                                    variant="outlined"
                                                    sx={{ borderRadius: "4px" }}
                                                    onClick={() => { onForgotSubmit(forgetEmail!) }}
                                                >
                                                    <Typography variant="LabelMedium">GenerateOTP</Typography>
                                                </OutlinedButton>
                                            ),
                                        }}
                                        label="Email Address"
                                        autoComplete="email"
                                        autoFocus
                                        // error={!!error}
                                        // helperText={error ? error.message : null}
                                        // {...field}
                                        ref={null}
                                    />
                                    {/* ) */}
                                    {/* }}
                                    /> */}
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Enter OTP"
                                        type="number"
                                        disabled={!emailstatus}
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
                                        onChange={(e) => { setOtp(e.target.value) }}
                                        InputProps={{
                                            endAdornment: (
                                                <TextButton
                                                    color="primary"
                                                    disabled={!emailstatus}
                                                    onClick={handleOtp}
                                                >
                                                    <Typography variant="LabelMedium">Submit</Typography>
                                                </TextButton>
                                            ),
                                        }}
                                        ref={null}
                                    />
                                </Box>
                            </>
                        )}
                    </Grid>
                </Grid>
            </CardContainer>
        </Container>
    )
}

export default SigninArea