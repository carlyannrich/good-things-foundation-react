import Card from '../Card';

import { cardContents } from '../../assets/content';
import Button from '../Button';

const WhatDoWeDo = () => (
    <section className='bg-cyan-700 text-white'>
        <div className='mx-16'>
            <h2 className='text-3xl lg:text-4xl font-medium pt-16 mb-6'>
                What do we do?
            </h2>
            <p className='mb-8'>
                You might not have heard of us, but we&apos;re the people behind
                the following impactful programmes.
            </p>
        </div>
        <div className='lg:mx-16 gap-3 lg:gap-6 grid grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 justify-items-center'>
            {cardContents.map((cardContent) => (
                <Card key={cardContent.heading} {...cardContent} />
            ))}
        </div>
        <div className='text-center mt-10 pb-10'>
            <Button
                className='bg-white border-2 border-white text-rose-700 hover:text-white hover:bg-rose-700 mt-6'
                buttonText='More about what we do'
            />
        </div>
    </section>
);

export default WhatDoWeDo;
