import Bag from "../assets/icons/bag.svg";
export const guideConfig = {
  title: "Tips & Panduan Kuliner",
  subtitle:
    "Informasi praktis untuk perjalanan rasa Anda di Kota Medan, mulai dari oleh-oleh wajib hingga etika makan lokal.",
  items: [
    {
      id: 1,
      title: "Oleh-oleh Wajib",
      type: "list",
      listItems: [
        "Bolu Meranti",
        "Bika Ambon Zulaikha",
        "Sirup Markisa Noerlen",
      ],
      actionText: "Baca Detail",
      actionPath: "/oleh-oleh",
      cardClass: "bg-[#EFEFE9] text-[#50652D]",
      btnClass: "text-[#50652D] hover:opacity-80",
      icon: Bag,
    },
    {
      id: 2,
      title: "Sertifikasi Halal",
      type: "text",
      desc: "Kami mengkurasi tempat makan dengan label Halal yang jelas untuk kenyamanan pengunjung muslim. Gunakan filter 'Halal-Only' di peta kami.",
      actionText: "Lihat Daftar Halal",
      actionPath: "/halal-list",
      cardClass: "bg-[#50652D] text-white",
      btnClass:
        "bg-white text-[#50652D] hover:bg-white/90 px-5 py-2.5 rounded-full text-xs font-bold shadow-sm self-start mt-4",
      icon: "shield",
    },
    {
      id: 3,
      title: "Etika Lokal",
      type: "text",
      desc: "Warga Medan dikenal ramah namun lugas. Jangan kaget dengan suara keras di kedai kopi, itu adalah tanda keakraban!",
      actionText: "Tips Lainnya",
      actionPath: "/tips-lainnya",
      cardClass: "bg-[#E9D48F] text-[#423419]",
      btnClass: "text-[#423419] hover:opacity-80",
      icon: "book",
    },
  ],
};
