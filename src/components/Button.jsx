import React from 'react';

function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'px-6 py-3 rounded-xl text-lg font-semibold shadow transition-all duration-200';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
  };
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;