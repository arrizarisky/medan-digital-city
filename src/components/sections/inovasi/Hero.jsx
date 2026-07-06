import InovasiHero from "../../../assets/images/HeroInovation.png";

export default function Hero() {
  return (
    <div className="relative w-full h-[778px]">
      <img
        src={InovasiHero}
        alt="Inovasi Hero"
        className="w-full h-full object-cover object-right"
      />

      <div className="bg-gradient-to-r from-white via-white/70 to-transparent absolute inset-0 w-full md:w-4/5 lg:w-2/3"></div>

      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col justify-start items-start gap-6 max-w-2xl">
          <div className="px-4 py-1.5 bg-[#A3B18A] rounded-full inline-flex justify-center items-center shadow-sm">
            <span className="text-center text-[#2A3B19] text-xs font-bold font-inter tracking-widest uppercase">
              INOVASI KOTA 2026
            </span>
          </div>

          <h1 className="text-left text-[#50652D] text-4xl md:text-5xl lg:text-[56px] font-bold font-montserrat leading-[1.15] tracking-tight">
            Medan Masa Depan:
            <br />
            Transformasi & Inovasi
          </h1>

          <p className="text-left text-neutral-600 text-base md:text-lg font-medium font-inter leading-relaxed max-w-xl text-balance">
            Menuju kota modern yang menghargai masa lalu dan menyambut masa
            depan, di mana ragam budaya luhur berpadu selaras dengan inovasi
            teknologi yang memudahkan hidup warganya.
          </p>
        </div>
      </div>
    </div>
  );
}
