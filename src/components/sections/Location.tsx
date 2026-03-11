import React from "react";
import { siteData } from "../../../data/villaData";
import { SectionHeader } from "../ui/SectionHeader";
import { MapPin, Plane, Car } from "lucide-react";

export function Location() {
    return (
        <section id="location" className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader
                    title="The Sanctuary Gaze"
                    subtitle="Tucked away in a pristine pocket of Sri Lanka, our resort offers a rare combination of absolute tranquility and convenient access."
                />

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Information */}
                    <div className="w-full lg:w-2/5 space-y-12">
                        <div>
                            <span className="text-gold font-sans text-xs uppercase tracking-[0.3em] font-medium mb-4 block">Navigation</span>
                            <h3 className="text-3xl md:text-4xl font-serif text-ocean tracking-tight">Your Path to Serenity</h3>
                        </div>

                        <div className="space-y-10">
                            <div className="flex items-start group">
                                <div className="bg-sand p-4 rounded-sm mr-6 text-gold group-hover:bg-ocean group-hover:text-white transition-colors duration-500">
                                    <MapPin size={22} strokeWidth={1} />
                                </div>
                                <div>
                                    <h4 className="font-sans font-semibold text-ocean/80 text-xs uppercase tracking-widest mb-2">Location</h4>
                                    <p className="text-ocean/60 font-sans text-sm leading-relaxed max-w-xs">
                                        {siteData.contact.address}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="bg-sand p-4 rounded-sm mr-6 text-gold group-hover:bg-ocean group-hover:text-white transition-colors duration-500">
                                    <Plane size={22} strokeWidth={1} />
                                </div>
                                <div>
                                    <h4 className="font-sans font-semibold text-ocean/80 text-xs uppercase tracking-widest mb-2">Arrival</h4>
                                    <p className="text-ocean/60 font-sans text-sm leading-relaxed max-w-xs">
                                        Bandaranaike Intl Airport (2.5hr). Private chauffeur service available upon request.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="text-ocean font-sans text-[11px] uppercase tracking-[0.3em] font-bold border-b border-ocean/20 hover:border-gold transition-all pb-2">
                                Get Directions
                            </button>
                        </div>
                    </div>

                    {/* Map Input */}
                    <div className="w-full lg:w-3/5 h-[450px] md:h-[550px] relative">
                        <div className="absolute inset-0 rounded-sm overflow-hidden shadow-luxury border-8 border-sand">
                            <iframe
                                src={siteData.contact.mapIframeUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-1000"
                                title="Resort Location Map"
                            ></iframe>
                        </div>
                        {/* Minimal overlay on map for aesthetic consistency */}
                        <div className="absolute inset-0 pointer-events-none border border-gold/5" />
                    </div>

                </div>
            </div>
        </section>
    );
}
