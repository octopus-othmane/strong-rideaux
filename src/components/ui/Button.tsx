import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', href, className, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
    
    const variants = {
      primary: "bg-[#111111] text-[#F3F1EC] hover:bg-[#8A4A32] active:bg-[#8A4A32] px-8 py-4 text-sm tracking-wide uppercase",
      secondary: "bg-[#F3F1EC] text-[#111111] hover:bg-[#D0D0CC] active:bg-[#D0D0CC] px-8 py-4 text-sm tracking-wide uppercase",
      outline: "border border-[#111111] text-[#111111] hover:bg-[#111111] active:bg-[#111111] hover:text-[#F3F1EC] active:text-[#F3F1EC] active:bg-[#111111] active:text-[#F3F1EC] px-8 py-4 text-sm tracking-wide uppercase",
      ghost: "text-[#111111] hover:text-[#8A4A32] active:text-[#8A4A32] px-4 py-2 text-sm uppercase tracking-wider"
    };

    const classes = cn(baseStyles, variants[variant], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
