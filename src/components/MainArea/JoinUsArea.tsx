import { CardContainer } from "@/styles/theme";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";


interface JoinUs {
    name: string,
    imageUrl: string,
    description: string,
}



// Single card of joinus area
const JoinUsCard = (props: JoinUs) => {
    return (
        <CardContainer sx={{
            width: "260px", minHeight: "350px", display: "flex",
            flexDirection: "column",
            padding: "20px",
            textAlign: "center"
        }}>
            <Box>
                <Image src={props.imageUrl}
                    height={110}
                    width={230}
                    objectFit="cover"
                    alt={props.name + "-logo"} />
            </Box>
            <Grid>
                <Typography variant="LabelLarge" color="primary">{props.name}</Typography>
                <Typography variant="LabelLarge">{props.description}</Typography>
            </Grid>
        </CardContainer>
    );
}


// Join us area whole component
const JoinUsArea = () => {
    return (
        <Box sx={{ width: "100%", padding: "44px 0", position: "relative", }}>
            <Typography variant="LabelLarge"
                sx={{ flexGrow: 1, maxWidth: `calc(100vw - 200px)`, marginBottom: "30px", textAlign: "center" }}
                noWrap
            >
                India’s First Developer Engaging + Talent Hiring Focused Community
            </Typography>
            <Grid container sx={{ padding: "0 20px" }} direction="row" spacing={2} justifyContent="center" alignItems="center">
                {JOINUS.map((joinus) => {
                    return (
                        <Grid item key={joinus.name}>
                            <JoinUsCard {...joinus} key={joinus.name} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}


export default JoinUsArea;


const JOINUS: JoinUs[] = [
    {
        name: "Connect",
        imageUrl: "/JoinUs/connect.svg",
        description: "Extend your Network with students, fellow developers, industry experts (speakers, entrepreneurs, creators, working professionals, etc.) to gain real-world exposure.",
    },
    {
        name: "Compete",
        imageUrl: "/JoinUs/compete.svg",
        description: "Organise or Participate in the Events/Hackathons/Ideathons and see yourself on the leaderboard with your fellow peeps across the globe, full of learnings, rewards & opportunities.",
    },
    {
        name: "Collaborate",
        imageUrl: "/JoinUs/collaborate.svg",
        description: "Associate yourself with team bonding, leadership & presentation skills by bouncing over ideas, working on projects (can get rewards too) with your fellow folks out there.",
    },
    {
        name: "Career",
        imageUrl: "/JoinUs/career.svg",
        description: "Grow your skills & excel career by sharing & grabbing opportunities (internships/jobs/startups) in the community. After all, Sharing is Caring <=> Learn in Public. ",
    },
];