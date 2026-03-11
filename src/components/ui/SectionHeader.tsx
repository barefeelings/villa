import React from "react";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

export function SectionHeader({
    title,
    subtitle,
    centered = true,
    className = "",
}: SectionHeaderProps) {
    return (
        <div className={`mb-16 md:mb-24 ${centered ? "text-center" : ""} ${className}`}>
            <span className="text-gold font-sans text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">
                Exclusive Experience
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ocean mb-6 tracking-tight leading-tight max-w-3xl mx-auto">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-ocean/70 max-w-2xl mx-auto font-sans leading-relaxed font-light italic">
                    {subtitle}
                </p>
            )}
            <div className={`h-px w-24 bg-gold/30 mt-10 ${centered ? "mx-auto" : ""}`} />
        </div>
    );
}
