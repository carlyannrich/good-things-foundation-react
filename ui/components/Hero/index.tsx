import Button from '../Button';

interface Hero {
    heading: string;
    content: string;
    imageSectionClassName: string;
}

const Hero = ({ imageSectionClassName, heading, content }: Hero) => (
    <section
        className={`bg-cover bg-no-repeat relative ${imageSectionClassName}`}
    >
        <div className='absolute mx-16'>
            <h2 className='mt-20 bg-cyan-700 text-white w-fit p-7 text-3xl lg:text-7xl'>
                {heading}
            </h2>
            <p className='text-cyan-700 bg-white px-6 py-5 text-base lg:text-2xl lg:w-1/2 mt-6'>
                {content}
            </p>
            <Button
                buttonText='Get involved now!'
                className='bg-white border-2 border-white text-rose-700 font-medium hover:text-white hover:bg-rose-700 mt-6'
            />
        </div>
    </section>
);

export default Hero;
