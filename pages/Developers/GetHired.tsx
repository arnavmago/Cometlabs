import { Container, Typography, Box } from "@mui/material"

const Delegate = () => {
    return (
        <Container sx={{ textAlign: "center", my: 5 }}>
            <Typography paragraph sx={{ mb: 5 }} variant="DisplayMedium">Comet Delegate Internship Programmer</Typography>
            <Typography paragraph sx={{ mb: 5 }} variant="TitleSmall">2022 - 2023</Typography>
            <Box>
                <Typography paragraph sx={{ mb: 5 }} variant="LabelLarge">About the Programme</Typography>
                <Typography paragraph sx={{ mb: 5, width: { xs: "100%", md: "95%" } }} variant="LabelLarge">COMETLABS is all set to relaunch “Comet Delegate Internship Programme” to foster young Indian talent by mentorship and facilitating cross boundary learning. It is a nationwide intern hiring drive with a reach of over 2000+ engineering colleges and 1 million+ engineering undergraduates. This internship program is meant to foster cross boundary learning via mentoring sessions and bootcamps as well as tasks to quench the curiosity of interns regarding the corporate world. Thus, facilitating community building.
                </Typography>
            </Box>
        </Container>
    )
}

export default Delegate;