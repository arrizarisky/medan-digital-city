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

const iconPayment = createIcon([
  createElement("rect", { width: 20, height: 14, x: 2, y: 5, rx: 2 }),
  createElement("circle", { cx: 12, cy: 12, r: 3 }),
]);

const iconMarket = createIcon([
  createElement("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
  createElement("path", { d: "M3 6h18" }),
  createElement("path", { d: "M16 10a4 4 0 0 1-8 0" }),
]);

export const digitalConfig = {
  id: {
    header: "E-GOVERNMENT",
    title: "Modernisasi Pasar & Layanan Publik",
    cards: [
      {
        id: 1,
        slug: "bapenda-digital",
        title: "Bapenda Digital",
        desc: "Sistem perpajakan kota yang transparan dan instan, memudahkan warga berkontribusi bagi pembangunan melalui satu pintu digital.",
        category: "E-Government",
        date: "Transformasi layanan publik",
        image: BapendaImg,
        location: "Kota Medan",
        highlight: "Digitalisasi pajak daerah membantu warga dan pelaku usaha mengakses pembayaran, pelaporan, dan informasi pajak dengan proses yang lebih ringkas.",
        content: [
          "Bapenda Digital menjadi salah satu wajah transformasi layanan publik di Medan. Pendekatan ini menempatkan kanal pembayaran digital sebagai pintu masuk agar masyarakat tidak lagi bergantung pada proses manual yang memakan waktu.",
          "Melalui dukungan QRIS, virtual account, dan sistem informasi pajak daerah, proses administrasi dapat dilacak lebih transparan. Inovasi ini juga membantu pemerintah kota memperkuat akuntabilitas penerimaan daerah untuk membiayai pembangunan.",
          "Bagi pelaku usaha, layanan digital seperti ini penting karena kewajiban pajak dapat diselesaikan dengan bukti transaksi yang lebih rapi, cepat, dan mudah diarsipkan.",
        ],
        news: [
          "Pemanfaatan kanal pembayaran non-tunai untuk pajak daerah.",
          "Peningkatan transparansi data penerimaan melalui layanan digital.",
          "Kemudahan akses bagi warga tanpa harus selalu datang ke kantor layanan.",
        ],
        iconBg: "bg-[#8A9C69]",
        iconColor: "text-[#2A3B19]",
        icon: iconPayment,
      },
      {
        id: 2,
        slug: "pasar-petisah-4-0",
        title: "Pasar Petisah 4.0",
        desc: "Modernisasi transaksi non-tunai di Pasar Petisah untuk akuntabilitas dan efisiensi pedagang lokal menyongsong era ekonomi digital.",
        category: "Ekonomi Digital",
        date: "Digitalisasi pasar tradisional",
        image: BapendaImg,
        location: "Pasar Petisah, Medan",
        highlight: "Modernisasi pasar mendorong pedagang lokal memakai transaksi non-tunai sehingga pencatatan usaha menjadi lebih praktis dan pembeli punya pilihan pembayaran yang lebih luas.",
        content: [
          "Pasar Petisah 4.0 menggambarkan arah baru pasar tradisional di Medan: tetap dekat dengan aktivitas ekonomi rakyat, tetapi mulai diperkuat oleh transaksi digital dan pencatatan yang lebih tertib.",
          "Penerapan pembayaran non-tunai seperti QRIS membantu pedagang menerima pembayaran dari berbagai aplikasi keuangan. Cara ini mengurangi ketergantungan pada uang tunai dan mempercepat proses jual beli di area pasar yang padat.",
          "Inovasi pasar digital juga membuka peluang pengembangan data ekonomi lokal, mulai dari pola transaksi, kebutuhan pedagang, hingga program pendampingan UMKM yang lebih tepat sasaran.",
        ],
        news: [
          "Dorongan penggunaan QRIS untuk transaksi pasar.",
          "Peluang integrasi data UMKM dan pedagang tradisional.",
          "Pengalaman belanja yang lebih cepat bagi pengunjung pasar.",
        ],
        iconBg: "bg-[#F3D78B]",
        iconColor: "text-[#5C4033]",
        icon: iconMarket,
      },
    ],
    banner: {
      quote: '"Transformasi digital bukan sekadar teknologi, tapi tentang kemudahan bagi setiap warga Medan."',
      image: BapendaImg,
    },
  },
  en: {
    header: "E-GOVERNMENT",
    title: "Market Modernization & Public Services",
    cards: [
      {
        id: 1,
        slug: "bapenda-digital",
        title: "Bapenda Digital",
        desc: "A transparent and instant city tax system that makes it easy for residents to contribute to development through a single digital gateway.",
        category: "E-Government",
        date: "Public service transformation",
        image: BapendaImg,
        location: "Medan City",
        highlight: "The digitization of regional taxes helps residents and businesses access payments, reporting, and tax information through a simpler process.",
        content: [
          "Bapenda Digital (Regional Revenue Agency) has become one of the faces of public service transformation in Medan. This approach places digital payment channels as the entry point so the public no longer depends on time-consuming manual processes.",
          "Through QRIS, virtual accounts, and regional tax information systems, administrative processes can be tracked more transparently. This innovation also helps the city government strengthen accountability of regional revenue to finance development.",
          "For businesses, digital services like this are important because tax obligations can be settled with cleaner, faster, and easier-to-archive transaction evidence.",
        ],
        news: [
          "Utilization of non-cash payment channels for regional taxes.",
          "Increased transparency of revenue data through digital services.",
          "Easier access for residents without always having to visit service offices.",
        ],
        iconBg: "bg-[#8A9C69]",
        iconColor: "text-[#2A3B19]",
        icon: iconPayment,
      },
      {
        id: 2,
        slug: "pasar-petisah-4-0",
        title: "Pasar Petisah 4.0",
        desc: "Modernization of cashless transactions at Pasar Petisah for the accountability and efficiency of local traders in the digital economy era.",
        category: "Digital Economy",
        date: "Traditional market digitalization",
        image: BapendaImg,
        location: "Pasar Petisah, Medan",
        highlight: "Market modernization encourages local traders to use cashless transactions so that business records become more practical and buyers have a wider range of payment options.",
        content: [
          "Pasar Petisah 4.0 describes a new direction for traditional markets in Medan: remaining close to people's economic activities, but beginning to be strengthened by digital transactions and more orderly record-keeping.",
          "The application of cashless payments such as QRIS helps traders accept payments from various financial applications, reducing dependence on cash and speeding up transactions in the dense market area.",
          "Digital market innovation also opens up opportunities for developing local economic data, from transaction patterns and trader needs to more targeted MSME (Micro, Small, Medium Enterprise) assistance programs.",
        ],
        news: [
          "Encouraging the use of QRIS for market transactions.",
          "Opportunities for integration of MSME and traditional trader data.",
          "Faster shopping experience for market visitors.",
        ],
        iconBg: "bg-[#F3D78B]",
        iconColor: "text-[#5C4033]",
        icon: iconMarket,
      },
    ],
    banner: {
      quote: '"Digital transformation is not just about technology, but about making life easier for every Medan citizen."',
      image: BapendaImg,
    },
  },
};
