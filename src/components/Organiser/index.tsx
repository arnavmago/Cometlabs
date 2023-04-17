//import { OutlinedButton } from "@/styles/theme";
// import { Typography, Grid } from "@mui/material";
import { Grid } from "@mui/material";
// import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTwitter, SiLeetcode } from "react-icons/si";
import ProfileCard from "../User/Dashboard/ProfileCard";
import { ResumeInfo } from "../User/Dashboard/types";
import style from "@/styles/typography-styles.module.css";

export interface RegUserInfo {
    email: string;
    id: string;
    eventId: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    referrer: string;
    team_id: string;
    info: ResumeInfo;
}

interface Info {
    Title: string;
    Data: RegUserInfo[];
}

// const CardContainer = styled(Paper)(({ theme }) => ({
//     width: 340,
//     // height: 164,
//     padding: "20px",
//     margin: "20px 50px 20px 0",
//     // border: "1px solid rgba(255, 255, 255, 0.2)",
//     border: 0,
//     backgroundColor: theme.palette.newbackground.main,
// }));

const Organiser = ({ Title, Data }: Info) => {
    console.log(Title, Data);
    if (Data.length == 0) {
        return (
            <div style={{ margin: "30px" }}>
                {/* <Typography variant="TitleLarge" paragraph>{Title}</Typography> */}
                <p className={style.TitleLarge}>{Title}</p>
                {/* <Typography variant="TitleMedium" sx={{ textAlign: "center" }} paragraph>Currently, There are NO Registered Users</Typography> */}
                <p className={style.TitleMedium} style={{ textAlign: "center" }}>Currently, There are NO Registered Users</p>
            </div>
        )
    }
    return (
        <div style={{ margin: "30px" }}>
            {/* <Typography variant="TitleLarge" paragraph>{Title}</Typography> */}
            <p className={style.TitleLarge}>{Title}</p>
            <Grid container sx={{ ml: 2 }}>
                {Data.map((data) => {
                    return (
                        <Grid item xs={12} md={4} key={data.id}>
                            {/* <Card {...data} /> */}
                            <ProfileCard data={data.info} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Organiser;