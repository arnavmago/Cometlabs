import * as React from 'react';
import dynamic from "next/dynamic";
import Image from "next/image";
import { Typography, } from "@mui/material";
import ShowcaseSkeleton from '@/skeletons/Showcase';


const Banner = dynamic(() => import("@/components/Banners/BannerLayout"), {
  loading: () => <ShowcaseSkeleton />,
});

export default function TrackBanner() {

  const Heading = (
    <Typography variant="DisplayMedium" component="p" sx={{ mb: "24px" }}>
      Start with our AngularLABS, the world&apos;s first AI Powered Assessments
      <span style={{ fontWeight: 500 }}>Sandboxes</span>
    </Typography>
  );

  const Description = (
    <Typography variant="BodyLarge" component="p" color="onsurfacevariant.main" sx={{ mb: "48px" }}>
      {`Want to build a diversified developer portfolio? Are you looking for peer-to-peer learning? Are you striving for hiring & internship opportunities? Then you’re in the right place !!`}
    </Typography>
  )

  return (
    <Banner
      PrimaryHeading={Heading}
      PrimaryDescription={Description}
      SecondaryComponent={
        <Image
          src={"/BannerAngular.png"}
          alt={"logo"}
          height={1}
          width={0.977}
          layout="responsive"
        />
      }
    />
  );
}