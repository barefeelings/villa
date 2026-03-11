import React from "react";
import { siteData } from "../../../data/villaData";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#1B4965] text-white py-16 md:py-24 border-t border-[#C5A059]/10 relative z-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-20">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-2 space-y-6 md:space-y-8">
                        <div className="flex flex-col items-start">
                            <span className="text-2xl font-serif font-bold tracking-[0.1em] text-white">SERENITY</span>
                            <span className="text-[8px] uppercase tracking-[0.5em] text-gold -mt-1">VILLA & CABANAS</span>
                        </div>
                        <p className="font-sans leading-relaxed text-sm text-white/50 max-w-sm font-light italic">
                            "{siteData.description}"
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-white/60 hover:text-[#C5A059] transition-colors duration-300"><Facebook size={18} /></a>
                            <a href="#" className="text-white/60 hover:text-[#C5A059] transition-colors duration-300"><Instagram size={18} /></a>
                            <a href="#" className="text-white/60 hover:text-[#C5A059] transition-colors duration-300"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6 md:space-y-8">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-white/40 font-sans">Discover</h4>
                        <ul className="space-y-3 md:space-y-4 font-sans text-xs tracking-widest uppercase font-medium">
                            <li><a href="#about" className="hover:text-gold transition-colors duration-300">The Story</a></li>
                            <li><a href="#rooms" className="hover:text-gold transition-colors duration-300">Accommodations</a></li>
                            <li><a href="#gallery" className="hover:text-gold transition-colors duration-300">Visual Tour</a></li>
                            <li><a href="#location" className="hover:text-gold transition-colors duration-300">Arrival</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6 md:space-y-8">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-white/40 font-sans">Reach Us</h4>
                        <ul className="space-y-3 md:space-y-4 font-sans text-sm font-light">
                            <li><a href={`tel:${siteData.contact.phone}`} className="hover:text-gold transition-colors block break-words">{siteData.contact.phone}</a></li>
                            <li><a href={`mailto:${siteData.contact.email}`} className="hover:text-gold transition-colors block break-words">{siteData.contact.email}</a></li>
                            <li className="text-white/30 text-xs italic break-words">{siteData.contact.address}</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-sans text-white/20 text-center md:text-left">
                    <p>&copy; {year} {siteData.name}. Created for Infinite Peace.</p>
                    <div className="flex space-x-6 md:space-x-8">
                        <a href="#" className="hover:text-gold">Privacy Policy</a>
                        <a href="#" className="hover:text-gold">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
