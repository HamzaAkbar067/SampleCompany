import React from 'react';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  className = '',
  ariaLabel,
}) => (
  <button
    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {text}
  </button>
);

export default Button;
