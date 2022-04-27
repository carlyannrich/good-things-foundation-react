import { createContext } from 'react';
import type { AppProps } from 'next/app';

import Header from '../components/Header';
import SkipToContent from '../components/SkipToContent';

import { navigation } from '../content/content';

import '../styles/globals.css';

export interface NavContextType {
    title: string;
    href: string;
    id: string;
}

export const NavContext = createContext<NavContextType[]>([]);

const MyApp = ({ Component, pageProps }: AppProps) => (
    <NavContext.Provider value={navigation}>
        <SkipToContent />
        <Header />

        <Component {...pageProps} />

        <footer>
            <span className='text-sm mx-16'>© Copyright 2022</span>
        </footer>
    </NavContext.Provider>
);

export default MyApp;
