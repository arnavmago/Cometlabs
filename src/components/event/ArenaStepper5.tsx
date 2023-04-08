import { Box, Step, StepLabel, Stepper, styled, Typography } from '@mui/material';
import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import ArenaDescription from './ArenaDescription';
import ArenaSponsors from './ArenaSponsor';
import ArenaSchedule from './ArenaSchedule';
import ArenaTracks from './ArenaTracks';
import ArenaPrizes from './ArenaPrize';
// import ArenaTicket from './ArenaTicket';
// import ArenaOrganiser from './ArenaOrganiser';
import { arenaDescription, ReadOnly, arenaSponsorType, arenaTrack, arenaPrize } from './types';
import { useFormContext } from 'react-hook-form';

import { makeStyles } from "@mui/styles"
import { TextButton } from '@/styles/theme';

const useStyles = makeStyles({
    customLabelStyle: {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
    }
});

type STEPLABELS = "Event Description" | "Sponsors" | "Tracks" | "Schedule" | "Prizes";

const StepContainer = styled("div")({
    padding: "20px 12px",
});



const ArenaStepper = ({ readOnly }: ReadOnly) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const { watch } = useFormContext();
    const classes = useStyles();
    const description: arenaDescription = watch("description");
    const sponsor: Array<arenaSponsorType> = watch("sponsor") || [];
    const tracks: Array<arenaTrack> = watch("tracks") || [];
    const prizes: Array<arenaPrize> = watch("prizes") || [];
    // console.log(tracks);
    //   const [value, setValue] = React.useState(0);

    //       const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    //     setValue(newValue);
    //   };

    const steps: STEPLABELS[] = [];


    if (description.description) {
        steps.push("Event Description")
    }

    if (sponsor.length > 0) {
        steps.push("Sponsors")
    }

    if (tracks.length > 0) {
        steps.push("Tracks")
    }

    if (prizes.length > 0) {
        steps.push("Prizes")
    }



    const isStepFailed = (label: STEPLABELS): boolean => {
        switch (label) {
            case "Event Description":
                return false;

            case "Sponsors":
                return false;

            case "Schedule":
                return false;

            case "Prizes":
                return false;

            case "Tracks":
                return false;

            default:
                return false;
        }
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (label: STEPLABELS) => {
        switch (label) {

            case "Event Description":
                return <ArenaDescription readOnly={readOnly} />;

            case "Sponsors":
                return <ArenaSponsors readOnly={readOnly} />;

            case "Tracks":
                return <ArenaTracks readOnly={readOnly} />;

            case "Schedule":
                return <ArenaSchedule readOnly={readOnly} />;

            case "Prizes":
                return <ArenaPrizes readOnly={readOnly} />;

            default:
                return
            // return (
            //   <Typography variant="h4" color="error">
            //     Oops! An unexpected error has occured
            //   </Typography>
            // );
        }
    };

    if (!readOnly) {
        return (
            <div>Something went wrong</div>
        )
    }

    return (
        <>
            {activeStep !== steps.length &&
                <Box sx={{ width: "100%" }}>
                    {/* <Typography sx={{ mb: 2, textAlign: "center" }} variant="subtitle1">{steps[activeStep].toUpperCase()}</Typography> */}
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label, index) => {
                            const labelProps: {
                                error?: boolean;
                            } = {};
                            if (isStepFailed(steps[index])) {
                                labelProps.error = true;
                            }

                            return (
                                <Step key={label}>
                                    <StepLabel classes={{ label: classes.customLabelStyle }} {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <></>
                    ) : (
                        <React.Fragment>
                            {/* <StepLabel classes={{ label: classes.customLabelStyle }} >{label}</StepLabel> */}
                            <StepContainer sx={{ padding: "20px" }}>
                                {getStepContent(steps[activeStep])}
                            </StepContainer>
                            {steps.length > 1 && (
                                <Box sx={{ display: "flex", flexDirection: "row" }}>
                                    <TextButton
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                        startIcon={<HiOutlineChevronLeft />}
                                    >
                                        <Typography variant="LabelLarge">Back</Typography>
                                    </TextButton>
                                    <Box sx={{ flex: "1 1 auto" }} />
                                    <TextButton
                                        onClick={handleNext}
                                        disabled={isStepFailed(steps[activeStep]) || (activeStep === steps.length - 1)}
                                        endIcon={<HiOutlineChevronRight />}
                                    >
                                        <Typography variant="LabelLarge">Next</Typography>
                                    </TextButton>
                                </Box>
                            )}
                        </React.Fragment>
                    )}
                </Box>
            }
        </>
    )
}

export default ArenaStepper;