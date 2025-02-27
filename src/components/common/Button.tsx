interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isFull?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  theme?: 'default' | 'main';
  className?: string;
}

const Button = ({
  children,
  onClick = () => {},
  isFull = false,
  disabled = false,
  type = 'button',
  theme = 'main',
  className = '',
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${isFull ? 'w-full' : 'w-fit'} ${
        disabled
          ? 'bg-gray-400'
          : theme === 'main'
          ? 'bg-main hover:bg-main/90'
          : 'bg-gray-500 hover:bg-gray-500/90'
      } px-4 py-2 text-white rounded-lg  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
