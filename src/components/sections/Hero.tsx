import React from "react";
import { siteData } from "../../../data/villaData";
import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Slow Zoom */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
                style={{ backgroundImage: `url('${siteData.images.hero}')` }}
            />
            {/* Refined Overlay - Darker for readability */}
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
                <span className="text-white font-sans text-xs sm:text-sm uppercase tracking-[0.4em] mb-8 animate-fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Welcome to Infinite Paradise
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-[1.1]">
                    {siteData.name.split(" ").map((word, i) => (
                        <span key={i} className={i === 1 ? "text-gold italic block sm:inline px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" : ""}>
                            {word}{" "}
                        </span>
                    ))}
                </h1>
                <p className="text-lg md:text-xl text-white mb-12 font-sans tracking-wide font-light max-w-2xl balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-relaxed italic opacity-100">
                    "{siteData.titleSuffix}"
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                    <Button variant="luxury" size="lg" href="#rooms">
                        Reserve Your Experience
                    </Button>
                    <Button variant="outline" size="lg" href="#about" className="border-white text-white hover:bg-white/10">
                        Learn Our Story
                    </Button>
                </div>
            </div>

            {/* Elegant Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 opacity-70">
                <span className="text-white text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
            </div>
        </section>
    );
}
