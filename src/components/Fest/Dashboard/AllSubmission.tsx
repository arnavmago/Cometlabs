import { Paper, Grid, Stack, Typography, IconButton, Divider, styled, Chip, alpha } from "@mui/material";
import { FaLink } from "react-icons/fa";

export const Tag = styled(Chip)(({ theme }) => ({
    borderRadius: "4px",
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    color: theme.palette.primary.main
}));

export interface Hack {
    hack_id: string;
    Team_Members: Team[];
    Project_Name: string;
    Project_Tagline: string;
    Achievements: [];
    Project_Links: string[];
    Problem_Solved: string;
    Hackathon: {
        Link: string;
        Name: string;
        accessToken: string;
        festId: string;
    };
}

interface Team {
    Devfolio_Profile: string;
    Name: string;
}

export interface hacks {
    hack: Hack[];
}

const AllSubmissions = ({ hack }: hacks) => {
    console.log(hack);
    return (
        <div>
            <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
                {hack.map((hack, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Hack {...hack} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

const Hack = (hack: Hack) => {
    return (
        <Paper sx={{ height: "350px", padding: "20px 40px", m: 2, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
            <Stack sx={{ position: "relative" }}>
                <Typography variant="TitleMedium" color="primary" sx={{ textAlign: "center", pr: "60px" }}>{hack.Project_Name}</Typography>
                {hack.Project_Links && <IconButton sx={{ position: "absolute", right: 0 }} href={hack.Project_Links[0]} target="_blank" color="primary"><FaLink /></IconButton>}
            </Stack>
            <Divider sx={{ margin: "20px 0" }} />
            <Stack sx={{ justifyContent: "center" }}>
                <Typography variant="LabelLarge" sx={{ textAlign: "center" }}>{hack.Project_Tagline}</Typography>
            </Stack>
            <Divider sx={{ margin: "20px 0" }} />
            <Stack rowGap={1} >
                <Grid container spacing={1} sx={{ justifyContent: "center" }}>
                    {hack.Team_Members && hack.Team_Members.map((team) => {
                        return (
                            <Grid item key={team.Name}>
                                <Tag label={team.Name} />
                                {/* <Typography variant="body2">{team.Name}</Typography> */}
                            </Grid>
                        )
                    })}
                </Grid>
            </Stack>
        </Paper>
    );
}


export default AllSubmissions;


