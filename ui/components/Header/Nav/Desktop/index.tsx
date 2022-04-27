import { navigation } from '../../../../content/content';

const NavDesktop = () => (
    <nav className='font-medium hidden lg:flex lg:gap-4'>
        {navigation.map((navigationName) => (
            <a
                href={navigationName.href}
                key={navigationName.id}
                id={navigationName.id}
                className='mx-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
            >
                {navigationName.title}
            </a>
        ))}
    </nav>
);

export default NavDesktop;
