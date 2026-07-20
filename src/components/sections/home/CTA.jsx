import { ctaConfig } from "@/constants/ctaData";

export default function CTA() {
  return (
    <section className="w-full bg-[#F1F3EA] py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        <div className="relative w-full rounded-[32px] bg-gradient-to-br from-[#50652D] via-[#657F44] to-[#829E65] p-8 md:p-12 lg:p-16 overflow-hidden shadow-xl border border-white/10 group">
          {/* Decorative premium light glows */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute -left-28 -top-28 w-96 h-96 bg-[#E9D48F]/15 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />

          <div className="relative z-10 max-w-2xl text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
              {ctaConfig.title}
            </h2>

            <p className="text-sm md:text-base text-white/90 leading-relaxed mb-8 max-w-xl font-medium">
              {ctaConfig.desc}
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 w-full mb-4"
            >
              <input
                type="email"
                required
                placeholder={ctaConfig.placeholder}
                className="w-full sm:flex-1 h-12 rounded-full bg-white px-6 text-sm text-neutral-800 placeholder-neutral-400 outline-none shadow-inner border-2 border-transparent focus:border-[#E9D48F] focus:ring-4 focus:ring-[#E9D48F]/10 transition-all duration-300"
              />

              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-[#B28A32] hover:bg-[#977325] active:bg-[#7D5E1E] px-8 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 shadow-lg shadow-[#B28A32]/25 hover:shadow-xl hover:shadow-[#B28A32]/40 active:scale-[0.98] cursor-pointer"
              >
                {ctaConfig.buttonText}
              </button>
            </form>

            <p className="text-[11px] text-white/70 leading-normal">
              {ctaConfig.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
