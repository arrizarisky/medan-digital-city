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
    heroTitle: 'Jiwa dari Tanah Deli',
    heroSubtitle: 'Temukan warisan luhur \'Bunga Bangsa\' sebuah kebudayaan yang penuh keanggunan, nilai diplomasi, serta tradisi abadi di jantung Sumatra Utara',
    heroImage: imgMelayuDeli,

    sejarah: {
      tag: 'SEJARAH & ASAL USUL',
      title: 'Warisan \'Bunga Bangsa\'',
      paragraphs: [
        'Kesultanan Deli yang dirintis sejak tahun 1632 menjadi fondasi utama identitas Melayu di Kota Medan.',
        'Dikenal dengan sebutan \'Bunga Bangsa\', etnis Melayu Deli merepresentasikan kehalusan budaya serta sejarah sosial-politik kawasan ini. Di bawah kepemimpinan Tuanku Panglima Gocah Pahlawan, kesultanan ini berkembang pesat menjadi pusat perdagangan dan diplomasi internasional.'
      ],
      quote: '"Di mana tanah Deli bertemu dengan lautan, di situlah kebudayaan Melayu tumbuh mekar di setiap relung hati dan sanubari."',
      archiveImage: imgMelayuTempoDulu,
      archiveCaption: 'Arsip Sejarah Melayu Deli'
    },
    

    pilarBudaya: {
      title: 'Pilar Kebudayaan',
      subtitle: 'Esensi Melayu Deli terus lestari melalui keelokan seni, busana tradisional, serta ritme kehidupan sehari-hari yang penuh dengan nilai puitis.',
      baju: {
        title: 'Baju Kurung & Cekak Musang',
        description: 'Simbol kesantunan dan kebangsawanan, yang dicirikan oleh indahnya tenunan Songket serta hiasan kepala ikonik berupa \'Tanjak\'.',
        image: imgBajuMelayu
      },
      tari: {
        title: 'Tari Zapin',
        description: 'Tarian berirama dinamis hasil akulturasi Arab-Melayu, yang dibawakan melalui gerakan kaki yang anggun mengikuti ketukan marwas.',
        icon: iconTopeng
      },
      pantun: {
        title: 'Pantun Tradition',
        description: 'Seni puisi lama yang diucapkan secara spontan, sering digunakan dalam pernikahan dan upacara adat untuk menyampaikan petuah bijaksana, jenaka, hingga rasa hormat.',
        quoteText: 'Hancur badan dikandung tanah, budi yang baik terkenan jua.',
        quoteAuthor: 'PERIBAHASA MELAYU KLASIK',
        quoteMeaning: 'Meskipun seseorang sudah meninggal dunia, kebaikan dan budi pekerti baik yang pernah ia lakukan di dunia akan tetap diingat dan dikenang oleh orang lain selama-lamanya.'
      }
    },

    kuliner: {
      title: 'Cita Rasa Kerajaan',
      description: 'Kuliner Melayu Deli merupakan perpaduan istimewa antara bahan lokal dan rempah dunia. Setiap hidangannya mencerminkan kehangatan dan keramahan khas Kesultanan.',
      images: [imgNasiLemak, imgBuburPedas],
      menus: [
        { name: 'Nasi Lemak Deli', desc: 'Berbeda dari versi biasa, Nasi Lemak khas Deli terkenal dengan aroma rempahnya yang lebih kaya serta lauk pendamping yang spesifik, seperti paru goreng atau rendang.', icon: iconAlatMakan },
        { name: 'Bubur Pedas', desc: 'Sajian kaya nutrisi yang terbuat dari lebih dari 40 jenis umbi, rempah, dan dedaunan, yang secara tradisi disajikan selama bulan Ramadan di Masjid Raya.', icon: iconAlatMakan }
      ]
    },

    arsitektur: {
      title: 'Ikon Arsitektur',
      subtitle: 'Siluet cakrawala Kota Medan diperindah oleh kemegahan kubah ikonik dan lengkungan arsitektur bernilai seni tinggi dari situs warisan Deli.',
      items: [
        {
          title: 'Istana Maimun',
          description: 'Dibangun pada tahun 1888, istana dengan 30 ruangan ini menampilkan perpaduan eklektik antara gaya arsitektur Melayu, Islam, dan Eropa. Hingga kini, istana ini tetap tegak sebagai simbol kejayaan Kesultanan Deli.',
          category: 'Monumen Budaya',
          image: imgIstanaMaimun
        },
        {
          title: 'Masjid Raya Al-Mashun',
          description: 'Dirancang oleh arsitek asal Belanda, Masjid Raya ini menjadi pusat spiritual Kesultanan Deli yang megah dengan hamparan keramik Maroko serta lantai marmer Italia.',
          category: 'Landmark Keagamaan',
          image: imgMesjidRaya
        }
      ]
    }
  },

  batak: {
    slug: 'batak',
    heroTitle: 'Etnis Batak',
    heroSubtitle: 'Jiwa dari Dataran Tinggi — Etnis Batak. Menelusuri jejak dan warisan leluhur Sumatra Utara melalui keberagaman sub-etnis masyarakat Batak.',
    heroImage: imgBatakToba,

    sejarah: {
      tag: 'SEJARAH & ASAL USUL',
      title: 'Warisan \'Halak Batak\'',
      paragraphs: [
        'Masyarakat Batak, dengan akar sejarah yang terbentang luas di kawasan dataran tinggi Sumatra Utara, merupakan pilar penting identitas budaya Nusantara.',
        'Terbagi ke dalam berbagai sub-etnis yang kaya akan keunikan, suku Batak merepresentasikan kekuatan tradisi, sistem kekerabatan yang erat, serta sejarah ketangguhan sosial di wilayah ini. Di bawah falsafah adat luhur dan struktur marga yang mengakar kuat, kebudayaan ini terus tumbuh subur menjadi simbol kehormatan, persaudaraan, dan diplomasi adat yang tak lekang oleh waktu.'
      ],
      quote: '"Di mana angin dataran tinggi berembus melintasi pegunungan dan danau, di situlah jiwa masyarakat Batak teguh berdiri di dalam setiap langkah dan garis keturunan."',
      archiveImage: imgBatakTempoDulu,
      archiveCaption: 'Arsip Sejarah Batak'
    },

    pilarBudaya: {
      title: 'Tiga Pilar Dalihan Na Tolu',
      subtitle: 'Filosofi "Tungku Berkaki Tiga" yang menjadi fondasi utama struktur sosial masyarakat Batak, menjaga keharmonisan melalui keseimbangan antara tiga peran penting.',
      baju: {
        title: 'Ulos: Kain Tenun Sakral',
        description: 'Lebih dari sekadar kain biasa, Ulos melambangkan kehangatan, perlindungan, serta ikatan spiritual yang menghubungkan antargenerasi.',
        image: imgUlos
      },
      tari: {
        title: 'Somba Marhula-hula',
        description: 'Hormat kepada pihak pemberi wanita, yang dipandang sebagai sumber berkat.',
        icon: iconTopeng
      },
      pantun: {
        title: 'Elek Marboru',
        description: 'Mengayomi dan berlaku lemah lembut kepada pihak penerima wanita yang setia membantu.',
        quoteText: 'Pantun hangoluan, tois hamagoan.',
        quoteAuthor: 'PERIBAHASA BATAK TOBA',
        quoteMeaning: 'Sopan santun membawa kebahagiaan hidup, keangkuhan membawa kehancuran.'
      }
    },

    kuliner: {
      title: 'Cita Rasa Tegas & Budaya Kopi',
      description: 'Kuliner Batak terkenal dengan perpaduan rempah eksotis yang berani dan menggugah selera. Di samping hidangannya yang kaya rasa, tradisi minum kopi di kedai-kedai lokal telah lama menjadi bagian tak terpisahkan dari denyut kehidupan masyarakatnya.',
      images: [imgIkanMasArsik, imgKopiSidikalang],
      menus: [
        { name: 'Arsik Ikan Mas', desc: 'Hidangan adat ikonik berkuah kuning khas Batak yang dimasak menggunakan bumbu khas dataran tinggi, seperti andaliman, asam gelugur, dan kincung (kecombrang), menghasilkan rasa getir, asam, dan gurih yang segar.', icon: iconAlatMakan },
        { name: 'Kopi Sidikalang dan Mandailing', desc: 'Dua varietas kopi legendaris dari tanah Sumatra Utara yang telah mendunia. Terkenal dengan karakteristik aromanya yang kuat, berbody tebal (full body), serta tingkat keasaman rendah yang khas.', icon: iconAlatMakan }
      ]
    },

    arsitektur: {
      title: 'Ikon Arsitektur',
      subtitle: 'Sudut-sudut Kota Medan diperkaya oleh adaptasi arsitektur tradisional dan ruang komunal bernuansa kultural, menjadi simbol identitas.',
      items: [
        {
          title: 'HKBP Sudirman Medan',
          description: 'Salah satu gereja ikonik di Kota Medan yang memadukan arsitektur modern dengan sentuhan struktural rumah adat Batak Toba. Bagian depannya menampilkan replika atap segitiga yang menjulang tinggi serta ornamen ukiran Gorga yang megah di area pintu masuk.',
          category: 'Pusat Spiritual • Landmark Kota',
          image: imgHKBP
        },
        {
          title: 'Jambur Karo',
          description: 'Medan memiliki beberapa bangunan pertemuan adat (Jambur) dan gereja GBKP yang dibangun dengan mengadopsi gaya atap ijuk bertingkat khas rumah adat Karo (Siwaluh Jabu). Bangunan ini berfungsi sebagai pusat pelestarian budaya dan tempat berlangsungnya musyawarah serta upacara adat.',
          category: 'Pusat Budaya • Monumen Sosial',
          image: imgJamburKaro
        }
      ]
    }
  },

  jawa: {
    slug: 'jawa',
    heroTitle: 'Nafas Jawa di Tanah Deli ',
    heroSubtitle: 'Menelusuri jejak langkah, kesederhanaan tradisi, dan kehangatan budaya leluhur Jawa yang telah berabad-abad berasimilasi serta menjadi bagian penting dalam keberagaman sosial di Kota Medan.',
    heroImage: imgJawaTempoDulu,

    sejarah: {
      tag: 'SEJARAH & ASAL USUL',
      title: 'Warisan Jawa Medan',
      paragraphs: [
        'Kehadiran etnis Jawa di Sumatra Utara memiliki akar sejarah yang kuat sejak akhir abad ke-19, dipicu oleh gelombang migrasi besar-besaran kontrak buruh ke perkebunan tembakau legendaris di Tanah Deli.',
        'Seiring berjalannya waktu, komunitas yang kerap disebut sebagai Jawa Deli atau Jadel ini menetap, berbaur, dan menyebar ke wilayah perkotaan Medan. Kontribusi mereka sangat besar dalam membentuk lanskap sosial, keragaman kuliner, dan kehidupan kultural perkotaan. Warisan budaya Jawa di Medan tetap lestari hingga hari ini melalui pelestarian seni tradisional seperti jaran kepang (kuda lumping), pagelaran wayang, hingga akulturasi dialek bahasa yang khas.'
      ],
      quote: '"Di mana alunan gamelan berpadu dengan dinamika kota dan kehangatan tradisi gotong royong tetap terjaga, di situlah denyut kebudayaan Jawa hidup memperkaya keberagaman Medan."',
      archiveImage: imgJawaTempoDulu,
      archiveCaption: 'Arsip Sejarah Jawa Deli'
    },

    pilarBudaya: {
      title: 'Jiwa \'Jawa Deli\'',
      subtitle: 'Keheningan prosesi spiritual dan kemeriahan seni rakyat yang sarat akan makna luhur, simbol rasa syukur kepada Sang Pencipta, serta doa keselamatan bagi seluruh masyarakat.',
      baju: {
        title: 'Seni Jaran Kepang (Kuda Lumping)',
        description: 'Seni pertunjukan rakyat paling populer yang terus dirawat oleh berbagai paguyuban di Medan. Menampilkan tarian prajurit berkuda anyaman bambu yang enerjik berpadu ritme gamelan, tarian ini menyimbolkan kegagahan, heroisme, serta refleksi kekuatan spiritual manusia.',
        image: imgKudaLumping
      },
      tari: {
        title: 'Tradisi Malam Satu Suro',
        description: 'Momen sakral pergantian tahun Jawa yang diperingati sebagai waktu untuk introspeksi diri (tirakat). Tradisi ini biasanya diisi dengan doa bersama, prosesi jalan sunyi, hingga pagelaran wayang kulit semalam suntuk sebagai refleksi spiritual.',
        icon: iconTopeng
      },
      pantun: {
        title: 'Grebeg Suro & Gunungan',
        description: 'Puncak perayaan syukur berupa arak-arakan gunungan yang berisi hasil bumi. Rebutan gunungan oleh masyarakat bukan sekadar tradisi seru, melainkan simbol mencari berkah, sedekah bumi, dan penguat tali silaturahmi gotong royong.',
        quoteText: 'Memayu Hayuning Bawana.',
        quoteAuthor: 'FALSAFAH HIDUP JAWA KLASIK',
        quoteMeaning: 'Kewajiban moral manusia untuk selalu menjaga, memperindah, dan memelihara keserasian serta kedamaian dunia beserta isinya.'
      }
    },

    kuliner: {
      title: 'Kesederhanaan Rasa & Kehangatan Tradisi',
      description: 'Kuliner Jawa di Medan terkenal dengan perpaduan cita rasa manis, gurih, dan segar yang diolah dari resep warisan leluhur. Di samping hidangannya yang merakyat, tradisi menyajikan kuliner dengan sentuhan bumbu kacang atau kuah kaldu hangat telah lama menjadi simbol kenyamanan rasa yang menyatukan berbagai kalangan.',
      images: [imgPecalJawa, imgBakso],
      menus: [
        { name: 'Pecel Jawa', desc: 'Hidangan sehat berupa aneka sayuran rebus segar yang disiram saus kacang kental bercita rasa manis, gurih, dan sedikit pedas. Di Medan, kuliner legendaris ini sering disajikan bersama pelengkap seperti rempeyek renyah atau mie lidi, melambangkan kesederhanaan hidup yang kaya rasa.', icon: iconAlatMakan },
        { name: 'Bakso & Mie Sop Jawa', desc: 'Hidangan berkuah kaldu sapi atau ayam yang gurih, disajikan bersama mie, suwiran daging, dan bulatan bakso yang kenyal. Racikan bumbu rempah tradisionalnya yang khas menghadirkan kehangatan sejati di setiap mangkuknya, menjadikannya kuliner favorit yang merata di setiap sudut kota.', icon: iconAlatMakan }
      ]
    },

    arsitektur: {
      title: 'Ikon Arsitektur',
      subtitle: 'Sudut-sudut Kota Medan diperkaya oleh adaptasi arsitektur tradisional Jawa dan ruang komunal bernuansa kultural, menjadi simbol identitas, memori sejarah perkebunan, serta lestarinya tradisi guyub di tengah kota.',
      items: [
        {
          title: 'Pendopo Pujakesuma',
          description: 'Kompleks pusat kebudayaan dan organisasi kemasyarakatan warga Jawa kelahiran Sumatra (Pujakesuma) di Medan. Bangunan ini mengadopsi struktur Pendopo dengan atap Joglo terbuka, berfungsi sebagai wadah pelestarian seni tradisional, diskusi budaya, hingga ruang guyub antargenerasi.',
          category: 'Pusat Budaya • Monumen Sosial',
          image: imgPendopoPujakesuma
        },
        {
          title: 'Masjid Jami\' Kampung Baru',
          description: 'Terletak di salah satu kantong pemukiman awal masyarakat Jawa di Kota Medan, masjid lama ini menjadi saksi bisu perkembangan dakwah dan gotong royong warga setempat. Keberadaannya mengakar kuat dalam sejarah komunitas Jawa urban, berfungsi sebagai ruang spiritual sekaligus pengikat silaturahmi antargenerasi.',
          category: 'Situs Warisan • Landmark Kota',
          image: imgMasjidJami
        }
      ]
    }
  },

  tionghoa: {
    slug: 'tionghoa',
    heroTitle: 'Jiwa dari Negeri Tirai Bambu ',
    heroSubtitle: 'Menelusuri akulturasi budaya dan warisan leluhur Tionghoa yang telah berabad-abad memperkaya keberagaman sosial, arsitektur, serta dinamika Kota Medan.',
    heroImage: imgKesawan,

    sejarah: {
      tag: 'SEJARAH & ASAL USUL',
      title: 'Warisan Tionghoa Medan',
      paragraphs: [
        'Kehadiran etnis Tionghoa di Kota Medan memiliki akar sejarah yang panjang, berawal dari gelombang migrasi pekerja imigran yang datang untuk mengadu nasib di perkebunan tembakau Deli pada abad ke-19.',
        'Seiring berjalannya waktu, komunitas ini tumbuh menjadi pilar penting yang menggerakkan roda perekonomian, perdagangan, dan membentuk lanskap perkotaan. Dipelopori oleh tokoh-tokoh visioner legendaris seperti Tjong A Fie, warisan etnis Tionghoa melekat erat pada keindahan arsitektur kota kuno, keragaman kuliner, serta semangat filantropi yang terus lestari hingga hari ini.'
      ],
      quote: '"Di mana lampion merah menyala di sepanjang koridor Kesawan, di situlah jejak akulturasi dan sumbangsih komunitas Tionghoa terus hidup memperkaya sanubari Kota Medan."',
      archiveImage: imgTiongHoaTempoDulu,
      archiveCaption: 'Arsip Sejarah Tionghoa'
    },

    pilarBudaya: {
      title: 'Warisan \'Negeri Tirai Bambu\'',
      subtitle: 'Kemeriahan momen pergantian tahun dan perayaan Cap Go Meh yang sarat akan makna spiritual, ungkapan rasa syukur, serta doa untuk keberkahan yang baru.',
      baju: {
        title: 'Atraksi Barongsai & Naga',
        description: 'Seni pertunjukan ikonik yang menjadi ruh di setiap perayaan. Tarian singa dan naga ini dipercaya berfungsi sebagai pembersih aura negatif, penolak bala, serta pembuka jalan bagi datangnya keberuntungan.',
        image: imgBarongsai
      },
      tari: {
        title: 'Tahun Baru Imlek',
        description: 'Momen sakral untuk berkumpul bersama keluarga besar, melakukan sembahyang syukur kepada leluhur, dan saling mendoakan kemakmuran di tahun yang baru.',
        icon: iconTopeng
      },
      pantun: {
        title: 'Festival Cap Go Meh',
        description: 'Puncak sekaligus penutup rangkaian perayaan Imlek pada hari ke-15. Di Medan, momen ini biasanya dimeriahkan oleh pawai budaya yang megah, festival lampion, dan doa bersama.',
        quoteText: 'Gōng xǐ fā cái, wàn shì rú yì.',
        quoteAuthor: 'UNGKAPAN TRADISIONAL IMLEK',
        quoteMeaning: 'Selamat dan semoga berlimpah rezeki, serta semoga segala keinginan Anda dapat terwujud dengan lancar.'
      }
    },

    kuliner: {
      title: 'Harmoni Rasa & Kehangatan',
      description: 'Kuliner Tionghoa terkenal dengan teknik memasak warisan leluhur yang mengutamakan keseimbangan rasa, aroma, dan tekstur. Di samping hidangannya yang menggugah selera, tradisi berkumpul menikmati camilan hangat telah lama menjadi simbol kebersamaan keluarga yang erat.',
      images: [imgDimsum, imgBakpao],
      menus: [
        { name: 'Dimsum', desc: 'Hidangan kecil gurih berupa kukusan maupun gorengan yang dibuat dengan tingkat presisi tinggi. Setiap gigitan kulitnya yang lembut menyimpan kelezatan isian daging atau udang segar yang kaya rasa, menyimbolkan sentuhan kehangatan di hati.', icon: iconAlatMakan },
        { name: 'Bakpao', desc: 'Roti kukus tradisional bertekstur empuk dan lembut bagaikan awan yang menyajikan kehangatan sejati. Diisi dengan berbagai varian manis maupun gurih, hidangan legendaris ini melambangkan doa untuk rezeki yang terus mengembang dan utuh.', icon: iconAlatMakan }
      ]
    },

    arsitektur: {
      title: 'Ikon Arsitektur',
      subtitle: 'Sudut-sudut Kota Medan diperindah oleh kemegahan arsitektur oriental kuno dan pusat spiritual yang megah, menjadi simbol identitas, sejarah, serta keharmonisan budaya yang kuat di tengah kota.',
      items: [
        {
          title: 'Tjong A Fie Mansion',
          description: 'Istana megah dua lantai yang dibangun pada tahun 1895 oleh tokoh filantropi legendaris Tjong A Fie. Bangunan ini menampilkan perpaduan arsitektur Tionghoa kuno, Melayu, dan Eropa, serta berdiri sebagai monumen sejarah kejayaan perdagangan di Medan.',
          category: 'Situs Warisan • Landmark Kota',
          image: imgKesawan
        },
        {
          title: 'Maha Vihara Maitreya',
          description: 'Salah satu vihara terbesar di Indonesia yang menjadi pusat spiritual dan keagamaan komunitas Tionghoa di Medan. Bangunan ini menampilkan arsitektur modern berpadu dengan simbolisme oriental klasik, menghadirkan suasana yang megah namun penuh kedamaian.',
          category: 'Pusat Spiritual • Monumen Sosial',
          image: imgMahaVihara
        }
      ]
    }
  },

  india: {
    slug: 'india',
    heroTitle: 'Jiwa dari Kampung Madras ',
    heroSubtitle: 'Menelusuri kehangatan tradisi, warna-warni budaya, dan warisan leluhur India yang telah berabad-abad melekat erat serta memperkaya keberagaman sosial kebudayaan di Kota Medan.',
    heroImage: imgKuilHero,

    sejarah: {
      tag: 'SEJARAH & ASAL USUL',
      title: 'Warisan India Medan',
      paragraphs: [
        'Kehadiran etnis India di Kota Medan, khususnya komunitas India Tamil, memiliki akar sejarah yang panjang sejak abad ke-19. Mereka awalnya datang ke tanah Deli sebagai pekerja terampil, pembangun infrastruktur, dan pedagang di bawah masa pemerintahan kesultanan dan kolonial.',
        'Seiring waktu, komunitas ini menetap dan membentuk kawasan ikonis bernama Kampung Madras (Little India). Warisan budaya mereka tetap hidup kokoh hingga hari ini melalui kemegahan kuil-kuil Hindu bergaya arsitektur India Selatan, perayaan festival keagamaan yang meriah, serta kekayaan kuliner rempah yang khas.'
      ],
      quote: '"Di mana aroma rempah kari menyerbak dan rona festival Thaipusam menyala, di situlah denyut tradisi etnis India terus hidup menjadi bagian tak terpisahkan dari identitas Kota Medan."',
      archiveImage: imgIndiaTempoDulu,
      archiveCaption: 'Arsip Sejarah Etnis India'
    },

    pilarBudaya: {
      title: 'Warisan \'Negeri Anak Benua\'',
      subtitle: 'Kemeriahan momen festival suci dan ritual tradisi yang sarat akan makna spiritual, simbol kemenangan kebajikan, serta doa untuk kedamaian hidup yang baru.',
      baju: {
        title: 'Festival Thaipusam',
        description: 'Perayaan agung yang menjadi ikon spiritual komunitas India Tamil di Medan. Ditandai dengan prosesi megah arak-arakan kereta kencana kuno dari Kuil Sri Mariamman serta ritual membawa Kavadi sebagai bentuk kaul, keteguhan iman, dan pembersihan diri dari dosa.',
        image: imgKuilIndia
      },
      tari: {
        title: 'Hari Raya Deepavali',
        description: 'Dikenal sebagai Festival Cahaya, momen sakral ini merayakan kemenangan kebaikan atas kejahatan. Ditandai dengan penyalaan lampu minyak (diyas), memakai pakaian tradisional baru, dan berkumpul bersama keluarga.',
        icon: iconTopeng
      },
      pantun: {
        title: 'Seni Kolam & Ornamen Tradisional',
        description: 'Seni dekorasi lantai menggunakan tepung beras warna-warni di depan pintu rumah selama festival. Kolam bukan sekadar hiasan estetis, melainkan simbol keramahan, membawa keberuntungan, serta menyambut berkah dewi kemakmuran.',
        quoteText: 'Deepavali Valthukkal.',
        quoteAuthor: 'UNGKAPAN TRADISIONAL TAMIL',
        quoteMeaning: 'Selamat Hari Raya Deepavali; semoga cahaya kedamaian, kebahagiaan, dan kemakmuran selalu menerangi setiap langkah kehidupan Anda.'
      }
    },

    kuliner: {
      title: 'Kekayaan Rempah & Warisan Tradisi',
      description: 'Kuliner India Tamil terkenal dengan penggunaan perpaduan rempah-rempah autentik yang berani, menghasilkan aroma yang kuat dan cita rasa yang mendalam. Di samping hidangannya yang kaya rasa, tradisi menyajikan makanan hangat di atas daun pisang menjadi simbol keramahan dan rasa syukur yang diwariskan antargenerasi.',
      images: [imgNasiBriyani, imgRotiCanai],
      menus: [
        { name: 'Nasi Briyani', desc: 'Hidangan utama ikonik berupa nasi berbutir panjang yang dimasak bersama rempah-rempah aromatik seperti kapulaga, kayu manis, dan cengkih. Disajikan bersama kuah kari kental yang kaya bumbu, hidangan ini merepresentasikan kehangatan dan kemeriahan tradisi rasa India Selatan.', icon: iconAlatMakan },
        { name: 'Roti Canai', desc: 'Roti pipih tradisional bertekstur renyah di luar namun lembut dan berlapis di dalam, dibuat dengan teknik memutar dan membalik adonan yang khas. Biasa disantap bersama kuah dal atau kuah kari hangat, hidangan legendaris ini melambangkan kesederhanaan yang menyatukan kebersamaan.', icon: iconAlatMakan }
      ]
    },

    arsitektur: {
      title: 'Ikon Arsitektur',
      subtitle: 'Sudut-sudut Kota Medan diperkaya oleh keindahan arsitektur khas India Selatan dan pusat spiritual bergaya Mughal, menjadi simbol identitas, sejarah migrasi, serta kekayaan toleransi budaya di tengah kota.',
      items: [
        {
          title: 'Kuil Sri Mariamman',
          description: 'Kuil Hindu tertua di Medan yang dibangun pada tahun 1884 di kawasan Kampung Madras. Fasadnya menampilkan arsitektur khas gaya Dravida dengan Gopuram (menara gerbang) megah yang dihiasi ratusan relief patung dewa-dewi Hindu hasil mahakarya seniman ornamen India kuno.',
          category: 'Pusat Spiritual • Landmark Kota',
          image: imgKuil
        },
        {
          title: 'Masjid Ghaudiyah',
          description: 'Tempat ibadah bersejarah milik komunitas Muslim India Selatan (Maniakar) di Medan yang didirikan sejak akhir abad ke-19. Bangunan ini menampilkan keunikan arsitektur bergaya Mughal dengan kubah, pilar, dan menara mini yang menyerupai bangunan ikonik di India.',
          category: 'Monumen Sosial • Landmark Kota',
          image: imgMasjidGhaudiyah
        }
      ]
    }
  },

  minangkabau: {
    slug: 'minangkabau',
    heroTitle: 'Langkah Minang di Tanah Deli',
    heroSubtitle: 'Menelusuri jejak langkah, filosofi hidup yang dinamis, dan keteguhan tradisi leluhur Minangkabau yang telah lama merantau serta memperkaya denyut nadi perekonomian dan sosial di Kota Medan.',
    heroImage: imgPiringHero,

    sejarah: {
      tag: 'SEJARAH & ASAL USUL',
      title: 'Warisan Minangkabau Medan',
      paragraphs: [
        'Kehadiran etnis Minangkabau di Kota Medan memiliki rekam jejak yang panjang, didorong oleh tradisi kuat \'merantau\' sebagai fase pendewasaan diri. Komunitas Minang mulai berdatangan sejak awal abad ke-20, mengisi sektor perdagangan di pasar-pasar tradisional, mempelopori dunia pers dan sastra, hingga mendirikan pusat-pusat pendidikan formal.',
        'Berpegang teguh pada prinsip di mana bumi dipijak, di situ langit dijunjung, warga Minang berintegrasi secara harmonis dengan masyarakat lokal tanpa kehilangan jati diri mereka. Warisan kultural ini tetap hidup subur di Medan, tercermin dari menjamurnya usaha rumah makan Padang, eksistensi organisasi kekeluargaan yang solid, hingga penerapan nilai adat yang relijius.'
      ],
      quote: '"Di mana semangat perantau membaja, falsafah \'adat basandi syarak\' dijaga, dan kehangatan rasa masakan Minang menyatu dalam keseharian, di situlah denyut kebudayaan Minangkabau memperkaya warna Kota Medan."',
      archiveImage: imgMinangTempoDulu,
      archiveCaption: 'Arsip Sejarah Minangkabau'
    },

    pilarBudaya: {
      title: 'Pilar Kebudayaan',
      subtitle: 'Esensi Minangkabau terus lestari melalui keelokan seni dan ritme kehidupan sehari-hari yang penuh dengan nilai puitis.',
      baju: {
        title: 'Seni Tari Piring (Tari Piriang)',
        description: 'Seni pertunjukan ikonik yang melambangkan rasa syukur atas hasil panen yang melimpah. Menampilkan gerakan lincah dan cepat tanpa menjatuhkan piring di tangan, tarian ini merefleksikan ketangkasan, kebersamaan, serta keteguhan jiwa masyarakat Minangkabau dalam menghadapi tantangan hidup.',
        image: imgTariPiring
      },
      tari: {
        title: 'Malam Bainai',
        description: 'Malam terakhir bagi calon pengantin wanita (anak daro) menikmati masa lajangnya. Prosesi melekatkan tumbukan daun pacar merah (inai) ke kuku ini dipenuhi suasana sakral, iringan doa, dan ungkapan kasih sayang tulus dari orang tua serta kerabat dekat.',
        icon: iconTopeng
      },
      pantun: {
        title: 'Tradisi Baralek (Pesta Adat)',
        description: 'Perayaan pernikahan besar yang menjadi ruang berkumpulnya keluarga besar dan komunitas perantau Minang di Medan. Menampilkan kemegahan pelaminan bertingkat, tradisi ini memperkuat tali silaturahmi serta gotong royong melalui konsep salingka adat.',
        quoteText: 'Di mana bumi dipijak, di situ langit dijunjung.',
        quoteAuthor: 'PEPATAH ADAT MINANGKABAU',
        quoteMeaning: 'Kewajiban untuk selalu menghormati, menyesuaikan diri, dan mematuhi adat istiadat setempat di mana pun kita merantau, tanpa kehilangan jati diri asal.'
      }
    },

    kuliner: {
      title: 'Kekayaan Rempah & Keaslian Rasa',
      description: 'Hidangan mahakarya yang dimasak perlahan menggunakan aneka rempah Nusantara dan santan hingga meresap sempurna ke serat daging. Proses karamelisasi alami ini menghasilkan cita rasa gurih yang mendalam...',
      images: [imgRendang, imgSatePadang],
      menus: [
        { name: 'Rendang Daging', desc: 'Hidangan mahakarya yang dimasak perlahan menggunakan aneka rempah Nusantara dan santan hingga meresap sempurna ke serat daging. Proses karamelisasi alami ini menghasilkan cita rasa gurih yang mendalam dan warna gelap yang khas, melambangkan ketabahan, kesabaran, serta kearifan budaya leluhur.', icon: iconAlatMakan },
        { name: 'Sate Padang', desc: 'Potongan daging atau lidah sapi empuk yang dibakar harum, lalu disiram saus kuah kental berwarna kuning kecokelatan yang kaya akan rempah dan cabai. Kehangatan rasa pedasnya yang menggigit berpadu dengan taburan bawang goreng renyah, menjadikannya kuliner malam yang sangat diburu di setiap sudut Medan.', icon: iconAlatMakan }
      ]
    },

    arsitektur: {
      title: 'Ikon Arsitektur',
      subtitle: 'Sudut-sudut Kota Medan diperkaya oleh adaptasi arsitektur tradisional Minangkabau dan ruang komunal bernuansa kultural, menjadi simbol identitas, memori sejarah perantauan, serta lestarinya tradisi guyub di tengah kota.',
      items: [
        {
          title: 'Gedung Dakwah IKGS',
          description: 'Kompleks pusat dakwah dan sosial yang dikelola oleh Ikatan Keluarga Gasan Satyo (IKGS) di Medan. Bangunan ini memadukan fungsi modern dengan elemen atap gonjong khas Minangkabau, menjadi ruang pemersatu bagi perantau asal Gasan Gadang (Padang Pariaman) untuk menjalankan kegiatan keagamaan, pendidikan, dan pelestarian nilai budaya.',
          category: 'Pusat Budaya • Monumen Sosial',
          image: imgGedungDakwah
        },
        {
          title: 'Rumah Gadang Manuhampu Medan',
          description: 'Rumah adat tradisional Minangkabau yang didirikan oleh persatuan keluarga perantau asal Banuhampu di Kota Medan. Bangunan dengan ornamen ukiran dan kain songket khas ini berfungsi sebagai wadah pertemuan akbar, pelestarian adat istiadat, serta penguat tali silaturahmi gotong royong warga Minang di tanah rantau.',
          category: 'Situs Warisan • Landmark Kota',
          image: imgRumahGadang
        }
      ]
    }
  }
};
