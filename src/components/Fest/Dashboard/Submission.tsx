import * as React from 'react';
import { Stack, Typography } from "@mui/material";
import Details from "./Submission/Details";
import SubmissionFormProvider, { SubmissionData } from "./Submission/SubmissonForm";
import { AiOutlineSave } from 'react-icons/ai';
import { Teamm } from './CreateTeam';
import { FilledButton } from '@/styles/theme';

interface Submit {
    props: SubmissionData;
    team: Teamm;
}

const Submission = ({ team, props }: Submit) => {
    // const enabled = { team && team.team.team_id}  ? true : false;

    return (
        <SubmissionFormProvider data={props} team={team} id={''}>
            <Typography variant="LabelLarge" color="primary" sx={{ marginLeft: "12px", mb: 2 }}>Your Submission</Typography>
            <Stack spacing={2} sx={{ margin: "0 10vw" }}>
                <Details details={props.details}
                //  {...team}
                />
            </Stack>
            <FilledButton
                sx={{
                    position: "fixed",
                    bottom: 20,
                    right: 32
                }}
                type="submit"
                // disabled={!enabled}
                startIcon={<AiOutlineSave />}
            //   onClick={() => 
            //     {
            //       setEditResume(false)
            //       setEditProfile(false)
            //     }
            //   }
            >
                <Typography variant="LabelLarge">Submit</Typography>
            </FilledButton>
        </SubmissionFormProvider>
    )
}


export default Submission;