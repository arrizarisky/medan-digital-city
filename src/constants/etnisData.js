// Aset Melayu
import imgMelayuDeli from '@/assets/images/detail/Melayu deli.png';
import imgBajuMelayu from '@/assets/images/detail/baju-adat-melayu.png';
import imgMelayuTempoDulu from '@/assets/images/detail/melayu-tempo-dulu.png';
import imgNasiLemak from '@/assets/images/detail/nasi-lemak.png';
import imgBuburPedas from '@/assets/images/detail/bubur pedas.png';
import imgIstanaMaimun from '@/assets/images/detail/istana maimun.jpg';
import imgMesjidRaya from '@/assets/images/detail/masjid raya 2.jpg';

// Aset Batak
import imgBatakToba from '@/assets/images/detail/batak toba.png';
import imgUlos from '@/assets/images/Budaya-Tradisi/ulos.jpeg';
import imgBatakTempoDulu from '@/assets/images/detail/batak-tempo-dulu.png';
import imgIkanMasArsik from '@/assets/images/detail/ikan mas arsik.jpg';
import imgKopiSidikalang from '@/assets/images/detail/kopi sidikalang.jpg';
import imgHKBP from '@/assets/images/detail/HKBP Sudirman.jpg';
import imgJamburKaro from '@/assets/images/detail/Jambur Karo.jpeg';

// Aset Jawa
import imgJawaTempoDulu from '@/assets/images/detail/jawa tempo doloe.jpeg';
import imgKudaLumping from '@/assets/images/detail/kuda lumping.png';
import imgPecalJawa from '@/assets/images/detail/pecal jawa.jpg';
import imgBakso from '@/assets/images/detail/bakso.jpg';
import imgPendopoPujakesuma from '@/assets/images/detail/pendopo pujakesuma.jpg';
import imgMasjidJami from '@/assets/images/detail/masjid jami.webp';

// Aset Tionghoa
import imgKesawan from '@/assets/images/Bangunan-bersejarah/tjong-afie-mansion-2.png';
import imgTiongHoaTempoDulu from '@/assets/images/detail/tionghoa old.png';
import imgBarongsai from '@/assets/images/Budaya-Tradisi/barongsai.png';
import imgBakpao from '@/assets/images/detail/bakpao.jpg';
import imgDimsum from '@/assets/images/detail/dimsum.jpg';
import imgMahaVihara from '@/assets/images/detail/maha vihara maitreya.jpeg';

// Aset India
import imgIndiaTempoDulu from '@/assets/images/detail/etnis india tempo dulu.jpg';
import imgKuilIndia from '@/assets/images/Budaya-Tradisi/thaipusam-india.png';
import imgKuilHero from '@/assets/images/detail/india hero.png';
import imgKuil from '@/assets/images/detail/kuil.jpg';
import imgNasiBriyani from '@/assets/images/detail/nasi briyani.jpg';
import imgRotiCanai from '@/assets/images/detail/roti canai.jpg';
import imgMasjidGhaudiyah from '@/assets/images/detail/masjid al ghaudiyah.jpg';

// Aset Minangkabau
import imgMinangTempoDulu from '@/assets/images/detail/minangkabau tempo dulul.jpg';
import imgPiringHero from '@/assets/images/detail/piring hero.png';
import imgTariPiring from '@/assets/images/detail/tari piring 2.jpg';
import imgRendang from '@/assets/images/detail/rendang.jpg';
import imgSatePadang from '@/assets/images/detail/sate padang.jpg';
import imgRumahGadang from '@/assets/images/detail/rumah-gadang.png';
import imgGedungDakwah from '@/assets/images/detail/gedung-dakwah.png';

// Aset Ikon (Tambahan jika diperlukan oleh komponen UI di masa depan)
import iconMesjid from '@/assets/icons/mesjid.svg';
import iconLocation from '@/assets/icons/location.svg';
import iconKalender from '@/assets/icons/kalender.svg';
import iconPeople from '@/assets/icons/people.svg';
import iconSejarah from '@/assets/icons/sejarah.svg';
import iconTopeng from '@/assets/icons/topeng.svg';
import iconAlatMakan from '@/assets/icons/alat-makan.svg';

