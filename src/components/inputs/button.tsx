import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  varient?: 'outline' | string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  varient = '',
  className = '',
  onClick,
}) => {
  const style = varient == 'outline' ? 'lg:py-5 lg:px-16 py-4 px-8 bg-transparent border-2 border-white rounded-full' : 'lg:py-5 lg:px-16 py-4 px-8 bg-yellow-default text-black-default shadow-3xl solid-b rounded-full hover:bg-[#E4AB2C] focus:outline-none';
  return (
    <button
      type={type}
      className={`${style} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
