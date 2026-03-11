import React from "react";
import { siteData } from "../../../data/villaData";
import { SectionHeader } from "../ui/SectionHeader";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-sand relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Image Composition */}
                    <div className="lg:col-span-7 relative h-[500px] md:h-[650px]">
                        <div className="absolute top-0 left-0 w-4/5 h-[450px] md:h-[550px] rounded-sm overflow-hidden shadow-2xl z-10">
                            <Image
                                src={siteData.images.about}
                                alt="Luxury Resort Scene"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                                sizes="(max-width: 1024px) 80vw, 50vw"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-4 w-1/2 h-[250px] md:h-[350px] rounded-sm overflow-hidden shadow-luxury z-20 border-[12px] border-sand">
                            <Image
                                src={siteData.images.hero}
                                alt="Tropical Villa View"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                                sizes="(max-width: 1024px) 50vw, 25vw"
                            />
                        </div>

                        {/* Minimal Decorative Abstract */}
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-64 border border-gold/10 rounded-full" />
                    </div>

                    {/* Text Content */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="space-y-4">
                            <span className="text-gold font-sans text-xs uppercase tracking-[0.3em] font-medium block">
                                The Heritage
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ocean tracking-tight leading-tight">
                                Authentic <br />
                                <span className="text-tropical italic">Tropical Grace</span>
                            </h2>
                        </div>

                        <p className="text-lg text-ocean/80 font-sans leading-relaxed text-justify font-light">
                            {siteData.aboutText}
                        </p>

                        <div className="pt-6 grid grid-cols-2 gap-8 border-t border-ocean/5">
                            <div>
                                <h4 className="text-gold font-serif text-2xl mb-1">08</h4>
                                <p className="text-ocean/60 text-xs uppercase tracking-widest font-sans">Boutique Rooms</p>
                            </div>
                            <div>
                                <h4 className="text-gold font-serif text-2xl mb-1">24/7</h4>
                                <p className="text-ocean/60 text-xs uppercase tracking-widest font-sans">Guest Concierge</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a
                                href="#rooms"
                                className="group inline-flex items-center gap-4 text-ocean font-medium uppercase tracking-[0.2em] text-sm"
                            >
                                Find your sanctuary
                                <div className="w-12 h-px bg-gold group-hover:w-20 transition-all duration-300" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
