import * as React from 'react';
import dynamic from "next/dynamic";
import Image from "next/image";
import ShowcaseSkeleton from "@/skeletons/Showcase";
import style from "@/styles/typography-styles.module.css";
import { Box } from "@mui/material";




const Banner = dynamic(() => import("@/components/Banners/Banner"), {
  loading: () => <ShowcaseSkeleton />,
});

export default function ReactBanner() {
  const Heading = (
    // <Typography variant="DisplayMedium" component="p" sx={{ mb: "24px" }}>
    //   Get Developer, Tester, Cloud, ML Engineer jobs at COMETLABS & build your tech skills.
    //   {/* <span style={{ fontWeight: 500 }}>{`Core Team. `}</span> */}
    // </Typography>
    <p className={style.DisplayMedium} style={{marginBottom:'24px'}}>
      Get Developer, Tester, Cloud, ML Engineer jobs at COMETLABS & build your tech skills.
    </p>
  );

  const Description = (
    // <Typography variant="BodyLarge" component="p" color="onsurfacevariant.main">
    //   {`At COMETLABS, we are looking for a full-stack developer specializing in React and Node.js who will be responsible for the entire web development process to deliver highly scalable, customer-centric, and performant web applications for Startups in the Indian Startups Ecosystem.`}
    // </Typography>
    <p className={style.BodyLarge} style={{color:'#C4C6D0'}}>
      {`At COMETLABS, we are looking for a full-stack developer specializing in React and Node.js who will be responsible for the entire web development process to deliver highly scalable, customer-centric, and performant web applications for Startups in the Indian Startups Ecosystem.`}
    </p>
  )



  return (
    <Banner
      PrimaryHeading={Heading}
      PrimaryDescription={Description}
      SecondaryComponent={
        <Box>
          <Image
            src="/reactMobile.png"
            alt={"logo"}
            height={1}
            width={0.81}
            layout="responsive"
          />
        </Box>
      }
    />
  );
}
