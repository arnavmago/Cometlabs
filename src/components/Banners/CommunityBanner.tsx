import * as React from 'react';
import dynamic from "next/dynamic";
import Image from "next/image";
import ShowcaseSkeleton from "@/skeletons/Showcase";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import { FilledButton } from '@/styles/theme';



const Banner = dynamic(() => import("@/components/Banners/Banner"), {
  loading: () => <ShowcaseSkeleton />,
});

// contains primary secondary and tertiary components used in Community banner
export default function CommunityBanner() {

  const Heading = (
    <Typography variant="DisplaySmall" component="p" sx={{ mb: "24px" }}>
      <Typography variant="DisplaySmall">
        {"Join our Community of "}
      </Typography>
      <Typography color="color2.main" variant="DisplaySmall">
        {"Smartest Developers. "}
      </Typography>
      <Typography variant="DisplaySmall">
        {"Showcase your Projects, Judge others and get "}
      </Typography>
      <Typography color="color1.main" variant="DisplaySmall">
        {"Hired."}
      </Typography>
    </Typography>
  );

  const Description = (
    <Typography variant="BodyLarge" component="p" color="onsurfacevariant.main" sx={{ mb: "48px" }}>
      {`We're creating a Dynamic Developer Community filled with Like-Minded Folks, 
      Tech-Talks & Product Building Bootcamps on the Latest Technologies, Brainstorming via CodeArenas & Events, Placement Drives and much more.
      7000+ folks already joined. Have you? `}
    </Typography>
  )

  const Tertiary = (
    <Grid container direction="row">
      <Grid item xs={10} md={12}>
        <FilledButton href="https://bit.ly/cometwa3" sx={{ mb: "10px", mr: "16px" }} startIcon={<FaWhatsapp />}>
          <Typography variant="LabelLarge">
            Whatsapp Channels
          </Typography>
        </FilledButton>
        <FilledButton href="https://bit.ly/joincomet" sx={{ mb: "10px" }} startIcon={<FaDiscord />}>
          <Typography variant="LabelLarge">
            Discord Community
          </Typography>
        </FilledButton>
      </Grid>
    </Grid>
  );

  return (
    <Banner
      PrimaryHeading={Heading}
      PrimaryDescription={Description}
      SecondaryComponent={
        <Box>
          <Image
            src={"/community.png"}
            alt={"logo"}
            height={1}
            width={0.81}
            layout="responsive"
          />
        </Box>
      }
      TertiaryComponent={Tertiary}
    />
  );
}