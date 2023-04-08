import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { DefaultUser } from "@/backend/functions";
import Head from "next/head";
import { CodeArena } from "@/components/event/types";
import dynamic from "next/dynamic";
import FestCardSkeleton from "@/skeletons/FestCard";

const ArenaArea = dynamic(() => import('@/components/event/GridCard'),
  { loading: () => <FestCardSkeleton />, ssr: false, }
);

const CodeArenaBanner = dynamic(() => import('@/components/Banners/CodeArenaBanner'),
  { ssr: false, }
);

const Page = dynamic(() => import('@/layout/Page'),
  { ssr: false, }
);

interface Props {
  arenasOld: CodeArena[];
  arenasNew: CodeArena[];
  arena: CodeArena;
}

export default function Event({ arenasOld, arenasNew, arena }: Props) {
  return (
    <>
      <Head>
        <title>Explore | COMETLABS</title>
      </Head>
      <Page >
        <CodeArenaBanner />
        {arenasNew && arenasNew.length > 0 && <ArenaArea Data={arenasNew} data={arena} Title={"Explore CodeArenas"} />}
        {arenasOld && arenasOld.length > 0 && <ArenaArea Data={arenasOld} data={arena} Title={"Past CodeArenas"} />}
      </Page>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!!session) {
    const user: DefaultUser = session.user as DefaultUser;
    const accessToken = "Token " + user.accessToken;
    const [upcoming, prev] = await Promise.all([
      fetch(
        process.env.NEXT_PUBLIC_API_URL + "/fests/getUpcomingFests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          }
        }
      ),
      fetch(
        process.env.NEXT_PUBLIC_API_URL + "/fests/getPreviousFests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
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
    return {
      props: { arenasOld, arenasNew }
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: "/signin",
    },
  };
};