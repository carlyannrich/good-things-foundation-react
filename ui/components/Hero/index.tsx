import Button from '../Button';

interface Hero {
    heading: string;
    content: string;
    imageDivClassName: string;
}

const Hero = ({ imageDivClassName, heading, content }: Hero) => (
    <section>
        <div className={`${imageDivClassName} relative bg-cover bg-no-repeat`}>
            <div className='absolute mx-16'>
                <h1 className='mt-20 bg-cyan-700 text-white w-fit p-7 text-3xl lg:text-7xl'>
                    {heading}
                </h1>
                <p className='text-cyan-700 bg-white px-6 py-5 text-base lg:text-2xl lg:w-1/2 mt-6'>
                    {content}
                </p>
                <Button
                    buttonText='Get involved now!'
                    className='bg-white border-2 border-white text-rose-700 font-medium hover:text-white hover:bg-rose-700 mt-6'
                />
            </div>
        </div>
    </section>
);

export default Hero;
