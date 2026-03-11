"use client";

import React, { useState } from "react";
import { siteData } from "../../../data/villaData";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { Phone, Mail, Clock } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Inquiry received. A guest concierge will contact you shortly.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-sand relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <SectionHeader
                    title="Inquire & Connect"
                    subtitle="Our dedicated concierge team is poised to tailor your perfect tropical escape. Begin your journey with us today."
                />

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-6xl mx-auto">

                    {/* Contact Details */}
                    <div className="w-full lg:w-1/2 space-y-12 md:space-y-16">
                        <div className="space-y-6">
                            <span className="text-gold font-sans text-xs uppercase tracking-[0.3em] font-medium block">Guest Concierge</span>
                            <h3 className="text-3xl md:text-5xl font-serif text-ocean tracking-tight leading-tight">We are here to assist your stay.</h3>
                            <p className="text-ocean/70 font-sans leading-relaxed max-w-md font-light italic">
                                From private dining arrangements to airport transfers, no detail is too small for our attention.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                            <div className="group cursor-pointer">
                                <div className="w-px h-10 bg-gold/30 mb-4 transition-all duration-500 group-hover:h-14 group-hover:bg-gold" />
                                <p className="text-[10px] text-ocean/40 uppercase tracking-[0.3em] font-sans mb-1">Call directly</p>
                                <a href={`tel:${siteData.contact.phone.replace(/\\s/g, "")}`} className="text-ocean text-base md:text-lg font-serif group-hover:text-gold transition-colors break-words">
                                    {siteData.contact.phone}
                                </a>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="w-px h-10 bg-gold/30 mb-4 transition-all duration-500 group-hover:h-14 group-hover:bg-gold" />
                                <p className="text-[10px] text-ocean/40 uppercase tracking-[0.3em] font-sans mb-1">Send an inquiry</p>
                                <a href={`mailto:${siteData.contact.email}`} className="text-ocean text-base md:text-lg font-serif group-hover:text-gold transition-colors break-words">
                                    {siteData.contact.email}
                                </a>
                            </div>
                        </div>

                        <div className="pt-4 flex items-center gap-4 text-ocean/30 text-[10px] uppercase tracking-[0.4em]">
                            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            Currently accepting reservations
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-1/2 bg-white p-8 md:p-14 shadow-luxury rounded-sm border border-gold/5">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 border-b border-ocean/5 pb-2">
                                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-medium text-ocean/40 font-sans">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-none focus:ring-0 px-0 py-2 text-ocean placeholder:text-ocean/10 font-sans"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2 border-b border-ocean/5 pb-2">
                                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-medium text-ocean/40 font-sans">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-none focus:ring-0 px-0 py-2 text-ocean placeholder:text-ocean/10 font-sans"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 border-b border-ocean/5 pb-2">
                                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-medium text-ocean/40 font-sans">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-transparent border-none focus:ring-0 px-0 py-2 text-ocean placeholder:text-ocean/10 font-sans resize-none"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                variant="luxury"
                                size="lg"
                                className="w-full rounded-sm"
                            >
                                Submit Inquiry
                            </Button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Abstract Background Element */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-tropical/5 rounded-full blur-3xl -z-10" />
        </section>
    );
}
