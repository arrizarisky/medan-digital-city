import heroImage from "../../assets/images/heroImage.svg";

export default function Hero() {
  return (
    <section className="w-full bg-[#FFFF] py-6 text-[#50652D]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-center w-full overflow-hidden rounded-xl">
          <img
            src={heroImage}
            alt="Hero illustration"
            className="w-full max-w-[1314px] h-auto max-h-[600px] object-contain"
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-center text-center px-4">
          <div className="relative max-w-3xl py-6 px-8">
            {/* Tanda Petik Pembuka */}
            <span className="absolute top-0 left-0 text-7xl font-serif text-[#50652D]/10 select-none">
              “
            </span>

            <p className="font-playfair text-sm md:text-2xl lg:text-3xl italic font-medium leading-relaxed text-[#50652D] tracking-wide text-balance">
              Medan adalah perpaduan harmonis antara warisan budaya yang kaya,
              keindahan alam yang memukau, dan semangat modern yang terus
              berkembang.
            </p>

            {/* Tanda Petik Penutup */}
            <span className="absolute bottom-0 right-0 text-7xl font-serif text-[#50652D]/10 select-none">
              ”
            </span>

            {/* Garis Aksen Kecil di Bawah Quotes */}
            <div className="mx-auto mt-6 w-16 h-[2px] bg-[#50652D]/40 rounded" />
            <span className="mt-2 block text-xs tracking-widest uppercase text-[#50652D]/70 font-semibold">
              Medan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
