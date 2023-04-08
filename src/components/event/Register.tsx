import * as React from "react";
// import {
//   Controller,
// } from "react-hook-form";
import {
  Box,
  Typography
} from "@mui/material";
// import { ReadOnly } from "./types";
// import { FestData } from "@/components/Fest/Form";
import { useSession } from "next-auth/react";
import { DefaultUser } from "@/backend/functions";
import { useSnackbar } from "notistack";
// import { useForm } from "react-hook-form";
// import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import { CodeArena } from "./types";
import { useFormContext } from "react-hook-form";
import { arenaDetails } from './types';
import Router from "next/router";
import { InternalLinks } from "@/content/Links";
import { FilledButton } from "@/styles/theme";
// import { HiArrowNarrowRight } from "react-icons/hi";

interface RegisterProps extends CodeArena {
  isregistered?: isregistered;
}

interface isregistered {
  success?: string;
}

export default function Referral({ isregistered, ...data }: RegisterProps) {
  const { data: session } = useSession();
  // const { control } = useForm();
  // const [referral, setReferral] = React.useState("");
  const { enqueueSnackbar } = useSnackbar();
  const { watch } = useFormContext();
  const details: arenaDetails = watch("details");
  const disabled = new Date(details.regEndDate).getTime() < new Date().getTime()


  const handleRegister = async () => {
    console.log(data.festId);
    if (!!session) {
      const user: DefaultUser = session?.user as DefaultUser;
      const accessToken = "Token " + user.accessToken
      const check = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/organize/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({
            eventId: data.festId, referral_code: ""
          }),
        }
      )
      if (check.ok) {
        const { success } = await check.json();
        enqueueSnackbar(success, { variant: "success" })
        Router.push(`${InternalLinks.LANDING_PAGE + `/Explore/${data.type}/Dashboard/Dev/`}${data.festId}`);
        return { success }
      }
    }
  }

  const handleContinue = () => {
    if (!!session) {
      Router.push(`${InternalLinks.LANDING_PAGE + `/Explore/${data.type}/Dashboard/Dev/`}${data.festId}`);
    } else {
      Router.push(InternalLinks.SIGNIN_PAGE);
    }
  }

  // const [open, setOpen] = React.useState(false);

  return (
    <div>
      {isregistered && isregistered!.success &&
        <Typography paragraph sx={{ mb: 1 }} variant="TitleMedium">
          Get Yourself Registerred
        </Typography>
      }
      <Box sx={{ textAlign: "center" }}>
        <FilledButton
          onClick={isregistered && isregistered!.success ? handleContinue : handleRegister}
          disabled={disabled && !isregistered!.success}
        // color="onprimary"
        // sx={{ mt: 4 }}
        >
          <Typography variant="LabelLarge" sx={{ fontWeight: 500 }}>
            {isregistered && isregistered!.success ? "Continue to Dashboard" : "Register & Continue"}
          </Typography>
        </FilledButton>
      </Box>
      {/* <Divider sx={{ my: 3, mx: "20%" }} /> */}
      {/* <Box>
        <Typography sx={{ mt: 5 }} variant="TitleMedium" component="p">Got a referral code?</Typography>
        <Box>
          <Controller
            name="Referral"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                margin="normal"
                id="Referral"
                autoComplete="Referral"
                autoFocus
                disabled={!!isregistered && !!isregistered.success}
                required
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
                placeholder="Enter Referral Code"
                error={!!error}
                helperText={error ? error.message : null}
                {...field}
                ref={null}
                onChange={e => setReferral(e.target.value)}
              />
            )}
          />
          <IconButton
            disabled={disabled || (!!isregistered && !!isregistered.success)}
            onClick={() => { setOpen(true) }}
            sx={{ ml: 1, mt: 2.75 }}
          >
            <HiArrowNarrowRight />
          </IconButton>
        </Box>
        {open && <>
          <Stack gap="8px" sx={{ textAlign: "left" }}>
            <Typography sx={{ mt: "20px" }} variant="TitleMedium">
              Join India&apos;s Smartest Developer Community.
            </Typography>
            <Typography variant="BodyMedium" color="onsurfacevariant.main">
              Join the Huddle. We&apos;re cultivating a dynamic developer community filled with like-minded folks, talks & boot camps on the latest trends, brainstorming via hackathons & events, opportunities to get hired and so much more
            </Typography>
            <Stack direction="row" sx={{ mt: 3, alignItems: "center" }}>
              <Typography variant="HeadlineMedium" component="p" sx={{ mr: "12px", fontWeight: 600 }}>7000+</Typography>
              <Typography variant="TitleMedium" component="p" color="onsurfacevariant.main">
                Developers Already Joined
              </Typography>
            </Stack>
            <Stack direction="row" columnGap={2} sx={{ mt: 3, display: "flex", flexDirection: "row" }}>
              <OutlinedButton href="https://bit.ly/cometwa3" startIcon={<FaWhatsapp />} variant="outlined" sx={{ mb: "10px" }}>
                {/* <FaWhatsapp size="1.5rem" /> */}
      {/* <Typography variant="LabelLarge" >
                  Whatsapp
                </Typography>
              </OutlinedButton>
              <OutlinedButton href="https://bit.ly/joincomet" startIcon={<FaDiscord />} variant="outlined" sx={{ mb: "10px" }}>
                <Typography variant="LabelLarge">
                  Discord
                </Typography>
              </OutlinedButton>
            </Stack>
            <Divider sx={{ width: "50%", margin: "0 25%" }} />
            <Stack direction="row" columnGap={5} sx={{ mt: 3 }}> */}
      {/* {referral &&
                <Stack direction="row" sx={{ alignItems: "center", justifyContent: "center" }}>
                  <Typography variant="BodyLarge" color="onsurfacevariant.main" sx={{ mr: "5px" }}>
                    Entered Code :
                  </Typography>
                  <Typography variant="BodyLarge"> {referral}</Typography>
                </Stack>
              } */}
      {/* <FilledButton
                onClick={handleRegister}>
                <Typography variant="LabelLarge">
                  Proceed
                </Typography>
              </FilledButton>
            </Stack>
          </Stack>
        </> */}
      {/* } */}
      {/* </Box> */}
    </div>
  );
}



