import { CardContainer } from "@/styles/theme";
//import { Style } from "@material-ui/icons";
// import { Box, Grid, Stack, Typography, ButtonBase, IconButton } from "@mui/material";
import { Box, Grid, Stack,  ButtonBase, IconButton } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import style from "@/styles/typography-styles.module.css";
export interface Mentor {
    name: string,
    designation: string,
    catchy: string,
    facebook: string,
    instagram: string,
    linkedin: string,
    twitter: string,
    imageUrl: string,
    blog: string,
}


// single Team Member Card
const MentorCard = (props: Mentor) => {
    const [expanded, setExpanded] = React.useState(false);

    const width = expanded ? 376 : 180;

    return (
        <CardContainer onClick={() => { setExpanded(!expanded) }} sx={{ width: { width }, height: "180px", borderRadius: "0px", transition: "1s", display: "flex" }}>
            <ButtonBase sx={{ width: "180px", height: "180px" }}>
                <Image src={props.imageUrl}
                    height={180}
                    width={180}
                    objectFit="cover"
                    alt={props.name} />
            </ButtonBase>
            {!!expanded &&
                <Stack rowGap={1} sx={{ padding: 2, width: 196, justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                    <Stack>
                        {/* <Typography variant="LabelLarge">{props.name}</Typography> */}
                        <p className={style.LabelLarge}>{props.name}</p>
                        {/* <Typography variant="LabelLarge">{props.designation}</Typography> */}
                        <p className={style.LabelLarge}>{props.designation}</p>
                    </Stack>
                    {/* <Typography variant="LabelLarge">{props.catchy}</Typography> */}
                    <p className={style.LabelLarge}>{props.catchy}</p>
                    <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                        <IconButton sx={{ padding: "4px", color: "black", fontSize: "1.25rem" }} href={`${props.facebook}` || '#'} target={"_blank"}>
                            <FaFacebookSquare />
                        </IconButton>
                        <IconButton sx={{ padding: "4px", color: "black", fontSize: "1.25rem" }} href={`${props.instagram}`} target={"_blank"}>
                            <FaInstagramSquare />
                        </IconButton>
                        <IconButton sx={{ padding: "4px", color: "black", fontSize: "1.25rem" }} href={`${props.twitter}`} target={"_blank"}>
                            <FaTwitterSquare />
                        </IconButton>
                        <IconButton sx={{ padding: "4px", color: "black", fontSize: "1.25rem" }} href={`${props.linkedin}`} target={"_blank"}>
                            <FaLinkedin />
                        </IconButton>
                    </Stack>
                </Stack>
            }
        </CardContainer>
    );
}


// whole team area
const MentorArea = () => {
    return (
        <Box sx={{ width: "100%", padding: "44px 0", position: "relative" }}>
            {/* <Typography
                variant="HeadlineMedium" paragraph
                sx={{ flexGrow: 1, maxWidth: `calc(100vw - 200px)`, marginBottom: "30px" }}
                noWrap> */}
                <p className={style.HeadlineMedium} >
                Team Members
            {/* </Typography> */}
            </p>
            <Grid direction="row" sx={{ padding: "0 20px" }} container spacing={2} justifyContent="space-evenly" alignItems="center">
                {MENTORS.map((mentor) => {
                    return (
                        <Grid item key={mentor.name}>
                            <MentorCard {...mentor} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}


export default MentorArea;



export const MENTORS: Mentor[] = [
    {
        name: "Prashant Katiyar",
        designation: "Founder and CEO",
        catchy: "B.Tech, IIIT Guwahati | 3+ years of Product Development Experience | Built 6000+ Developer Community from IITs, NITs, IIITs, IIITians Netowork",
        facebook: "https://www.facebook.com/prashantkatiyar9777/",
        instagram: "https://www.instagram.com/k.prashant__/",
        linkedin: "https://www.linkedin.com/in/prashant-milan-katiyar/",
        twitter: "https://twitter.com/kprashant__",
        imageUrl: "/team/prashant.jpeg",
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt porttitor ante nec placerat. Vestibulum lobortis mi tempor sem viverra blandit. Nullam congue ut ex ac suscipit. Integer suscipit faucibus facilisis. Aliquam erat volutpat."
    },
    {
        name: "Rishika Kumari",
        designation: "Co-Founder and Business Head",
        catchy: "B.Tech, IIIT Dharwad | 2+ years of experience in Business Development | Ex-Founder: Farmoxi Logistics",
        facebook: "https://www.facebook.com/rishika.kumari.1048554 ",
        instagram: "https://www.instagram.com/rishika_789_/",
        linkedin: "https://www.linkedin.com/in/rishika-kumari/",
        twitter: "https://twitter.com/Rishika789/",
        imageUrl: "/team/rishika.jpeg",
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt porttitor ante nec placerat. Vestibulum lobortis mi tempor sem viverra blandit. Nullam congue ut ex ac suscipit. Integer suscipit faucibus facilisis. Aliquam erat volutpat."
    },
    {
        name: "Shivam Soni",
        designation: "VP Product",
        catchy: "B.Tech, IIIT Nagpur | 3+ years experience in Software Development & Testing | Worked in 2 Startups as Product Lead.",
        facebook: "https://www.facebook.com/profile.php?id=100015378044539",
        instagram: "https://www.instagram.com/educational__guru/",
        linkedin: "https://www.linkedin.com/in/shivam-soni-s/",
        twitter: "https://twitter.com/shivams62018548",
        imageUrl: "/team/shivam.jpg",
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt porttitor ante nec placerat. Vestibulum lobortis mi tempor sem viverra blandit. Nullam congue ut ex ac suscipit. Integer suscipit faucibus facilisis. Aliquam erat volutpat."
    },
    {
        name: "Vineel Sai",
        designation: "VP Engineering",
        catchy: "B.Tech, IIIT Kalyani | 2+ years of experience in Software Development & System Design | Leads Google DSC at IIIT Kalyani.",
        facebook: "https://www.facebook.com/vineelsai26",
        instagram: "https://www.instagram.com/vineelsai26/",
        linkedin: "https://www.linkedin.com/in/vineelsai26/",
        twitter: "https://twitter.com/vineelsai26",
        imageUrl: "/team/vineel.jpeg",
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt porttitor ante nec placerat. Vestibulum lobortis mi tempor sem viverra blandit. Nullam congue ut ex ac suscipit. Integer suscipit faucibus facilisis. Aliquam erat volutpat."
    },
    {
        name: "Manish Kumar",
        designation: "Architecture and DevOps",
        catchy: "B.Tech, IIIT Gwalior | 3+ years of experience as an Architect | Maintainer @nodejs.dev | Expert @Google Search",
        facebook: "https://facebook.com/manishprivet",
        instagram: "https://instagram.com/manishprivet",
        linkedin: "https://linkedin.com/in/manishprivet",
        twitter: "https://twitter.com/manishprivet",
        imageUrl: "/team/manish.jfif",
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt porttitor ante nec placerat. Vestibulum lobortis mi tempor sem viverra blandit. Nullam congue ut ex ac suscipit. Integer suscipit faucibus facilisis. Aliquam erat volutpat."
    },
    {
        name: "Chaitanya Hegde",
        designation: "Product Designer",
        catchy: "B.Tech, IIIT Dharwad | 3+ years. of experience in Product Design & User Experience",
        instagram: "https://www.instagram.com/cherry_hegde_/",
        facebook: "https://www.facebook.com/profile.php?id=100009191013605",
        linkedin: "https://www.linkedin.com/in/chaitanya-hegde-162b431a4",
        twitter: "https://twitter.com/HegdeCherry",
        imageUrl: "/team/chaitanya.jpeg",
        blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt porttitor ante nec placerat. Vestibulum lobortis mi tempor sem viverra blandit. Nullam congue ut ex ac suscipit. Integer suscipit faucibus facilisis. Aliquam erat volutpat."
    },
]
