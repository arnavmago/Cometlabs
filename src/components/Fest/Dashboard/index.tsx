import { DefaultUser } from "@/backend/functions";
import HeaderLabs from "@/layout/HeaderLabs";
import { Grid } from "@mui/material";
import Team, { Teamm } from "./CreateTeam"
import Submission from "./Submission/index"
import { SubmissionData } from "./Submission/SubmissonForm";
import * as React from "react";
import { CodeArena } from "@/components/event/types";

interface UserDashboardProps {
    user: DefaultUser;
    // result: ResumeDataType;
    teamm: Teamm;
    submission: SubmissionData;
    // reff: ref;
    id: string;
    hack?: boolean;
    fest: CodeArena;
    type: string;
}

const TeamDetailComponent = ({ user, teamm, id, submission, hack, fest, type }: UserDashboardProps) => {
    const username = `Hi, ${user.username?.split(' ').slice(0, 1).join(' ')}!`

    React.useEffect(() => {
        if (teamm) {
            localStorage.setItem('team', JSON.stringify(teamm));
        }
    }, [teamm])

    return (
        <>
            {/* <TopBar HeaderComponent={<HeaderMenu user={user} />} /> */}
            {/* <Box sx={{ mt: "64px" }}> */}
            <HeaderLabs type={type} id={id} />
            {/* </Box> */}
            <Grid container sx={{ display: "flex", mt: "64px" }}>
                {/* <Grid item xs={11} md={4}> */}
                <Grid item xs={"auto"} sx={{ minWidth: { md: "550px", xs: "100%" } }}>

                    <Team user={user} teamm={teamm} id={id} />
                </Grid>
                <Grid item xs>
                    <Submission fest={fest} hack={hack} type={type} user={username} id={id} props={submission} team={teamm} />
                </Grid>
            </Grid>
        </>
    )
}

export default TeamDetailComponent;