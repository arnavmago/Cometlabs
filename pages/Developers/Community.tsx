import React from 'react';
import Page from "@/layout/Page";
import CommunityBanner from '@/components/Banners/CommunityBanner';
import Head from "next/head";
import StoryArea from '@/components/MainArea/StoryArea';
// import StoryArea from '@/components/MainArea/StoryArea';


const Community = () => {
    return (
        <>
            <Head>
                <title>Community | COMETLABS</title>
            </Head>
            <Page>
                <CommunityBanner />
                <StoryArea />
            </Page>
        </>
    );
}

export default Community
