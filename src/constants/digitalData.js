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
      slug: "bapenda-digital",
      title: "Bapenda Digital",
      desc: "Sistem perpajakan kota yang transparan dan instan, memudahkan warga berkontribusi bagi pembangunan melalui satu pintu digital.",
      category: "E-Government",
      date: "Transformasi layanan publik",
      image: BapendaImg,
      location: "Kota Medan",
      highlight:
        "Digitalisasi pajak daerah membantu warga dan pelaku usaha mengakses pembayaran, pelaporan, dan informasi pajak dengan proses yang lebih ringkas.",
      content: [
        "Bapenda Digital menjadi salah satu wajah transformasi layanan publik di Medan. Pendekatan ini menempatkan kanal pembayaran digital sebagai pintu masuk agar masyarakat tidak lagi bergantung pada proses manual yang memakan waktu.",
        "Melalui dukungan QRIS, virtual account, dan sistem informasi pajak daerah, proses administrasi dapat dilacak lebih transparan. Inovasi ini juga membantu pemerintah kota memperkuat akuntabilitas penerimaan daerah untuk membiayai pembangunan.",
        "Bagi pelaku usaha, layanan digital seperti ini penting karena kewajiban pajak dapat diselesaikan dengan bukti transaksi yang lebih rapi, cepat, dan mudah diarsipkan."
      ],
      news: [
        "Pemanfaatan kanal pembayaran non-tunai untuk pajak daerah.",
        "Peningkatan transparansi data penerimaan melalui layanan digital.",
        "Kemudahan akses bagi warga tanpa harus selalu datang ke kantor layanan."
      ],
      iconBg: "bg-[#8A9C69]",
      iconColor: "text-[#2A3B19]",
      icon: createIcon([
        createElement("rect", { width: 20, height: 14, x: 2, y: 5, rx: 2 }),
        createElement("circle", { cx: 12, cy: 12, r: 3 }),
      ]),
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
      highlight:
        "Modernisasi pasar mendorong pedagang lokal memakai transaksi non-tunai sehingga pencatatan usaha menjadi lebih praktis dan pembeli punya pilihan pembayaran yang lebih luas.",
      content: [
        "Pasar Petisah 4.0 menggambarkan arah baru pasar tradisional di Medan: tetap dekat dengan aktivitas ekonomi rakyat, tetapi mulai diperkuat oleh transaksi digital dan pencatatan yang lebih tertib.",
        "Penerapan pembayaran non-tunai seperti QRIS membantu pedagang menerima pembayaran dari berbagai aplikasi keuangan. Cara ini mengurangi ketergantungan pada uang tunai dan mempercepat proses jual beli di area pasar yang padat.",
        "Inovasi pasar digital juga membuka peluang pengembangan data ekonomi lokal, mulai dari pola transaksi, kebutuhan pedagang, hingga program pendampingan UMKM yang lebih tepat sasaran."
      ],
      news: [
        "Dorongan penggunaan QRIS untuk transaksi pasar.",
        "Peluang integrasi data UMKM dan pedagang tradisional.",
        "Pengalaman belanja yang lebih cepat bagi pengunjung pasar."
      ],
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
