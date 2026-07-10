import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { culinaryConfig } from "@/constants/culinaryData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Share2, Heart, MapPin, Navigation, Clock8, CircleDollarSign, Building2, MoveRight     } from "lucide-react"

export default function CulinaryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = culinaryConfig.items.find((i) => i.id === Number(id));

  if (!item) {
    return <Navigate to="/kuliner" replace />;
  }

  const recommendations = culinaryConfig.items
    .filter((i) => i.id !== item.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAFAF4] font-inter text-[#2f381d] antialiased selection:bg-[#50652D] selection:text-white">
      <Navbar />

      <main className="">
        <section className="relative flex h-[614px] w-full items-end pb-12 md:h-[716px]">
          <img src={item.imageUrl} alt={item.imageUrl} className="absolute inset-0 h-full w-full object-cover bg-center mb-6 bg-contain"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF4] via-[#FAFAF4]/60 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-8 lg:px-16">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C5C8B9]/40 bg-white/85 px-4 py-2 text-sm font-semibold text-[#50652D] shadow-sm backdrop-blur-md transition-colors hover:bg-white"
              aria-label="Kembali ke halaman sebelumnya"
            >
              <ArrowLeft size={18} />
              Kembali
            </button>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-sm bg-[#50652D]/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1 rounded-sm border border-[#C5C8B9]/40 bg-white/90 px-3 py-1 text-[#2f381d] backdrop-blur-sm">
                    <span className="text-sm text-[#B28A32]">★</span>
                    <span className="text-xs font-semibold">{item.rating}</span>
                  </div>
                </div>

                <h1 className="mb-2 font-montserrat text-4xl font-bold tracking-tight text-[#2f381d] drop-shadow-sm md:text-6xl">
                  {item.title}
                </h1>
                <p className="flex items-center gap-2 text-base text-neutral-700 md:text-lg">
                  <span className="text-xl text-[#50652D]"><MapPin /></span>
                  {item.address}
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C5C8B9]/40 bg-white/80 text-[#50652D] shadow-sm backdrop-blur-md transition-colors hover:bg-white"
                  aria-label="Bagikan"
                >
                  <Share2 />
                </button>
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C5C8B9]/40 bg-white/80 text-[#50652D] shadow-sm backdrop-blur-md transition-colors hover:bg-white"
                  aria-label="Simpan ke favorit"
                >
                  <Heart />
                </button>
              </div>
            </div>
          </div>
        </section>

        <div
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23dfc485\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 md:px-8 lg:grid-cols-12 lg:px-16">
            <div className="flex flex-col gap-16 lg:col-span-8">
              <section>
                <h2 className="mb-6 font-montserrat text-3xl font-bold text-[#50652D] md:text-4xl">
                  Tentang {item.title}
                </h2>
                <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
                  {item.desc}
                </p>
              </section>

<section>
                <div className="mb-6 flex flex-col gap-1.5">
                  <h3 className="font-montserrat text-2xl font-bold text-[#50652D]">
                    Menu Highlights
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Pilihan terbaik yang wajib Anda coba saat berkunjung.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:h-[450px]">
                  {item.gallery.map((imgUrl, idx) => {
                    // Logika Bento Grid: Item pertama memakan 2 kolom & 2 baris (besar di kiri), 
                    // sisanya mengisi 1 kolom & 1 baris (bertumpuk di kanan).
                    const isMain = idx === 0;

                    return (
                      <div
                        key={imgUrl}
                        className={`group relative overflow-hidden rounded-2xl border border-[#C5C8B9]/30 shadow-sm ${
                          isMain
                            ? "md:col-span-2 md:row-span-2 h-[280px] md:h-full"
                            : "md:col-span-1 md:row-span-1 h-[200px] md:h-full"
                        }`}
                      >
                        <img
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          src={imgUrl}
                          alt={`Highlight ${item.title} ${idx + 1}`}
                        />
                        
                        {/* Overlay Gradien Gelap di Bawah */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                        
                        {/* Tag Label */}
                        <div className="absolute bottom-0 left-0 p-5 md:p-6 text-white">
                          <span className={`inline-block rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                            isMain ? "bg-[#B28A32]" : "bg-white/20 backdrop-blur-md"
                          }`}>
                            {isMain ? "★ Signature" : "Rekomendasi"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>

            <aside className="flex flex-col gap-8 lg:col-span-4">
              <div className="flex flex-col gap-6 rounded-xl border border-[#C5C8B9]/30 bg-white p-6 shadow-[0_4px_24px_rgba(54,69,25,0.05)]">
                <div>
                  <h3 className="mb-4 font-montserrat text-xl font-bold text-[#50652D]">
                    Informasi Operasional
                  </h3>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-[#B28A32]"><Clock8 /></span>
                      <div>
                        <p className="text-sm font-semibold text-[#2f381d]">
                          Jam Buka
                        </p>
                        <p className="mt-1 text-sm text-neutral-600">
                          {item.hours}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-[#B28A32]"><CircleDollarSign /></span>
                      <div>
                        <p className="text-sm font-semibold text-[#2f381d]">
                          Estimasi Harga
                        </p>
                        <p className="mt-1 text-sm text-neutral-600">
                          {item.priceRange}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-[#B28A32]"><Building2 /></span>
                      <div>
                        <p className="text-sm font-semibold text-[#2f381d]">
                          Fasilitas
                        </p>
                        <p className="mt-1 text-sm text-neutral-600">
                          {item.facilities}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <a
                  href={`https://maps.google.com/?q=${item.title} ${item.address}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#50652D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3f5224]"
                >
                  <span className="text-lg"><Navigation /></span>
                  Dapatkan Petunjuk Arah
                </a>
              </div>
            </aside>
          </div>
        </div>

        <section className="border-t border-[#C5C8B9]/30 bg-[#EFEFE9] py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-16">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="mb-2 font-montserrat text-3xl font-bold text-[#50652D] md:text-4xl">
                  Jelajahi Kuliner Lainnya
                </h2>
                <p className="text-sm text-neutral-600 md:text-base">
                  Temukan cita rasa legendaris lainnya di Kota Medan.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {recommendations.map((rec) => (
                <Link
                  key={rec.id}
                  to={`/kuliner/${rec.id}`}
                  className="group block cursor-pointer overflow-hidden rounded-2xl border border-[#C5C8B9]/30 bg-white shadow-[0_4px_24px_rgba(54,69,25,0.03)] transition-all hover:shadow-[0_8px_32px_rgba(54,69,25,0.08)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={rec.imageUrl}
                      alt={rec.title}
                    />
                    <div className="absolute left-4 top-4 rounded-sm bg-[#50652D]/90 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {rec.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="mb-2 font-montserrat text-xl font-bold text-[#2f381d]">
                      {rec.title}
                    </h4>
                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-neutral-600">
                      {rec.desc}
                    </p>
                    <span className="flex gap-2 items-center text-sm font-semibold text-[#50652D]">
                      Lihat Detail <MoveRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