export const etnisDetailData = {
  melayu: {
    slug: 'melayu',
    heroTitle: { id: 'Jiwa dari Tanah Deli', en: 'The Soul of Deli Land' },
    heroSubtitle: { id: 'Temukan warisan luhur \'Bunga Bangsa\' sebuah kebudayaan yang penuh keanggunan, nilai diplomasi, serta tradisi abadi di jantung Sumatra Utara', en: 'Discover the noble heritage of \'Bunga Bangsa\', a culture full of elegance, diplomatic values, and eternal traditions in the heart of North Sumatra' },
    heroImage: imgMelayuDeli,

    sejarah: {
      tag: { id: 'SEJARAH & ASAL USUL', en: 'HISTORY & ORIGINS' },
      title: { id: 'Warisan \'Bunga Bangsa\'', en: 'Heritage of \'Bunga Bangsa\'' },
      paragraphs: {
        id: [
          'Kesultanan Deli yang dirintis sejak tahun 1632 menjadi fondasi utama identitas Melayu di Kota Medan.',
          'Dikenal dengan sebutan \'Bunga Bangsa\', etnis Melayu Deli merepresentasikan kehalusan budaya serta sejarah sosial-politik kawasan ini. Di bawah kepemimpinan Tuanku Panglima Gocah Pahlawan, kesultanan ini berkembang pesat menjadi pusat perdagangan dan diplomasi internasional.'
        ],
        en: [
          'The Deli Sultanate, founded in 1632, became the main foundation of Malay identity in Medan City.',
          'Known as \'Bunga Bangsa\', the Deli Malay ethnic group represents the cultural refinement and socio-political history of this region. Under the leadership of Tuanku Panglima Gocah Pahlawan, the sultanate rapidly developed into an international trade and diplomatic center.'
        ]
      },
      quote: { id: '"Di mana tanah Deli bertemu dengan lautan, di situlah kebudayaan Melayu tumbuh mekar di setiap relung hati dan sanubari."', en: '"Where Deli land meets the sea, that is where Malay culture flourishes in every corner of the heart and soul."' },
      archiveImage: imgMelayuTempoDulu,
      archiveCaption: { id: 'Arsip Sejarah Melayu Deli', en: 'Deli Malay History Archive' }
    },

    pilarBudaya: {
      title: { id: 'Pilar Kebudayaan', en: 'Cultural Pillars' },
      subtitle: { id: 'Esensi Melayu Deli terus lestari melalui keelokan seni, busana tradisional, serta ritme kehidupan sehari-hari yang penuh dengan nilai puitis.', en: 'The essence of Deli Malay continues to thrive through the beauty of art, traditional clothing, and the rhythm of daily life full of poetic values.' },
      baju: {
        title: { id: 'Baju Kurung & Cekak Musang', en: 'Baju Kurung & Cekak Musang' },
        description: { id: 'Simbol kesantunan dan kebangsawanan, yang dicirikan oleh indahnya tenunan Songket serta hiasan kepala ikonik berupa \'Tanjak\'.', en: 'A symbol of politeness and nobility, characterized by the beauty of Songket weaving and the iconic \'Tanjak\' headpiece.' },
        image: imgBajuMelayu
      },
      tari: {
        title: { id: 'Tari Zapin', en: 'Zapin Dance' },
        description: { id: 'Tarian berirama dinamis hasil akulturasi Arab-Melayu, yang dibawakan melalui gerakan kaki yang anggun mengikuti ketukan marwas.', en: 'A dynamic rhythmic dance from Arab-Malay acculturation, performed with graceful foot movements following marwas beats.' },
        icon: iconTopeng
      },
      pantun: {
        title: { id: 'Pantun Tradition', en: 'Pantun Tradition' },
        description: { id: 'Seni puisi lama yang diucapkan secara spontan, sering digunakan dalam pernikahan dan upacara adat untuk menyampaikan petuah bijaksana, jenaka, hingga rasa hormat.', en: 'An ancient poetic art spoken spontaneously, often used in weddings and traditional ceremonies to convey wise advice, humor, and respect.' },
        quoteText: { id: 'Hancur badan dikandung tanah, budi yang baik terkenan jua.', en: 'Hancur badan dikandung tanah, budi yang baik terkenan jua.' },
        quoteAuthor: { id: 'PERIBAHASA MELAYU KLASIK', en: 'CLASSIC MALAY PROVERB' },
        quoteMeaning: { id: 'Meskipun seseorang sudah meninggal dunia, kebaikan dan budi pekerti baik yang pernah ia lakukan di dunia akan tetap diingat dan dikenang oleh orang lain selama-lamanya.', en: 'Even though someone has passed away, the kindness and good character they once showed in the world will always be remembered by others forever.' }
      }
    },

    kuliner: {
      title: { id: 'Cita Rasa Kerajaan', en: 'Royal Flavors' },
      description: { id: 'Kuliner Melayu Deli merupakan perpaduan istimewa antara bahan lokal dan rempah dunia. Setiap hidangannya mencerminkan kehangatan dan keramahan khas Kesultanan.', en: 'Deli Malay cuisine is a special blend of local ingredients and world spices. Each dish reflects the warmth and hospitality of the Sultanate.' },
      images: [imgNasiLemak, imgBuburPedas],
      menus: [
        { 
          name: { id: 'Nasi Lemak Deli', en: 'Nasi Lemak Deli' }, 
          desc: { id: 'Berbeda dari versi biasa, Nasi Lemak khas Deli terkenal dengan aroma rempahnya yang lebih kaya serta lauk pendamping yang spesifik, seperti paru goreng atau rendang.', en: 'Different from the usual version, Deli-style Nasi Lemak is famous for its richer spice aroma and specific side dishes, such as fried lung or rendang.' }, 
          icon: iconAlatMakan 
        },
        { 
          name: { id: 'Bubur Pedas', en: 'Bubur Pedas' }, 
          desc: { id: 'Sajian kaya nutrisi yang terbuat dari lebih dari 40 jenis umbi, rempah, dan dedaunan, yang secara tradisi disajikan selama bulan Ramadan di Masjid Raya.', en: 'A nutrient-rich dish made from more than 40 types of tubers, spices, and leaves, traditionally served during Ramadan at the Grand Mosque.' }, 
          icon: iconAlatMakan 
        }
      ]
    },

    arsitektur: {
      title: { id: 'Ikon Arsitektur', en: 'Architectural Icons' },
      subtitle: { id: 'Siluet cakrawala Kota Medan diperindah oleh kemegahan kubah ikonik dan lengkungan arsitektur bernilai seni tinggi dari situs warisan Deli.', en: 'Medan City\'s skyline silhouette is beautified by iconic domes and high artistic value architectural arches from Deli heritage sites.' },
      items: [
        {
          title: { id: 'Istana Maimun', en: 'Maimun Palace' },
          description: { id: 'Dibangun pada tahun 1888, istana dengan 30 ruangan ini menampilkan perpaduan eklektik antara gaya arsitektur Melayu, Islam, dan Eropa. Hingga kini, istana ini tetap tegak sebagai simbol kejayaan Kesultanan Deli.', en: 'Built in 1888, this 30-room palace showcases an eclectic blend of Malay, Islamic, and European architectural styles. To this day, the palace remains standing as a symbol of the Deli Sultanate\'s glory.' },
          category: { id: 'Monumen Budaya', en: 'Cultural Monument' },
          image: imgIstanaMaimun
        },
        {
          title: { id: 'Masjid Raya Al-Mashun', en: 'Al-Mashun Grand Mosque' },
          description: { id: 'Dirancang oleh arsitek asal Belanda, Masjid Raya ini menjadi pusat spiritual Kesultanan Deli yang megah dengan hamparan keramik Maroko serta lantai marmer Italia.', en: 'Designed by a Dutch architect, this Grand Mosque became the magnificent spiritual center of the Deli Sultanate with Moroccan ceramic tiles and Italian marble floors.' },
          category: { id: 'Landmark Keagamaan', en: 'Religious Landmark' },
          image: imgMesjidRaya
        }
      ]
    }
  },

  batak: {
    slug: 'batak',
    heroTitle: { id: 'Etnis Batak', en: 'Batak Ethnic Group' },
    heroSubtitle: { id: 'Jiwa dari Dataran Tinggi — Etnis Batak. Menelusuri jejak dan warisan leluhur Sumatra Utara melalui keberagaman sub-etnis masyarakat Batak.', en: 'The Soul of the Highlands — Batak. Tracing the traces and ancestral heritage of North Sumatra through the diversity of Batak sub-ethnic groups.' },
    heroImage: imgBatakToba,

    sejarah: {
      tag: { id: 'SEJARAH & ASAL USUL', en: 'HISTORY & ORIGINS' },
      title: { id: 'Warisan \'Halak Batak\'', en: 'Heritage of \'Halak Batak\'' },
      paragraphs: {
        id: [
          'Masyarakat Batak, dengan akar sejarah yang terbentang luas di kawasan dataran tinggi Sumatra Utara, merupakan pilar penting identitas budaya Nusantara.',
          'Terbagi ke dalam berbagai sub-etnis yang kaya akan keunikan, suku Batak merepresentasikan kekuatan tradisi, sistem kekerabatan yang erat, serta sejarah ketangguhan sosial di wilayah ini. Di bawah falsafah adat luhur dan struktur marga yang mengakar kuat, kebudayaan ini terus tumbuh subur menjadi simbol kehormatan, persaudaraan, dan diplomasi adat yang tak lekang oleh waktu.'
        ],
        en: [
          'The Batak community, with deep historical roots in the highlands of North Sumatra, is an important pillar of Nusantara cultural identity.',
          'Divided into various unique sub-ethnic groups, the Batak people represent the strength of traditions, close kinship systems, and the history of social resilience in this region. Under noble customary philosophy and deeply rooted clan structures, this culture continues to thrive as a symbol of honor, brotherhood, and time-honored customary diplomacy.'
        ]
      },
      quote: { id: '"Di mana angin dataran tinggi berembus melintasi pegunungan dan danau, di situlah jiwa masyarakat Batak teguh berdiri di dalam setiap langkah dan garis keturunan."', en: '"Where the highland winds blow across mountains and lakes, that is where the Batak community\'s soul stands firm in every step and lineage."' },
      archiveImage: imgBatakTempoDulu,
      archiveCaption: { id: 'Arsip Sejarah Batak', en: 'Batak History Archive' }
    },

    pilarBudaya: {
      title: { id: 'Tiga Pilar Dalihan Na Tolu', en: 'Three Pillars of Dalihan Na Tolu' },
      subtitle: { id: 'Filosofi "Tungku Berkaki Tiga" yang menjadi fondasi utama struktur sosial masyarakat Batak, menjaga keharmonisan melalui keseimbangan antara tiga peran penting.', en: 'The "Three-Legged Stool" philosophy that is the main foundation of Batak social structure, maintaining harmony through the balance of three important roles.' },
      baju: {
        title: { id: 'Ulos: Kain Tenun Sakral', en: 'Ulos: Sacred Woven Cloth' },
        description: { id: 'Lebih dari sekadar kain biasa, Ulos melambangkan kehangatan, perlindungan, serta ikatan spiritual yang menghubungkan antargenerasi.', en: 'More than just ordinary cloth, Ulos symbolizes warmth, protection, and spiritual bonds connecting generations.' },
        image: imgUlos
      },
      tari: {
        title: { id: 'Somba Marhula-hula', en: 'Somba Marhula-hula' },
        description: { id: 'Hormat kepada pihak pemberi wanita, yang dipandang sebagai sumber berkat.', en: 'Respect to the bride\'s family, seen as a source of blessings.' },
        icon: iconTopeng
      },
      pantun: {
        title: { id: 'Elek Marboru', en: 'Elek Marboru' },
        description: { id: 'Mengayomi dan berlaku lemah lembut kepada pihak penerima wanita yang setia membantu.', en: 'Protecting and acting gently towards the groom\'s family who faithfully helps.' },
        quoteText: { id: 'Pantun hangoluan, tois hamagoan.', en: 'Pantun hangoluan, tois hamagoan.' },
        quoteAuthor: { id: 'PERIBAHASA BATAK TOBA', en: 'TOBA BATAK PROVERB' },
        quoteMeaning: { id: 'Sopan santun membawa kebahagiaan hidup, keangkuhan membawa kehancuran.', en: 'Politeness brings happiness in life, arrogance brings destruction.' }
      }
    },

    kuliner: {
      title: { id: 'Cita Rasa Tegas & Budaya Kopi', en: 'Bold Flavors & Coffee Culture' },
      description: { id: 'Kuliner Batak terkenal dengan perpaduan rempah eksotis yang berani dan menggugah selera. Di samping hidangannya yang kaya rasa, tradisi minum kopi di kedai-kedai lokal telah lama menjadi bagian tak terpisahkan dari denyut kehidupan masyarakatnya.', en: 'Batak cuisine is famous for its bold and appetizing blend of exotic spices. Besides its rich-flavored dishes, the coffee drinking tradition in local cafes has long been an inseparable part of the community\'s life.' },
      images: [imgIkanMasArsik, imgKopiSidikalang],
      menus: [
        { 
          name: { id: 'Arsik Ikan Mas', en: 'Arsik Ikan Mas' }, 
          desc: { id: 'Hidangan adat ikonik berkuah kuning khas Batak yang dimasak menggunakan bumbu khas dataran tinggi, seperti andaliman, asam gelugur, dan kincung (kecombrang), menghasilkan rasa getir, asam, dan gurih yang segar.', en: 'An iconic traditional dish with Batak-style yellow broth, cooked using highland spices like andaliman, asam gelugur, and kincung (torch ginger), resulting in a fresh bitter, sour, and savory taste.' }, 
          icon: iconAlatMakan 
        },
        { 
          name: { id: 'Kopi Sidikalang dan Mandailing', en: 'Sidikalang and Mandailing Coffee' }, 
          desc: { id: 'Dua varietas kopi legendaris dari tanah Sumatra Utara yang telah mendunia. Terkenal dengan karakteristik aromanya yang kuat, berbody tebal (full body), serta tingkat keasaman rendah yang khas.', en: 'Two legendary coffee varieties from North Sumatra that have gone global. Famous for their strong aroma characteristics, full body, and distinctive low acidity.' }, 
          icon: iconAlatMakan 
        }
      ]
    },

    arsitektur: {
      title: { id: 'Ikon Arsitektur', en: 'Architectural Icons' },
      subtitle: { id: 'Sudut-sudut Kota Medan diperkaya oleh adaptasi arsitektur tradisional dan ruang komunal bernuansa kultural, menjadi simbol identitas.', en: 'Corners of Medan City are enriched by traditional architectural adaptations and nuanced cultural communal spaces, becoming symbols of identity.' },
      items: [
        {
          title: { id: 'HKBP Sudirman Medan', en: 'HKBP Sudirman Medan' },
          description: { id: 'Salah satu gereja ikonik di Kota Medan yang memadukan arsitektur modern dengan sentuhan struktural rumah adat Batak Toba. Bagian depannya menampilkan replika atap segitiga yang menjulang tinggi serta ornamen ukiran Gorga yang megah di area pintu masuk.', en: 'One of the iconic churches in Medan City combining modern architecture with Batak Toba traditional house structural touches. The front displays a towering triangular roof replica and magnificent Gorga carving ornaments at the entrance area.' },
          category: { id: 'Pusat Spiritual • Landmark Kota', en: 'Spiritual Center • City Landmark' },
          image: imgHKBP
        },
        {
          title: { id: 'Jambur Karo', en: 'Jambur Karo' },
          description: { id: 'Medan memiliki beberapa bangunan pertemuan adat (Jambur) dan gereja GBKP yang dibangun dengan mengadopsi gaya atap ijuk bertingkat khas rumah adat Karo (Siwaluh Jabu). Bangunan ini berfungsi sebagai pusat pelestarian budaya dan tempat berlangsungnya musyawarah serta upacara adat.', en: 'Medan has several traditional meeting buildings (Jambur) and GBKP churches built adopting the tiered ijuk roof style characteristic of Karo traditional houses (Siwaluh Jabu). These buildings serve as cultural preservation centers and venues for deliberations and traditional ceremonies.' },
          category: { id: 'Pusat Budaya • Monumen Sosial', en: 'Cultural Center • Social Monument' },
          image: imgJamburKaro
        }
      ]
    }
  },

  jawa: {
    slug: 'jawa',
    heroTitle: { id: 'Nafas Jawa di Tanah Deli ', en: 'Javanese Breath in Deli Land' },
    heroSubtitle: { id: 'Menelusuri jejak langkah, kesederhanaan tradisi, dan kehangatan budaya leluhur Jawa yang telah berabad-abad berasimilasi serta menjadi bagian penting dalam keberagaman sosial di Kota Medan.', en: 'Tracing the footsteps, simplicity of traditions, and warmth of Javanese ancestral culture that have assimilated for centuries and become an important part of social diversity in Medan City.' },
    heroImage: imgJawaTempoDulu,

    sejarah: {
      tag: { id: 'SEJARAH & ASAL USUL', en: 'HISTORY & ORIGINS' },
      title: { id: 'Warisan Jawa Medan', en: 'Medan Javanese Heritage' },
      paragraphs: {
        id: [
          'Kehadiran etnis Jawa di Sumatra Utara memiliki akar sejarah yang kuat sejak akhir abad ke-19, dipicu oleh gelombang migrasi besar-besaran kontrak buruh ke perkebunan tembakau legendaris di Tanah Deli.',
          'Seiring berjalannya waktu, komunitas yang kerap disebut sebagai Jawa Deli atau Jadel ini menetap, berbaur, dan menyebar ke wilayah perkotaan Medan. Kontribusi mereka sangat besar dalam membentuk lanskap sosial, keragaman kuliner, dan kehidupan kultural perkotaan. Warisan budaya Jawa di Medan tetap lestari hingga hari ini melalui pelestarian seni tradisional seperti jaran kepang (kuda lumping), pagelaran wayang, hingga akulturasi dialek bahasa yang khas.'
        ],
        en: [
          'The presence of Javanese ethnic groups in North Sumatra has strong historical roots since the late 19th century, triggered by massive waves of contract labor migration to the legendary tobacco plantations of Deli Land.',
          'Over time, the community often referred to as Jawa Deli or Jadel settled, merged, and spread to Medan\'s urban areas. Their contribution was enormous in shaping the social landscape, culinary diversity, and urban cultural life. Javanese cultural heritage in Medan remains intact today through the preservation of traditional arts like jaran kepang (kuda lumping), wayang performances, and distinctive language dialect acculturation.'
        ]
      },
      quote: { id: '"Di mana alunan gamelan berpadu dengan dinamika kota dan kehangatan tradisi gotong royong tetap terjaga, di situlah denyut kebudayaan Jawa hidup memperkaya keberagaman Medan."', en: '"Where gamelan melodies blend with city dynamics and the warmth of gotong royong traditions are maintained, that is where the pulse of Javanese culture lives enriching Medan\'s diversity."' },
      archiveImage: imgJawaTempoDulu,
      archiveCaption: { id: 'Arsip Sejarah Jawa Deli', en: 'Deli Javanese History Archive' }
    },

    pilarBudaya: {
      title: { id: 'Jiwa \'Jawa Deli\'', en: 'The Soul of \'Jawa Deli\'' },
      subtitle: { id: 'Keheningan prosesi spiritual dan kemeriahan seni rakyat yang sarat akan makna luhur, simbol rasa syukur kepada Sang Pencipta, serta doa keselamatan bagi seluruh masyarakat.', en: 'The stillness of spiritual processions and the liveliness of folk arts full of noble meaning, symbols of gratitude to the Creator, and prayers for the safety of all people.' },
      baju: {
        title: { id: 'Seni Jaran Kepang (Kuda Lumping)', en: 'Jaran Kepang (Kuda Lumping) Art' },
        description: { id: 'Seni pertunjukan rakyat paling populer yang terus dirawat oleh berbagai paguyuban di Medan. Menampilkan tarian prajurit berkuda anyaman bambu yang enerjik berpadu ritme gamelan, tarian ini menyimbolkan kegagahan, heroisme, serta refleksi kekuatan spiritual manusia.', en: 'The most popular folk performing art continuously preserved by various communities in Medan. Featuring energetic bamboo woven horseman dances combined with gamelan rhythms, this dance symbolizes gallantry, heroism, and reflections on human spiritual strength.' },
        image: imgKudaLumping
      },
      tari: {
        title: { id: 'Tradisi Malam Satu Suro', en: 'Malam Satu Suro Tradition' },
        description: { id: 'Momen sakral pergantian tahun Jawa yang diperingati sebagai waktu untuk introspeksi diri (tirakat). Tradisi ini biasanya diisi dengan doa bersama, prosesi jalan sunyi, hingga pagelaran wayang kulit semalam suntuk sebagai refleksi spiritual.', en: 'A sacred Javanese New Year moment commemorated as a time for self-introspection (tirakat). This tradition is usually filled with communal prayer, silent processions, to all-night wayang kulit performances as spiritual reflection.' },
        icon: iconTopeng
      },
      pantun: {
        title: { id: 'Grebeg Suro & Gunungan', en: 'Grebeg Suro & Gunungan' },
        description: { id: 'Puncak perayaan syukur berupa arak-arakan gunungan yang berisi hasil bumi. Rebutan gunungan oleh masyarakat bukan sekadar tradisi seru, melainkan simbol mencari berkah, sedekah bumi, dan penguat tali silaturahmi gotong royong.', en: 'The peak of thanksgiving celebrations in the form of gunungan parades filled with earth\'s produce. The community scramble for gunungan is not just an exciting tradition, but a symbol of seeking blessings, earth alms, and strengthening gotong royong brotherhood.' },
        quoteText: { id: 'Memayu Hayuning Bawana.', en: 'Memayu Hayuning Bawana.' },
        quoteAuthor: { id: 'FALSAFAH HIDUP JAWA KLASIK', en: 'CLASSIC JAVANESE LIFE PHILOSOPHY' },
        quoteMeaning: { id: 'Kewajiban moral manusia untuk selalu menjaga, memperindah, dan memelihara keserasian serta kedamaian dunia beserta isinya.', en: 'Human moral obligation to always guard, beautify, and maintain harmony and peace of the world and its contents.' }
      }
    },

    kuliner: {
      title: { id: 'Kesederhanaan Rasa & Kehangatan Tradisi', en: 'Simplicity of Taste & Warmth of Tradition' },
      description: { id: 'Kuliner Jawa di Medan terkenal dengan perpaduan cita rasa manis, gurih, dan segar yang diolah dari resep warisan leluhur. Di samping hidangannya yang merakyat, tradisi menyajikan kuliner dengan sentuhan bumbu kacang atau kuah kaldu hangat telah lama menjadi simbol kenyamanan rasa yang menyatukan berbagai kalangan.', en: 'Javanese cuisine in Medan is famous for its blend of sweet, savory, and fresh flavors processed from ancestral recipes. Besides its populist dishes, the tradition of serving cuisine with peanut sauce or warm broth has long been a symbol of taste comfort uniting various circles.' },
      images: [imgPecalJawa, imgBakso],
      menus: [
        { 
          name: { id: 'Pecal Jawa', en: 'Javanese Pecel' }, 
          desc: { id: 'Hidangan sehat berupa aneka sayuran rebus segar yang disiram saus kacang kental bercita rasa manis, gurih, dan sedikit pedas. Di Medan, kuliner legendaris ini sering disajikan bersama pelengkap seperti rempeyek renyah atau mie lidi, melambangkan kesederhanaan hidup yang kaya rasa.', en: 'A healthy dish of various fresh boiled vegetables drizzled with thick sweet, savory, and slightly spicy peanut sauce. In Medan, this legendary cuisine is often served with complements like crispy rempeyek or mie lidi, symbolizing a simple yet rich life.' }, 
          icon: iconAlatMakan 
        },
        { 
          name: { id: 'Bakso & Mie Sop Jawa', en: 'Javanese Bakso & Mie Sop' }, 
          desc: { id: 'Hidangan berkuah kaldu sapi atau ayam yang gurih, disajikan bersama mie, suwiran daging, dan bulatan bakso yang kenyal. Racikan bumbu rempah tradisionalnya yang khas menghadirkan kehangatan sejati di setiap mangkuknya, menjadikannya kuliner favorit yang merata di setiap sudut kota.', en: 'A savory beef or chicken broth dish served with noodles, shredded meat, and chewy meatballs. Its distinctive traditional spice blend brings true warmth in every bowl, making it a favorite cuisine everywhere in the city.' }, 
          icon: iconAlatMakan 
        }
      ]
    },

    arsitektur: {
      title: { id: 'Ikon Arsitektur', en: 'Architectural Icons' },
      subtitle: { id: 'Sudut-sudut Kota Medan diperkaya oleh adaptasi arsitektur tradisional Jawa dan ruang komunal bernuansa kultural, menjadi simbol identitas, memori sejarah perkebunan, serta lestarinya tradisi guyub di tengah kota.', en: 'Corners of Medan City are enriched by Javanese traditional architectural adaptations and nuanced cultural communal spaces, becoming symbols of identity, plantation historical memory, and sustained guyub traditions in the city center.' },
      items: [
        {
          title: { id: 'Pendopo Pujakesuma', en: 'Pendopo Pujakesuma' },
          description: { id: 'Kompleks pusat kebudayaan dan organisasi kemasyarakatan warga Jawa kelahiran Sumatra (Pujakesuma) di Medan. Bangunan ini mengadopsi struktur Pendopo dengan atap Joglo terbuka, berfungsi sebagai wadah pelestarian seni tradisional, diskusi budaya, hingga ruang guyub antargenerasi.', en: 'A cultural center and community organization complex for Javanese Sumatran-born residents (Pujakesuma) in Medan. This building adopts a Pendopo structure with an open Joglo roof, serving as a vessel for traditional art preservation, cultural discussions, and intergenerational guyub spaces.' },
          category: { id: 'Pusat Budaya • Monumen Sosial', en: 'Cultural Center • Social Monument' },
          image: imgPendopoPujakesuma
        },
        {
          title: { id: 'Masjid Jami\' Kampung Baru', en: 'Kampung Baru Jami\' Mosque' },
          description: { id: 'Terletak di salah satu kantong pemukiman awal masyarakat Jawa di Kota Medan, masjid lama ini menjadi saksi bisu perkembangan dakwah dan gotong royong warga setempat. Keberadaannya mengakar kuat dalam sejarah komunitas Jawa urban, berfungsi sebagai ruang spiritual sekaligus pengikat silaturahmi antargenerasi.', en: 'Located in one of the early Javanese community settlement areas in Medan City, this old mosque is a silent witness to the development of da\'wah and local resident gotong royong. Its existence is deeply rooted in urban Javanese community history, serving as a spiritual space as well as an intergenerational brotherhood binder.' },
          category: { id: 'Situs Warisan • Landmark Kota', en: 'Heritage Site • City Landmark' },
          image: imgMasjidJami
        }
      ]
    }
  },

  tionghoa: {
    slug: 'tionghoa',
    heroTitle: { id: 'Jiwa dari Negeri Tirai Bambu ', en: 'The Soul of the Bamboo Curtain Country' },
    heroSubtitle: { id: 'Menelusuri akulturasi budaya dan warisan leluhur Tionghoa yang telah berabad-abad memperkaya keberagaman sosial, arsitektur, serta dinamika Kota Medan.', en: 'Tracing the cultural acculturation and Chinese ancestral heritage that has enriched Medan City\'s social diversity, architecture, and dynamics for centuries.' },
    heroImage: imgKesawan,

    sejarah: {
      tag: { id: 'SEJARAH & ASAL USUL', en: 'HISTORY & ORIGINS' },
      title: { id: 'Warisan Tionghoa Medan', en: 'Medan Chinese Heritage' },
      paragraphs: {
        id: [
          'Kehadiran etnis Tionghoa di Kota Medan memiliki akar sejarah yang panjang, berawal dari gelombang migrasi pekerja imigran yang datang untuk mengadu nasib di perkebunan tembakau Deli pada abad ke-19.',
          'Seiring berjalannya waktu, komunitas ini tumbuh menjadi pilar penting yang menggerakkan roda perekonomian, perdagangan, dan membentuk lanskap perkotaan. Dipelopori oleh tokoh-tokoh visioner legendaris seperti Tjong A Fie, warisan etnis Tionghoa melekat erat pada keindahan arsitektur kota kuno, keragaman kuliner, serta semangat filantropi yang terus lestari hingga hari ini.'
        ],
        en: [
          'The presence of the Chinese ethnic group in Medan City has deep historical roots, starting from waves of immigrant workers who came to seek fortune in Deli tobacco plantations in the 19th century.',
          'Over time, this community grew into an important pillar driving the economy, trade, and shaping the urban landscape. Pioneered by legendary visionary figures like Tjong A Fie, Chinese ethnic heritage is closely attached to the beauty of ancient city architecture, culinary diversity, and a philanthropic spirit that continues to thrive today.'
        ]
      },
      quote: { id: '"Di mana lampion merah menyala di sepanjang koridor Kesawan, di situlah jejak akulturasi dan sumbangsih komunitas Tionghoa terus hidup memperkaya sanubari Kota Medan."', en: '"Where red lanterns glow along Kesawan corridor, that is where the traces of acculturation and contributions of the Chinese community continue to live enriching Medan City\'s heart."' },
      archiveImage: imgTiongHoaTempoDulu,
      archiveCaption: { id: 'Arsip Sejarah Tionghoa', en: 'Chinese History Archive' }
    },

    pilarBudaya: {
      title: { id: 'Warisan \'Negeri Tirai Bambu\'', en: 'Heritage of the \'Bamboo Curtain Country\'' },
      subtitle: { id: 'Kemeriahan momen pergantian tahun dan perayaan Cap Go Meh yang sarat akan makna spiritual, ungkapan rasa syukur, serta doa untuk keberkahan yang baru.', en: 'The liveliness of New Year moments and Cap Go Meh celebrations full of spiritual meaning, expressions of gratitude, and prayers for new blessings.' },
      baju: {
        title: { id: 'Atraksi Barongsai & Naga', en: 'Lion & Dragon Attraction' },
        description: { id: 'Seni pertunjukan ikonik yang menjadi ruh di setiap perayaan. Tarian singa dan naga ini dipercaya berfungsi sebagai pembersih aura negatif, penolak bala, serta pembuka jalan bagi datangnya keberuntungan.', en: 'An iconic performing art that is the soul of every celebration. This lion and dragon dance is believed to function as a cleanser of negative auras, repeller of disasters, and opener of paths for good fortune.' },
        image: imgBarongsai
      },
      tari: {
        title: { id: 'Tahun Baru Imlek', en: 'Chinese New Year' },
        description: { id: 'Momen sakral untuk berkumpul bersama keluarga besar, melakukan sembahyang syukur kepada leluhur, dan saling mendoakan kemakmuran di tahun yang baru.', en: 'A sacred moment to gather with extended family, perform thanksgiving prayers to ancestors, and mutually wish each other prosperity in the new year.' },
        icon: iconTopeng
      },
      pantun: {
        title: { id: 'Festival Cap Go Meh', en: 'Cap Go Meh Festival' },
        description: { id: 'Puncak sekaligus penutup rangkaian perayaan Imlek pada hari ke-15. Di Medan, momen ini biasanya dimeriahkan oleh pawai budaya yang megah, festival lampion, dan doa bersama.', en: 'The peak and closing of the Chinese New Year celebrations on the 15th day. In Medan, this moment is usually enlivened by magnificent cultural parades, lantern festivals, and communal prayers.' },
        quoteText: { id: 'Gōng xǐ fā cái, wàn shì rú yì.', en: 'Gōng xǐ fā cái, wàn shì rú yì.' },
        quoteAuthor: { id: 'UNGKAPAN TRADISIONAL IMLEK', en: 'CHINESE NEW YEAR TRADITIONAL GREETING' },
        quoteMeaning: { id: 'Selamat dan semoga berlimpah rezeki, serta semoga segala keinginan Anda dapat terwujud dengan lancar.', en: 'Congratulations and may you have abundant fortune, and may all your wishes come true smoothly.' }
      }
    },

    kuliner: {
      title: { id: 'Harmoni Rasa & Kehangatan', en: 'Harmony of Taste & Warmth' },
      description: { id: 'Kuliner Tionghoa terkenal dengan teknik memasak warisan leluhur yang mengutamakan keseimbangan rasa, aroma, dan tekstur. Di samping hidangannya yang menggugah selera, tradisi berkumpul menikmati camilan hangat telah lama menjadi simbol kebersamaan keluarga yang erat.', en: 'Chinese cuisine is famous for ancestral cooking techniques prioritizing balance of taste, aroma, and texture. Besides its appetizing dishes, the tradition of gathering to enjoy warm snacks has long been a symbol of close family togetherness.' },
      images: [imgDimsum, imgBakpao],
      menus: [
        { 
          name: { id: 'Dimsum', en: 'Dimsum' }, 
          desc: { id: 'Hidangan kecil gurih berupa kukusan maupun gorengan yang dibuat dengan tingkat presisi tinggi. Setiap gigitan kulitnya yang lembut menyimpan kelezatan isian daging atau udang segar yang kaya rasa, menyimbolkan sentuhan kehangatan di hati.', en: 'Small savory dishes of steamed or fried foods made with high precision. Each bite of its soft skin holds the deliciousness of rich-flavored fresh meat or shrimp fillings, symbolizing a touch of warmth in the heart.' }, 
          icon: iconAlatMakan 
        },
        { 
          name: { id: 'Bakpao', en: 'Bakpao' }, 
          desc: { id: 'Roti kukus tradisional bertekstur empuk dan lembut bagaikan awan yang menyajikan kehangatan sejati. Diisi dengan berbagai varian manis maupun gurih, hidangan legendaris ini melambangkan doa untuk rezeki yang terus mengembang dan utuh.', en: 'Traditional steamed bread with soft and fluffy cloud-like texture serving true warmth. Filled with various sweet or savory variants, this legendary dish symbolizes prayers for continuously growing and complete fortune.' }, 
          icon: iconAlatMakan 
        }
      ]
    },

    arsitektur: {
      title: { id: 'Ikon Arsitektur', en: 'Architectural Icons' },
      subtitle: { id: 'Sudut-sudut Kota Medan diperindah oleh kemegahan arsitektur oriental kuno dan pusat spiritual yang megah, menjadi simbol identitas, sejarah, serta keharmonisan budaya yang kuat di tengah kota.', en: 'Corners of Medan City are beautified by the magnificence of ancient oriental architecture and magnificent spiritual centers, becoming symbols of identity, history, and strong cultural harmony in the city center.' },
      items: [
        {
          title: { id: 'Tjong A Fie Mansion', en: 'Tjong A Fie Mansion' },
          description: { id: 'Istana megah dua lantai yang dibangun pada tahun 1895 oleh tokoh filantropi legendaris Tjong A Fie. Bangunan ini menampilkan perpaduan arsitektur Tionghoa kuno, Melayu, dan Eropa, serta berdiri sebagai monumen sejarah kejayaan perdagangan di Medan.', en: 'A magnificent two-story palace built in 1895 by legendary philanthropist Tjong A Fie. This building showcases a blend of ancient Chinese, Malay, and European architecture, and stands as a historical monument of Medan\'s trading glory.' },
          category: { id: 'Situs Warisan • Landmark Kota', en: 'Heritage Site • City Landmark' },
          image: imgKesawan
        },
        {
          title: { id: 'Maha Vihara Maitreya', en: 'Maha Vihara Maitreya' },
          description: { id: 'Salah satu vihara terbesar di Indonesia yang menjadi pusat spiritual dan keagamaan komunitas Tionghoa di Medan. Bangunan ini menampilkan arsitektur modern berpadu dengan simbolisme oriental klasik, menghadirkan suasana yang megah namun penuh kedamaian.', en: 'One of Indonesia\'s largest viharas that serves as a spiritual and religious center for Medan\'s Chinese community. This building showcases modern architecture combined with classic oriental symbolism, presenting a magnificent yet peaceful atmosphere.' },
          category: { id: 'Pusat Spiritual • Monumen Sosial', en: 'Spiritual Center • Social Monument' },
          image: imgMahaVihara
        }
      ]
    }
  },

  india: {
    slug: 'india',
    heroTitle: { id: 'Jiwa dari Kampung Madras ', en: 'The Soul of Madras Village' },
    heroSubtitle: { id: 'Menelusuri kehangatan tradisi, warna-warni budaya, dan warisan leluhur India yang telah berabad-abad melekat erat serta memperkaya keberagaman sosial kebudayaan di Kota Medan.', en: 'Tracing the warmth of traditions, colorful culture, and Indian ancestral heritage that has been deeply attached and enriching socio-cultural diversity in Medan City for centuries.' },
    heroImage: imgKuilHero,

    sejarah: {
      tag: { id: 'SEJARAH & ASAL USUL', en: 'HISTORY & ORIGINS' },
      title: { id: 'Warisan India Medan', en: 'Medan Indian Heritage' },
      paragraphs: {
        id: [
          'Kehadiran etnis India di Kota Medan, khususnya komunitas India Tamil, memiliki akar sejarah yang panjang sejak abad ke-19. Mereka awalnya datang ke tanah Deli sebagai pekerja terampil, pembangun infrastruktur, dan pedagang di bawah masa pemerintahan kesultanan dan kolonial.',
          'Seiring waktu, komunitas ini menetap dan membentuk kawasan ikonis bernama Kampung Madras (Little India). Warisan budaya mereka tetap hidup kokoh hingga hari ini melalui kemegahan kuil-kuil Hindu bergaya arsitektur India Selatan, perayaan festival keagamaan yang meriah, serta kekayaan kuliner rempah yang khas.'
        ],
        en: [
          'The presence of Indian ethnic groups in Medan City, especially the Tamil Indian community, has deep historical roots since the 19th century. They initially came to Deli as skilled workers, infrastructure builders, and traders during the sultanate and colonial rule.',
          'Over time, this community settled and formed an iconic area called Kampung Madras (Little India). Their cultural heritage remains firmly intact today through the magnificence of South Indian style Hindu temples, lively religious festival celebrations, and distinctive spice-rich cuisine.'
        ]
      },
      quote: { id: '"Di mana aroma rempah kari menyerbak dan rona festival Thaipusam menyala, di situlah denyut tradisi etnis India terus hidup menjadi bagian tak terpisahkan dari identitas Kota Medan."', en: '"Where curry spice aroma spreads and Thaipusam festival colors glow, that is where the pulse of Indian ethnic traditions continues to live as an inseparable part of Medan City\'s identity."' },
      archiveImage: imgIndiaTempoDulu,
      archiveCaption: { id: 'Arsip Sejarah Etnis India', en: 'Indian Ethnic History Archive' }
    },

    pilarBudaya: {
      title: { id: 'Warisan \'Negeri Anak Benua\'', en: 'Heritage of the \'Subcontinent Country\'' },
      subtitle: { id: 'Kemeriahan momen festival suci dan ritual tradisi yang sarat akan makna spiritual, simbol kemenangan kebajikan, serta doa untuk kedamaian hidup yang baru.', en: 'The liveliness of holy festival moments and traditional rituals full of spiritual meaning, symbols of victory of virtue, and prayers for new life peace.' },
      baju: {
        title: { id: 'Festival Thaipusam', en: 'Thaipusam Festival' },
        description: { id: 'Perayaan agung yang menjadi ikon spiritual komunitas India Tamil di Medan. Ditandai dengan prosesi megah arak-arakan kereta kencana kuno dari Kuil Sri Mariamman serta ritual membawa Kavadi sebagai bentuk kaul, keteguhan iman, dan pembersihan diri dari dosa.', en: 'A grand celebration that is the spiritual icon of Medan\'s Tamil Indian community. Marked by magnificent parades of ancient golden chariots from Sri Mariamman Temple and Kavadi carrying rituals as a form of vow, faith firmness, and self-cleansing from sins.' },
        image: imgKuilIndia
      },
      tari: {
        title: { id: 'Hari Raya Deepavali', en: 'Deepavali Festival' },
        description: { id: 'Dikenal sebagai Festival Cahaya, momen sakral ini merayakan kemenangan kebaikan atas kejahatan. Ditandai dengan penyalaan lampu minyak (diyas), memakai pakaian tradisional baru, dan berkumpul bersama keluarga.', en: 'Known as the Festival of Light, this sacred moment celebrates the victory of good over evil. Marked by lighting oil lamps (diyas), wearing new traditional clothes, and gathering with family.' },
        icon: iconTopeng
      },
      pantun: {
        title: { id: 'Seni Kolam & Ornamen Tradisional', en: 'Kolam Art & Traditional Ornaments' },
        description: { id: 'Seni dekorasi lantai menggunakan tepung beras warna-warni di depan pintu rumah selama festival. Kolam bukan sekadar hiasan estetis, melainkan simbol keramahan, membawa keberuntungan, serta menyambut berkah dewi kemakmuran.', en: 'Floor decoration art using colored rice flour in front of the house entrance during festivals. Kolam is not just an aesthetic ornament, but a symbol of hospitality, bringing good fortune, and welcoming the goddess of prosperity\'s blessings.' },
        quoteText: { id: 'Deepavali Valthukkal.', en: 'Deepavali Valthukkal.' },
        quoteAuthor: { id: 'UNGKAPAN TRADISIONAL TAMIL', en: 'TAMIL TRADITIONAL GREETING' },
        quoteMeaning: { id: 'Selamat Hari Raya Deepavali; semoga cahaya kedamaian, kebahagiaan, dan kemakmuran selalu menerangi setiap langkah kehidupan Anda.', en: 'Happy Deepavali; may the light of peace, happiness, and prosperity always illuminate every step of your life.' }
      }
    },

    kuliner: {
      title: { id: 'Kekayaan Rempah & Warisan Tradisi', en: 'Spice Richness & Traditional Heritage' },
      description: { id: 'Kuliner India Tamil terkenal dengan penggunaan perpaduan rempah-rempah autentik yang berani, menghasilkan aroma yang kuat dan cita rasa yang mendalam. Di samping hidangannya yang kaya rasa, tradisi menyajikan makanan hangat di atas daun pisang menjadi simbol keramahan dan rasa syukur yang diwariskan antargenerasi.', en: 'Tamil Indian cuisine is famous for its bold use of authentic spice blends, resulting in strong aromas and deep flavors. Besides its rich-flavored dishes, the tradition of serving warm food on banana leaves is a symbol of hospitality and gratitude passed down through generations.' },
      images: [imgNasiBriyani, imgRotiCanai],
      menus: [
        { 
          name: { id: 'Nasi Briyani', en: 'Nasi Briyani' }, 
          desc: { id: 'Hidangan utama ikonik berupa nasi berbutir panjang yang dimasak bersama rempah-rempah aromatik seperti kapulaga, kayu manis, dan cengkih. Disajikan bersama kuah kari kental yang kaya bumbu, hidangan ini merepresentasikan kehangatan dan kemeriahan tradisi rasa India Selatan.', en: 'An iconic main dish of long-grain rice cooked with aromatic spices like cardamom, cinnamon, and cloves. Served with rich spicy curry sauce, this dish represents the warmth and liveliness of South Indian flavor traditions.' }, 
          icon: iconAlatMakan 
        },
        { 
          name: { id: 'Roti Canai', en: 'Roti Canai' }, 
          desc: { id: 'Roti pipih tradisional bertekstur renyah di luar namun lembut dan berlapis di dalam, dibuat dengan teknik memutar dan membalik adonan yang khas. Biasa disantap bersama kuah dal atau kuah kari hangat, hidangan legendaris ini melambangkan kesederhanaan yang menyatukan kebersamaan.', en: 'A traditional flatbread with crispy exterior yet soft and layered interior, made with distinctive dough rotating and flipping techniques. Usually enjoyed with dal or warm curry sauce, this legendary dish symbolizes simplicity uniting togetherness.' }, 
          icon: iconAlatMakan 
        }
      ]
    },

    arsitektur: {
      title: { id: 'Ikon Arsitektur', en: 'Architectural Icons' },
      subtitle: { id: 'Sudut-sudut Kota Medan diperkaya oleh keindahan arsitektur khas India Selatan dan pusat spiritual bergaya Mughal, menjadi simbol identitas, sejarah migrasi, serta kekayaan toleransi budaya di tengah kota.', en: 'Corners of Medan City are enriched by South Indian style architectural beauty and Mughal-style spiritual centers, becoming symbols of identity, migration history, and rich cultural tolerance in the city center.' },
      items: [
        {
          title: { id: 'Kuil Sri Mariamman', en: 'Sri Mariamman Temple' },
          description: { id: 'Kuil Hindu tertua di Medan yang dibangun pada tahun 1884 di kawasan Kampung Madras. Fasadnya menampilkan arsitektur khas gaya Dravida dengan Gopuram (menara gerbang) megah yang dihiasi ratusan relief patung dewa-dewi Hindu hasil mahakarya seniman ornamen India kuno.', en: 'Medan\'s oldest Hindu temple built in 1884 in Kampung Madras area. Its facade displays distinctive Dravidian style architecture with a magnificent Gopuram (gate tower) adorned with hundreds of Hindu deity relief sculptures, masterpieces of ancient Indian ornament artists.' },
          category: { id: 'Pusat Spiritual • Landmark Kota', en: 'Spiritual Center • City Landmark' },
          image: imgKuil
        },
        {
          title: { id: 'Masjid Ghaudiyah', en: 'Ghaudiyah Mosque' },
          description: { id: 'Tempat ibadah bersejarah milik komunitas Muslim India Selatan (Maniakar) di Medan yang didirikan sejak akhir abad ke-19. Bangunan ini menampilkan keunikan arsitektur bergaya Mughal dengan kubah, pilar, dan menara mini yang menyerupai bangunan ikonik di India.', en: 'A historic worship place belonging to the South Indian Muslim (Maniakar) community in Medan, founded since the late 19th century. This building displays unique Mughal-style architecture with domes, pillars, and minarets resembling iconic buildings in India.' },
          category: { id: 'Monumen Sosial • Landmark Kota', en: 'Social Monument • City Landmark' },
          image: imgMasjidGhaudiyah
        }
      ]
    }
  },

  minangkabau: {
    slug: 'minangkabau',
    heroTitle: { id: 'Langkah Minang di Tanah Deli', en: 'Minang Steps in Deli Land' },
    heroSubtitle: { id: 'Menelusuri jejak langkah, filosofi hidup yang dinamis, dan keteguhan tradisi leluhur Minangkabau yang telah lama merantau serta memperkaya denyut nadi perekonomian dan sosial di Kota Medan.', en: 'Tracing the footsteps, dynamic life philosophy, and firmness of Minangkabau ancestral traditions that have long migrated and enriched the economic and social heartbeat of Medan City.' },
    heroImage: imgPiringHero,

    sejarah: {
      tag: { id: 'SEJARAH & ASAL USUL', en: 'HISTORY & ORIGINS' },
      title: { id: 'Warisan Minangkabau Medan', en: 'Medan Minangkabau Heritage' },
      paragraphs: {
        id: [
          'Kehadiran etnis Minangkabau di Kota Medan memiliki rekam jejak yang panjang, didorong oleh tradisi kuat \'merantau\' sebagai fase pendewasaan diri. Komunitas Minang mulai berdatangan sejak awal abad ke-20, mengisi sektor perdagangan di pasar-pasar tradisional, mempelopori dunia pers dan sastra, hingga mendirikan pusat-pusat pendidikan formal.',
          'Berpegang teguh pada prinsip di mana bumi dipijak, di situ langit dijunjung, warga Minang berintegrasi secara harmonis dengan masyarakat lokal tanpa kehilangan jati diri mereka. Warisan kultural ini tetap hidup subur di Medan, tercermin dari menjamurnya usaha rumah makan Padang, eksistensi organisasi kekeluargaan yang solid, hingga penerapan nilai adat yang relijius.'
        ],
        en: [
          'The presence of Minangkabau ethnic groups in Medan City has a long track record, driven by the strong \'merantau\' (wandering) tradition as a self-maturation phase. The Minang community started arriving in the early 20th century, filling trade sectors in traditional markets, pioneering the press and literature world, to establishing formal education centers.',
          'Holding firmly to the principle where the earth is stepped on, there the sky is held up, Minang people integrate harmoniously with local communities without losing their identity. This cultural heritage remains thriving in Medan, reflected in the proliferation of Padang restaurant businesses, the existence of solid family organizations, and the implementation of religious customary values.'
        ]
      },
      quote: { id: '"Di mana semangat perantau membaja, falsafah \'adat basandi syarak\' dijaga, dan kehangatan rasa masakan Minang menyatu dalam keseharian, di situlah denyut kebudayaan Minangkabau memperkaya warna Kota Medan."', en: '"Where the spirit of the wanderer is steeled, the philosophy of \'adat basandi syarak\' is maintained, and the warmth of Minang cuisine blends in daily life, that is where the pulse of Minangkabau culture enriches Medan City\'s colors."' },
      archiveImage: imgMinangTempoDulu,
      archiveCaption: { id: 'Arsip Sejarah Minangkabau', en: 'Minangkabau History Archive' }
    },

    pilarBudaya: {
      title: { id: 'Pilar Kebudayaan', en: 'Cultural Pillars' },
      subtitle: { id: 'Esensi Minangkabau terus lestari melalui keelokan seni dan ritme kehidupan sehari-hari yang penuh dengan nilai puitis.', en: 'The essence of Minangkabau continues to thrive through the beauty of art and the rhythm of daily life full of poetic values.' },
      baju: {
        title: { id: 'Seni Tari Piring (Tari Piriang)', en: 'Plate Dance Art (Tari Piriang)' },
        description: { id: 'Seni pertunjukan ikonik yang melambangkan rasa syukur atas hasil panen yang melimpah. Menampilkan gerakan lincah dan cepat tanpa menjatuhkan piring di tangan, tarian ini merefleksikan ketangkasan, kebersamaan, serta keteguhan jiwa masyarakat Minangkabau dalam menghadapi tantangan hidup.', en: 'An iconic performing art symbolizing gratitude for abundant harvests. Displaying agile and fast movements without dropping plates in hand, this dance reflects agility, togetherness, and the firmness of Minangkabau community in facing life challenges.' },
        image: imgTariPiring
      },
      tari: {
        title: { id: 'Malam Bainai', en: 'Malam Bainai' },
        description: { id: 'Malam terakhir bagi calon pengantin wanita (anak daro) menikmati masa lajangnya. Prosesi melekatkan tumbukan daun pacar merah (inai) ke kuku ini dipenuhi suasana sakral, iringan doa, dan ungkapan kasih sayang tulus dari orang tua serta kerabat dekat.', en: 'The last night for the bride-to-be (anak daro) to enjoy her single days. The henna leaf paste (inai) application to nails procession is filled with sacred atmosphere, accompanying prayers, and sincere expressions of love from parents and close relatives.' },
        icon: iconTopeng
      },
      pantun: {
        title: { id: 'Tradisi Baralek (Pesta Adat)', en: 'Baralek Tradition (Customary Party)' },
        description: { id: 'Perayaan pernikahan besar yang menjadi ruang berkumpulnya keluarga besar dan komunitas perantau Minang di Medan. Menampilkan kemegahan pelaminan bertingkat, tradisi ini memperkuat tali silaturahmi serta gotong royong melalui konsep salingka adat.', en: 'A grand wedding celebration that becomes a gathering space for extended family and Minang migrant community in Medan. Displaying the magnificence of a tiered bridal stage, this tradition strengthens brotherhood bonds and gotong royong through the salingka adat concept.' },
        quoteText: { id: 'Di mana bumi dipijak, di situ langit dijunjung.', en: 'Di mana bumi dipijak, di situ langit dijunjung.' },
        quoteAuthor: { id: 'PEPATAH ADAT MINANGKABAU', en: 'MINANGKABAU CUSTOMARY PROVERB' },
        quoteMeaning: { id: 'Kewajiban untuk selalu menghormati, menyesuaikan diri, dan mematuhi adat istiadat setempat di mana pun kita merantau, tanpa kehilangan jati diri asal.', en: 'The obligation to always respect, adapt, and obey local customs wherever we wander, without losing our original identity.' }
      }
    },

    kuliner: {
      title: { id: 'Kekayaan Rempah & Keaslian Rasa', en: 'Spice Richness & Authentic Flavor' },
      description: { id: 'Hidangan mahakarya yang dimasak perlahan menggunakan aneka rempah Nusantara dan santan hingga meresap sempurna ke serat daging. Proses karamelisasi alami ini menghasilkan cita rasa gurih yang mendalam...', en: 'A masterpiece dish slowly cooked using various Nusantara spices and coconut milk until perfectly absorbed into meat fibers. This natural caramelization process produces deep savory flavors...' },
      images: [imgRendang, imgSatePadang],
      menus: [
        { 
          name: { id: 'Rendang Daging', en: 'Beef Rendang' }, 
          desc: { id: 'Hidangan mahakarya yang dimasak perlahan menggunakan aneka rempah Nusantara dan santan hingga meresap sempurna ke serat daging. Proses karamelisasi alami ini menghasilkan cita rasa gurih yang mendalam dan warna gelap yang khas, melambangkan ketabahan, kesabaran, serta kearifan budaya leluhur.', en: 'A masterpiece dish slowly cooked using various Nusantara spices and coconut milk until perfectly absorbed into meat fibers. This natural caramelization process produces deep savory flavors and distinctive dark color, symbolizing resilience, patience, and ancestral cultural wisdom.' }, 
          icon: iconAlatMakan 
        },
        { 
          name: { id: 'Sate Padang', en: 'Padang Satay' }, 
          desc: { id: 'Potongan daging atau lidah sapi empuk yang dibakar harum, lalu disiram saus kuah kental berwarna kuning kecokelatan yang kaya akan rempah dan cabai. Kehangatan rasa pedasnya yang menggigit berpadu dengan taburan bawang goreng renyah, menjadikannya kuliner malam yang sangat diburu di setiap sudut Medan.', en: 'Tender beef or tongue pieces grilled fragrant, then drizzled with thick brownish-yellow sauce rich in spices and chili. Its biting spicy warmth combined with sprinkles of crispy fried onions makes it a highly sought-after night cuisine everywhere in Medan.' }, 
          icon: iconAlatMakan 
        }
      ]
    },

    arsitektur: {
      title: { id: 'Ikon Arsitektur', en: 'Architectural Icons' },
      subtitle: { id: 'Sudut-sudut Kota Medan diperkaya oleh adaptasi arsitektur tradisional Minangkabau dan ruang komunal bernuansa kultural, menjadi simbol identitas, memori sejarah perantauan, serta lestarinya tradisi guyub di tengah kota.', en: 'Corners of Medan City are enriched by Minangkabau traditional architectural adaptations and nuanced cultural communal spaces, becoming symbols of identity, migration historical memory, and sustained guyub traditions in the city center.' },
      items: [
        {
          title: { id: 'Gedung Dakwah IKGS', en: 'IKGS Dakwah Building' },
          description: { id: 'Kompleks pusat dakwah dan sosial yang dikelola oleh Ikatan Keluarga Gasan Satyo (IKGS) di Medan. Bangunan ini memadukan fungsi modern dengan elemen atap gonjong khas Minangkabau, menjadi ruang pemersatu bagi perantau asal Gasan Gadang (Padang Pariaman) untuk menjalankan kegiatan keagamaan, pendidikan, dan pelestarian nilai budaya.', en: 'A da\'wah and social center complex managed by the Gasan Satyo Family Association (IKGS) in Medan. This building combines modern functions with distinctive Minangkabau gonjong roof elements, becoming a unifying space for migrants from Gasan Gadang (Padang Pariaman) to carry out religious, educational, and cultural value preservation activities.' },
          category: { id: 'Pusat Budaya • Monumen Sosial', en: 'Cultural Center • Social Monument' },
          image: imgGedungDakwah
        },
        {
          title: { id: 'Rumah Gadang Manuhampu Medan', en: 'Manuhampu Medan Rumah Gadang' },
          description: { id: 'Rumah adat tradisional Minangkabau yang didirikan oleh persatuan keluarga perantau asal Banuhampu di Kota Medan. Bangunan dengan ornamen ukiran dan kain songket khas ini berfungsi sebagai wadah pertemuan akbar, pelestarian adat istiadat, serta penguat tali silaturahmi gotong royong warga Minang di tanah rantau.', en: 'A traditional Minangkabau customary house founded by the migrant family association from Banuhampu in Medan City. This building with distinctive carvings and songket cloth ornaments serves as a grand meeting space, customary tradition preservation, and strengthener of Minang people\'s gotong royong brotherhood bonds in overseas lands.' },
          category: { id: 'Situs Warisan • Landmark Kota', en: 'Heritage Site • City Landmark' },
          image: imgRumahGadang
        }
      ]
    }
  }
};
