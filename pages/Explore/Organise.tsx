// import HackathonBanner from "@/components/Banners/HackathonBanner";
import Page from "@/layout/Page";
import { GetServerSideProps } from "next";
import { DefaultUser } from "@/backend/functions";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { CodeArena } from "@/components/event/types";
import dynamic from 'next/dynamic';
// import FestCardSkeleton from "@/skeletons/FestCard";

interface CodeArenaProps {
  arenasApproved: CodeArena[];
  arenasNotApproved: CodeArena[];
  data: CodeArena;
}

const ArenaArea = dynamic(() => import("@/components/event/GridCard"), {
  ssr: false,
});

const Arenas = ({ arenasApproved, arenasNotApproved, data }: CodeArenaProps) => {
  console.log(arenasApproved.length)
  return (
    <>
      <Head>
        <title>Organize | COMETLABS</title>
      </Head>
      <Page>
        {/* <HackathonBanner /> */}
        {/* List of already created fests */}
        {/* passing fest-card details and returning festcard */}
        {arenasApproved && (<ArenaArea data={data} Data={arenasApproved} Title={"CodeArenas, Hackathons or Labs created by you (Public/Approved)"} />)}
        {arenasNotApproved && (<ArenaArea data={data} createNew Data={arenasNotApproved} Title={"CodeArenas, Hackathons or Labs created by you (In Review)"} />)}
      </Page>
    </>
  )
}

export default Arenas;


export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!!session) {
    const user: DefaultUser = session.user as DefaultUser;
    const accessToken = "Token " + user.accessToken;
    const [festNotApproved, festApproved] = await Promise.all([
      fetch(
        process.env.NEXT_PUBLIC_API_URL + "/fests/festRequestsByYou",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          }
        }
      ),
      fetch(
        process.env.NEXT_PUBLIC_API_URL + "/fests/festsByYou",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          }
        }
      ),
    ])
    if (festNotApproved.status == 401) {
      return {
        redirect: {
          permanent: false,
          destination: "/logout",
        }
      }
    }
    const arenasApproved = await festApproved.json();
    const arenasNotApproved = await festNotApproved.json();
    return {
      props: { arenasApproved, arenasNotApproved }
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: "/signin",
    },
  };
};

