import { FilledButton, OutlinedButton } from "@/styles/theme";
// import { Box, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
// import { useForm, Controller } from "react-hook-form";
import * as React from "react";
import style from "@/styles/typography-styles.module.css";
import MuiPhoneNumber from "material-ui-phone-number";
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { InternalLinks } from "@/content/Links";
import { ResumeInfo } from "./types";
// import * as NextAuth from "next-auth/react";
// import { useRouter } from "next/router";
// import { InternalLinks } from "@/content/Links";

interface SettingsNumber {
    info: ResumeInfo;
    Username: string;
}

const Settings = ({ info, Username }: SettingsNumber) => {
    const { enqueueSnackbar } = useSnackbar();
    const [confResult, setConfResult] = React.useState<ConfirmationResult>();

    const [email, setEmail] = React.useState<string>("")
    const [emailOtp, setEmailOtp] = React.useState<string>("");
    const [emailOtpSent, setEmailOtpSent] = React.useState<boolean>(false);

    const [mobile, setMobile] = React.useState<string>("");
    const [mobileOtp, setMobileOtp] = React.useState<string>("");
    const [mobileOtpSent, setMobileOtpSent] = React.useState<boolean>(false);
    const [username, setUser] = React.useState<string>("");

    React.useEffect(() => {
        const usr = JSON.parse(localStorage.getItem('user')!)
        setUser(usr.username);
    }, [])

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

    const handleEmailOtpSend = async () => {
        console.log(email)
        const { error } = await sendOtp(email, "");
        if (!!error) {
            enqueueSnackbar(error, { variant: "error" });
        } else {
            enqueueSnackbar("OTP sent to " + email, { variant: "info" });
            setEmailOtpSent(true);
        }
    }

    return (
        <div style={{ margin: "30px 60px" }}>
            {/* <Typography variant="HeadlineSmall" color="primary"> */}
            <p className={style.HeadlineSmall}>
                Personal Details </p>
                {/* </Typography> */}
            <Box sx={{
                marginTop: 2,
                alignItems: "center",
                width: "100%",
            }}>
                {/* <Typography variant="LabelLarge"> */}
                <p className={style.LabelLarge}>
                    Change Email Address </p>
                    {/* </Typography> */}
                <Grid container spacing={2}>
                    <Grid item lg={8} sx={{
                        width: "100%", "& .MuiFormHelperText-root ": {
                            fontWeight: 500,
                            fontSize: "11px",
                            lineHeight: "16px",
                        },
                    }}>
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
                            onChange={(e) => { setEmail(e.target.value) }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <OutlinedButton
                                            size="small"
                                            color="primary"
                                            variant="outlined"
                                            sx={{ borderRadius: "4px" }}
                                            onClick={() => { handleEmailOtpSend() }}
                                        >
                                            {/* <Typography variant="LabelMedium"> */}
                                            <p className={style.LabelMedium}>
                                                Get OTP </p>
                                                {/* </Typography> */}
                                        </OutlinedButton>
                                    </InputAdornment>
                                ),
                            }}
                            placeholder={info.email}
                            autoComplete="email"
                            ref={null}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Enter OTP"
                            type="number"
                            disabled={!emailOtpSent}
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
                            onChange={(e) => { setEmailOtp(e.target.value) }}
                            InputProps={{
                                endAdornment: (
                                    <FilledButton
                                        // color="primary"
                                        disabled={!emailOtpSent}
                                        onClick={async () => {
                                            let options = {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json;charset=utf-8",
                                                },
                                                body: JSON.stringify({ email: email, otp: emailOtp }),
                                            };

                                            try {
                                                let res = await fetch(
                                                    process.env.NEXT_PUBLIC_API_URL + "/api/verifyotp",
                                                    options
                                                );
                                                if (res.ok) {
                                                    const updateemail = await fetch(
                                                        process.env.NEXT_PUBLIC_API_URL + "/api/updateEmail",
                                                        {
                                                            method: "POST",
                                                            headers: {
                                                                "Content-Type": "application/json;charset=utf-8",
                                                            },
                                                            body: JSON.stringify({ newEmail: email }),
                                                        }
                                                    )
                                                    if (updateemail.ok) {
                                                        enqueueSnackbar("Email updated", { variant: "success" });
                                                        console.log(email, "updated")
                                                    }
                                                    const verified = await res.json();
                                                    if (!!verified.temporaryToken) {
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
                                        {/* <Typography variant="LabelMedium"> */}
                                        <p className={style.LabelMedium}>
                                            Submit </p>
                                            {/* </Typography> */}
                                    </FilledButton>
                                ),
                            }}
                            ref={null}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                marginTop: 2,
                alignItems: "center",
                width: "100%",
            }}>
                {/* <Typography variant="LabelLarge"> */}
                <p className={style.LabelLarge}>
                    Change Mobile Number </p>
                    {/* </Typography> */}
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={8}>
                        <MuiPhoneNumber
                            margin="normal"
                            required
                            defaultCountry={'in'}
                            fullWidth
                            value={info.mobile.toString()}
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
                            onChange={(e) => {
                                setMobile(e.toString().replaceAll(" ", "").replaceAll("-", ""))
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <OutlinedButton
                                            variant="outlined"
                                            id="newid"
                                            onClick={() => {
                                                let verify = new RecaptchaVerifier("newid", {
                                                    'size': 'invisible',
                                                    'callback': () => { },
                                                    'expired-callback': () => { }
                                                }, auth);

                                                signInWithPhoneNumber(auth, mobile, verify).then((
                                                    confirmationResult
                                                ) => {
                                                    setConfResult(confirmationResult);
                                                    setMobileOtpSent(true);
                                                })
                                                    .catch((err: any) => {
                                                        console.log(err);
                                                    });
                                            }}
                                        >
                                            {/* <Typography variant="LabelMedium"> */}
                                            <p className={style.LabelMedium}>
                                                Get OTP </p>
                                                {/* </Typography> */}
                                        </OutlinedButton>
                                    </InputAdornment>
                                ),
                            }}
                            ref={null}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Enter OTP"
                            type="number"
                            disabled={!mobileOtpSent}
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
                            onChange={(e) => { setMobileOtp(e.target.value) }}
                            InputProps={{
                                endAdornment: (
                                    <FilledButton
                                        color="primary"
                                        disabled={!mobileOtpSent}
                                        onClick={() => {
                                            confResult!.confirm(mobileOtp).then(async () => {
                                                enqueueSnackbar("OTP verified", { variant: "success" });
                                                const updatemobile = await fetch(
                                                    process.env.NEXT_PUBLIC_API_URL + "/api/updateEmail",
                                                    {
                                                        method: "POST",
                                                        headers: {
                                                            "Content-Type": "application/json;charset=utf-8",
                                                        },
                                                        body: JSON.stringify({ newEmail: email }),
                                                    }
                                                )
                                                if (updatemobile.ok) {
                                                    enqueueSnackbar("Email updated", { variant: "success" });
                                                    console.log(mobile, "updated")
                                                }
                                            }).catch((_error: any) => {
                                            });
                                        }}
                                    >
                                        {/* <Typography variant="LabelMedium"> */}
                                        <p className={style.LabelMedium}>
                                            Submit </p>
                                            {/* </Typography> */}
                                    </FilledButton>
                                ),
                            }}
                            ref={null}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                marginTop: 2,
                alignItems: "center",
                width: "100%",
            }}>
                {/* <Typography variant="LabelLarge"> */}
                <p className={style.LabelLarge}>
                    Change Username </p>
                    {/* </Typography> */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <TextField
                        margin="normal"
                        required
                        sx={{ maxWidth: "600px" }}
                        fullWidth
                        type="text"
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
                        placeholder={Username}
                        onChange={(e) => {
                            if (e.target.value.includes("@") || e.target.value.includes(".")) {
                                enqueueSnackbar("Username cannot contain @ and .", { variant: "error" });
                            }
                            else {
                                setUser(e.target.value)
                            }
                        }}
                        InputProps={{
                            endAdornment: (
                                <OutlinedButton
                                    color="primary"
                                    variant="outlined"
                                    disabled={!username}
                                    onClick={async () => {
                                        let user = JSON.parse(localStorage.getItem("user")!);
                                        const accessToken = "Token " + user.accessToken;
                                        let options = {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json;charset=utf-8",
                                                authorization: accessToken
                                            },
                                            body: JSON.stringify({ newUsername: username }),
                                        };

                                        try {
                                            let res = await fetch(
                                                process.env.NEXT_PUBLIC_API_URL + "/api/updateUsername",
                                                options
                                            );
                                            if (res.ok) {
                                                enqueueSnackbar("Username updated", { variant: "success" });
                                                user.username = username;
                                                localStorage.setItem("user", JSON.stringify(user));
                                                window.location.href = InternalLinks.LANDING_PAGE + "logout";
                                            } else {
                                                throw new Error("ON USERNAME_UPDATE: Bad response from server");
                                            }
                                        } catch (error) {
                                            enqueueSnackbar("Couldn't update username", { variant: "error" });
                                        }
                                    }}
                                >
                                    {/* <Typography variant="LabelMedium"> */}
                                    <p className={style.LabelMedium}>
                                        Submit </p>
                                        {/* </Typography> */}
                                </OutlinedButton>
                            ),
                        }}
                        ref={null}
                    />
                    <FilledButton sx={{ my: "auto" }}
                        color="primary"
                        disabled={!mobileOtpSent}
                        onClick={() => {
                            confResult!.confirm(mobileOtp).then(async () => {
                                enqueueSnackbar("OTP verified", { variant: "success" });
                                const updatemobile = await fetch(
                                    process.env.NEXT_PUBLIC_API_URL + "/api/updateEmail",
                                    {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json;charset=utf-8",
                                        },
                                        body: JSON.stringify({ newEmail: email }),
                                    }
                                )
                                if (updatemobile.ok) {
                                    enqueueSnackbar("Email updated", { variant: "success" });
                                    console.log(mobile, "updated")
                                }
                            }).catch((_error: any) => {
                            });
                        }}
                    >
                        {/* <Typography variant="LabelMedium"> */}
                        <p className={style.LabelMedium}>
                            Submit </p>
                            {/* </Typography> */}
                    </FilledButton>
                </div>
            </Box>
        </div>
    )
}

export default Settings;