import Button from '../Button';

interface Card {
    heading: string;
    content: string;
    buttonText: string;
    buttonAria: string;
}

const Card = ({ heading, content, buttonText, buttonAria }: Card) => (
    <div className='bg-white text-black text-center w-[300px] h-[220px]'>
        <h3 className='text-xl lg:text-2xl font-medium pt-10 mb-3'>
            {heading}
        </h3>
        <p className='text-base'>{content}</p>
        <Button
            className='bg-white border-2 border-black text-rose-700 hover:text-white hover:border-rose-700 hover:bg-rose-700 mt-6'
            buttonText={buttonText}
            buttonAria={buttonAria}
        />
    </div>
);

export default Card;
