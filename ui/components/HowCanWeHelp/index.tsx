import Button from '../Button';

const HowCanWeHelp = () => (
    <section className='bg-slate-200 py-16'>
        <div className='mx-16'>
            <h2 className='text-3xl lg:text-4xl font-medium'>
                How can we help you?
            </h2>
            <p className='text-base lg:text-2xl mt-6'>
                Let us know who you are and what you are looking for, and
                we&apos;ll help get you to the right place.
            </p>
        </div>

        <div className='mx-16 bg-white px-4 mt-8 py-6 lg:flex items-center justify-center'>
            <div className='text-xl lg:text-3xl text-center'>
                <label htmlFor='i-am'>I am</label>
                <select
                    className='font-medium text-cyan-700 underline-offset-4 underline mx-3'
                    id='i-am'
                >
                    <option label='an Individual' />
                </select>
                <label htmlFor='i-want'>and I want</label>
                <select
                    className='font-medium text-cyan-700 underline-offset-4 underline mx-3'
                    id='i-want'
                >
                    <option label='to Learn' />
                </select>
            </div>

            <Button
                className='bg-rose-700 border-2 border-white text-white hover:bg-white hover:text-black hover:border-rose-700 mt-2'
                buttonText='Start now'
            />
        </div>
    </section>
);

export default HowCanWeHelp;
