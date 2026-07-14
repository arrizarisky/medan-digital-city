import OlehOlehImg from "../assets/images/kuliner/bika-ambon.png"; // Ganti dengan path gambar Anda
import HalalImg from "../assets/images/kuliner-hero.png";
import EtikaImg from "../assets/images/kuliner-hero.png";

export const guideConfig = {
  header: "PANDUAN LOKAL",
  title: "Kuasai Kuliner Medan",
  subtitle: "Dari rahasia memilih durian terbaik hingga etika 'Makan Tengah', panduan ini dirancang agar Anda bisa menjelajahi rasa layaknya warga lokal yang sesungguhnya.",
  items: [
    {
      id: "oleh-oleh",
      tabLabel: "Oleh-oleh Wajib",
      title: "Bawa Pulang Rasa Medan",
      desc: "Medan memiliki deretan buah tangan ikonik. Rahasianya? Beli di pagi hari atau pesan sehari sebelumnya agar tidak kehabisan.",
      image: OlehOlehImg,
      highlights: [
        {
          title: "Bolu Meranti & Bika Ambon",
          text: "Bolu gulung dengan keju berlimpah dan Bika Ambon bertekstur rongga sempurna. Bertahan 3 hari di suhu ruang."
        },
        {
          title: "Durian Keping / Pancake",
          text: "Praktis dibawa ke kabin pesawat karena sudah dikemas khusus menggunakan kotak kedap udara dan pendingin."
        },
        {
          title: "Sirup Markisa & Kopi Sidikalang",
          text: "Oleh-oleh tahan lama yang cocok untuk keluarga di rumah. Pilih sirup dengan bulir markisa asli."
        }
      ],
      actionText: "Lihat Peta Oleh-oleh",
      actionPath: "/oleh-oleh",
    },
    {
      id: "halal",
      tabLabel: "Panduan Halal",
      title: "Wisata Kuliner Ramah Muslim",
      desc: "Keberagaman Medan menjadikannya surga kuliner multikultural. Kami memudahkan Anda menemukan titik kuliner halal terbaik yang legendaris.",
      image: HalalImg,
      highlights: [
        {
          title: "Kawasan Pagaruyung",
          text: "Pusat kuliner malam yang 100% halal, menyajikan perpaduan masakan India, Minang, dan Melayu."
        },
        {
          title: "Sertifikasi & Logo",
          text: "Sebagian besar restoran legendaris telah memajang logo Halal MUI. Jika ragu, jangan sungkan untuk bertanya langsung kepada pelayan."
        },
        {
          title: "Filter 'Halal-Only'",
          text: "Gunakan fitur filter pada peta digital kami untuk menyingkirkan opsi non-halal secara otomatis dari layar Anda."
        }
      ],
      actionText: "Eksplorasi Daftar Halal",
      actionPath: "/halal-list",
    },
    {
      id: "etika",
      tabLabel: "Etika & Budaya",
      title: "Makan Ala 'Anak Medan'",
      desc: "Menyatu dengan warga lokal adalah kunci menikmati kuliner otentik. Jangan kaget dengan kebiasaan yang mungkin terasa baru bagi Anda.",
      image: EtikaImg,
      highlights: [
        {
          title: "Budaya 'Makan Tengah'",
          text: "Tradisi memesan banyak lauk berbeda untuk diletakkan di tengah meja dan dimakan bersama-sama. Sangat cocok untuk RM Minang atau Seafood."
        },
        {
          title: "Suara Keras = Keakraban",
          text: "Warga Medan memiliki intonasi bicara yang tegas dan keras, terutama di kedai kopi. Ini bukan marah, melainkan bentuk keakraban!"
        },
        {
          title: "Jam Sibuk Kedai Kopi",
          text: "Kopi Tiam paling ramai pada pukul 07.00 - 10.00 pagi. Bergabunglah untuk sarapan roti srikaya dan kopi susu."
        }
      ],
      actionText: "Pelajari Budaya Lokal",
      actionPath: "/budaya",
    },
  ],
};