import { CardContainer, FilledButton } from '@/styles/theme'
import { Grid, Typography, Stack, TextField, InputAdornment, IconButton, Container } from '@mui/material'
import React from 'react'
import { Controller, useForm } from "react-hook-form";
import { SignInFormData } from './SigninArea';
import { useSnackbar } from 'notistack';
import * as NextAuth from "next-auth/react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

interface SignIn {
    authToken: string;
    pass: React.MutableRefObject<{}>
}

function PasswordSignin({ authToken, pass }: SignIn) {
    const { handleSubmit, control, formState: { isSubmitting } } = useForm<SignInFormData>();
    const { enqueueSnackbar } = useSnackbar();
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


    const onpasswordsubmit = async ({ email, password }: SignInFormData) => {
        try {
            let res = await fetch(
                process.env.NEXT_PUBLIC_API_URL + "/api/resetpassword",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify({ email: email, password: password, temporaryToken: authToken }),
                }
            );
            if (res.ok) {
                const { message, error } = await res.json();
                if (!!message) {
                    enqueueSnackbar("Welcome to COMETLABS", { variant: "success" })
                    NextAuth.signIn("credentials", {
                        username: email,
                        password: password,
                        callbackUrl: (process.env.NEXT_AUTH_CALLBACK_URL)
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
                    <Grid item lg={6} component="form" sx={{ p: 2, width: "100%" }} onSubmit={handleSubmit(onpasswordsubmit)} noValidate>
                        <Typography variant="TitleLarge">
                            Enter new password
                        </Typography>
                        <Stack direction="column" spacing={2} alignItems="baseline" sx={{ mt: "67px" }}>
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
                                    return (
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
                                        value === pass.current || "Password doesn't match",
                                }}
                                render={({ field, fieldState: { error } }) => (
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Confirm Password"
                                        type="password"
                                        id="password-confirm"
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
                                )}
                            />
                        </Stack>
                        <FilledButton
                            type="submit"
                            sx={{ mt: "75px", mb: 2, float: "right" }}
                            disabled={isSubmitting}
                        >
                            <Typography variant="LabelMedium">
                                Reset Password
                            </Typography>
                        </FilledButton>
                    </Grid>
                </Grid>
            </CardContainer>
        </Container>
    )
}

export default PasswordSignin