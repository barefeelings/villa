import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "luxury";
    size?: "sm" | "md" | "lg";
    href?: string;
    className?: string;
    children: React.ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    href,
    className = "",
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean/20 disabled:opacity-50 disabled:pointer-events-none rounded-full tracking-wide uppercase text-xs sm:text-sm";

    const variants = {
        primary: "bg-ocean text-white hover:bg-ocean/90 shadow-sm",
        secondary: "bg-tropical text-white hover:bg-tropical/90 shadow-sm",
        outline: "border border-ocean/20 bg-transparent hover:bg-ocean hover:text-white text-ocean",
        ghost: "bg-transparent hover:bg-ocean/5 text-ocean",
        luxury: "bg-gradient-to-r from-[#1B4965] to-[#2D5A27] text-white hover:shadow-[0_10px_40px_-10px_rgba(197,160,89,0.4)] hover:scale-[1.05] transition-all duration-300 border border-white/10 hover:border-gold/30",
    };

    const sizes = {
        sm: "h-9 px-6",
        md: "h-12 px-8",
        lg: "h-14 px-10 text-base",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
