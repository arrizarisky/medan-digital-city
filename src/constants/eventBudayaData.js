import imlekImg from '@/assets/images/Budaya-Tradisi/barongsai.png';
import RamadhanImg from '@/assets/images/Budaya-Tradisi/ramadhan-fair.jpg';
import melayuImg from '@/assets/images/Budaya-Tradisi/festival-melayu-medan.png';
import deepavaliImg from '@/assets/images/Budaya-Tradisi/devapali-festival-medan.png';
import bungabuahImg from '@/assets/images/Budaya-Tradisi/festival-buah.jpg';
import fallbackImg from '@/assets/images/kalender-budaya.jpg';

export const eventBudayaData = [
  {
    id: 'imlek-2026',
    title: {
      id: 'Tahun Baru Imlek 2026',
      en: 'Chinese New Year 2026'
    },
    category: {
      id: 'Festival',
      en: 'Festival'
    },
    date: '17',
    month: {
      id: 'Feb',
      en: 'Feb'
    },
    fullDate: '2026-02-17',
    location: {
      id: 'Kesawan Square, Medan Barat',
      en: 'Kesawan Square, West Medan'
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tjong+A+Fie+Mansion+Medan',
    shortDescription: {
      id: 'Rasakan keriuhan tarian barongsai dan pendar lampion merah yang semarak di kawasan bersejarah Kesawan.',
      en: 'Feel the excitement of the barongsai dance and sparkling red lanterns in the historic Kesawan area.'
    },
    longDescription: {
      id: 'Perayaan Tahun Baru Imlek di Kota Medan berpusat di kawasan cagar budaya Kesawan yang dipenuhi bangunan bergaya kolonial. Ratusan lampion merah akan menghiasi sepanjang jalan, diiringi tabuhan genderang dari atraksi Barongsai dan Liong. Event ini merepresentasikan harmonisasi budaya Tionghoa yang telah lama berakar di Kota Medan dan menjadi daya tarik wisata unggulan.',
      en: 'The Chinese New Year celebration in Medan City is centered in the Kesawan heritage area, filled with colonial-style buildings. Hundreds of red lanterns will decorate the streets, accompanied by the beat of drums from Barongsai and Liong attractions. This event represents the harmonization of Chinese culture that has long taken root in Medan City and become a leading tourist attraction.'
    },
    highlights: {
      id: ['Atraksi Barongsai & Liong', 'Pusat Kuliner Kesawan Square', 'Tur Bangunan Bersejarah'],
      en: ['Barongsai & Lion Dance Attraction', 'Kesawan Square Culinary Hub', 'Historic Buildings Tour']
    },
    image: imlekImg,
    featured: true
  },
  {
    id: 'ramadhan-2026',
    title: {
      id: 'Ramadhan Fair 2026',
      en: 'Ramadhan Fair 2026'
    },
    category: {
      id: 'Religi & Kuliner',
      en: 'Religious & Culinary'
    },
    date: '19',
    month: {
      id: 'Feb',
      en: 'Feb'
    },
    fullDate: '2026-02-19',
    location: {
      id: 'Masjid Raya Al-Mashun',
      en: 'Al-Mashun Grand Mosque'
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Masjid+Raya+Al-Mashun+Medan',
    shortDescription: {
      id: 'Festival kuliner dan keagamaan sebulan penuh yang digelar di pelataran megah Masjid Raya Al-Mashun.',
      en: 'A month-long culinary and religious festival held on the magnificent plaza of Al-Mashun Grand Mosque.'
    },
    longDescription: {
      id: 'Ramadhan Fair merupakan agenda tahunan kebanggaan Kota Medan yang menghidupkan suasana malam selama bulan suci Ramadhan. Diadakan tepat di pelataran Masjid Raya Al-Mashun yang bersejarah, acara ini menyajikan ratusan stan bazar kuliner tradisional khas buka puasa hingga pameran UMKM religi. Selain berburu takjil, pengunjung juga dapat menikmati ragam pentas seni bernuansa Islami setiap malamnya.',
      en: 'Ramadhan Fair is Medan City\'s proud annual event that livens up the night atmosphere during the holy month of Ramadhan. Held right on the historic plaza of Al-Mashun Grand Mosque, this event presents hundreds of traditional culinary bazaar stalls for breaking fast to religious MSME exhibitions. Besides hunting for takjil, visitors can also enjoy various Islamic-themed art performances every night.'
    },
    highlights: {
      id: ['Bazar Kuliner & Takjil', 'Pentas Seni Islami', 'Pameran UMKM Lokal'],
      en: ['Culinary & Takjil Bazaar', 'Islamic Art Performances', 'Local MSME Exhibition']
    },
    image: RamadhanImg
  },
  {
    id: 'melayu-2026',
    title: {
      id: 'Gelar Melayu Serumpun',
      en: 'Gelar Melayu Serumpun'
    },
    category: {
      id: 'Tradisi',
      en: 'Tradition'
    },
    date: '25',
    month: {
      id: 'Jul',
      en: 'Jul'
    },
    fullDate: '2026-07-25',
    location: {
      id: 'Istana Maimun',
      en: 'Maimun Palace'
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Istana+Maimun+Medan',
    shortDescription: {
      id: 'Pesta budaya akbar yang menyatukan perwakilan budaya Melayu dari berbagai penjuru Nusantara.',
      en: 'A grand cultural festival that unites representatives of Malay culture from various corners of the Archipelago.'
    },
    longDescription: {
      id: 'Gelar Melayu Serumpun adalah perhelatan akbar yang didedikasikan untuk merayakan dan melestarikan kekayaan budaya Melayu Deli dan serumpun. Bertempat di halaman Istana Maimun yang ikonik, festival ini menampilkan keanggunan tari Serampang Duabelas, alunan musik Ronggeng, serta peragaan busana adat Melayu. Acara ini juga dihadiri oleh delegasi budaya dari negara-negara tetangga serumpun.',
      en: 'Gelar Melayu Serumpun is a grand event dedicated to celebrating and preserving the rich cultural heritage of Deli Malay and related cultures. Taking place on the grounds of the iconic Maimun Palace, this festival showcases the elegance of Serampang Duabelas dance, Ronggeng music, and Malay traditional fashion shows. This event is also attended by cultural delegations from neighboring countries.'
    },
    highlights: {
      id: ['Pertunjukan Tari Serampang Duabelas', 'Pameran Busana Adat Melayu', 'Konser Musik Ronggeng'],
      en: ['Serampang Duabelas Dance Performance', 'Malay Traditional Fashion Show', 'Ronggeng Music Concert']
    },
    image: melayuImg
  },
  {
    id: 'deepavali-2026',
    title: {
      id: 'Karnaval Deepavali',
      en: 'Deepavali Carnival'
    },
    category: {
      id: 'Budaya',
      en: 'Culture'
    },
    date: '08',
    month: {
      id: 'Nov',
      en: 'Nov'
    },
    fullDate: '2026-11-08',
    location: {
      id: 'Kampung Madras',
      en: 'Kampung Madras'
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kampung+Madras+Medan',
    shortDescription: {
      id: 'Perayaan Festival Cahaya di jantung Kampung Madras dengan parade pakaian tradisional dan bazar.',
      en: 'Celebration of the Festival of Lights in the heart of Kampung Madras with traditional clothing parades and bazaars.'
    },
    longDescription: {
      id: 'Kampung Madras yang dikenal sebagai "Little India" Medan menjadi pusat kemeriahan Karnaval Deepavali setiap tahunnya. Jalanan akan dipenuhi dengan dekorasi cahaya, Rangoli yang indah, dan wangi dupa yang khas. Festival ini dimeriahkan dengan parade pakaian tradisional India, pertunjukan tari-tarian, serta bazar kuliner autentik yang mengundang decak kagum warga dan wisatawan.',
      en: 'Kampung Madras, known as "Little India" of Medan, becomes the center of the Deepavali Carnival excitement every year. The streets will be filled with light decorations, beautiful Rangoli, and the signature aroma of incense. This festival is enlivened with traditional Indian clothing parades, dance performances, and an authentic culinary bazaar that amazes locals and tourists alike.'
    },
    highlights: {
      id: ['Parade Pakaian Tradisional India', 'Bazar Kuliner Autentik', 'Pembuatan Seni Rangoli'],
      en: ['Indian Traditional Clothing Parade', 'Authentic Culinary Bazaar', 'Rangoli Art Making']
    },
    image: deepavaliImg
  },
  {
    id: 'bungabuah-2026',
    title: {
      id: 'Festival Bunga & Buah',
      en: 'Flower & Fruit Festival'
    },
    category: {
      id: 'Festival',
      en: 'Festival'
    },
    date: '15',
    month: {
      id: 'Okt',
      en: 'Oct'
    },
    fullDate: '2026-10-15',
    location: {
      id: 'Lapangan Merdeka',
      en: 'Merdeka Square'
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lapangan+Merdeka+Medan',
    shortDescription: {
      id: 'Pameran hasil bumi terbaik dan pawai kendaraan berhias bunga segar di pusat kota Medan.',
      en: 'Exhibition of the best agricultural products and a float parade decorated with fresh flowers in the center of Medan.'
    },
    longDescription: {
      id: 'Mengadaptasi kekayaan agrikultur Tanah Karo, Festival Bunga dan Buah hadir di pusat kota Medan sebagai bentuk perayaan atas melimpahnya hasil bumi. Rangkaian utamanya meliputi pawai mobil hias menggunakan bunga-bunga segar yang melintasi kawasan Lapangan Merdeka. Selain itu, pengunjung dapat berinteraksi langsung dengan para petani dalam pameran komoditas buah lokal berkualitas ekspor.',
      en: 'Adapting the agricultural richness of Karo Land, the Flower and Fruit Festival comes to Medan city center as a celebration of abundant harvests. Its main series includes a float parade using fresh flowers that crosses the Merdeka Square area. In addition, visitors can interact directly with farmers in the export-quality local fruit commodity exhibition.'
    },
    highlights: {
      id: ['Pawai Mobil Hias Bunga', 'Bursa Pertanian & Buah Lokal', 'Pertunjukan Kesenian Karo'],
      en: ['Flower Float Parade', 'Agricultural & Local Fruit Market', 'Karo Arts Performance']
    },
    image: bungabuahImg
  }
];

export const defaultFallbackImage = fallbackImg;
