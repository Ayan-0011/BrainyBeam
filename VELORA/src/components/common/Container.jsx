import React from 'react';

export default function Container({
  children,
  className = '',
  size = 'default', // 'default' (1320px) | 'narrow' (980px) | 'full'
  as: Component = 'div',
  ...props
}) {
  const sizeStyles = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size] || sizeStyles.default} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
