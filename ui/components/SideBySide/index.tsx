import Link from 'next/link';
import Button from '../Button';

interface SideBySide {
    heading: string;
    content: string;
    buttonText: string;
    imageDivClassName: string;
}

const SideBySide = ({
    heading,
    content,
    buttonText,
    imageDivClassName
}: SideBySide) => (
    <section className='grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 mt-2 lg:mt-[1px]'>
        {/* Image side on left hand side */}
        <div
            className={`${imageDivClassName} relative bg-no-repeat bg-cover`}
        />

        {/* Content side on right hand side */}
        <div className='col-span-1 bg-teal-700 pb-5 text-white mx-auto'>
            <h2 className='text-white p-1 text-xl lg:text-4xl font-medium mt-8 mx-auto w-11/12'>
                {heading}
            </h2>
            <p className='text-white p-1 text-base lg:text-2xl mt-6 mx-auto w-11/12'>
                {content}
            </p>
            <Link href='/what-we-do'>
                <a>
                    <Button
                        buttonText={buttonText}
                        className='border-2 border-white text-white hover:bg-white hover:text-rose-700 ml-9 mt-4'
                    />
                </a>
            </Link>
        </div>
    </section>
);

export default SideBySide;
