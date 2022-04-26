import type { NextPage } from 'next';
import Head from 'next/head';

import Hero from '../components/Hero';
import SideBySide from '../components/SideBySide';
import HowCanWeHelp from '../components/HowCanWeHelp';
import WhatDoWeDo from '../components/WhatDoWeDo';

import { heroContents, sideBySideContents } from '../assets/content';

const Home: NextPage = () => (
    <div>
        <Head>
            <title>
                Good Things Foundation - Improving lives through digital
            </title>
            <meta
                name='description'
                content='Good Things Foundation - Improving lives through digital'
            />
            <link rel='icon' href='/good-things-foundation-fav-32x32.png' />
        </Head>

        <main id='main'>
            <Hero {...heroContents} />
            <SideBySide {...sideBySideContents} />
            <HowCanWeHelp />
            <WhatDoWeDo />
        </main>
    </div>
);

export default Home;
