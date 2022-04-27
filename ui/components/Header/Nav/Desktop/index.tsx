import { navigation } from '../../../../content/content';

const NavDesktop = () => (
    <nav className='font-medium hidden lg:flex lg:gap-4'>
        {navigation.map(({ href, id, title }) => (
            <a
                href={href}
                key={id}
                id={id}
                className='mx-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
            >
                {title}
            </a>
        ))}
    </nav>
);

export default NavDesktop;
