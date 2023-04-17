import * as React from 'react';
import dynamic from "next/dynamic";
// import ShowcaseSkeleton from "@/skeletons/Showcase";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { DefaultUser } from "@/backend/functions";

// import Typography from "@mui/material/Typography";
import { InternalLinks } from '@/content/Links';
import { FilledButton } from '@/styles/theme';
import style from "@/styles/typography-styles.module.css";
// import ReactPlayer from "react-player/lazy";


const Banner = dynamic(() => import("@/components/Banners/BannerLayout"), {
  ssr: false
});

const ReactPlayer = dynamic(() => import("@/components/Banners/VideoPlayer"), {
  ssr: false
});

export default function CodeArenaBanner() {

  const Heading = (
    // <Typography variant="DisplaySmall" component="p" sx={{ mb: "24px" }}>
      <p className={style.DisplaySmall} style={{ marginBottom: '24px' }}>
        {"Explore CodeArenas on "}
      </p>
      {/* <Typography variant="DisplaySmall">
        {"Explore CodeArenas on "}
      </Typography> */}
      {/* <Typography color="color2.main" variant="DisplaySmall">
        {"COMETLABS "}
      </Typography> */}
      <p className={style.DisplaySmall} style={{ color:'#FFCF27' }}>
      {"COMETLABS "}
      </p>
      {/* <Typography variant="DisplaySmall">
        {"and Judge your "}
      </Typography> */}
      <p className={style.DisplaySmall}>
      {"and Judge your "}
      </p>
      {/* <Typography color="color1.main" variant="DisplaySmall">
        {"Dev Skills"}
      </Typography> */}
      <p className={style.DisplaySmall} style={{ color:'#AE86EF' }}>
      {"Dev Skills"}
      </p>
    {/* </Typography> */}

  );

  const Description = (
    // <Typography variant="BodyLarge" component="p" color="onsurfacevariant.main" sx={{ mb: "48px" }}>
    //   {`Join niche clubs, interact with experts, explore, network with high-profile and ambitious individuals, get internships, and join India’s largest community all for free!`}
    // </Typography>
    <p className={style.BodyLarge} style={{ color:'#C4C6D0', marginBottom: '48px' }}>
    {`Join niche clubs, interact with experts, explore, network with high-profile and ambitious individuals, get internships, and join India’s largest community all for free!`}
    </p>
  )

  const { data: session } = useSession();

  const router = useRouter();

  const user: DefaultUser = session?.user as DefaultUser;

  const handleOrganizeClick = (_e: any) => {
    // console.log(user);
    if (!!user) {
      // console.log(user.festId)
      router.push(InternalLinks.ORGANISE_PAGE);
    } else {
      router.push(InternalLinks.SIGNIN_PAGE);
    }
  };

  const handleAdminClick = (_e: any) => {
    // console.log(user);
    if (!!user) {
      // console.log(user.festId)
      router.push(InternalLinks.ADMIN_DASHBOARD);
    } else {
      router.push(InternalLinks.SIGNIN_PAGE);
    }
  };

  const [role, setRole] = React.useState();
  React.useEffect(() => {
    async function foo() {
      const user = JSON.parse(localStorage.getItem('user') || "{}");
      const AccessToken = "Token " + user.accessToken;
      const xyz = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/getCurrentUserRole", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: AccessToken
        },
      })
      if (xyz.ok) {
        const roleee = await xyz.json();
        setRole(roleee.role);
      }
    }
    foo()
  }, [])

  const Tertiary = (
    <>
      <FilledButton variant="filled" sx={{ mt: 1, ml: 1 }} onClick={handleOrganizeClick}>
        {/* <Typography variant="LabelLarge" >
          Organise CodeArenas & Hackathons
        </Typography> */}
        <p className={style.LabelLarge}>
        Organise CodeArenas & Hackathons
      </p>
      </FilledButton>
      {role === "admin" && <FilledButton variant="filled" sx={{ mt: 1, ml: 1 }} onClick={handleAdminClick}>
        {/* <Typography variant="LabelLarge" >
          Admin Dashboard
        </Typography> */}
        <p className={style.LabelLarge}>
        Admin Dashboard
      </p>
      </FilledButton>}
    </>
  );

  return (
    <Banner
      PrimaryHeading={Heading}
      PrimaryDescription={Description}
      SecondaryComponent={
        // <CardContainer sx={{ border: 0 }} elevation={1}>
        //   <ReactPlayer
        //     // url="https://youtu.be/RtsxnRoxKS4"
        //     url="https://www.youtube.com/watch?v=RtsxnRoxKS4"
        //     height="260px"
        //     width="inherit"
        //   />
        // </CardContainer>
        <ReactPlayer />
      }
      TertiaryComponent={Tertiary}
    />
  );
}