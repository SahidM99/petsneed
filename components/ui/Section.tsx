import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'accent' | 'white' | 'cream' | 'gradient';
  id?: string;
}

export default function Section({ children, className = '', background = 'default', id }: SectionProps) {
  const bgClasses = {
    default: 'bg-background',
    accent: 'bg-accent',
    white: 'bg-white',
    cream: 'bg-[#fffaf5]',
    gradient: 'bg-gradient-to-r from-primary to-orange-500',
  };

  return (
    <section id={id} className={`section-padding ${bgClasses[background]} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}
