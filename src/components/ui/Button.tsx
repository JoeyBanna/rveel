import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

interface LinkButtonProps extends Omit<ButtonProps, 'onClick'> {
  to: string;
  external?: boolean;
}

const variantStyles = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-sm',
  secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white shadow-sm',
  outline: 'border border-gray-300 dark:border-dark-600 bg-transparent hover:bg-gray-50 dark:hover:bg-dark-800 text-gray-700 dark:text-gray-200',
  ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-dark-800 text-gray-700 dark:text-gray-200',
};

const sizeStyles = {
  sm: 'text-xs px-2.5 py-1.5 rounded',
  md: 'text-sm px-4 py-2 rounded-md',
  lg: 'text-base px-6 py-3 rounded-md',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center font-medium transition-colors duration-200
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${icon ? 'space-x-2' : ''}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  to,
  external = false,
  ...props
}: LinkButtonProps) {
  const buttonClass = `
    inline-flex items-center justify-center font-medium transition-colors duration-200
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${icon ? 'space-x-2' : ''}
    ${className}
  `;

  if (external) {
    return (
      <a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={buttonClass}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <Link to={to} className={buttonClass} {...props}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </Link>
  );
}