import { Box, Step, StepLabel, Stepper, styled, Typography, StepContent } from '@mui/material';
import React from 'react';
import { HiOutlineCheckCircle, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import ArenaDescription from './ArenaDescription';
import ArenaSponsors from './ArenaSponsor';
import ArenaSchedule from './ArenaSchedule';
import ArenaTracks from './ArenaTracks';
import ArenaPrizes from './ArenaPrize';
import ArenaTicket from './ArenaTicket';
import ArenaOrganiser from './ArenaOrganiser';
import { arenaDescription, arenaDetails, arenaOrganiser, ReadOnly } from './types';
import ArenaDetails from './ArenaDetails';
import { useFormContext } from 'react-hook-form';
import { useSnackbar } from "notistack";

import { makeStyles } from "@mui/styles"
import { FilledButton, TextButton } from '@/styles/theme';

const useStyles = makeStyles({
    customLabelStyle: {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
    }
});


type STEPLABELS = "About Event" | "Organiser Details" | "Event Description" | "Sponsors" | "Tracks" | "Schedule" | "Prizes" | "Ticket";

const steps: STEPLABELS[] = [
    "About Event",
    "Event Description",
    "Organiser Details", // Contact number and email id
    // "Schedule", // date time name and description(max 50 words)
    "Tracks",
    // "Sponsors", // sponsor/partner
    "Prizes",
];

const StepContainer = styled("div")({
    padding: "20px 12px",
});


const isStepFailed = (label: STEPLABELS): boolean => {
    switch (label) {
        case "Event Description":
            return false;

        case "Organiser Details":
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


const ArenaStepper = ({ readOnly }: ReadOnly) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const { watch } = useFormContext();
    const { enqueueSnackbar } = useSnackbar();
    //   console.log(description);
    //   const [value, setValue] = React.useState(0);

    //       const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    //     setValue(newValue);
    //   };

    const handleNext = () => {
        if (steps[activeStep] == "About Event") {
            const details: arenaDetails = watch("details");
            if (details.title != "" && details.startDate != "" && details.endDate != "" && details.regStartDate != "" && details.regEndDate != "") {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            } else {
                enqueueSnackbar(`Please fill ${(details.title ? (details.startDate ? (details.endDate ? (details.regStartDate ? (details.regEndDate ? (details.imageUrl ? "" : "Image") : "Registration End Date") : "Registration Start Date") : "Event End Date") : "Event Start Date") : "Event Name")}`, { variant: "error" })
            }
        } else if (steps[activeStep] == "Event Description") {
            const details: arenaDescription = watch("description");
            if (details.description != "") {
                if (details.description.length > 100 && details.description.length <= 1000) {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                } else {
                    enqueueSnackbar('Required Length is between 250 and 1000 characters', { variant: "warning" })
                }
            } else {
                enqueueSnackbar(`Please fill ${(details.description ? "" : "Description")}`, { variant: "error" })
            }
        } else if (steps[activeStep] == "Organiser Details") {
            const details: arenaOrganiser = watch("organiser");
            if (details.title != "" && details.mobile != "" && details.email != "" && details.description != "") {
                if (details.mobile.match(/^([+]\d{2})?\d{10}$/)) {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                } else {
                    enqueueSnackbar('Please check your mobile number', { variant: "warning" })
                }
            } else {
                enqueueSnackbar(`Please fill ${(details.title ? (details.mobile ? (details.email ? (!details.description && "the tagline") : "Email Address") : "Mobile Number") : "Organiser Name")}`, { variant: "error" })
            }
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const getStepContent = (label: STEPLABELS) => {
        switch (label) {
            case "About Event":
                return <ArenaDetails />;

            case "Ticket":
                return <ArenaTicket />;

            case "Organiser Details":
                return <ArenaOrganiser />;

            case "Event Description":
                return <ArenaDescription />;

            case "Sponsors":
                return <ArenaSponsors />;

            case "Tracks":
                return <ArenaTracks />;

            case "Schedule":
                return <ArenaSchedule />;

            case "Prizes":
                return <ArenaPrizes />;

            default:
                return
            // return (
            //   <Typography variant="h4" color="error">
            //     Oops! An unexpected error has occured
            //   </Typography>
            // );
        }
    };

    const Complete = () => (
        <React.Fragment>
            <Typography variant="HeadlineMedium" component="p" sx={{ mt: 4, mb: 1 }} align="center">
                All steps completed!🎉
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <TextButton onClick={handleReset} startIcon={<HiOutlineChevronLeft />}>
                    Back to Details
                </TextButton>
                <Box sx={{ flex: "1 1 auto" }} />
                <FilledButton
                    type="submit"
                    startIcon={<HiOutlineCheckCircle />}
                >
                    Save
                </FilledButton>
            </Box>
        </React.Fragment>
    );

    if (readOnly) {
        return (
            <div>Readonly Stepper</div>
        )
    }


    return (
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep} orientation="vertical">
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
                            <StepContent>
                                <React.Fragment>
                                    <StepContainer sx={{ padding: "20px" }}>
                                        {getStepContent(steps[activeStep])}
                                    </StepContainer>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <TextButton
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            startIcon={<HiOutlineChevronLeft />}
                                        >
                                            <Typography variant="LabelLarge">Back</Typography>
                                        </TextButton>
                                        <Box sx={{ flex: "1 1 auto" }} />
                                        {activeStep === steps.length - 1 ? (
                                            <FilledButton
                                                // type="submit"
                                                onClick={handleNext}
                                                startIcon={<HiOutlineCheckCircle />}
                                            >
                                                <Typography variant="LabelLarge">Finish</Typography>
                                            </FilledButton>
                                        ) : (
                                            <TextButton
                                                onClick={handleNext}
                                                disabled={isStepFailed(steps[activeStep])}
                                                endIcon={<HiOutlineChevronRight />}
                                            >
                                                <Typography variant="LabelLarge">Next</Typography>
                                            </TextButton>
                                        )}
                                    </Box>
                                </React.Fragment>
                            </StepContent>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length && (
                <Complete />
            )}
        </Box>
    )
}

export default ArenaStepper;