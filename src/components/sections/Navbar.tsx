"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteData } from "../../../data/villaData";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Our Story", href: "#about" },
        { label: "Rooms", href: "#rooms" },
        { label: "Amenities", href: "#amenities" },
        { label: "Gallery", href: "#gallery" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-soft py-4"
                    : "bg-transparent py-8"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="#home" className="flex flex-col items-center group">
                    <span className={`text-2xl font-serif font-bold tracking-[0.1em] transition-colors duration-500 ${isScrolled ? "text-ocean" : "text-white"
                        }`}>
                        SERENITY
                    </span>
                    <span className={`text-[8px] uppercase tracking-[0.5em] font-sans -mt-1 transition-colors duration-500 ${isScrolled ? "text-gold" : "text-white/60"
                        }`}>
                        VILLA & CABANAS
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`text-[11px] uppercase tracking-[0.3em] font-semibold transition-all duration-300 hover:text-gold ${isScrolled ? "text-ocean/70" : "text-white/90"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        variant={isScrolled ? "luxury" : "outline"}
                        size="sm"
                        href="#rooms"
                        className={!isScrolled ? "border-white/40 text-white hover:bg-white/10" : ""}
                    >
                        Inquire
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X size={24} className={isScrolled ? "text-ocean" : "text-white"} />
                    ) : (
                        <Menu size={24} className={isScrolled ? "text-ocean" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-700 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                <button
                    className="absolute top-8 right-8 text-ocean"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <X size={32} strokeWidth={1} />
                </button>

                <div className="flex flex-col items-center space-y-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-2xl font-serif text-ocean hover:text-gold transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="luxury" size="lg" className="mt-8" onClick={() => setIsMobileMenuOpen(false)}>
                        Book Experience
                    </Button>
                </div>
            </div>
        </nav>
    );
}
