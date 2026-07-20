import BgLandscapeImg from "../assets/images/bg-landscape.webp";
import UcokDurianImg from "../assets/images/kuliner/ucok-durian.png";
import SateMemengImg from "../assets/images/kuliner/sate-memeng.jpg";
import RmSinarPagiImg from "../assets/images/kuliner/rm-sinar-pagi.webp";

export const spotConfig = {
  id: {
    title: "Spot Kuliner Legendaris",
    subtitle: "Tempat-tempat makan yang telah berdiri puluhan tahun dan menjadi identitas kuliner Kota Medan.",
    viewAllText: "Lihat Semua Lokasi",
    viewAllPath: "/kuliner/legendary-spots",
    bgPattern: BgLandscapeImg,
    items: [
      {
        id: 1,
        title: "Ucok Durian",
        rating: "4.8",
        address: "Jl. K.H. Wahid Hasyim No.30-32",
        desc: "Kuliner legendaris Medan yang buka 24 jam, menyajikan durian segar berkualitas dengan rasa yang otentik.",
        status: "Buka • 24 jam",
        imageUrl: UcokDurianImg,
        mapPath: "/maps/ucok",
      },
      {
        id: 2,
        title: "Sate Memeng T.Amir Hamzah",
        rating: "4.6",
        address: "Jl. T. Amir Hamzah, Sei Agul, Kec. Medan Barat",
        desc: "Kuliner legendaris Medan dengan potongan daging besar dan empuk, disiram kuah kacang atau kuah padang yang tebal dan kaya rempah.",
        status: "Buka • 16:00 - 00:00",
        imageUrl: SateMemengImg,
        mapPath: "/maps/memeng",
      },
      {
        id: 3,
        title: "Rumah Makan Sinar Pagi",
        rating: "4.9",
        address: "No.2D/1, Jl. Sei Deli No.2D/1",
        desc: "Tempat soto paling ikonik di Medan. Kuah santan kental yang gurih menjadi favorit warga lokal dan turis.",
        status: "Buka • 07:00 - 15:30",
        imageUrl: RmSinarPagiImg,
        mapPath: "/maps/sinarpagi",
      },
    ],
  },
  en: {
    title: "Legendary Culinary Spots",
    subtitle: "Eateries that have stood for decades and become the culinary identity of Medan City.",
    viewAllText: "View All Locations",
    viewAllPath: "/kuliner/legendary-spots",
    bgPattern: BgLandscapeImg,
    items: [
      {
        id: 1,
        title: "Ucok Durian",
        rating: "4.8",
        address: "Jl. K.H. Wahid Hasyim No.30-32",
        desc: "Medan's legendary culinary spot open 24 hours, serving fresh, high-quality durian with an authentic taste.",
        status: "Open • 24 hours",
        imageUrl: UcokDurianImg,
        mapPath: "/maps/ucok",
      },
      {
        id: 2,
        title: "Sate Memeng T.Amir Hamzah",
        rating: "4.6",
        address: "Jl. T. Amir Hamzah, Sei Agul, Kec. Medan Barat",
        desc: "A legendary culinary spot in Medan featuring large, tender meat cuts, generously poured with thick, spice-rich peanut or padang sauce.",
        status: "Open • 16:00 - 00:00",
        imageUrl: SateMemengImg,
        mapPath: "/maps/memeng",
      },
      {
        id: 3,
        title: "Rumah Makan Sinar Pagi",
        rating: "4.9",
        address: "No.2D/1, Jl. Sei Deli No.2D/1",
        desc: "The most iconic soto place in Medan. The thick, savory coconut milk broth is a favorite among locals and tourists alike.",
        status: "Open • 07:00 - 15:30",
        imageUrl: RmSinarPagiImg,
        mapPath: "/maps/sinarpagi",
      },
    ],
  }
};
