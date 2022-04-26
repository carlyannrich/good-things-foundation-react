import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import SkipToContent from '../components/SkipToContent';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <SkipToContent />
            <Header />
            <Component {...pageProps} />
            <footer>
                <span className='text-sm mx-16'>© Copyright 2022</span>
            </footer>
        </>
    );
}

export default MyApp;
