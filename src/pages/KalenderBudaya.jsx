import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import kalenderBudayaImg from '@/assets/images/kalender-budaya.jpg';
import { ChevronDown } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    title: 'Tahun Baru Imlek 2026',
    category: 'Festival',
    date: '17',
    month: 'Feb',
    fullDate: '2026-02-17',
    location: 'Kesawan Square, Medan Barat',
    description: 'Rasakan keriuhan tarian barongsai dan pendar lampion merah yang semarak di kawasan bersejarah Kesawan. Ratusan lampion menghiasi jalanan bergaya kolonial.',
    image: kalenderBudayaImg,
    featured: true
  },
  {
    id: 2,
    title: 'Ramadhan Fair 2026',
    category: 'Religi & Kuliner',
    date: '19',
    month: 'Feb',
    fullDate: '2026-02-19',
    location: 'Masjid Raya Al-Mashun',
    description: 'Festival kuliner dan keagamaan sebulan penuh yang digelar di pelataran megah Masjid Raya Al-Mashun dengan ribuan pengunjung setiap malam.'
  },
  {
    id: 3,
    title: 'Gelar Melayu Serumpun',
    category: 'Tradisi',
    date: '25',
    month: 'Jul',
    fullDate: '2026-07-25',
    location: 'Istana Maimun',
    description: 'Pesta budaya akbar yang menyatukan perwakilan budaya Melayu dari berbagai penjuru Nusantara di pelataran bersejarah Istana Maimun.'
  },
  {
    id: 4,
    title: 'Karnaval Deepavali',
    category: 'Budaya',
    date: '08',
    month: 'Nov',
    fullDate: '2026-11-08',
    location: 'Kampung Madras',
    description: 'Perayaan Festival Cahaya di jantung Kampung Madras dengan parade pakaian tradisional India yang memukau dan bazar kuliner autentik.'
  },
  {
    id: 5,
    title: 'Festival Bunga & Buah',
    category: 'Festival',
    date: '15',
    month: 'Okt',
    fullDate: '2026-10-15',
    location: 'Lapangan Merdeka',
    description: 'Pameran hasil bumi terbaik dari Tanah Karo dan sekitarnya yang diwarnai pawai kendaraan berhias bunga segar di pusat kota Medan.'
  }
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];

