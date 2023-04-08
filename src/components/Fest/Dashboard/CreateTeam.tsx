import * as React from 'react';
import { Box, TextField, Typography, InputAdornment, Switch } from "@mui/material";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { HiPlus } from "react-icons/hi";
import { DefaultUser } from "@/backend/functions";
import Router from 'next/router'
import { FilledButton, OutlinedButton } from '@/styles/theme';
import { FaUser } from 'react-icons/fa';
import { ResumeInfo } from '@/components/User/Dashboard/types';


export interface Teamm {
  team_id: string;
  team_name: string;
  members: Array<TeamName>,
  member_count: number;
  max_member_count: number;
  eventId: string;
}

type TeamName = {
  eventId: string;
  id: string;
  info: ResumeInfo;
  referrer: string;
}




interface teamdetails {
  user: DefaultUser;
  teamm: Teamm;
  id: string;
}

type PROPS = {
  email: string;
  TeamID: string;
  TeamName: string;
}


const Team = ({ user, teamm, id }: teamdetails) => {
  const team = teamm;
  const {
    handleSubmit,
    control,
  } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const check = (team && team.max_member_count != 1) ? false : true;
  const [checked, setChecked] = React.useState(check)

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
    if ((checked == false) && team) {
      DeleteTeam()
    } else if ((checked == true) && team) {
      DeleteTeam()
    }
  };

  const CreateTeam = async (data: string) => {
    try {
      const max_member_count = checked ? 1 : 4;
      console.log(max_member_count, "max");
      const accessToken = "Token " + user.accessToken;
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/organize/createTeam",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ team_name: data, eventId: id, max_member_count: (checked ? 1 : 4) }),
        }
      );
      if (res.ok) {
        // enqueueSnackbar(data);
        const { success, error, team } = await res.json();
        if (!!success) {
          teamm = team;
          Router.reload();
        } else {
          console.log(error);
        }
      } else {
        throw new Error("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const JoinTeam = async ({ TeamID }: PROPS) => {
    try {
      const accessToken = "Token " + user.accessToken;
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/organize/joinTeam",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ team_id: TeamID, eventId: id }),
        }
      );
      const { success, error, team } = await res.json();
      if (!!success) {
        teamm = team
        Router.reload()
      } else {
        // enqueueSnackbar(error)
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const InviteTeamMember = async ({ email }: PROPS) => {
    console.log(email);
    try {
      const accessToken = "Token " + user.accessToken;
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/organize/inviteTeam",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ email: [email], eventId: id }),
        }
      );
      if (res.ok) {
        const { success, error } = await res.json();
        if (!!success) {
          enqueueSnackbar(`Email Successfully Sent to ${email}`, { variant: "success" });
        } else {
          // enqueueSnackbar(error);
          console.log(error);
        }
      } else {
        throw new Error("ERROR");
      }
    } catch (error) {
      // enqueueSnackbar("error");
      console.log(error);
    }
  }

  // const DeleteTeamMember = async () => {
  //   console.log("Clicked Delete Member");
  //   // enqueueSnackbar("Clicked Delete Member");
  //   try {
  //     const accessToken = "Token " + user.accessToken;
  //     let res = await fetch(
  //       process.env.NEXT_PUBLIC_API_URL + "/organize/leaveteam",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json;charset=utf-8",
  //           Authorization: accessToken,
  //         },
  //         body: JSON.stringify({ email: user.email, eventId: id, id: user.id })
  //       }
  //     );
  //     if (res.ok) {
  //       const { success, error } = await res.json();
  //       if (!!success) {
  //         console.log(success);
  //         // enqueueSnackbar("Success");
  //         Router.reload()
  //       } else {
  //         console.log(error);
  //       }
  //     } else {
  //       throw new Error("ERROR");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const DeleteTeam = async () => {
    try {
      const accessToken = "Token " + user.accessToken;
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/organize/deleteTeam",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ email: user.email, eventId: id, team_id: user.id })
        }
      );
      const { success, error } = await res.json();
      if (!!success) {
        // enqueueSnackbar("Success");
        Router.reload()
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const LeaveTeam = async () => {
    try {
      const accessToken = "Token " + user.accessToken;
      let res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/organize/leaveTeam",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
          body: JSON.stringify({ eventId: id })
        }
      );
      const { success, error } = await res.json();
      if (!!success) {
        // enqueueSnackbar("Success");
        Router.reload()
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Box sx={{ padding: "30px", minHeight: "calc(100vh - 64px)", maxWidth: "700px", margin: "auto" }}>
      <Typography paragraph variant="LabelLarge" sx={{ padding: "0 20px 20px 20px" }}>
        How would you like to Participate?
      </Typography>
      <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }} columnGap={1}>
        <Typography variant="LabelLarge" sx={{ width: "200px", textAlign: "center" }} >I&apos;m hacking with my team</Typography>
        <Switch
          disabled={!!team}
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Typography variant="LabelLarge" sx={{ width: "200px", textAlign: "center" }}>I&apos;m joining as lone wolf</Typography>
      </Box>
      {team && <Typography sx={{ width: "100%", textAlign: "center", mt: 2 }} paragraph variant="LabelLarge">
        {checked ? "I'm joining as lone wolf" : "I'm hacking with my team"}
      </Typography>}
      {
        // (team && team.member_count == 4 || !checked) &&
        <>
          <Box>
            <Controller
              name="TeamName"
              control={control}
              defaultValue={team && team.team_name || ""}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  disabled={checked || !!team}
                  id="TeamName"
                  label="Team Name"
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
                        <OutlinedButton onClick={() => { CreateTeam(field.value) }} disabled={checked || !!team} startIcon={<HiPlus />} type="submit">
                          <Typography variant="LabelLarge">Create Team</Typography>
                        </OutlinedButton>
                      </InputAdornment>
                    )
                  }}
                  autoComplete="TeamName"
                  // autoFocus
                  error={!!error}
                  helperText={error ? error.message : null}
                  {...field}
                  ref={null}
                />
              )}
            />
            {/* {team && <Typography variant="LabelLarge" paragraph>Welcome {team}</Typography>} */}
          </Box>
          {/* {checked && <Typography variant="LabelLarge" sx={{ color: 'primary.main' }}>Your Username will be your your team name, click Continue</Typography>} */}
          <Box>
            <Box component="form" onSubmit={handleSubmit(InviteTeamMember as SubmitHandler<FieldValues>)} sx={{ mt: "20px", mb: "20px" }}>
              <Typography paragraph textAlign="center" sx={{ color: { checked: "onsurfacevariant.main" } }} variant="LabelLarge">Invite your Clan</Typography>
              {/* <Autocomplete
            multiple
            id="tags-filled"
            options={[]}
            freeSolo
            renderTags={(value: string[], getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="freeSolo"
                placeholder="Favorites"
              />
            )}
          /> */}
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
                    disabled={checked}
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
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <OutlinedButton disabled={checked} startIcon={<HiPlus />} type="submit">
                            <Typography variant="LabelLarge">Add Developers</Typography>
                          </OutlinedButton>
                        </InputAdornment>
                      )
                    }}
                    error={!!error}
                    helperText={error ? error.message : null}
                    {...field}
                    ref={null}
                    sx={{ margin: "0px" }}
                  />
                )}
              />
            </Box>
            <Box>
              {teamm && teamm.members && teamm.members.map((member, i) => {
                return (<>
                  <Box sx={{ mb: 2, display: 'flex', alignItems: "flex-end", justifyContent: "center" }} key={i}>
                    <TextField
                      InputProps={{
                        startAdornment: <InputAdornment position="start"><FaUser /></InputAdornment>,
                      }}
                      value={member.info.name}
                      variant="standard" disabled />
                    {/* {((user.email == member.info.email) || (user.email == teamm.members[0].info.email)) && i != 0 && (
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => { DeleteTeamMember() }}
                  >
                    <HiOutlineXCircle />
                  </IconButton>
                )} */}
                    {i == 0 && <Typography variant="LabelLarge" sx={{ pl: "10px" }}>(Leader)</Typography>}
                  </Box>
                </>
                )
              })}
            </Box>
            <Box component="form" sx={{ mb: 2 }}
              onSubmit={handleSubmit(JoinTeam as SubmitHandler<FieldValues>)}
            >
              <Typography paragraph textAlign="center" variant="LabelLarge">Already have a Team Invite?</Typography>
              <Controller
                name="TeamID"
                control={control}
                defaultValue={team && team.team_id || ""}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="TeamID"
                    disabled={checked || !!team}
                    label="Team Code"
                    autoComplete="TeamID"
                    // autoFocus
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
                          <OutlinedButton disabled={checked || !!team} startIcon={<HiPlus />} type="submit">
                            <Typography variant="LabelLarge">Join this Team</Typography>
                          </OutlinedButton>
                        </InputAdornment>
                      )
                    }}
                    error={!!error}
                    helperText={error ? error.message : null}
                    {...field}
                    ref={null}
                  />
                )}
              />
            </Box>
          </Box>
        </>}
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        {!!team && (
          <>
            {team.team_id == user.id ? (
              <OutlinedButton onClick={() => { DeleteTeam() }}>
                <Typography variant="LabelLarge">DeleteTeam</Typography>
              </OutlinedButton>
            ) : (
              <OutlinedButton onClick={() => { LeaveTeam() }}>
                <Typography variant="LabelLarge">LeaveTeam</Typography>
              </OutlinedButton>
            )}
          </>
        )}
        {!team && checked &&
          <FilledButton sx={{ mt: 1 }} onClick={() => { CreateTeam(user.username) }}>
            <Typography variant="LabelLarge">Continue</Typography>
          </FilledButton>
        }
      </Box>
    </Box>
  );
};

export default Team;

