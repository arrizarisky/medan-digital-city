import imlekImg from '@/assets/images/Budaya-Tradisi/barongsai.png';
import RamadhanImg from '@/assets/images/Budaya-Tradisi/ramadhan-fair.jpg';
import melayuImg from '@/assets/images/Budaya-Tradisi/festival-melayu-medan.png';
import deepavaliImg from '@/assets/images/Budaya-Tradisi/devapali-festival-medan.png';
import bungabuahImg from '@/assets/images/Budaya-Tradisi/festival-buah.jpg';
import fallbackImg from '@/assets/images/kalender-budaya.jpg';

export const eventBudayaData = [
  {
    id: 'imlek-2026',
    title: 'Tahun Baru Imlek 2026',
    category: 'Festival',
    date: '17',
    month: 'Feb',
    fullDate: '2026-02-17',
    location: 'Kesawan Square, Medan Barat',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tjong+A+Fie+Mansion+Medan',
    shortDescription: 'Rasakan keriuhan tarian barongsai dan pendar lampion merah yang semarak di kawasan bersejarah Kesawan.',
    longDescription: 'Perayaan Tahun Baru Imlek di Kota Medan berpusat di kawasan cagar budaya Kesawan yang dipenuhi bangunan bergaya kolonial. Ratusan lampion merah akan menghiasi sepanjang jalan, diiringi tabuhan genderang dari atraksi Barongsai dan Liong. Event ini merepresentasikan harmonisasi budaya Tionghoa yang telah lama berakar di Kota Medan dan menjadi daya tarik wisata unggulan.',
    highlights: ['Atraksi Barongsai & Liong', 'Pusat Kuliner Kesawan Square', 'Tur Bangunan Bersejarah'],
    image: imlekImg,
    featured: true
  },
  {
    id: 'ramadhan-2026',
    title: 'Ramadhan Fair 2026',
    category: 'Religi & Kuliner',
    date: '19',
    month: 'Feb',
    fullDate: '2026-02-19',
    location: 'Masjid Raya Al-Mashun',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Masjid+Raya+Al-Mashun+Medan',
    shortDescription: 'Festival kuliner dan keagamaan sebulan penuh yang digelar di pelataran megah Masjid Raya Al-Mashun.',
    longDescription: 'Ramadhan Fair merupakan agenda tahunan kebanggaan Kota Medan yang menghidupkan suasana malam selama bulan suci Ramadhan. Diadakan tepat di pelataran Masjid Raya Al-Mashun yang bersejarah, acara ini menyajikan ratusan stan bazar kuliner tradisional khas buka puasa hingga pameran UMKM religi. Selain berburu takjil, pengunjung juga dapat menikmati ragam pentas seni bernuansa Islami setiap malamnya.',
    highlights: ['Bazar Kuliner & Takjil', 'Pentas Seni Islami', 'Pameran UMKM Lokal'],
    image: RamadhanImg
  },
  {
    id: 'melayu-2026',
    title: 'Gelar Melayu Serumpun',
    category: 'Tradisi',
    date: '25',
    month: 'Jul',
    fullDate: '2026-07-25',
    location: 'Istana Maimun',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Istana+Maimun+Medan',
    shortDescription: 'Pesta budaya akbar yang menyatukan perwakilan budaya Melayu dari berbagai penjuru Nusantara.',
    longDescription: 'Gelar Melayu Serumpun adalah perhelatan akbar yang didedikasikan untuk merayakan dan melestarikan kekayaan budaya Melayu Deli dan serumpun. Bertempat di halaman Istana Maimun yang ikonik, festival ini menampilkan keanggunan tari Serampang Duabelas, alunan musik Ronggeng, serta peragaan busana adat Melayu. Acara ini juga dihadiri oleh delegasi budaya dari negara-negara tetangga serumpun.',
    highlights: ['Pertunjukan Tari Serampang Duabelas', 'Pameran Busana Adat Melayu', 'Konser Musik Ronggeng'],
    image: melayuImg
  },
  {
    id: 'deepavali-2026',
    title: 'Karnaval Deepavali',
    category: 'Budaya',
    date: '08',
    month: 'Nov',
    fullDate: '2026-11-08',
    location: 'Kampung Madras',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kampung+Madras+Medan',
    shortDescription: 'Perayaan Festival Cahaya di jantung Kampung Madras dengan parade pakaian tradisional dan bazar.',
    longDescription: 'Kampung Madras yang dikenal sebagai "Little India" Medan menjadi pusat kemeriahan Karnaval Deepavali setiap tahunnya. Jalanan akan dipenuhi dengan dekorasi cahaya, Rangoli yang indah, dan wangi dupa yang khas. Festival ini dimeriahkan dengan parade pakaian tradisional India, pertunjukan tari-tarian, serta bazar kuliner autentik yang mengundang decak kagum warga dan wisatawan.',
    highlights: ['Parade Pakaian Tradisional India', 'Bazar Kuliner Autentik', 'Pembuatan Seni Rangoli'],
    image: deepavaliImg
  },
  {
    id: 'bungabuah-2026',
    title: 'Festival Bunga & Buah',
    category: 'Festival',
    date: '15',
    month: 'Okt',
    fullDate: '2026-10-15',
    location: 'Lapangan Merdeka',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lapangan+Merdeka+Medan',
    shortDescription: 'Pameran hasil bumi terbaik dan pawai kendaraan berhias bunga segar di pusat kota Medan.',
    longDescription: 'Mengadaptasi kekayaan agrikultur Tanah Karo, Festival Bunga dan Buah hadir di pusat kota Medan sebagai bentuk perayaan atas melimpahnya hasil bumi. Rangkaian utamanya meliputi pawai mobil hias menggunakan bunga-bunga segar yang melintasi kawasan Lapangan Merdeka. Selain itu, pengunjung dapat berinteraksi langsung dengan para petani dalam pameran komoditas buah lokal berkualitas ekspor.',
    highlights: ['Pawai Mobil Hias Bunga', 'Bursa Pertanian & Buah Lokal', 'Pertunjukan Kesenian Karo'],
    image: bungabuahImg
  }
];

export const defaultFallbackImage = fallbackImg;
