import Image from "next/image";
import * as React from "react";
import style from "@/styles/typography-styles.module.css";
// import { Box, Grid, Paper, Typography } from "@mui/material";
import { Box, Grid, Paper} from "@mui/material";
import { styled } from "@mui/system";

const RelicCard = styled(Paper)({
  height: "120px",
  width: "140px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
});


// this section is about points etc earned and show it's UI, currently it is not in use
export default function Achievements() {
  return (
    <div>
      <Box sx={{ mt: 2, p: 1 }}>
        {/* <Typography
          variant="LabelLarge"
          color="primary"
          sx={{ mb: 2, fontWeight: 500 }}
        > */}
        <p className={style.LabelLarge} style={{color:"primary"}}>
          Relics Earned </p>
        {/* </Typography> */}
        <Grid container sx={{ mb: 1 }} spacing={2}>
          <Grid item xs="auto">
            <RelicCard>
              <Image
                src={"https://cdn.svgporn.com/logos/drone-icon.svg"}
                height={50}
                width={50}
                layout={"fixed"}
                alt={"relic-logo"}
              />
              {/* <Typography variant="LabelLarge" sx={{ mt: 1 }}> */}
              <p className={style.LabelLarge}>
                Comet Orbs </p>
              {/* </Typography> */}
            </RelicCard>
          </Grid>
          <Grid item xs="auto">
            <RelicCard>
              <Image
                src={"https://cdn.svgporn.com/logos/looker-icon.svg"}
                height={50}
                width={50}
                layout={"fixed"}
                alt={"relic-logo"}
              />
              {/* <Typography variant="LabelLarge" sx={{ mt: 1 }}> */}
              <p className={style.LabelLarge}>
                Comet Particles </p>
              {/* </Typography> */}
            </RelicCard>
          </Grid>
          <Grid item xs="auto">
            <RelicCard>
              <Image
                src={"https://cdn.svgporn.com/logos/treasuredata-icon.svg"}
                height={50}
                width={50}
                layout={"fixed"}
                alt={"relic-logo"}
              />
              {/* <Typography variant="LabelLarge" sx={{ mt: 1 }}> */}
              <p className={style.LabelLarge}>
                Comet Crystals </p>
              {/* </Typography> */}
            </RelicCard>
          </Grid>
        </Grid>
        {/* <Typography variant="LabelLarge"> */}
        <p className={style.LabelLarge}>
          Relics are earned when you perform excellent in Code Fests.
          </p>
        {/* </Typography> */}
      </Box>
      <Box sx={{ mt: 2, p: 1 }}>
        {/* <Typography
          variant="LabelLarge"
          color="primary"
          sx={{ mb: 2, fontWeight: 500 }}
        > */}
        <p className={style.LabelLarge} style={{color:"primary"}}>
          Comet Coins </p>
        {/* </Typography> */}
        <Grid container sx={{ mb: 1 }} spacing={2}>
          <Grid item xs="auto">
            <RelicCard>
              <Image
                src={"/LogoBlack.png"}
                height={50}
                width={60}
                layout={"fixed"}
                alt={"relic-logo"}
              />
              {/* <Typography variant="LabelLarge" sx={{ mt: 1 }}> */}
              <p className={style.LabelLarge}>
                Comet Coins </p>
              {/* </Typography> */}
            </RelicCard>
          </Grid>
        </Grid>
        {/* <Typography variant="LabelLarge"> */}
        <p className={style.LabelLarge}>
          Comet coins are earned when you win Events on Festec.
          </p>
        {/* </Typography> */}
      </Box>
    </div>
  );
}
