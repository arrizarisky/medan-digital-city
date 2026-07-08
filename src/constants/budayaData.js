import imgIstana from '../assets/images/istanamaimun.png';
import imgMelayu from "../assets/images/Budaya-Tradisi/Melayu-deli.png"
import imgBatak from "../assets/images/Budaya-Tradisi/batak-toba.png"
import imgTionghoa from '../assets/images/tjong-afie-mansion.png';
import imgIndia from '../assets/images/bangunan-bersejarah/kuil.jpg';
import imgJawa from '../assets/images/Budaya-Tradisi/jawa.jpg';
import imgMinang from '../assets/images/Budaya-Tradisi/minangkabau.jpg';



const imgHero = imgIstana;
const imgMelayu = imgIstana;
const imgBatak = imgTjongAfie;
const imgTionghoa = imgTjongAfie;
const imgIndia = imgMesjid;
const imgJawa = imgIstana;
const imgMinang = imgTjongAfie;
const imgTortor = imgTjongAfie;
const imgMengalunkan = imgMesjid;
const imgImlek = imgTjongAfie;
const imgRamadan = imgIstana;
const imgDeepavali = imgMesjid;
const imgLoom = imgIstana;
const imgUlos = imgTjongAfie;

export const budayaContent = {
  id: {
    hero: {
      title: "Warisan Budaya Kota Medan",
      subtitle: "Menjelajahi keragaman budaya yang hidup dan berkembang di jantung Sumatera Utara.",
      ctaPrimary: "Jelajahi Budaya",
      ctaSecondary: "Lihat Event",
      image: imgHero,
    },
    mosaik: {
      title: "Mosaik Etnis Medan",
      subtitle: "Keberagaman etnis yang menjadi ciri khas dan kekuatan budaya kota ini.",
      items: [
        { id: "melayu", name: "Melayu Deli", description: "Suku asli yang mendirikan Kesultanan Deli dan dikenal dengan adat istiadatnya yang megah.", image: imgMelayu },
        { id: "batak", name: "Batak", description: "Suku dengan seni tari dan musik tradisional yang kaya dan penuh semangat.", image: imgBatak },
        { id: "tionghoa", name: "Tionghoa", description: "Budaya Tionghoa yang berpengaruh dalam arsitektur dan kuliner Medan.", image: imgTionghoa },
        { id: "india", name: "India", description: "Budaya India dengan warna-warni festival dan warisan kuliner pedas.", image: imgIndia },
        { id: "jawa", name: "Jawa", description: "Budaya Jawa yang membawa nuansa tenang dan kesenian yang indah.", image: imgJawa },
        { id: "minang", name: "Minangkabau", description: "Budaya matrilineal yang terkenal dengan adat yang kental dan kuliner rendang.", image: imgMinang },
      ],
    },
    seni: {
      title: "Seni Tari & Musik",
      cta: "Lihat Galeri Seni",
      heroItem: { id: "tortor", title: "Tari Tortor", subtitle: "Tari tradisional Batak yang penuh makna dan kebanggaan.", image: imgTortor },
      rightItem: { id: "mangalahat", title: "Mangalahat Horbo", subtitle: "Ritual adat paling agung sebagai bentuk rasa syukur, penyucian diri, dan permohonan berkat kepada Sang Pencipta.", image: imgMengalunkan },
      featureItems: [
        { id: "gordang", title: "Gordang Sambilan", subtitle: "Sembilan gendang besar sakral dari Mandailing." },
        { id: "opera", title: "Opera Batak", subtitle: "Pertunjukan teater rakyat yang memadukan komedi dan tragedi." },
      ],
      gridItems: [
        { id: "menari", title: "Mengalunkan Merdu", subtitle: "Kesenian yang menjadi bagian integral dari budaya setiap etnis.", image: imgMengalunkan },
        { id: "gendang", title: "Gendang Sembilan", subtitle: "Alat musik tradisional Melayu yang iconic.", icon: "🎵" },
        { id: "gong", title: "Gong & Kecapi", subtitle: "Alat musik yang menjadi bagian dari berbagai ritual budaya.", icon: "🥁" },
      ],
    },
    kalender: {
      title: "Kalender Budaya",
      items: [
        { id: "jan-feb", month: "Januari - Februari", title: "Keseruan Imlek Fair", description: "Perayaan Tahun Baru Cina dengan parade barongsai, liong, dan berbagai kuliner khas.", color: "red", image: imgImlek },
        { id: "mar-apr", month: "Maret - April", title: "Ramadan Fair", description: "Pasar malam Ramadan yang menawarkan berbagai makanan khas nusantara.", color: "green", image: imgRamadan },
        { id: "mei-jun", month: "Mei - Juni", title: "Deepavali Little India", description: "Perayaan Festival Cahaya dengan dekorasi lampu dan tari-tarian tradisional India.", color: "gold", image: imgDeepavali },
      ],
    },
    sorotan: {
      title: "Ulos: Benang yang Menyatukan Doa",
      descriptionLeft: "Ulos bukan hanya kain tradisional Batak, tetapi juga simbol doa dan keberkahan. Setiap motif pada ulos memiliki makna khusus dan cerita panjang yang diwariskan turun-temurun.",
      descriptionRight: "Proses pembuatan ulos membutuhkan kesabaran dan ketelitian tinggi. Tenun tangan ini menjadi warisan budaya yang harus dilestarikan untuk generasi mendatang.",
      images: [imgLoom, imgUlos],
    },
  },
  en: {
    hero: {
      title: "Cultural Heritage of Medan",
      subtitle: "Exploring the living and thriving cultural diversity in the heart of North Sumatra.",
      ctaPrimary: "Explore Culture",
      ctaSecondary: "View Events",
      image: imgHero,
    },
    mosaik: {
      title: "Medan's Ethnic Mosaic",
      subtitle: "Ethnic diversity that is the characteristic and cultural strength of this city.",
      items: [
        { id: "melayu", name: "Malay Deli", description: "The native tribe that founded the Deli Sultanate, known for their magnificent customs.", image: imgMelayu },
        { id: "batak", name: "Batak", description: "A tribe with rich and spirited traditional dance and music.", image: imgBatak },
        { id: "tionghoa", name: "Chinese", description: "Chinese culture that influences Medan's architecture and cuisine.", image: imgTionghoa },
        { id: "india", name: "Indian", description: "Indian culture with colorful festivals and spicy culinary heritage.", image: imgIndia },
        { id: "jawa", name: "Javanese", description: "Javanese culture that brings calm nuances and beautiful arts.", image: imgJawa },
        { id: "minang", name: "Minangkabau", description: "Matrilineal culture famous for strong customs and rendang cuisine.", image: imgMinang },
      ],
    },
    seni: {
      title: "Dance & Music Arts",
      cta: "View Art Gallery",
      heroItem: { id: "tortor", title: "Tari Tortor", subtitle: "Traditional Batak dance full of meaning and pride.", image: imgTortor },
      rightItem: { id: "mangalahat", title: "Mangalahat Horbo", subtitle: "The greatest traditional ritual as a form of gratitude, purification, and prayer for blessings from the Creator.", image: imgMengalunkan },
      featureItems: [
        { id: "gordang", title: "Gordang Sambilan", subtitle: "Nine sacred large drums from Mandailing." },
        { id: "opera", title: "Batak Opera", subtitle: "Folk theater performance blending comedy and tragedy." },
      ],
      gridItems: [
        { id: "menari", title: "Melodious Performances", subtitle: "Performing arts that are an integral part of every ethnic culture.", image: imgMengalunkan },
        { id: "gendang", title: "Gendang Sembilan", subtitle: "Iconic traditional Malay musical instrument.", icon: "🎵" },
        { id: "gong", title: "Gong & Kecapi", subtitle: "Musical instruments that are part of various cultural rituals.", icon: "🥁" },
      ],
    },
    kalender: {
      title: "Cultural Calendar",
      items: [
        { id: "jan-feb", month: "January - February", title: "Imlek Fair Excitement", description: "Chinese New Year celebration with barongsai parade, lion dance, and various authentic cuisines.", color: "red", image: imgImlek },
        { id: "mar-apr", month: "March - April", title: "Ramadan Fair", description: "Ramadan night market offering various authentic Nusantara foods.", color: "green", image: imgRamadan },
        { id: "mei-jun", month: "May - June", title: "Deepavali Little India", description: "Festival of Lights celebration with lamp decorations and traditional Indian dances.", color: "gold", image: imgDeepavali },
      ],
    },
    sorotan: {
      title: "Ulos: Threads that Unite Prayers",
      descriptionLeft: "Ulos is not just a traditional Batak cloth, but also a symbol of prayer and blessings. Each motif on ulos has a special meaning and long story passed down through generations.",
      descriptionRight: "The process of making ulos requires high patience and precision. This hand-woven fabric is a cultural heritage that must be preserved for future generations.",
      images: [imgLoom, imgUlos],
    },
  }
};
