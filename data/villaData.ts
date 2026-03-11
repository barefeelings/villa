import { BedDouble, Bath, Wifi, Coffee, Car, Waves, Utensils, Tv, MountainSnow, Wind } from "lucide-react";

export const siteData = {
  name: "Serenity Villa & Cabanas",
  titleSuffix: "Luxury Stay in Sri Lanka",
  description: "Experience the ultimate tropical getaway in our modern, serene villa and secluded cabanas designed for relaxation and comfort in the heart of Sri Lanka.",
  aboutText: "Welcome to Serenity Villa, where modern luxury meets tropical tranquility. Nestled amidst lush green landscapes in Sri Lanka, our boutique property offers a perfect blend of contemporary architecture and traditional hospitality. Whether you're seeking a romantic escape in our private cabanas or a family retreat in our spacious villa rooms, we promise an unforgettable stay complete with personalized service, exquisite dining, and modern amenities.",
  contact: {
    phone: "+94 77 123 4567",
    whatsapp: "+94 77 123 4567",
    email: "info@serenityvillasl.com",
    address: "123 Palm Grove Lane, Coastal Highway, Southern Province, Sri Lanka",
    mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871.411604561877!2d79.8557342!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593b11e2fbd3%3A0x6b44749f7e817a00!2sColombo!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk", // Placeholder map URL
  },
  images: {
    hero: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2670&auto=format&fit=crop", // Luxury villa exterior
    about: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop",
    ]
  },
  rooms: [
    {
      id: "ocean-suite",
      title: "Ocean View Suite",
      description: "A spacious suite featuring panoramic ocean views, a private balcony, and elegant modern furnishings.",
      price: "$150",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop",
      features: ["King Size Bed", "Ocean View", "Private Balcony", "Air Conditioning"],
    },
    {
      id: "tropical-cabana",
      title: "Tropical Garden Cabana",
      description: "Secluded cabana set amidst lush tropical gardens, offering ultimate privacy and a private plunge pool.",
      price: "$120",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop",
      features: ["Queen Size Bed", "Garden View", "Plunge Pool", "Outdoor Shower"],
    },
    {
      id: "family-villa",
      title: "Family Deluxe Room",
      description: "Perfect for families, this expansive room features multiple beds, a lounge area, and easy access to the main pool.",
      price: "$200",
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2670&auto=format&fit=crop",
      features: ["2 Queen Beds", "Lounge Area", "Pool Access", "Bathtub"],
    }
  ],
  amenities: [
    { icon: Waves, label: "Infinity Pool" },
    { icon: Wifi, label: "Free High-Speed WiFi" },
    { icon: Utensils, label: "In-House Restaurant" },
    { icon: Wind, label: "Air Conditioning" },
    { icon: Car, label: "Airport Transfers" },
    { icon: Coffee, label: "Daily Breakfast" },
    { icon: MountainSnow, label: "Scenic Views" },
    { icon: Tv, label: "Smart TV & Streaming" },
  ]
};