export default function KalenderBudaya({ lang, setLang }) {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  
  const filters = ['Semua', 'Festival', 'Religi & Kuliner', 'Budaya', 'Tradisi'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToGoogleCalendar = (event) => {
    const text = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent(event.location);
    const d = new Date(event.fullDate);
    const year = d.getFullYear();
    const monthStr = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    // Format: YYYYMMDDTHHmmssZ
    // Defaulting to 9 AM - 6 PM local time (GMT+7) => 020000Z - 110000Z
    const dates = `${year}${monthStr}${day}T020000Z/${year}${monthStr}${day}T110000Z`;
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  const filteredEvents = eventsData.filter(event => {
    const matchCategory = activeFilter === 'Semua' || event.category === activeFilter;
    const matchMonth = selectedMonth ? event.month === selectedMonth : true;
    const matchSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchMonth && matchSearch;
  });

  const featuredEvent = filteredEvents.length > 0 ? filteredEvents[0] : null;
  const remainingEvents = filteredEvents.length > 0 ? filteredEvents.slice(1) : [];

  const toggleAccordion = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-[#FAF9F5] font-inter text-[#1b1c1c] min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');
        
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
      
      <Navbar lang={lang} setLang={setLang} />

      <main className="min-h-screen py-16 px-4 md:px-8 mt-16 relative">
        {/* Grain/Artsy background effect for the whole page (subtle) */}
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(30, 63, 32, 0.08) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-14 text-center md:text-left">
            <h1 className="font-playfair text-[#1E3F20] text-5xl md:text-7xl font-bold mb-6 tracking-tight">Kalender Budaya</h1>
            <p className="font-inter text-[#414844] max-w-2xl text-lg mx-auto md:mx-0 font-light leading-relaxed">
              Menelusuri perayaan tahunan yang membentuk jiwa Kota Medan. Dari keriuhan Imlek hingga keagungan Ramadhan.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-14 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative group flex-1">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#717973]">search</span>
                <input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/60 backdrop-blur-sm border border-[#1E3F20]/10 focus:ring-2 focus:ring-[#1E3F20]/30 focus:border-transparent outline-none transition-all font-inter text-base shadow-sm" 
                  placeholder="Cari acara atau tradisi..." 
                  type="text"
                />
              </div>
              <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide gap-2 items-center">
                  {filters.map((filter) => (
                    <button 
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-6 py-3 rounded-full font-inter font-medium text-sm transition-all active:scale-95 ${
                        activeFilter === filter 
                        ? 'bg-[#1E3F20] text-white shadow-md' 
                        : 'bg-white/60 backdrop-blur-sm text-[#414844] border border-[#1E3F20]/10 hover:bg-white'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
              </div>
            </div>
            
            {/* Horizontal Month Selector */}
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide gap-2 pb-2 -mx-4 px-4 md:mx-0 md:px-0">
              <button 
                onClick={() => setSelectedMonth(null)}
                className={`px-6 py-2.5 rounded-full font-inter font-medium text-sm transition-all ${
                  selectedMonth === null 
                  ? 'bg-[#B28A32] text-white shadow-md' 
                  : 'text-[#717973] hover:text-[#1E3F20] hover:bg-[#1E3F20]/5'
                }`}
              >
                Tahun 2026
              </button>
              {months.map((m) => (
                <button 
                  key={m}
                  onClick={() => setSelectedMonth(m)}
                  className={`px-5 py-2.5 rounded-full font-inter font-medium text-sm transition-all ${
                    selectedMonth === m 
                    ? 'bg-[#1E3F20] text-white shadow-md' 
                    : 'text-[#717973] hover:text-[#1E3F20] hover:bg-[#1E3F20]/5'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* HYBRID TIMETABLE LAYOUT */}
          
          {/* A. HERO FEATURED EVENT BANNER */}
          {featuredEvent && (
            <div className="mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row bg-[#1E3F20] relative group">
              <div className="md:w-[45%] relative h-[400px] md:h-auto overflow-hidden">
                <img 
                  src={featuredEvent.image || kalenderBudayaImg} 
                  alt={featuredEvent.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1E3F20] via-[#1E3F20]/40 to-transparent"></div>
              </div>
              <div className="md:w-[55%] p-10 md:p-14 flex flex-col justify-center relative bg-gradient-to-t from-[#1E3F20] via-[#1E3F20] to-transparent md:bg-none -mt-24 md:mt-0">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-inter text-[#B28A32] font-semibold tracking-[0.2em] uppercase text-xs">
                    {featuredEvent.category}
                  </span>
                  <span className="w-10 h-px bg-[#B28A32]/40"></span>
                  <span className="font-inter text-white/80 font-medium tracking-wide text-sm">
                    {featuredEvent.date} {featuredEvent.month} 2026
                  </span>
                </div>
                
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                  {featuredEvent.title}
                </h2>
                
                <p className="font-inter text-white/70 text-base md:text-lg mb-10 leading-relaxed font-light">
                  {featuredEvent.description}
                </p>
                
                <div className="flex items-center gap-6 mt-auto">
                  <button 
                    onClick={() => addToGoogleCalendar(featuredEvent)}
                    className="group/btn flex items-center gap-3 bg-[#B28A32] text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-[#9c782b] transition-all hover:shadow-lg active:scale-95"
                  >
                    Simpan Jadwal
                    <span className="material-symbols-outlined text-[18px] group-hover/btn:-translate-y-0.5 transition-transform">event_upcoming</span>
                  </button>
                  <button className="text-white/70 hover:text-white font-inter text-sm font-medium transition-colors border-b border-transparent hover:border-white pb-0.5 hidden sm:block">
                    Detail Eksplorasi
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* B. ACCORDION TIMETABLE GRID */}
          <div className="flex flex-col border-t border-zinc-200/60 mt-8">
            {remainingEvents.length > 0 ? remainingEvents.map((event, idx) => {
              const isExpanded = expandedId === event.id;
              return (
              <div 
                key={event.id}
                onClick={() => toggleAccordion(event.id)}
                className={`flex flex-col group transition-all duration-500 cursor-pointer border-b border-zinc-200/60 
                  ${isExpanded ? 'bg-[#FDFCF8] border-l-[6px] border-l-[#B28A32]' : (idx % 2 === 0 ? 'bg-transparent border-l-[6px] border-l-transparent' : 'bg-zinc-50/40 border-l-[6px] border-l-transparent')} 
                  ${!isExpanded && 'hover:bg-zinc-50/80'}
                `}
              >
                {/* Visible Row */}
                <div className="flex flex-col md:flex-row">
                  {/* Kolom 1: Tanggal */}
                  <div className="md:w-40 p-6 md:p-8 flex flex-col md:items-end justify-start md:border-r border-zinc-200/40 shrink-0">
                    <div className="flex flex-row md:flex-col items-baseline md:items-end gap-2 md:gap-0">
                      <span className="font-playfair text-[#1E3F20] text-5xl font-bold leading-none">{event.date}</span>
                      <span className="font-inter font-medium text-sm uppercase text-[#717973] md:mt-2 tracking-widest">{event.month}</span>
                    </div>
                  </div>

                  {/* Kolom 2: Info Utama */}
                  <div className="flex-1 p-6 md:p-8 md:pl-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h3 className={`font-playfair text-3xl font-bold transition-colors ${isExpanded ? 'text-[#B28A32]' : 'text-[#1b1c1c] group-hover:text-[#1E3F20]'}`}>
                        {event.title}
                      </h3>
                      <span className="font-inter text-[#B28A32] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#B28A32]/20 bg-[#B28A32]/5">
                        {event.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-[#717973]">
                      <span className="material-symbols-outlined text-[16px] text-[#B28A32]">location_on</span>
                      <span className="font-inter text-sm font-medium">{event.location}</span>
                    </div>

                    {/* Potong deskripsi jika tertutup */}
                    <p className={`font-inter text-[#414844] text-base leading-relaxed font-light md:max-w-3xl ${!isExpanded ? 'line-clamp-2' : 'hidden'}`}>
                      {event.description}
                    </p>
                  </div>

                  {/* Kolom 3: Aksi Minimalis (Chevron) */}
                  <div className="md:w-32 p-6 md:p-8 flex items-center justify-start md:justify-center shrink-0">
                    <button className="flex items-center justify-center p-2 rounded-full text-[#1E3F20] transition-colors bg-white/50 border border-zinc-200/50 shadow-sm group-hover:bg-white group-hover:shadow group-hover:text-[#B28A32]">
                      <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#B28A32]' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Expanded Accordion Content */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 md:p-8 md:pl-[12.5rem] pt-0 flex flex-col md:flex-row gap-8">
                      {/* Kolom Kiri: Narasi & Rundown */}
                      <div className="md:w-[60%] flex flex-col gap-6">
                        <p className="font-inter text-[#414844] text-base leading-relaxed font-light">
                          {event.description}
                        </p>
                        <div className="bg-white/50 rounded-xl p-5 border border-zinc-200/50">
                          <h4 className="font-playfair text-[#1E3F20] font-bold text-lg mb-3">Agenda Singkat</h4>
                          <ul className="flex flex-col gap-2 font-inter text-[#414844] text-sm font-light">
                            <li className="flex gap-3"><span className="text-[#B28A32]">•</span> 16:00 – Registrasi & Kuliner Tradisional</li>
                            <li className="flex gap-3"><span className="text-[#B28A32]">•</span> 19:30 – Pertunjukan Utama Kesenian</li>
                            <li className="flex gap-3"><span className="text-[#B28A32]">•</span> 21:00 – Sesi Foto & Penutupan</li>
                          </ul>
                        </div>
                      </div>

                      {/* Kolom Kanan: Quick Actions & Info */}
                      <div className="md:w-[40%] flex flex-col gap-4">
                        <div className="flex items-center gap-3 bg-white/60 p-4 rounded-xl border border-zinc-200/50">
                          <span className="text-xl">🎟️</span>
                          <span className="font-inter text-sm font-medium text-[#1E3F20]">Gratis & Terbuka untuk Umum</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/60 p-4 rounded-xl border border-zinc-200/50">
                          <span className="text-xl">🕒</span>
                          <span className="font-inter text-sm font-medium text-[#1E3F20]">Pukul 16:00 - 22:00 WIB</span>
                        </div>
                        
                        <div className="flex flex-col gap-3 mt-4">
                          <button 
                            onClick={(e) => { e.stopPropagation(); addToGoogleCalendar(event); }}
                            className="w-full bg-[#1E3F20] text-white py-3 rounded-full font-inter font-medium hover:bg-[#152c16] transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95"
                          >
                            <span className="material-symbols-outlined text-[18px]">event_available</span>
                            Simpan ke Google Calendar
                          </button>
                          <button 
                            onClick={(e) => e.stopPropagation()}
                            className="w-full bg-transparent border border-[#1E3F20]/30 text-[#1E3F20] py-3 rounded-full font-inter font-medium hover:bg-[#1E3F20]/5 transition-all flex items-center justify-center gap-2 active:scale-95"
                          >
                            <span className="material-symbols-outlined text-[18px]">directions</span>
                            Petunjuk Arah / Peta
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
            }) : !featuredEvent && (
              <div className="p-20 text-center text-[#717973] font-inter border-b border-zinc-200/60">
                <span className="material-symbols-outlined text-4xl mb-4 opacity-30 text-[#1E3F20]">calendar_today</span>
                <p className="text-lg font-light">Belum ada jadwal yang tersedia untuk kriteria ini.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
