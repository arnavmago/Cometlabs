import * as React from 'react';
// import Image from "next/image";
import {
  Typography, Box
} from "@mui/material";
// import PlayArea from '../MainArea/PlaygroundArea';
// import BuildFirstHackArea from '../MainArea/BuildFirstHackArea';
import Banner from './Banner';
import dynamic from 'next/dynamic';

const BuildFirstHackArea = dynamic(() => import('@/components/MainArea/BuildFirstHackArea'),
  { ssr: false }
);

const PlayArea = dynamic(() => import('@/components/MainArea/PlaygroundArea'),
  { ssr: false }
);

export default function LandingBanner() {

  const Heading = (
    <Typography variant="DisplaySmall" component="p" sx={{ mb: "24px" }}>
      <Typography variant="DisplaySmall">
        {"Streamlining Developer Hiring with "}
      </Typography>
      <Typography color="color2.main" variant="DisplaySmall">
        {"Cloud IDEs, Coding Insights "}
      </Typography>
      <Typography variant="DisplaySmall">
        {"for "}
      </Typography>
      <Typography color="color1.main" variant="DisplaySmall">
        {"Seamless Assessments "}
      </Typography>
      <Typography variant="DisplaySmall">
        {"and "}
      </Typography>
      <Typography color="color1.main" variant="DisplaySmall">
        {"Interviews"}
      </Typography>
    </Typography>
  );

  const Description = (
    <Typography variant="BodyLarge" component="p" color="onsurfacevariant.main" sx={{ m: "0 48px 48px 48px" }}>
      Build your Proof of Work or hire Top Notch Developers with CometLabs.
    </Typography>
  )

  const Tertiary = (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <BuildFirstHackArea />
      <PlayArea value={''} />
    </Box>
  );

  return (
    <Banner
      PrimaryHeading={Heading}
      PrimaryDescription={Description}
      TertiaryComponent={Tertiary}
    />
  );
}
