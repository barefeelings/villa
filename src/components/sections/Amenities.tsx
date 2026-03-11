import React from "react";
import { siteData } from "../../../data/villaData";
import { SectionHeader } from "../ui/SectionHeader";

export function Amenities() {
    return (
        <section id="amenities" className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader
                    title="The Comforts of Home"
                    subtitle="Designed with meticulous attention to detail, our world-class amenities ensure that every moment of your stay is effortlessly luxurious."
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-20 gap-x-8">
                    {siteData.amenities.map((amenity, index) => {
                        const Icon = amenity.icon;
                        return (
                            <div
                                key={index}
                                className="group flex flex-col items-center text-center space-y-6"
                            >
                                <div className="relative">
                                    <div className="w-20 h-20 rounded-full border border-ocean/5 flex items-center justify-center group-hover:border-gold transition-colors duration-500 bg-sand/30">
                                        <Icon className="w-8 h-8 text-ocean group-hover:text-gold transition-colors duration-500" strokeWidth={1} />
                                    </div>
                                    {/* Decorative dot */}
                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white border border-gold rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                                </div>

                                <div className="space-y-1">
                                    <h3 className="font-sans font-semibold text-ocean text-xs uppercase tracking-[0.2em]">
                                        {amenity.label}
                                    </h3>
                                    <p className="text-[10px] text-ocean/40 font-sans tracking-widest uppercase">
                                        Provided In-Suite
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
