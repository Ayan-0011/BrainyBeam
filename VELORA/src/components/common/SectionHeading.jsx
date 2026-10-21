import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  highlightWord,
  description,
  align = 'center', // 'left' | 'center' | 'right'
  variant = 'dark', // 'dark' (on cream) | 'light' (on nearblack)
  className = '',
  titleClassName = '',
}) {
  const isLight = variant === 'light';

  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  // Render title with optional highlightWord colored orange
  const renderTitle = () => {
    if (!highlightWord || typeof title !== 'string') return title;
    const parts = title.split(new RegExp(`(${highlightWord})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={index} className="text-orange relative inline-block">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignStyles[align] || alignStyles.center} ${className}`}>
      {eyebrow && (
        <div className="mb-4">
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-[0.14em] uppercase border ${
            isLight 
              ? 'bg-orange/15 text-orange border-orange/30' 
              : 'bg-sand/60 text-nearblack border-sand-border'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
            {eyebrow}
          </span>
        </div>
      )}

      {title && (
        <h2 className={`section-headline font-heading font-bold ${
          isLight ? 'text-cream' : 'text-nearblack'
        } ${titleClassName}`}>
          {renderTitle()}
        </h2>
      )}

      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          isLight ? 'text-cream/70' : 'text-muted'
        } max-w-2xl`}>
          {description}
        </p>
      )}
    </div>
  );
}
