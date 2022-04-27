import { useContext, useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';

import { NavContext } from '../../../../pages/_app';

const NavMobile = () => {
    // using State for Mobile menu
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    // Using Context to use navigation data stored globally
    const navigation = useContext(NavContext);

    return (
        <nav className='lg:hidden'>
            <button
                aria-label='mobile menu'
                className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
                onClick={(e) => handleClick()}
            >
                <MenuIcon className='h-8 w-8 mx-auto' />
                <div
                    className={`${
                        open ? 'hidden' : ''
                    } origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 flex flex-col`}
                >
                    {navigation.map(({ href, id, title }) => (
                        <a
                            href={href}
                            key={id}
                            id={'usingContextStoredData' + id}
                            className='mx-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
                        >
                            {title}
                        </a>
                    ))}
                </div>
            </button>
        </nav>
    );
};

export default NavMobile;
