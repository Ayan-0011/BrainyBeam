import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Loader2 } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon = 'arrow', // 'arrow' | 'upRight' | 'none' | ReactNode
  loading = false,
  disabled = false,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm sm:text-base px-6 py-3 gap-2.5',
    lg: 'text-base sm:text-lg px-8 py-4 gap-3',
  };

  const variantStyles = {
    primary: 'bg-orange text-white hover:bg-orange-hover shadow-sm hover:shadow-[0_8px_24px_rgba(255,116,23,0.35)] hover:-translate-y-0.5',
    secondary: 'bg-nearblack text-cream hover:bg-nearblack-surface hover:text-white shadow-sm hover:-translate-y-0.5',
    outline: 'border-2 border-nearblack text-nearblack hover:bg-nearblack hover:text-cream',
    'outline-light': 'border-2 border-sand/40 text-cream hover:border-orange hover:bg-orange hover:text-white',
    sand: 'bg-sand hover:bg-sand-light text-nearblack border border-sand-border/70 hover:-translate-y-0.5',
    text: 'text-nearblack hover:text-orange px-0 py-1 rounded-none hover:underline underline-offset-4',
  };

  const chosenSize = sizeStyles[size] || sizeStyles.md;
  const chosenVariant = variantStyles[variant] || variantStyles.primary;
  const combinedClasses = `${baseStyles} ${chosenSize} ${chosenVariant} ${className}`;

  const renderIcon = () => {
    if (loading) return <Loader2 className="w-4 h-4 animate-spin" />;
    if (icon === 'arrow') return <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />;
    if (icon === 'upRight') return <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />;
    if (React.isValidElement(icon)) return icon;
    return null;
  };

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} {...props}>
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${combinedClasses}`} {...props}>
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`group ${combinedClasses}`}
      {...props}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
