import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import * as React from "react";
import { DefaultUser } from "@/backend/functions";
import Page from "@/layout/Page";
// import HackathonBanner from "@/components/Banners/HackathonBanner";
// import { v4 as uuidv4 } from 'uuid';
import Head from "next/head";
import { CodeArena } from '@/components/event/types';
import dynamic from "next/dynamic";

interface ArenaData {
  arena: CodeArena;
  isregistered?: isregistered;
}

interface isregistered {
  success?: string;
}

const CodeArenaForm = dynamic(() => import("@/components/event"), {
  ssr: false,
});


export default function OrganizeFest({ isregistered, arena }: ArenaData) {
  const title = arena.details.title;

  return (
    <>
      <Head>
        <title>{title} | COMETLABS</title>
      </Head>
      <Page>
        <CodeArenaForm readOnly fest={true} {...arena} isregistered={isregistered} />
      </Page>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const { hackId } = context.query;
  if (!!session) {
    const user: DefaultUser = session.user as DefaultUser;
    const AccessToken = "Token " + user.accessToken;
    const [res, reg] = await Promise.all([
      fetch(
        process.env.NEXT_PUBLIC_API_URL + "/fests/viewFest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            authorization: AccessToken
          },
          body: JSON.stringify({
            id: hackId
          }),
        }
      ),
      fetch(
        process.env.NEXT_PUBLIC_API_URL + "/organize/isRegistered",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: AccessToken,
          },
          body: JSON.stringify({ eventId: hackId })
        }
      )
    ])
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
    const isregistered = await reg.json()
    return {
      props: { arena, isregistered },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: "/signin",
    },
  };
};
