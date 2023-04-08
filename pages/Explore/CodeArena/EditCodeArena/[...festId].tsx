import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import * as React from "react";
import { DefaultUser } from "@/backend/functions";
import CodeArenaForm from "@/components/event";
import Page from "@/layout/Page";
// import HackathonBanner from "@/components/Banners/HackathonBanner";
// import { v4 as uuidv4 } from 'uuid';
import Head from "next/head";
import { CodeArena } from '@/components/event/types';

interface ArenaData {
  arena: CodeArena;
}



export default function OrganizeFest({ arena }: ArenaData) {
  console.log(arena);

  return (
    <>
      <Head>
        <title>Organize CodeArenas | COMETLABS</title>
      </Head>
      <Page>
        <CodeArenaForm fest {...arena} />
      </Page>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const { festId } = context.query;
  if (!!session && festId) {
    const user: DefaultUser = session.user as DefaultUser;
    const AccessToken = "Token " + user.accessToken;
    console.log(user);
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/fests/viewFestRequest",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: AccessToken
        },
        body: JSON.stringify({
          id: festId[0]
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
    }
    else if (res.status == 400) {
      return {
        redirect: {
          permanent: false,
          destination: "/404",
        }
      }
    }
    const arena = await res.json();
    console.log(arena.id);
    return {
      props: { arena },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: "/signin",
    },
  };
};
