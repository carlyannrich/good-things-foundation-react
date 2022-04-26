import Image from 'next/image';
import Link from 'next/link';
import { SearchIcon } from '@heroicons/react/outline';
import NavDesktop from './Nav/Desktop';
import NavMobile from './Nav/Mobile';

const Header = () => {
    return (
        <header className='border-b-2 pb-4'>
            <div className='grid grid-cols-4 lg:grid-cols-10 lg:mx-16 text-sm lg:text-lg'>
                <button
                    aria-label='search'
                    className='col-span-1 flex border-x-2 border-t-2 py-2 px-4 w-20 lg:w-[150px] justify-center items-center hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
                >
                    <SearchIcon className='h-8 w-8 mr-1' />
                    <span className='hidden lg:visible'>Search</span>
                </button>
                <button className=' col-start-3 lg:col-start-9 col-span-1 border-x-2 border-t-2 border-b-4 border-b-cyan-700 p-2 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'>
                    Learn
                </button>
                <button className='col-start-4 lg:col-start-10 col-span-1 bg-rose-700 text-white border-r-2 border-t-2 p-2 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'>
                    Donate
                </button>
            </div>
            <div className='border-t-2 mb-4' />
            <div className='flex justify-between items-center mx-16 gap-20 lg:gap-0'>
                <div className='h-[60px] w-[250px]'>
                    <Link href='/'>
                        <a>
                            <Image
                                src='/good-things-foundation-logo.png'
                                width='250px'
                                height='60px'
                                alt='Good Things Foundation Logo'
                            />
                        </a>
                    </Link>
                </div>
                <NavDesktop />
                <NavMobile />
            </div>
        </header>
    );
};

export default Header;
