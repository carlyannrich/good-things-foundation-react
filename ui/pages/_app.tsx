import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <footer>
                <span className='text-sm mx-16'>© Copyright 2022</span>
            </footer>
        </>
    );
}

export default MyApp;
