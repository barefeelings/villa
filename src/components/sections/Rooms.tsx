import React from "react";
import { siteData } from "../../../data/villaData";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import Image from "next/image";

export function Rooms() {
    return (
        <section id="rooms" className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader
                    title="Curated Sanctuaries"
                    subtitle="Escape to our selection of bespoke accommodations, each designed to harmonize with nature while providing the pinnacle of comfort."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                    {siteData.rooms.map((room) => (
                        <div key={room.id} className="luxury-card group bg-white">
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={room.image}
                                    alt={room.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Floating Price Tag */}
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="bg-white px-4 py-2 shadow-lg rounded-sm">
                                        <span className="text-ocean font-serif text-lg font-semibold">{room.price}</span>
                                        <span className="text-ocean/40 text-[10px] uppercase tracking-widest ml-1">/ Night</span>
                                    </div>
                                </div>

                                {/* Hover Details Reveal Overlay */}
                                <div className="absolute inset-0 bg-ocean/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center p-8">
                                    <div className="text-center text-white space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-sm font-light italic">{room.description}</p>
                                        <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-ocean">
                                            Explore Suite
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-serif text-ocean group-hover:text-gold transition-colors duration-300">
                                        {room.title}
                                    </h3>
                                    <div className="h-0.5 w-12 bg-gold/20" />
                                </div>

                                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                                    {room.features.slice(0, 3).map((feature, i) => (
                                        <li key={i} className="flex items-center text-[10px] uppercase tracking-widest font-sans text-ocean/50">
                                            <span className="w-1 h-1 bg-gold mr-2 rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="text-gold font-sans text-[11px] uppercase tracking-[0.2em] font-semibold border-b border-gold/30 hover:border-gold pb-1 transition-all inline-block">
                                    View Full Gallery
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
