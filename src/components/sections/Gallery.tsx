"use client";

import React, { useState, useEffect } from "react";
import { siteData } from "../../../data/villaData";
import { SectionHeader } from "../ui/SectionHeader";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setActiveIndex(index);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setActiveIndex(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (activeIndex !== null) {
            setActiveIndex((activeIndex + 1) % siteData.images.gallery.length);
        }
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (activeIndex !== null) {
            setActiveIndex((activeIndex - 1 + siteData.images.gallery.length) % siteData.images.gallery.length);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (activeIndex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex]);

    return (
        <section id="gallery" className="py-24 md:py-32 bg-sand">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader
                    title="Eternal Landscapes"
                    subtitle="Every corner of our sanctuary tells a story of elegance and tropical charm. Browse through our visual collection."
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[250px] md:auto-rows-[350px]">
                    {siteData.images.gallery.map((imgUrl, index) => {
                        // Create a pseudo-random masonry effect
                        const isWide = index === 0 || index === 5;
                        const isTall = index === 1 || index === 4;

                        return (
                            <div
                                key={index}
                                onClick={() => openLightbox(index)}
                                className={`group relative overflow-hidden rounded-sm bg-ocean/10 cursor-pointer ${isWide ? "md:col-span-2" : ""
                                    } ${isTall ? "md:row-span-2" : ""
                                    } shadow-soft hover:shadow-luxury transition-all duration-700`}
                            >
                                <Image
                                    src={imgUrl}
                                    alt={`Vignette ${index + 1}`}
                                    fill
                                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-1000"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />

                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 bg-ocean/0 group-hover:bg-ocean/20 transition-colors duration-500" />

                                {/* View Indicator */}
                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                                        <svg className="w-5 h-5 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-20">
                    <button className="group inline-flex flex-col items-center gap-2">
                        <span className="text-ocean font-sans text-xs uppercase tracking-[0.4em] mb-2">View Full Collection</span>
                        <div className="w-8 h-8 rounded-full border border-ocean/20 flex items-center justify-center group-hover:bg-ocean group-hover:border-ocean transition-all duration-300">
                            <svg className="w-4 h-4 text-ocean group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

            {/* Lightbox Modal */}
            {activeIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-500 animate-fade-in"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-60"
                        onClick={closeLightbox}
                    >
                        <X size={32} strokeWidth={1} />
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-4 md:left-8 text-white/30 hover:text-white transition-all p-4 z-60"
                        onClick={prevImage}
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>

                    <button
                        className="absolute right-4 md:right-8 text-white/30 hover:text-white transition-all p-4 z-60"
                        onClick={nextImage}
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh] animate-scale-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={siteData.images.gallery[activeIndex]}
                            alt={`Gallery image ${activeIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                        />
                        {/* Counter */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/40 font-sans text-xs tracking-[0.3em] uppercase">
                            {activeIndex + 1} / {siteData.images.gallery.length}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
