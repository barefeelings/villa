import React from "react";
import { MessageCircle } from "lucide-react";
import { siteData } from "../../../data/villaData";

export function WhatsAppButton() {
    const whatsappNumber = siteData.contact.whatsapp.replace(/\D/g, ""); // Remove non-digits
    const message = encodeURIComponent("Hello! I would like to inquire about booking a stay at your villa.");
    const href = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            aria-label="Book via WhatsApp"
        >
            <MessageCircle size={28} />
            <span className="absolute -top-10 right-0 bg-white text-slate-800 text-sm font-medium py-1 px-3 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Book Now
            </span>
        </a>
    );
}
