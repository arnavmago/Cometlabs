import Image from "next/image";
import { Box, Paper, Typography, Stack, Chip, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { InternalLinks } from "@/content/Links";
import { CodeArena } from './types'
// import { Tag } from "@/components/Fest/TechTags";
// import Router from 'next/router';
// import { v4 as uuidv4 } from 'uuid';
import { FaLocationArrow } from "react-icons/fa";
import React from "react";
import { FilledButton } from "@/styles/theme";




const CardContainer = styled(Paper)({
  width: 320,
  minHeight: 340,
  padding: "20px",
  margin: "20px 0px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
});

const SingleCard = ({ ...props }: CodeArena) => {
  console.log(props);
  const regstatedate = new Date(props.details.regStartDate);
  const eStartDate = new Date(props.details.startDate)
  const eendDate = new Date(props.details.endDate)
  const regEndDate = new Date(props.details.regEndDate)
  const today = new Date().getTime();
  const startdate = props.details.startDate ? new Date(props.details.startDate).toLocaleDateString() + " " + new Date(props.details.startDate).toLocaleTimeString().replace(/(.*)\D\d+/, '$1') : "Invalid Date";
  const enddate = props.details.endDate ? new Date(props.details.endDate).toLocaleDateString() + " " + new Date(props.details.endDate).toLocaleTimeString().replace(/(.*)\D\d+/, '$1') : "Invalid Date";
  const label = regstatedate.getTime() < today ? (eStartDate.getTime() < today ? (eendDate.getTime() < today ? "CodeArena has ended" : "Ongoing CodeArena") : `Registration close on ${regEndDate.toLocaleDateString()}`) : `Registration starts from ${regstatedate.toLocaleDateString()}`;

  return (
    <CardContainer elevation={1}>
      <Box
        sx={{
          height: "117px",
          overflow: "hidden",
          mb: "20px"
        }}
      >
        <Image layout="responsive"
          objectFit="cover"
          height={120}
          width={280}
          alt={props.details.title + " Cometlabs"}
          src={props.details.imageUrl || `https://source.unsplash.com/400x120/?technology,${props.details.imageUrl}`}
        />
      </Box>
      {props.details && (
        <Stack sx={{ mb: "20px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }} alignItems="center">
            <Typography variant="TitleLarge" sx={{ fontWeight: 500 }}>{props.details.title}</Typography>
            {props.details.websiteUrl &&
              <a
                href={props.details.websiteUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLocationArrow style={{ fontSize: "1.3rem" }} />
              </a>}
          </Box>
          <Box sx={{ height: "60px" }}>
            {props.details.desc ? (
              <Typography variant="LabelLarge" color="onsurfacevariant.main">{props.details.desc}</Typography>
            ) : (<></>)}
          </Box>
          <Stack sx={{ display: "flex", flexDirection: "row", mt: 0.5, justifyContent: "flex-start", alignItems: "flex-start" }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
              <Typography variant="BodyLarge" component="p" sx={{ textAlign: "left", width: "100%" }}>Start Date</Typography>
              <Typography variant="BodySmall">{startdate}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mr: 3 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }} alignItems="center">
              <Typography variant="BodyLarge" sx={{ textAlign: "left", width: "100%" }}>End Date</Typography>
              <Typography variant="BodySmall" component="p">{enddate}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      )}
      {/* <Box sx={{ height: "120px", display: "flex" }}>
        {props.details.tags ? (
          <Grid container rowGap={1} sx={{ justifyContent: "space-around", alignContent: "center" }}>
            {props.details.tags?.map((tag, index) => (
              <Grid item xs="auto" key={index} >
                <Tag label={tag.name} />
              </Grid>
            ))}
          </Grid>
        ) : (<></>)}
      </Box> */}


      <Stack direction="row" sx={{ my: "20px", justifyContent: "center", alignItems: "center" }}>
        <Chip sx={{ width: "90%" }} label={label} />
        {/* <Typography variant="body2" >Registration starts from {new Date(props.details.regEndDate).toLocaleDateString()}</Typography> */}
      </Stack>
      {props.approvedBy ? (
        <FilledButton sx={{ width: "100%" }} href={`${InternalLinks.LANDING_PAGE}${props.festId}`}>
          <Typography variant="LabelLarge">
            View
          </Typography>
        </FilledButton>
      ) : (
        <FilledButton sx={{ width: "100%" }} href={`${InternalLinks.LANDING_PAGE}${props.festId}/edit`}>
          <Typography variant="LabelLarge">
            Edit
          </Typography>
        </FilledButton>
      )}
    </CardContainer>
  );
}
export default SingleCard;



