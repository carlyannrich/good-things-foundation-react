interface Button {
    className: string;
    buttonText: string;
    buttonAria?: string;
}

const Button = ({ className, buttonText, buttonAria }: Button) => (
    <button
        aria-label={buttonAria}
        className={`rounded-full py-2 px-6 hover:shadow-2xl font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${className}`}
    >
        {buttonText}
    </button>
);

export default Button;
