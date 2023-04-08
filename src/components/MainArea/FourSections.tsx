import Page from "@/layout/Page";
import { Typography, Box, Grid, Container, Modal, Stack, IconButton } from "@mui/material";
import { CardContainer, TextButton } from '@/styles/theme';
import * as React from "react";
import { MENTORS, Mentor } from "@/components/MainArea/Team";
import { MENTOR, Mento } from "@/components/MainArea/Mentor";
// import { Brands } from "@/components/MainArea/Brands";
import Image from "next/image";
// import { BsArrowRightShort } from 'react-icons/bs'
// import { makeStyles } from '@material-ui/core/styles';
import { Backed } from "@/components/MainArea/Backed";
// import Link from "@/components/Link";
// import { NewNews } from "@/components/MainArea/NewsArea";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";



const FourSections = () => {
    return (
        <>
            <Box sx={{ mb: "100px" }}>
                <Container>
                    <Typography variant="HeadlineMedium" sx={{ mb: 6 }} paragraph> We are Reaching Heights 🚀 </Typography>
                    <Grid container sx={{ textAlign: "center" }}>
                        {glance.map((glan, i) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={i}>
                                    <CardContainer sx={{ py: 6, mr: 1.5, mb: 1.5, backgroundColor: "transparent", backgroundImage: "none", border: "2px solid", borderImageSource: "linear-gradient(180deg, #003B93 0%, rgba(102, 164, 255, 0.1) 100%)", borderImageSlice: 1 }}>
                                        <Typography paragraph sx={{ background: "linear-gradient(90deg, #66B6FF 0%, #D766FF 85.94%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} variant="DisplaySmall">{glan.number}</Typography>
                                        <Typography paragraph variant="TitleMedium">{glan.name}</Typography>
                                    </CardContainer>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
            {/* <Box sx={{ pt: "80px", pb: "72px", background: "#fff", color: "#000" }}>
                <Container>
                    <Typography paragraph variant="HeadlineMedium" >
                        Trusted by the Leading Brands
                    </Typography>
                    <Typography variant="LabelLarge" paragraph sx={{ m: 0, mb: 6, maxWidth: "750px", color: "#44474F" }} >
                        Join the 100+ of Leading Companies who partner in our CodeArenas and build their Tech Teams with COMETLABS.
                    </Typography>
                    <Grid container sx={{ justifyContent: "flex-start" }}>
                        {Brands.map((brand, index) =>
                            <Grid item xs key={index}>
                                <Box sx={{ width: brand.width, height: "72px", justifyContent: "flex-start", display: "flex", flexDirection: "column", mx: "18px", mb: "30px" }}>
                                    <Image src={brand.imageUrl}
                                        height={brand.height}
                                        width={brand.width}
                                        style={{ objectFit: "cover" }}
                                        alt={brand.name + "-logo"} />
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Box> */}
            <Page noFooter noHeader>
                <Box sx={{ py: "80px" }}>
                    <Typography paragraph variant="HeadlineMedium" >
                        Meet Our Founding Team
                    </Typography>
                    <div style={{ marginBottom: "48px" }}>
                        <Typography variant="LabelLarge" sx={{ color: 'onsurfacevariant.main' }} >
                            A group of passionate developers from different IIITs, who connected together in their first year of engineering and built a </Typography>
                        <Typography variant="LabelLarge" sx={{ color: 'primary.main' }} onClick={() => { window.location.href = "https://iiitians-network.github.io/Home-Page-Website/" }}>community</Typography>
                        <Typography variant="LabelLarge" sx={{ color: 'onsurfacevariant.main' }} >of</Typography>
                        <Typography variant="LabelLarge" sx={{ color: 'primary.main' }} onClick={() => { window.location.href = "https://iiitians-network.github.io/Team/" }}>community</Typography>
                        <Typography variant="LabelLarge" sx={{ color: 'onsurfacevariant.main' }}>
                            from IIITs, NITs and IITs and now building cutting-edge technologies for transforming the fresher developers hiring space.
                        </Typography>
                    </div>
                    <Grid container justifyContent="center" spacing={1}>
                        {MENTORS.map((mentor, index) => {
                            return (
                                <TeamSingle key={index} {...mentor} />
                            );
                        })}
                    </Grid>
                </Box>
                {/* <Box sx={{ my: "128px" }}>
                    <Typography paragraph sx={{ m: 0 }} variant="HeadlineLarge" >
                        Know more about team
                    </Typography>
                    <Typography variant="LabelLarge" paragraph sx={{ m: 0, mb: 6 }} >
                        Explore their stories, celebrate their accomplishments, and find inspiration for your own work.
                    </Typography>
                    <Grid container spacing={1}>
                        {MENTORS.map((mentor) => {
                            return (
                                <Grid item xs={12} md={6} key={mentor.name}>
                                    <CardContainer sx={{ height: "350px", position: "relative" }} elevation={0}>
                                        <Image className={classes.image} src={mentor.imageUrl}
                                            objectFit="cover"
                                            layout="fill"
                                            alt={mentor.name} />
                                        <Box sx={{ position: "relative", p: "50px" }}>
                                            <Typography paragraph sx={{ position: "relative", m: 0 }} variant="TitleMedium">{mentor.name}</Typography>
                                            <Typography paragraph color="onsurfacevariant.main" variant="BodyMedium">{mentor.designation}</Typography>
                                            <Typography paragraph variant="BodyMedium">{mentor.blog}</Typography>
                                            <TextButton href="#" startIcon={<BsArrowRightShort />}>
                                                <Typography variant="LabelLarge">View Details</Typography>
                                            </TextButton>
                                        </Box>
                                    </CardContainer>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box> */}
            </Page>
            <Box id="backed" sx={{ pt: "80px", pb: "72px", background: "#fff", color: "#000" }}>
                <Container>
                    <Typography paragraph variant="HeadlineMedium" >
                        We are backed by
                    </Typography>
                    <Typography variant="LabelLarge" paragraph sx={{ m: 0, mb: 6, maxWidth: "750px", color: "#44474F" }} >
                        We are backed by prominent investors such as SucSEED Ventures and Accelerated by CIE-IIITH
                    </Typography>
                    <Grid container justifyContent="center">
                        {Backed.map((back, index) =>
                            <Grid item xs key={index}>
                                <Box sx={{ width: back.width, height: "72px", justifyContent: "center", display: "flex", flexDirection: "row", alignItems: "center", mx: "17px", mb: "30px" }}>
                                    <Image src={back.imageUrl}
                                        height={back.height}
                                        width={back.width}
                                        alt={back.id + "-logo"} />
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Box>
            <Container sx={{ py: "80px", }}>
                <Typography paragraph variant="HeadlineMedium" >
                    Advisory Board
                </Typography>
                <Typography variant="LabelLarge" paragraph sx={{ m: 0, mb: 6, color: "onsurfacevariant.main" }} >
                    The current members of COMETLABS&apos; advisory board include Mentors from CIE-IIITH, Mr. Ramesh Loganathan having 20+ years of experience in product and innovation, Mr. Viivek Verma having 30+ years of experience in Strategy and Growth, Mr. Shridhar Lanka and Mr. Ravi having 20+ years of experience in Tech, GTM Strategy, Mrs. Vineeta Gupta having 18+ years of experience in finance and Mr. Pratyush Singh having 8+ years of experience in product building as a CTO of Hapramp Studio, raising $ 1M from Anand Mahindra and Mr. Raj Prakash Jaiswal who lead architect and devOps at Microsoft, USA for 8 years and now Principle Architect at Salesforce, USA
                </Typography>
                <Grid container justifyContent="center" spacing={1}>
                    {MENTOR.map((mentor, index) => {
                        return (
                            <MentorSingle key={index} {...mentor} />
                        );
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default FourSections;

export const MentorSingle = (mentor: Mento) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ width: "100%" }} key={mentor.name}>
                <CardContainer sx={{ width: "100%", py: "36px", display: "flex", flexDirection: "column", alignItems: "center", backgroundImage: "none", background: "transparent" }} elevation={1}>
                    <Box sx={{ height: "120px", width: "120px", borderRadius: "50%", overflow: "hidden", mb: 3 }}>
                        <Image src={mentor.imageUrl}
                            height={120}
                            width={120}
                            alt={mentor.name} />
                    </Box>
                    <Typography variant="TitleMedium">{mentor.name}</Typography>
                    <Typography color="onsurfacevariant.main" variant="BodyMedium">{mentor.designation}</Typography>
                    <TextButton onClick={() => { setOpen(true) }} sx={{ width: "max-content", mt: 2 }}><Typography variant="LabelLarge">View Details</Typography></TextButton>
                </CardContainer>
            </Grid>
            <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Grid container sx={{ maxWidth: { md: "70%", lg: "50%", xs: "80%" }, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", justifyContent: "center" }}>
                    <Grid item xs={12}>
                        <CardContainer sx={{ width: "100%", py: 6, display: "flex", flexDirection: { md: "row", xs: "column" }, alignItems: "center", justifyContent: "center" }} elevation={0}>
                            <Box sx={{ height: "300px", width: "300px", borderRadius: "50%", overflow: "hidden", mr: 3 }}>
                                <Image src={mentor.imageUrl}
                                    height={300}
                                    width={300}
                                    style={{ objectFit: "cover" }}
                                    alt={mentor.name} />
                            </Box>
                            <Box sx={{ textAlign: "center", maxWidth: "250px" }}>
                                <Typography paragraph variant="DisplayMedium">{mentor.name}</Typography>
                                <Typography paragraph color="onsurfacevariant.main" variant="TitleLarge">{mentor.designation}</Typography>
                                <Typography paragraph variant="LabelLarge">{mentor.bio}</Typography>
                                {/* <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <IconButton href={`${mentor.facebook}` || '#'} target={"_blank"}>
                                        <FaFacebookSquare />
                                    </IconButton> */}
                                {mentor.instagram && <IconButton href={`${mentor.instagram}`} target={"_blank"}>
                                    <FaInstagramSquare />
                                </IconButton>}
                                {mentor.twitter && <IconButton href={`${mentor.twitter}`} target={"_blank"}>
                                    <FaTwitterSquare />
                                </IconButton>}
                                <IconButton href={`${mentor.linkedin}`} target={"_blank"}>
                                    <FaLinkedin />
                                </IconButton>
                                {/* </Stack> */}
                            </Box>
                        </CardContainer>
                    </Grid>
                </Grid>
            </Modal>
        </>
    )
}

export const TeamSingle = (mentor: Mentor) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ width: "100%" }} key={mentor.name}>
                <CardContainer sx={{ width: "100%", py: "36px", display: "flex", flexDirection: "column", alignItems: "center", backgroundImage: "none", background: "transparent" }} elevation={1}>
                    <Box sx={{ height: "100px", width: "100px", borderRadius: "50%", overflow: "hidden", mb: 3 }}>
                        <Image src={mentor.imageUrl}
                            height={100}
                            width={100}
                            alt={mentor.name} />
                    </Box>
                    <Typography variant="TitleMedium">{mentor.name}</Typography>
                    <Typography sx={{ width: "max-content", mt: 1 }} color="onsurfacevariant.main" variant="BodyMedium">{mentor.designation}</Typography>
                    <TextButton onClick={() => { setOpen(true) }} sx={{ width: "max-content", mt: 3.5 }}><Typography variant="LabelLarge">View Details</Typography></TextButton>
                </CardContainer>
            </Grid>
            <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Grid container sx={{ maxWidth: { md: "70%", lg: "50%", xs: "80%" }, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", justifyContent: "center" }}>
                    <Grid item xs={12}>
                        <CardContainer sx={{ width: "100%", py: 6, display: "flex", flexDirection: { md: "row", xs: "column" }, alignItems: "center", justifyContent: "center" }} elevation={0}>
                            <Box sx={{ height: "300px", width: "300px", borderRadius: "50%", overflow: "hidden", mr: 3 }}>
                                <Image src={mentor.imageUrl}
                                    height={300}
                                    width={300}
                                    alt={mentor.name} />
                            </Box>
                            <Box sx={{ textAlign: "center", maxWidth: "250px" }}>
                                <Typography paragraph variant="DisplayMedium">{mentor.name}</Typography>
                                <Typography paragraph color="onsurfacevariant.main" variant="TitleLarge">{mentor.designation}</Typography>
                                <Typography paragraph variant="LabelLarge">{mentor.catchy}</Typography>
                                <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                                    <IconButton href={`${mentor.facebook}` || '#'} target={"_blank"}>
                                        <FaFacebookSquare />
                                    </IconButton>
                                    <IconButton href={`${mentor.instagram}`} target={"_blank"}>
                                        <FaInstagramSquare />
                                    </IconButton>
                                    <IconButton href={`${mentor.twitter}`} target={"_blank"}>
                                        <FaTwitterSquare />
                                    </IconButton>
                                    <IconButton href={`${mentor.linkedin}`} target={"_blank"}>
                                        <FaLinkedin />
                                    </IconButton>
                                </Stack>
                            </Box>
                        </CardContainer>
                    </Grid>
                </Grid>
            </Modal>
        </>
    )
}

export interface GLANCE {
    name: string,
    number: string
}

const glance: GLANCE[] = [
    {
        name: "Active Developers Community",
        number: "7000 +"
    },
    {
        name: "CodeArenas Organised",
        number: "35 +"
    },
    {
        name: "Projects built on our Playgrounds",
        number: "450 +"
    },
    {
        name: "Total Devs Participated in CodeArenas",
        number: "13000 +"
    },
    {
        name: "Ready to Hire Vetted-Profiles",
        number: "1700 +"
    },
    {
        name: "Tech Jobs and Interns Hired",
        number: "570 +"
    },
]