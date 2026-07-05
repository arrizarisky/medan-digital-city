import { Calendar as CalendarIcon, ChevronRight } from 'lucide-react';

export default function SejarahCalendar({ content, sectionRef }) {
  return (
    <div ref={sectionRef} className="reveal-up bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
      {/* Abstract decorative background */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-gray-50 rounded-full opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="text-[#B73D3D] p-3 bg-[#F9EBEB] rounded-xl shadow-sm">
              <CalendarIcon size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-[24px] font-extrabold text-[#222]">{content.calendar.title}</h3>
          </div>
          <button className="text-[14px] font-bold text-[#526344] flex items-center gap-1 hover:text-[#3d4a32] hover:bg-[#526344]/10 px-4 py-2 rounded-full transition-all duration-300">
            {content.calendar.viewAll}
          </button>
        </div>

        <div className="space-y-0">
          {content.calendar.events.map((event, idx) => (
            <div key={idx} className="flex items-center justify-between group/event cursor-pointer border-b border-gray-100 py-6 first:pt-2 last:border-0 last:pb-0 hover:bg-gray-50/80 transition-colors duration-300 rounded-2xl px-4 -mx-4">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center justify-center min-w-[50px] bg-white shadow-sm border border-gray-100 p-2 rounded-xl group-hover/event:border-[#B73D3D]/30 group-hover/event:shadow-md transition-all duration-300">
                  <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{event.month}</span>
                  <span className="text-[#B73D3D] text-[22px] font-black leading-none mt-1 group-hover/event:scale-110 transition-transform duration-300">{event.date}</span>
                </div>
                <div>
                  <h4 className="font-bold text-[17px] text-[#222] mb-1 group-hover/event:text-[#B73D3D] transition-colors duration-300">{event.name}</h4>
                  <p className="text-[#666] text-[14px] leading-relaxed max-w-[380px]">{event.desc}</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover/event:bg-[#526344] group-hover/event:text-white group-hover/event:border-[#526344] transition-all duration-300 shadow-sm">
                <ChevronRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
