import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { ArrowLeft, Ticket, Clock, History, Navigation, UserCheck, MapPin } from "lucide-react";
import L from "leaflet";
import { gisData } from "@/constants/gisData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

import "leaflet/dist/leaflet.css";

const createCustomIcon = (imageUrl) => {
  return L.divIcon({
    className: "custom-map-pin",
    html: `
      <div style="
        width: 44px; 
        height: 44px; 
        border-radius: 50%; 
        border: 3px solid #c0a062; 
        box-shadow: 0 6px 12px rgba(0,0,0,0.3); 
        transform: translateY(-50%);
        background-color: #1a2e23;
        background-image: url('${imageUrl}');
        background-size: cover;
        background-position: center;
        position: relative;
      ">
        <div style="
          position: absolute; 
          bottom: -10px; 
          left: 50%; 
          transform: translateX(-50%); 
          width: 0; 
          height: 0; 
          border-left: 8px solid transparent; 
          border-right: 8px solid transparent; 
          border-top: 10px solid #c0a062;
        "></div>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 44], // Titik jangkar (anchor) agar ekor pin pas menunjuk ke titik koordinat
  });
};

// Komponen bantu untuk memindahkan kamera peta saat lokasi dipilih
function MapFlyTo({ coordinates }) {
  const map = useMap();
  React.useEffect(() => {
    if (coordinates) {
      map.flyTo(coordinates, 15, { animate: true, duration: 1.5 });
    }
  }, [coordinates, map]);
  return null;
}

export default function ExploreMap() {
  const { lang } = useLanguage();
  const [selectedLoc, setSelectedLoc] = useState(gisData.locations[0]);
  const defaultCenter = [3.5850, 98.6750]; // Titik tengah Medan

  return (
    <div className="min-h-screen bg-[#F5F4ED] font-inter text-[#2f381d] pb-20">
      <Navbar />

      {/* ── HEADER ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-[#1a2e23] transition-colors mb-4"
        >
          <ArrowLeft size={16} />
          {lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1a2e23] rounded-full flex items-center justify-center text-[#c0a062]">
            <MapPin size={20} />
          </div>
          <div>
            <h1 className="text-3xl font-bold font-montserrat text-[#1a2e23]">
              {lang === 'id' ? 'Peta Wisata Medan' : 'Medan Tourism Map'}
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              {lang === 'id'
                ? 'Klik penanda pada peta atau pilih dari daftar untuk melihat detail.'
                : 'Click a marker on the map or select from the list to see details.'}
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN GRID: MAP & LIST ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[480px]">
          
          {/* MAP SECTION (Left) */}
          <div className="lg:col-span-8 bg-neutral-200 rounded-2xl overflow-hidden border border-[#C5C8B9]/50 shadow-sm relative z-0 h-[400px] lg:h-full">
            <MapContainer
              center={defaultCenter}
              zoom={14}
              scrollWheelZoom={true}
              className="w-full h-full"
              zoomControl={true}
            >
              <TileLayer
                attribution='© <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              />
              <MapFlyTo coordinates={selectedLoc.coordinates} />
              
              {gisData.locations.map((loc) => (
                <Marker
                  key={loc.id}
                  position={loc.coordinates}
                  icon={createCustomIcon(loc.image)}
                  eventHandlers={{
                    click: () => setSelectedLoc(loc),
                  }}
                />
              ))}
            </MapContainer>
          </div>

          {/* LIST SECTION (Right) */}
          <div className="lg:col-span-4 bg-[#EFECE1] rounded-2xl border border-[#C5C8B9]/30 flex flex-col h-[400px] lg:h-full">
            <div className="p-5 border-b border-[#C5C8B9]/30 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#c0a062]">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              <h3 className="font-bold font-montserrat text-[#1a2e23]">
                {lang === 'id' ? 'Daftar Wisata' : 'Tourism List'}
              </h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {gisData.locations.map((loc) => {
                const isActive = selectedLoc.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLoc(loc)}
                    className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 text-left ${
                      isActive 
                        ? "bg-[#1a2e23] text-white shadow-md" 
                        : "bg-transparent hover:bg-white/50 text-[#2f381d]"
                    }`}
                  >
                    <img 
                      src={loc.image} 
                      alt={loc.name} 
                      className={`w-14 h-14 rounded-lg object-cover border ${isActive ? 'border-[#c0a062]' : 'border-transparent'}`}
                    />
                    <div>
                      <h4 className={`font-bold font-montserrat text-sm ${isActive ? 'text-white' : 'text-[#1a2e23]'}`}>
                        {loc.name}
                      </h4>
                      <p className={`text-xs mt-1 font-medium ${isActive ? 'text-[#c0a062]' : 'text-neutral-500'}`}>
                        {loc.price}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM DETAIL SECTION ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#C5C8B9]/30 flex flex-col lg:flex-row">
          
          {/* Cover Image */}
          <div className="lg:w-5/12 h-[300px] lg:h-auto relative">
            <img 
              src={selectedLoc.image} 
              alt={selectedLoc.name} 
              className="w-full h-full object-cover"
            />
            {/* Coordinate Badge */}
            <div className="absolute top-4 left-4 bg-[#1a2e23]/80 backdrop-blur-md text-[#c0a062] px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
              <MapPin size={12} /> {selectedLoc.coordinates.join(", ")}
            </div>
          </div>

          {/* Content Details */}
          <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-[#1a2e23] mb-8">
              {selectedLoc.name}
            </h2>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#F5F4ED] p-4 rounded-xl border border-[#C5C8B9]/30 flex items-start gap-3">
                <Ticket className="text-[#c0a062] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    {lang === 'id' ? 'Tiket Masuk' : 'Entry Ticket'}
                  </p>
                  <p className="text-sm font-semibold text-[#1a2e23] mt-1">{selectedLoc.price}</p>
                </div>
              </div>
              <div className="bg-[#F5F4ED] p-4 rounded-xl border border-[#C5C8B9]/30 flex items-start gap-3">
                <Clock className="text-[#c0a062] shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    {lang === 'id' ? 'Jam Buka' : 'Opening Hours'}
                  </p>
                  <p className="text-sm font-semibold text-[#1a2e23] mt-1">{selectedLoc.hours}</p>
                </div>
              </div>
            </div>

            {/* History Text */}
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              {selectedLoc.desc}
            </p>
            <div className="mb-10">
              <h4 className="flex items-center gap-2 text-xs font-bold text-[#1a2e23] uppercase tracking-widest mb-3">
                <History size={16} className="text-[#c0a062]" />
                {lang === 'id' ? 'Sejarah' : 'History'}
              </h4>
              <p className="text-neutral-500 text-sm leading-relaxed pl-6 border-l-2 border-[#EFECE1]">
                {selectedLoc.history}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button className="flex-1 bg-[#1a2e23] hover:bg-[#111f17] text-white py-3.5 px-6 rounded-full font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md">
                <UserCheck size={18} />
                {lang === 'id' ? 'Pesan Tour Guide' : 'Book Tour Guide'}
              </button>
              <a 
                href={`https://maps.google.com/?q=${selectedLoc.coordinates[0]},${selectedLoc.coordinates[1]}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-white hover:bg-neutral-50 border-2 border-[#EFECE1] text-[#1a2e23] py-3.5 px-6 rounded-full font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Navigation size={18} />
                {lang === 'id' ? 'Arahkan Lokasi' : 'Get Directions'}
              </a>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}