import { createElement } from "react";
import BapendaImg from "../assets/images/Teknologi-Modern/Bapenda.png";

const createIcon = (children) =>
  createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    ...children,
  );

export const digitalConfig = {
  header: "E-GOVERNMENT",
  title: "Modernisasi Pasar & Layanan Publik",
  cards: [
    {
      id: 1,
      title: "Bapenda Digital",
      desc: "Sistem perpajakan kota yang transparan dan instan, memudahkan warga berkontribusi bagi pembangunan melalui satu pintu digital.",
      iconBg: "bg-[#8A9C69]",
      iconColor: "text-[#2A3B19]",
      icon: createIcon([
        createElement("rect", { width: 20, height: 14, x: 2, y: 5, rx: 2 }),
        createElement("circle", { cx: 12, cy: 12, r: 3 }),
      ]),
    },
    {
      id: 2,
      title: "Pasar Petisah 4.0",
      desc: "Modernisasi transaksi non-tunai di Pasar Petisah untuk akuntabilitas dan efisiensi pedagang lokal menyongsong era ekonomi digital.",
      iconBg: "bg-[#F3D78B]",
      iconColor: "text-[#5C4033]",
      icon: createIcon([
        createElement("path", {
          d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
        }),
        createElement("path", { d: "M3 6h18" }),
        createElement("path", { d: "M16 10a4 4 0 0 1-8 0" }),
      ]),
    },
  ],
  banner: {
    title: "Dengan QRIS dan Virtual Account,",
    subtitle: "Pembayaran Pajak Secara Digital Lebih Mudah",
    quote:
      '"Transformasi digital bukan sekadar teknologi, tapi tentang kemudahan bagi setiap warga Medan."',
    image: BapendaImg,
  },
};
