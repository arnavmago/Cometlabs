import * as React from 'react';
import { Box, TextField, Stack, Typography } from "@mui/material";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { DefaultUser } from "@/backend/functions";
import { CardContainer, FilledButton } from '@/styles/theme';

export interface Team {
  team_id: string;
  team_name: string;
  members: Array<TeamName>,
  member_count: number;
}

type TeamName = {
  firstName: string;
  lastName: string;
  email: string;
  profileImage?: string;
}




interface teamdetails {
  user: DefaultUser;
  // teamm: Team;
  reff: ref;
}

type PROPS = {
  email: string;
}

export interface ref {
  Referred_Count: number;
  Referred_People: People[];
}

interface People {
  email: string;
}


const Invite = ({ user, reff }: teamdetails) => {
  // console.log(reff);
  // console.log(teamm)
  const {
    handleSubmit,
    control,
  } = useForm();
  const { enqueueSnackbar } = useSnackbar();



  const SendReferral = async ({ email }: PROPS) => {
    try {
      const accessToken = "Token " + user.accessToken;
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/organize/sendReferral",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ email: email }),
        }
      );
      if (res.ok) {
        const { success, error } = await res.json();
        if (!!success) {
          console.log(success);
          enqueueSnackbar(`Successfully Sent Invite Code to ${email}`, { variant: "success" });
        } else {
          enqueueSnackbar(error);
          console.log(error);
        }
      } else {
        throw new Error("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const count = reff ? reff.Referred_Count : 0;

  return (
    <div>
      <Typography
        variant="LabelLarge"
        color="primary"
        sx={{ marginLeft: "12px", mb: 2 }}
      >
        Invite Section
      </Typography>
      <CardContainer elevation={1} sx={{ margin: "30px 0", padding: "30px" }}>
        <Typography variant="LabelLarge">Invite others and get rewards</Typography>
        <Stack sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          <Typography variant="LabelLarge">Referred Count : {count}</Typography>
          {reff && reff.Referred_People && (
            <Box>
              {reff.Referred_People.map((member) => {
                console.log(member)
                return (
                  <Box sx={{ display: 'flex', alignItems: "flex-end", justifyContent: "flex-start" }} key={member.email}>
                    <Typography variant="LabelLarge" >{member}</Typography>
                  </Box>
                )
              })}
            </Box>
          )}
          <Box component="form" onSubmit={handleSubmit(SendReferral as SubmitHandler<FieldValues>)} sx={{ margin: "0px", display: 'flex', flexDirection: "row" }}>
            <Controller
              name="email"
              control={control}
              // defaultValue=""
              render={({ field, fieldState: { error } }) => (
                <TextField
                  margin="normal"
                  required
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  error={!!error}
                  helperText={error ? error.message : null}
                  {...field}
                  ref={null}
                  sx={{ margin: "0px" }}
                />
              )}
            />
            <FilledButton
              type="submit"
              // fullWidth
              // variant="contained"
              sx={{ marginLeft: "20px" }}
            // disabled={isSubmitting}
            >
              <Typography variant="LabelLarge">
                Invite Member(s)
              </Typography>
            </FilledButton>
          </Box>
        </Stack>
      </CardContainer>
    </div>
  );
};

export default Invite;

