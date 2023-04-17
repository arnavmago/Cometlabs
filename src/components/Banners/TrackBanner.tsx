import * as React from 'react';
import dynamic from "next/dynamic";
import Image from "next/image";
// import { Typography, } from "@mui/material";
import ShowcaseSkeleton from '@/skeletons/Showcase';
import style from "@/styles/typography-styles.module.css";

const Banner = dynamic(() => import("@/components/Banners/BannerLayout"), {
  loading: () => <ShowcaseSkeleton />,
});

export default function TrackBanner() {

  const Heading = (
    // <Typography variant="DisplayMedium" component="p" sx={{ mb: "24px" }}>
    //   Start with our AngularLABS, the world&apos;s first AI Powered Assessments
    //   <span style={{ fontWeight: 500 }}>Sandboxes</span>
    // </Typography>
    <p className={style.DisplayMedium} style={{marginBottom:'24px'}}>
      Start with our AngularLABS, the world & apos;s first AI Powered Assessments
    <span style={{ fontWeight: '500' }}>Sandboxes</span>
    </p>

  );

  const Description = (
    // <Typography variant="BodyLarge" component="p" color="onsurfacevariant.main" sx={{ mb: "48px" }}>
    //   {`Want to build a diversified developer portfolio? Are you looking for peer-to-peer learning? Are you striving for hiring & internship opportunities? Then you’re in the right place !!`}
    // </Typography>
    <p className={style.BodyLarge} style={{marginBottom:'24px', color:'#C4C6D0'}}>
      {`Want to build a diversified developer portfolio? Are you looking for peer-to-peer learning? Are you striving for hiring & internship opportunities? Then you’re in the right place !!`}
    </p>

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