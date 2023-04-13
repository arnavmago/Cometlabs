import * as React from 'react';
import { GetStaticProps } from "next";
import dynamic from 'next/dynamic';
import FestCardSkeleton, { NewsSkeleton, FourSectionsSkeleton, News } from "@/skeletons/FestCard";
import BannerSkeleton from "@/skeletons/Banner";
import { CodeArena } from "@/components/event/types";
import { DefaultUser } from "@/backend/functions";
import { Container, ScopedCssBaseline } from '@mui/material';
// import { ScopedCssBaseline } from '@mui/material';
import { ThemeProvider } from "@material-tailwind/react";
import { darktheme } from '@/styles/theme';
import { FooterSkeleton } from '@/skeletons/Header';

const ArenaArea = dynamic(() => import('@/components/event/CarouselCard'),
  { loading: () => <FestCardSkeleton />, ssr: false });

const Footer = dynamic(() => import('@/layout/Footer'),
  { loading: () => <FooterSkeleton />, ssr: false });

// const Page = dynamic(() => import('@/layout/Page'),
//   { ssr: false });

const Header = dynamic(() => import('@/layout/Header'),
  { ssr: false });

const NewsArea = dynamic(() => import('@/components/MainArea/NewsArea'),
  { loading: () => <News />, ssr: false }
);

const FourSections = dynamic(() => import('@/components/MainArea/FourSections'),
  { loading: () => <FourSectionsSkeleton />, ssr: false }
);

const LandingBanner = dynamic(() => import('@/components/Banners/LandingBanner'),
  { loading: () => <BannerSkeleton />, ssr: false }
);

const NewsCarousel = dynamic(() => import('@/components/MainArea/NewsCarousel'),
  { loading: () => <NewsSkeleton />, ssr: false }
);

interface Props {
  arenasOld: CodeArena[];
  arenasNew: CodeArena[];
  arena: CodeArena;
}


// main landing page of website , page component (being imported) contains header and footer components
export default function LandingPage({ arenasOld, arenasNew, arena }: Props) {

  const [user, setUser] = React.useState<DefaultUser>({} as DefaultUser);


  React.useEffect(() => {
    const usr = JSON.parse(localStorage.getItem('user')!)
    setUser(usr);
  }, [])

  return (
    <>
      <Header user={user} />
      <LandingBanner />
      <Container>
        {arenasNew && arenasNew.length > 0 && <ArenaArea Data={arenasNew} data={arena} Title={"Explore CodeArenas"} />}
        {arenasOld && arenasOld.length > 0 && <ArenaArea Data={arenasOld} data={arena} Title={"Past CodeArenas"} />}
        <div id="news">
          <NewsCarousel />
          <NewsArea />
        </div>
      </Container>
      <FourSections />
      <ThemeProvider value={darktheme}>
        <ScopedCssBaseline>
          <Footer user={user} />
        </ScopedCssBaseline>
      </ThemeProvider>
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const [upcoming, prev] = await Promise.all([
    fetch(
      process.env.NEXT_PUBLIC_API_URL + "/fest/getUpcomingFests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        }
      }
    ),
    fetch(
      process.env.NEXT_PUBLIC_API_URL + "/fest/getPreviousFests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        }
      }
    ),
  ])
  if (upcoming.status == 401) {
    return {
      redirect: {
        permanent: false,
        destination: "/logout",
      }
    }
  }
  const arenasOld = await prev.json();
  const arenasNew = await upcoming.json();
  // console.log(arenasOld, arenasNew);
  // const session = await getSession(context);
  // if (!!session) {
  //   const user: DefaultUser = session.user as DefaultUser;
  //   return {arenasOld, arenasNew, user};
  // }
  return {
    props: { arenasOld, arenasNew },
    revalidate: 600
  };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);

//   if (!!session) {
//       const user: DefaultUser = session.user as DefaultUser;
//       try {
//           const accessToken = "Token " + user.accessToken;
//           let res = await fetch(
//               process.env.NEXT_PUBLIC_API_URL + "/user/getProfile",
//               {
//                   method: "GET",
//                   headers: {
//                       "Content-Type": "application/json;charset=utf-8",
//                       Authorization: accessToken,
//                   },
//               }
//           );
//           if (res.ok) {
//               const result = await res.json();
//               if (!result.error) {
//                   delete result.email;
//                   return {
//                       props: { user, result },
//                   };
//               } else {
//                   console.log(result.error);
//               }
//           } else if (res.status == 401) {
//               return {
//                   redirect: {
//                       permanent: false,
//                       destination: "/logout",
//                   }
//               }
//           } else {
//               throw new Error("ERROR");
//           }
//       } catch (error) {
//           console.log(error);
//       }

//   }

//   return {
//       redirect: {
//           permanent: false,
//           destination: "/signin",
//       },
//   };
// };
