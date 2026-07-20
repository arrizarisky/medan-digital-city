import Hero from "@/components/sections/inovasi/Hero";
import DigitalisasiLayanan from "@/components/sections/inovasi/DigitalisasiLayanan";
import InfrastrukturModern from "@/components/sections/inovasi/InfrastrukturModern";
import IndustriKomersial from "@/components/sections/inovasi/IndustriKomersial";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { digitalConfig } from "@/constants/digitalData";
import { economyConfig } from "@/constants/economyData";
import { infraConfig } from "@/constants/infraData";
import { ArrowLeft, CalendarDays, MapPin, Newspaper, Sparkles } from "lucide-react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import GsapScrollReveal from "@/components/ui/gsap-scroll-reveal";
import { useLanguage } from "@/context/LanguageContext";

// Build all items for a given language (used by InovationDetail)
function getAllItems(lang) {
  const d = digitalConfig[lang] ?? digitalConfig.id;
  const i = infraConfig[lang] ?? infraConfig.id;
  const e = economyConfig[lang] ?? economyConfig.id;
  return [
    ...d.cards,
    i.mainCard,
    i.statsCard,
    i.mapCard,
    ...e.cards,
  ];
}

const detailT = {
  id: {
    back: "Kembali",
    sectionBadge: "Sorotan Inovasi",
    sectionTitle: "Perkembangan teknologi di Medan",
    newsBadge: "Ringkasan Berita",
    newsSubtitle: "Poin penting dari inovasi ini.",
    recBadge: "Jelajahi Lainnya",
    recTitle: "Inovasi teknologi Medan",
  },
  en: {
    back: "Back",
    sectionBadge: "Innovation Spotlight",
    sectionTitle: "Technology developments in Medan",
    newsBadge: "News Summary",
    newsSubtitle: "Key points from this innovation.",
    recBadge: "Explore More",
    recTitle: "Medan technology innovations",
  },
};

export default function Inovation() {
  return (
    <main>
      <Navbar />
      <GsapScrollReveal>
        <Hero />
        <DigitalisasiLayanan />
        <InfrastrukturModern />
        <IndustriKomersial />
      </GsapScrollReveal>
      <Footer />
    </main>
  );
}

export function InovationDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const allItems = getAllItems(lang);
  const item = allItems.find((innovation) => innovation.slug === slug);

  if (!item) {
    return <Navigate to="/inovasi" replace />;
  }

  const recommendations = allItems
    .filter((innovation) => innovation.slug !== item.slug)
    .slice(0, 3);

  const ui = detailT[lang] ?? detailT.id;

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-inter text-neutral-900">
      <Navbar />

      <section className="relative flex min-h-[560px] items-end overflow-hidden px-4 pb-12 pt-28 md:px-8 lg:px-16">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11160d] via-[#11160d]/65 to-[#11160d]/15" />

        <div className="relative z-10 mx-auto w-full max-w-6xl text-white">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-md transition-colors hover:bg-white/25"
          >
            <ArrowLeft size={18} />
            {ui.back}
          </button>

          <div className="max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F3D78B] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#2A3B19]">
              <Sparkles size={16} />
              {item.category}
            </span>
            <h1 className="font-montserrat text-4xl font-bold leading-tight md:text-6xl">
              {item.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
              {item.highlight}
            </p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm text-white/85">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={18} />
                {item.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={18} />
                {item.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B28A32]">
                {ui.sectionBadge}
              </span>
              <h2 className="mt-3 font-montserrat text-3xl font-bold text-[#50652D] md:text-4xl">
                {ui.sectionTitle}
              </h2>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-neutral-700 md:text-lg">
              {item.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#50652D] text-white">
                  <Newspaper size={21} />
                </span>
                <div>
                  <h3 className="font-montserrat text-xl font-bold text-neutral-900">
                    {ui.newsBadge}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {ui.newsSubtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {item.news.map((newsItem) => (
                  <li
                    key={newsItem}
                    className="rounded-2xl bg-[#F4F4F4] p-4 text-sm font-medium leading-relaxed text-neutral-700"
                  >
                    {newsItem}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#F0EFEA] px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#967634]">
              {ui.recBadge}
            </span>
            <h2 className="mt-3 font-montserrat text-3xl font-bold text-neutral-900">
              {ui.recTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {recommendations.map((recommendation) => (
              <Link
                key={recommendation.slug}
                to={`/inovasi/${recommendation.slug}`}
                className="group overflow-hidden rounded-[28px] bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="h-44 overflow-hidden p-3 pb-0">
                  <img
                    src={recommendation.image}
                    alt={recommendation.title}
                    className="h-full w-full rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#B28A32]">
                    {recommendation.category}
                  </p>
                  <h3 className="font-montserrat text-xl font-bold text-neutral-900">
                    {recommendation.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-600">
                    {recommendation.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
