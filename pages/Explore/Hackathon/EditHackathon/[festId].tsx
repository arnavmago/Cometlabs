import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import * as React from "react";
import { DefaultUser } from "@/backend/functions";
import dynamic from "next/dynamic";
import Page from "@/layout/Page";
// import HackathonBanner from "@/components/Banners/HackathonBanner";
// import { v4 as uuidv4 } from 'uuid';
import Head from "next/head";
import { CodeArena } from '@/components/event/types';

interface ArenaData {
  arena: CodeArena;
}
const CodeArenaForm = dynamic(() => import("@/components/event"), {
  ssr: false,
});


export default function OrganizeFest({ arena }: ArenaData) {
  console.log(arena);

  return (
    <>
      <Head>
        <title>Organize CodeArenas | COMETLABS</title>
      </Head>
      <Page>
        <CodeArenaForm readOnly {...arena} />
      </Page>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const { festId } = context.query;
  if (!!session) {
    const user: DefaultUser = session.user as DefaultUser;
    const AccessToken = "Token " + user.accessToken;
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/fests/viewFestRequest",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: AccessToken
        },
        body: JSON.stringify({
          id: festId
        }),
      }
    );
    if (res.status == 401) {
      return {
        redirect: {
          permanent: false,
          destination: "/logout",
        }
      }
    } else if (res.status == 400) {
      return {
        redirect: {
          permanent: false,
          destination: "/404",
        }
      }
    }
    const arena = await res.json();
    console.log(arena);
    // if (arena.length > 0) {
    return {
      props: { arena },
    };
    // } else {
    //   return {
    //     redirect: {
    //       permanent: false,
    //       destination: "/404",
    //     }
    //   }
    // }
  }

  return {
    redirect: {
      permanent: false,
      destination: "/signin",
    },
  };
};
