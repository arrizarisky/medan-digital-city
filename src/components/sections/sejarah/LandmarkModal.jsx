import { X } from 'lucide-react';

export default function LandmarkModal({ landmark, lang, content, onClose }) {
  if (!landmark) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image */}
        <div className="w-full h-80 overflow-hidden bg-gray-50 flex items-center justify-center relative">
          <img
            src={landmark.src}
            alt={landmark.title[lang]}
            className="w-full h-full object-contain"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/70 transition-all duration-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 sm:p-12">
          <span className="text-[#B73D3D] text-[11px] font-black tracking-[0.18em] uppercase mb-2 inline-block">
            {content.landmarks.since} {landmark.year}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] mb-6 tracking-tight">
            {landmark.title[lang]}
          </h2>
          <p className="text-[#666] text-[16px] leading-relaxed mb-8">
            {landmark.longDesc[lang]}
          </p>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-[#B73D3D] text-white font-bold text-[14px] rounded-xl hover:bg-[#9a3333] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {content.landmarks.close}
          </button>
        </div>
      </div>
    </div>
  );
}
