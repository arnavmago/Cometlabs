import { DefaultUser } from "@/backend/functions";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import * as React from "react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

const Account = () => {
    const { data: session } = useSession();
    const user: DefaultUser = session?.user as DefaultUser;
    console.log(user);
    const [email, setEmail] = React.useState(user.email);
    const [username, setUsername] = React.useState(user.username);
    const [otp, setOtp] = React.useState("");
    const [emailotp, setemailotp] = React.useState(false);
    const AccessToken = "Token " + user.accessToken;
    const { enqueueSnackbar } = useSnackbar();
    const Router = useRouter();

    const updateotp = async (data: string) => {
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
                if (mailer.success) {
                    console.log("OTP sent to " + data);
                } else return mailer;
            } else {
                throw new Error("ON OTP_SEND: Bad response from server");
            }
        } catch (error) {
            console.log("Oops! Unable to send OTP.");
        }
    };


    const handleEmail = async () => {
        const { error } = await updateotp(email);
        if (!!error) {
            console.log(error);
            enqueueSnackbar(error, { variant: "error" });
        } else {
            enqueueSnackbar("OTP sent to " + email, { variant: "info" });
            setemailotp(true)
        }
    }

    const handleEmailOtp = async () => {
        let res = await fetch(
            process.env.NEXT_PUBLIC_API_URL + "/api/updateEmail",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: AccessToken,
                },
                body: JSON.stringify({ newEmail: email }),
            }
        );
        if (res.ok) {
            res = await res.json();
            enqueueSnackbar("Email updated successfully", { variant: "success" });
            Router.push("/logout")
        }
    }

    const handleUsername = async () => {
        prompt(`Your username will change from \n${user.username}\n to\n ${username}`);
        let res = await fetch(
            process.env.NEXT_PUBLIC_API_URL + "/api/updateUsername",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: AccessToken,
                },
                body: JSON.stringify({ newUsername: username }),
            }
        );
        if (res.ok) {
            res = await res.json();
            enqueueSnackbar("Email updated successfully", { variant: "success" });
            Router.push("/logout");
        }
    }


    return (
        <Box sx={{ p: 2, m: 2 }}>
            <Stack direction="row">
                <TextField placeholder={email} onChange={(e) => { setEmail(e.target.value) }} />
                <Button onClick={handleEmail}>Update Email</Button>
            </Stack>
            {emailotp && (
                <Stack direction="row">
                    <TextField label="Enter OTP" placeholder={otp} onChange={(e) => { setOtp(e.target.value) }} />
                    <Button onClick={handleEmailOtp}>Verify OTP</Button>
                </Stack>
            )}
            <Stack direction="row">
                <TextField placeholder={username} onChange={(e) => { setUsername(e.target.value) }} />
                <Button onClick={handleUsername}>Update Username</Button>
            </Stack>
        </Box>
    )
}

export default Account;