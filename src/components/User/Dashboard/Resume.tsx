import * as React from 'react';
import { ResumeDataType } from './types';
// import { IconButton, Typography, CircularProgress, Tooltip, Box } from "@mui/material"
import { IconButton,  CircularProgress, Tooltip, Box } from "@mui/material"
import { HiOutlinePencil } from 'react-icons/hi';
import ResumeForm from "@/components/User/Dashboard/ResumeForm";
// import ProfileDetails from './ProfileDetails';
import ResumeDetails from './ResumeDetails';

// import { TabPanelProps } from "./types";
import { SCORE } from '@/components/User/Analytics';
import { CardContainer, OutlinedButton } from '@/styles/theme';
import { BiArrowBack } from 'react-icons/bi';
import { LABS } from 'pages/Dashboards/Dev/[id]';
import FreeLabs from '../FreeLabs';
import { TiTick } from 'react-icons/ti';
import style from "@/styles/typography-styles.module.css";
export interface ResumeProps {
  ResumeData: ResumeDataType,
  langs: {},
  score: SCORE,
  freelabs: LABS[],
  isUser?: boolean,
}

export const getPercentage = (ResumeData: ResumeDataType) => {
  let init = 0;
  if (ResumeData.info) {
    let info = ResumeData.info;
    if (info.name) { init += 3; }
    if (info.mobile) { init += 3; }
    if (info.profileImage) { init += 2; }
    if (info.email) { init += 3; }
    if (info.bio) { init += 2; }
    if (info.Username) { init += 3; }
    if (info.socials) {
      const social = info.socials;
      if (social.facebookUrl) { init += 1; }
      if (social.twitterUrl) { init += 2; }
      if (social.instagramUrl) { init += 1; }
      if (social.linkedinUrl) { init += 2; }
      if (social.githubUrl) { init += 2; }
      if (social.leetcodeUrl) { init += 2; }
    }
  }
  if (ResumeData.experience && ResumeData.experience!.length) { init += 6; }
  if (ResumeData.education && ResumeData.education!.length) { init += 6; }
  if (ResumeData.projects && ResumeData.projects!.length) { init += 6; }
  if (ResumeData.skills) {
    if (ResumeData.skills.length >= 3) { init += 6; }
    else { init += ResumeData.skills.length; }
  }
  return init * 2;
}


export default function Resume({ isUser, ResumeData, langs, score, freelabs }: ResumeProps) {
  const [editResume, setEditResume] = React.useState(false);

  const percentage = getPercentage(ResumeData);

  return (
    <>
      <ResumeForm {...ResumeData}>
        <Box sx={{ my: 4, mx: { xs: 0, md: 7 } }}>
          <div style={{ display: "flex" }}>
            {/* <Typography sx={{ mr: 1 }} variant="HeadlineSmall" color="primary"> */}
            <p className={style.HeadlineSmall} style={{color:"primary"}}>
              {isUser ? "Your " : `${ResumeData.info.name}'s `} </p>
              {/* </Typography> */}
            {/* <Typography sx={{ mr: 2 }} variant="HeadlineSmall"> */}
            <p className={style.HeadlineSmall}>
              Comet Profile </p>
              {/* </Typography> */}
            <Tooltip title={`${percentage}% profile is completed.`} placement="right">
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", }}>
                {percentage != 100 ?
                  <>
                    {/* <Typography sx={{ position: "absolute", display: "flex" }} variant="LabelLarge"> */}
                    <p className={style.LabelLarge}>
                      {percentage} </p>
                      {/* </Typography> */}
                    <CircularProgress variant="determinate" value={percentage} />
                  </>
                  : <TiTick />}
              </div>
            </Tooltip>
          </div>
          <CardContainer elevation={1} sx={{ mt: 2, pb: 2, position: "relative", backgroundColor: "transparent" }}>
            {isUser && <IconButton
              color="primary"
              sx={{
                position: "absolute",
                top: "15px",
                right: "15px",
                zIndex: 10,
              }}
              onClick={() => {
                setEditResume(!editResume)
              }
              }
            >
              {editResume ? (
                <BiArrowBack />
              ) : (
                <HiOutlinePencil />
              )}
            </IconButton>}
            <ResumeDetails score={score} gitusername={ResumeData.info.socials.githubUrl!.replace("https://github.com/", "")} langs={langs} readOnly={!editResume} />
            {isUser && <>
              {editResume ? (
                <OutlinedButton
                  sx={{ ml: 4.5 }}
                  variant="outlined"
                  onClick={() => {
                    setEditResume(!editResume)
                  }
                  }
                >
                  {/* <Typography variant="LabelLarge"> */}
                  <p className={style.LabelLarge}>
                    Save Resume</p>
                    {/* </Typography> */}
                </OutlinedButton>
              ) : (
                <OutlinedButton
                  sx={{ ml: 4.5 }}
                  variant="outlined"
                  type="submit"
                  onClick={() => {
                    setEditResume(!editResume)
                  }
                  }
                >
                  {/* <Typography variant="LabelLarge"> */}
                  <p className={style.LabelLarge}>
                    Edit Resume </p>
                    {/* </Typography> */}
                </OutlinedButton>
              )}
            </>}
          </CardContainer>
          {
            freelabs && freelabs.length > 0 &&
            <CardContainer sx={{ backgroundColor: 'transparent', mt: 4 }}>
              <FreeLabs freelabs={freelabs} />
            </CardContainer>
          }
        </Box>
      </ResumeForm>
    </>
  );
}