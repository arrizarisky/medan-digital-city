import OlehOlehImg from "../assets/images/kuliner/bika-ambon.png"; // Ganti dengan path gambar Anda
import HalalImg from "../assets/images/kuliner-hero.png";
import EtikaImg from "../assets/images/kuliner-hero.png";

export const guideConfig = {
  id: {
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
  },
  en: {
    header: "LOCAL GUIDE",
    title: "Master Medan's Culinary",
    subtitle: "From secrets to picking the best durian to the 'Makan Tengah' etiquette, this guide is designed to help you explore flavors like a true local.",
    items: [
      {
        id: "oleh-oleh",
        tabLabel: "Must-Have Souvenirs",
        title: "Bring Home the Taste of Medan",
        desc: "Medan boasts a line of iconic souvenirs. The secret? Buy them in the morning or order a day in advance so they don't run out.",
        image: OlehOlehImg,
        highlights: [
          {
            title: "Bolu Meranti & Bika Ambon",
            text: "Cheese-abundant roll cake and perfectly cavity-textured Bika Ambon. They last up to 3 days at room temperature."
          },
          {
            title: "Durian Keping / Pancake",
            text: "Convenient for cabin carry-on as they are specially packaged using airtight and insulated boxes."
          },
          {
            title: "Passion Fruit Syrup & Sidikalang Coffee",
            text: "Long-lasting souvenirs perfect for family back home. Choose syrup with real passion fruit pulp."
          }
        ],
        actionText: "View Souvenir Map",
        actionPath: "/oleh-oleh",
      },
      {
        id: "halal",
        tabLabel: "Halal Guide",
        title: "Muslim-Friendly Culinary Tourism",
        desc: "Medan's diversity makes it a multicultural culinary paradise. We make it easy for you to find the best legendary halal culinary spots.",
        image: HalalImg,
        highlights: [
          {
            title: "Pagaruyung Area",
            text: "A 100% halal night culinary center, serving a fusion of Indian, Minang, and Malay cuisine."
          },
          {
            title: "Certification & Logo",
            text: "Most legendary restaurants display the MUI Halal logo. When in doubt, don't hesitate to ask the waiter directly."
          },
          {
            title: "Halal-Only Filter",
            text: "Use the filter feature on our digital map to automatically remove non-halal options from your screen."
          }
        ],
        actionText: "Explore Halal List",
        actionPath: "/halal-list",
      },
      {
        id: "etika",
        tabLabel: "Etiquette & Culture",
        title: "Dining Like 'Anak Medan' (Medan Locals)",
        desc: "Blending in with locals is the key to enjoying authentic culinary. Don't be surprised by habits that might feel new to you.",
        image: EtikaImg,
        highlights: [
          {
            title: "'Makan Tengah' Culture",
            text: "The tradition of ordering various side dishes placed in the center of the table to be shared together. Perfect for Minang restaurants or Seafood."
          },
          {
            title: "Loud Voice = Friendliness",
            text: "Medan locals have a firm and loud speaking intonation, especially in coffee shops. It's not anger, but a form of friendliness!"
          },
          {
            title: "Coffee Shop Peak Hours",
            text: "Kopi Tiam (traditional coffee shop) is most crowded between 07:00 - 10:00 AM. Join in for srikaya toast and milk coffee for breakfast."
          }
        ],
        actionText: "Learn Local Culture",
        actionPath: "/budaya",
      },
    ],
  }
};