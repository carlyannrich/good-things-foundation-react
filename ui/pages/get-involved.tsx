import type { NextPage } from 'next';
import Head from 'next/head';

const GetInvolved: NextPage = () => (
    <div>
        <Head>
            <title>Good Things Foundation - Get involved</title>
            <meta
                name='description'
                content='Good Things Foundation - Get involved'
            />
            <link rel='icon' href='/good-things-foundation-fav-32x32.png' />
        </Head>

        <main id='main'>
            <h1 className='text-5xl font-medium text-center mt-10 text-rose-700'>
                Get Involved!
            </h1>
            <p className='text-4xl p-12 text-teal-700'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </main>
    </div>
);

export default GetInvolved;
