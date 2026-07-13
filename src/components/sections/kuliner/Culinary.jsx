import { useState } from "react";
import { Link } from "react-router-dom";
import { culinaryConfig } from "@/constants/culinaryData";

export default function Culinary() {
  const { categories, items } = culinaryConfig;
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems =
    activeTab === "all"
      ? items
      : items.filter((item) => item.category === activeTab);

  const leftItem = filteredItems.find((item) => item.id === 1);
  const topRightItems = filteredItems.filter(
    (item) => item.id === 2 || item.id === 3,
  );
  const bottomRightItem = filteredItems.find((item) => item.id === 4);

  return (
    <section
      data-gsap-section
      className="w-full bg-[#FAFAF4] py-16 px-4 md:px-8 lg:px-16 text-[#50652D]"
    >
      <div className="mx-auto max-w-6xl">
        <div
          data-gsap-reveal
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10"
        >
          <div>
            <h2 className="text-3xl font-bold font-montserrat tracking-tight text-[#50652D] mb-2">
              Kategori Kuliner
            </h2>
            <p className="text-sm text-neutral-500 font-inter">
              Pilih jenis hidangan yang ingin Anda nikmati hari ini
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2 text-xs font-semibold font-inter tracking-wide transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#50652D] text-white shadow-sm"
                    : "bg-[#EFEFE9] text-neutral-600 hover:bg-[#50652D]/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:h-[550px]">
          <div className="col-span-12 lg:col-span-7 h-[350px] lg:h-full">
            {leftItem ? (
              <Link
                data-gsap-reveal
                to={`/kuliner/${leftItem.id}`}
                className="relative block w-full h-full overflow-hidden rounded-[24px] border border-[#C5C8B9]/20 shadow-sm group hover:shadow-md transition-all duration-300"
                aria-label={`Lihat detail ${leftItem.title}`}
              >
                <img
                  data-gsap-image
                  src={leftItem.imageUrl}
                  alt={leftItem.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 text-white">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="rounded-md bg-[#B28A32] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      {leftItem.tag}
                    </span>
                    {leftItem.isMustTry && (
                      <span className="rounded-md bg-[#FFF3E0] text-[#5C4033] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1">
                        <span className="w-2 h-2 bg-[#5C4033] rounded-full" /> Must-Try
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-montserrat tracking-tight mb-2 drop-shadow-sm">
                    {leftItem.title}
                  </h3>
                  <p className="text-xs text-white/80 font-inter leading-relaxed max-w-xl line-clamp-3 drop-shadow-sm">
                    {leftItem.desc}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="w-full h-full rounded-[24px] border border-dashed border-[#C5C8B9] flex items-center justify-center text-xs text-neutral-400">
                Tidak ada menu berat
              </div>
            )}
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-col gap-5 h-auto lg:h-full">
            <div className="grid grid-cols-2 gap-5 flex-1 min-h-[200px] lg:min-h-0">
              {topRightItems.length > 0 ? (
                topRightItems.map((menu) => (
                  <Link
                    key={menu.id}
                    data-gsap-reveal
                    to={`/kuliner/${menu.id}`}
                    className="relative block overflow-hidden rounded-[24px] border border-[#C5C8B9]/20 shadow-sm group hover:shadow-md transition-all duration-300 col-span-2 sm:col-span-1"
                    aria-label={`Lihat detail ${menu.title}`}
                  >
                    <img
                      data-gsap-image
                      src={menu.imageUrl}
                      alt={menu.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5 z-20 text-white">
                      <span className="rounded-md bg-[#B28A32] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2 self-start">
                        {menu.tag}
                      </span>
                      <h3 className="text-base md:text-lg font-bold font-montserrat tracking-tight mb-1 drop-shadow-sm">
                        {menu.title}
                      </h3>
                      <p className="text-[11px] text-white/80 font-inter leading-relaxed line-clamp-2 drop-shadow-sm">
                        {menu.desc}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-2 w-full h-full rounded-[24px] border border-dashed border-[#C5C8B9] flex items-center justify-center text-xs text-neutral-400">
                  Tidak ada camilan / minuman
                </div>
              )}
            </div>

            <div className="flex-1 min-h-[160px] lg:min-h-0">
              {bottomRightItem ? (
                <Link
                  data-gsap-reveal
                  to={`/kuliner/${bottomRightItem.id}`}
                  className="relative block w-full h-full overflow-hidden rounded-[24px] border border-[#C5C8B9]/20 shadow-sm group hover:shadow-md transition-all duration-300"
                  aria-label={`Lihat detail ${bottomRightItem.title}`}
                >
                  <img
                    data-gsap-image
                    src={bottomRightItem.imageUrl}
                    alt={bottomRightItem.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 z-20 text-white">
                    <span className="rounded-md bg-[#B28A32] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2 self-start">
                      {bottomRightItem.tag}
                    </span>
                    <h3 className="text-xl font-bold font-montserrat tracking-tight mb-1 drop-shadow-sm">
                      {bottomRightItem.title}
                    </h3>
                    <p className="text-xs text-white/80 font-inter leading-relaxed line-clamp-2 drop-shadow-sm">
                      {bottomRightItem.desc}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="w-full h-full rounded-[24px] border border-dashed border-[#C5C8B9] flex items-center justify-center text-xs text-neutral-400">
                  Tidak ada kuliner ikonik
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
