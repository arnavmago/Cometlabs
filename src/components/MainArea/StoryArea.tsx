import { CardContainer } from "@/styles/theme";
import { Grid, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";


interface Story {
    name: string,
    designation: string,
    story: string,
    imageUrl: string,
    liked: boolean,
}

// Single Story Card UI
const StoryCard = (props: Story) => {
    return (
        <CardContainer elevation={1} sx={{
            position: "relative", minHeight: "330px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
        }}>
            <Box position="absolute" zIndex={100} top="-25px" left="-25px">
                <Image src="/stories/COMMA.svg" alt="COMMA" width={50} height={50} />
            </Box>
            <Stack spacing={2} sx={{ height: "100%" }}>
                <Stack direction="row" spacing={2} >
                    <Box sx={{ borderRadius: "50%", overflow: "hidden", height: "50px", width: "50px" }}>
                        <Image
                            src={props.imageUrl}
                            alt="company logo"
                            height={50}
                            width={50}
                        />
                    </Box>
                    <Stack>
                        <Typography variant="LabelLarge">
                            {props.name}
                        </Typography>
                        <Typography variant="LabelLarge" color="testSecondary">
                            {props.designation}
                        </Typography>
                    </Stack>
                </Stack>
                <Typography variant={"LabelLarge"} sx={{ minHeight: "160px" }}>
                    {props.story}
                </Typography>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Typography variant="LabelLarge">Was it helpful?</Typography>
                    <FaThumbsUp style={{ marginLeft: "10px" }} />
                    <FaThumbsDown style={{ marginLeft: "10px" }} />
                </div>
            </Stack>
        </CardContainer>
    );
}


// Whole StoryArea
const StoryArea = () => {
    return (
        <Box sx={{
            width: "100%",
            padding: "44px 0",
            position: "relative"
        }}>
            <Typography
                variant="TitleLarge" paragraph
                sx={{ flexGrow: 1, maxWidth: `calc(100vw - 200px)`, marginBottom: "30px" }}
                noWrap>
                Read out some stories of our developers.
            </Typography>
            <Grid container sx={{ padding: "0 20px" }} spacing={4} justifyContent="center" alignItems="center">
                {Stories.map((story) => {
                    return (
                        <Grid item md={6} key={story.name}>
                            <StoryCard {...story} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}


export default StoryArea;



// Dummy data
const Stories: Story[] = [
    {
        name: "Vanshika Pandey",
        designation: "SDE intern at Dukaan and Incoming SDE intern at Morgan Stanley",
        story: "I have been working as a full-stack developer at COMETLABS for more than a year now. While applying for FESTEC jobs a year back, I found the COMETLABS test to be very challenging. But it was a good learning experience for me. Through the AI/ML-enabled tests, COMETLABS reviews how good you’re with your skill. Working with Turing has been a very satisfying experience for me so far. I get to work for Indian companies and enjoy good pay as well. I am also part of an elite community of the world’s best developers. d enjoy good pay as well. I am also part of an elite community of the world’s best developers.",
        imageUrl: "/stories/vanshika.jfif",
        liked: false,
    },
    {
        name: "Ishika Sinha",
        designation: "Mentee at Codess.cafe, intern at IITK",
        story: "I have been working as a full-stack developer at COMETLABS for more than a year now. While applying for FESTEC jobs a year back, I found the COMETLABS test to be very challenging. But it was a good learning experience for me. Through the AI/ML-enabled tests, COMETLABS reviews how good you’re with your skill. Working with Turing has been a very satisfying experience for me so far. I get to work for Indian companies and enjoy good pay as well. ",
        imageUrl: "/stories/ishika.jfif",
        liked: false,
    },
    {
        name: "Koneru Rehasree",
        designation: "SDE intern at supplys, freelancer",
        story: "I have been working as a full-stack developer at COMETLABS for more than a year now. While applying for FESTEC jobs a year back, I found the COMETLABS test to be very challenging. But it was a good learning experience for me. Through the AI/ML-enabled tests, COMETLABS reviews how good you’re with your skill. Working with Turing has been a very satisfying experience for me so far. I get to work for Indian companies and enjoy good pay as well. I am also part of an elite community of the world’s best developers. d enjoy good pay as well. I am also part of an elite community of the world’s best developers.",
        imageUrl: "/stories/reha.jfif",
        liked: false,
    },
    {
        name: "Omkar Deshmukh",
        designation: "Incoming SWE intern at Google, ACM ICPC Regionalist",
        story: "I have been working as a full-stack developer at COMETLABS for more than a year now. While applying for FESTEC jobs a year back, I found the COMETLABS test to be very challenging. But it was a good learning experience for me. Through the AI/ML-enabled tests, COMETLABS reviews how good you’re with your skill. Working with Turing has been a very satisfying experience for me so far. I get to work for Indian companies and enjoy good pay as well. I am also part of an elite community of the world’s best developers. d enjoy good pay as well. I am also part of an elite community of the world’s best developers.",
        imageUrl: "/stories/omkar.jfif",
        liked: false,
    },
    {
        name: "Manish Kumar",
        designation: "Maintainer at Node.js",
        story: "I have been working as a full-stack developer at COMETLABS for more than a year now. While applying for FESTEC jobs a year back, I found the COMETLABS test to be very challenging. But it was a good learning experience for me. Through the AI/ML-enabled tests, COMETLABS reviews how good you’re with your skill. Working with Turing has been a very satisfying experience for me so far. I get to work for Indian companies and enjoy good pay as well. I am also part of an elite community of the world’s best developers. d enjoy good pay as well. I am also part of an elite community of the world’s best developers.",
        imageUrl: "/stories/manish.jfif",
        liked: false,
    },
    {
        name: "Vibhanshu Jain",
        designation: "SWE intern at StoryXpress",
        story: "I have been working as a full-stack developer at COMETLABS for more than a year now. While applying for FESTEC jobs a year back, I found the COMETLABS test to be very challenging. But it was a good learning experience for me. Through the AI/ML-enabled tests, COMETLABS reviews how good you’re with your skill. Working with Turing has been a very satisfying experience for me so far. I get to work for Indian companies and enjoy good pay as well. I am also part of an elite community of the world’s best developers. d enjoy good pay as well. I am also part of an elite community of the world’s best developers.",
        imageUrl: "/stories/vibhanshu.jfif",
        liked: false,
    },
];