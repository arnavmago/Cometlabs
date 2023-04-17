// import { Box, Typography } from "@mui/material";
import { Box } from "@mui/material";
// import LineChart from './LineChart';
// import PieChart from './PieChart';
// import StraightLineChart from './StraightLineChart';
import RadarChart from './RadarChart';
// import {PieChart, Pie} from 'recharts';
// import { DummyData } from "@/components/User/Dashboard/types";
import GitHubCalendar from "react-github-calendar";
import { StyledCardContainer } from "@/styles/theme";
import style from "@/styles/typography-styles.module.css";


interface Data {
    langs: {},
    gitusername: string,
    score: SCORE,
}

export interface SCORE {
    leetCodeScore: number,
    githubScore: number,
    cometScore: number
}


const Analytics = ({ langs, gitusername, score }: Data) => {
    const leet = score.leetCodeScore ? score.leetCodeScore.toFixed(2) : "0.00";
    const git = score.githubScore ? score.githubScore.toFixed(2) : "0.00";
    const comet = score.cometScore ? score.cometScore.toFixed(2) : "0.00";

    if (!langs || !gitusername) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px 30px" }}>
                {/* <Typography variant="LabelLarge"> */}
                <p className={style.LabelLarge}>
                    Cometlabs analytics will show here.
                    {/* </Typography> */}
                </p>
            </Box>
        )
    }

    return (
        <>
            {/* <Typography variant="TitleLarge"> */}
            <p className={style.TitleLarge}>
                Analytics
                {/* </Typography> */}
            </p>
            <div style={{ display: "flex", width: "100%", marginTop: "32px", backgroundColor: "transparent", padding: "36px 0", justifyContent: "space-between", overflowY: "auto" }}>
                <StyledCardContainer sx={{ p: "36px", display: "flex", flexDirection: "column", mb: 1 }}>
                    {/* <Typography variant="LabelLarge" color="onsurfacevariant.main"> */}
                    <p className={style.LabelLarge} style={{ color: "#c4c6d0" }}>
                        Comet Score
                        {/* </Typography> */}
                    </p>
                    {/* <Typography variant="HeadlineMedium"> */}
                    <p className={style.HeadlineMedium}>
                        {comet}
                        {/* </Typography> */}
                    </p>
                </StyledCardContainer>
                <StyledCardContainer sx={{ p: "36px", display: "flex", flexDirection: "column", mb: 1 }}>
                    {/* <Typography variant="LabelLarge" color="onsurfacevariant.main"> */}
                    <p className={style.LabelLarge} style={{ color: "#c4c6d0" }}>
                        Github Score
                        {/* </Typography> */}
                    </p>
                    {/* <Typography variant="HeadlineMedium"> */}
                    <p className={style.HeadlineMedium}>
                        {git}
                        {/* </Typography> */}
                    </p>
                </StyledCardContainer>
                <StyledCardContainer sx={{ p: "36px", display: "flex", flexDirection: "column", mb: 1 }}>
                    {/* <Typography variant="LabelLarge" color="onsurfacevariant.main"> */}
                    <p className={style.LabelLarge} style={{ color: "#c4c6d0" }}>
                        Leetcode Score  </p>
                    {/* </Typography> */}
                    {/* <Typography variant="HeadlineMedium"> */}
                    <p className={style.HeadlineMedium}>
                        {leet}
                        {/* </Typography> */}
                    </p>
                </StyledCardContainer>
            </div>
            {/* <Typography paragraph sx={{ mt: 8 }} width="70%" variant="TitleLarge"> */}
            <p className={style.TitleLarge} style={{ width: "70%" }}>
                Tech Stacks
                {/* </Typography> */}
            </p>
            <RadarChart dataa={langs} />
            {/* <Typography paragraph sx={{ mt: 10, mb: 4 }} width="70%" variant="TitleLarge"> */}
            <p className={style.TitleLarge} style={{ width: "70%" }}>
                Contributions made by you
                {/* </Typography> */}
            </p>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "auto" }}>
                <GitHubCalendar username={gitusername} blockMargin={5}
                    blockRadius={7}
                    blockSize={10}
                    theme={{
                        level0: '#D6E2FF',
                        level1: '#7CABFF',
                        level2: '#0072F1',
                        level3: '#004495',
                        level4: '#001A42'
                    }} //if possible show only 8 months
                />
            </div>
        </>

    );
}


export default Analytics;