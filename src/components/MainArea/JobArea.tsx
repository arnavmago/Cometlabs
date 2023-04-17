import { Paper, Box, Grid, styled } from '@mui/material';
import React from 'react';
import Image from "next/image";
import style from "@/styles/typography-styles.module.css";

interface JOB {
    name: string,
    imageUrl: string,
}

const CardContainer = styled(Paper)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0px"
});


// single jobcard
const JobCard = (job: JOB) => {
    return (
        <CardContainer elevation={1} sx={{ width: "80px", height: "80px" }}>
            <Box >
                <Image src={job.imageUrl}
                    height={22}
                    width={22}
                    objectFit="cover"
                    alt={job.name + "-logo"} />
            </Box>
            {/* <Typography variant="LabelLarge" align="center" width={42}>{job.name}</Typography> */}
            <p className={style.LabelLarge} style={{ alignContent: 'centre', width: '42px'}}>{job.name}</p>
        </CardContainer>
    );
}

// whole job area
function JobArea() {
    return (
        <Box sx={{ marginBottom: "50px" }}>
            {/* <Typography variant="LabelLarge" */}
                {/* sx={{ flexGrow: 1, maxWidth: `calc(100vw - 200px)`, marginBottom: "30px" }}
                noWrap
            >
                Find jobs for your other skills
            </Typography> */}
            <p className={style.LabelLarge} style={{flexGrow: '1', maxWidth: 'calc(100vw - 200px)', marginBottom: '30px'}}>
            Find jobs for your other skills
            </p>
            <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
                {JOBS.map((job) => {
                    return (
                        <Grid item key={'key'}>
                            <JobCard {...job} key={job.name} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    )
}

export default JobArea;


const JOBS: JOB[] = [
    {
        name: "HTML5",
        imageUrl: "/Job_Icons/HTML5.svg",
    },
    {
        name: "CSS",
        imageUrl: "/Job_Icons/CSS.svg",
    },
    {
        name: "NodeJs",
        imageUrl: "/Job_Icons/NODEJS.svg",
    },
    {
        name: "HTML5",
        imageUrl: "/Job_Icons/HTML5.svg",
    },
    {
        name: "CSS",
        imageUrl: "/Job_Icons/CSS.svg",
    },
    {
        name: "NodeJs",
        imageUrl: "/Job_Icons/NODEJS.svg",
    },
    {
        name: "HTML5",
        imageUrl: "/Job_Icons/HTML5.svg",
    },
    {
        name: "CSS",
        imageUrl: "/Job_Icons/CSS.svg",
    },
    {
        name: "NodeJs",
        imageUrl: "/Job_Icons/NODEJS.svg",
    },
    {
        name: "HTML5",
        imageUrl: "/Job_Icons/HTML5.svg",
    },
    {
        name: "CSS",
        imageUrl: "/Job_Icons/CSS.svg",
    },
    {
        name: "NodeJs",
        imageUrl: "/Job_Icons/NODEJS.svg",
    },
    {
        name: "HTML5",
        imageUrl: "/Job_Icons/HTML5.svg",
    },
    {
        name: "CSS",
        imageUrl: "/Job_Icons/CSS.svg",
    },
    {
        name: "NodeJs",
        imageUrl: "/Job_Icons/NODEJS.svg",
    },
    {
        name: "HTML5",
        imageUrl: "/Job_Icons/HTML5.svg",
    },
    {
        name: "CSS",
        imageUrl: "/Job_Icons/CSS.svg",
    },
    {
        name: "NodeJs",
        imageUrl: "/Job_Icons/NODEJS.svg",
    },
    {
        name: "HTML5",
        imageUrl: "/Job_Icons/HTML5.svg",
    },
    {
        name: "CSS",
        imageUrl: "/Job_Icons/CSS.svg",
    },
    {
        name: "NodeJs",
        imageUrl: "/Job_Icons/NODEJS.svg",
    },
    {
        name: "HTML5",
        imageUrl: "/Job_Icons/HTML5.svg",
    },
    {
        name: "CSS",
        imageUrl: "/Job_Icons/CSS.svg",
    },
    {
        name: "NodeJs",
        imageUrl: "/Job_Icons/NODEJS.svg",
    },
    {
        name: "HTML5",
        imageUrl: "/Job_Icons/HTML5.svg",
    },
    {
        name: "CSS",
        imageUrl: "/Job_Icons/CSS.svg",
    },
    {
        name: "NodeJs",
        imageUrl: "/Job_Icons/NODEJS.svg",
    },
    {
        name: "HTML5",
        imageUrl: "/Job_Icons/HTML5.svg",
    },
    {
        name: "CSS",
        imageUrl: "/Job_Icons/CSS.svg",
    },
    {
        name: "NodeJs",
        imageUrl: "/Job_Icons/NODEJS.svg",
    },
    {
        name: "HTML5",
        imageUrl: "/Job_Icons/HTML5.svg",
    },
    {
        name: "CSS",
        imageUrl: "/Job_Icons/CSS.svg",
    },
    {
        name: "NodeJs",
        imageUrl: "/Job_Icons/NODEJS.svg",
    },
    {
        name: "HTML5",
        imageUrl: "/Job_Icons/HTML5.svg",
    },
    {
        name: "CSS",
        imageUrl: "/Job_Icons/CSS.svg",
    },
    {
        name: "NodeJs",
        imageUrl: "/Job_Icons/NODEJS.svg",
    },
];
