import { MenuIcon } from '@heroicons/react/outline';

const NavMobile = () => (
    <nav className='lg:hidden'>
        <button
            aria-label='mobile menu'
            className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
        >
            <MenuIcon className='h-8 w-8 mr-1' />
        </button>
    </nav>
);

export default NavMobile;
