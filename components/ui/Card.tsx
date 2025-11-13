import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = '', hoverable = true }: CardProps) {
  return (
    <div className={`card ${hoverable ? '' : 'hover:shadow-md hover:translate-y-0'} ${className}`}>
      {children}
    </div>
  );
}
