export const spotConfig = {
  title: "Spot Kuliner Legendaris",
  subtitle:
    "Tempat-tempat makan yang telah berdiri puluhan tahun dan menjadi identitas kuliner Kota Medan.",
  viewAllText: "Lihat Semua Lokasi",
  viewAllPath: "/semua-lokasi",
  bgPattern: "/images/melayu-pattern.png", // Taruh file ornamen Melayu/Batak di folder public/images/
  items: [
    {
      id: 1,
      title: "Ucok Durian",
      rating: "4.8",
      address: "Jl. K.H. Wahid Hasyim No.30-32",
      desc: "Kuliner legendaris Medan yang buka 24 jam, menyajikan durian segar berkualitas dengan rasa yang otentik.",
      status: "Buka • 24 jam",
      imageUrl: "/images/spot-ucok.jpg", // Aset gambar warung Ucok Durian
      mapPath: "/maps/ucok",
    },
    {
      id: 2,
      title: "Sate Memeng T.Amir Hamzah",
      rating: "4.6",
      address: "Jl. T. Amir Hamzah, Sei Agul, Kec. Medan Barat",
      desc: "Kuliner legendaris Medan dengan potongan daging besar dan empuk, disiram kuah kacang atau kuah padang yang tebal dan kaya rempah.",
      status: "Buka • 16:00 - 00:00",
      imageUrl: "/images/spot-memeng.jpg", // Aset gambar Sate Memeng
      mapPath: "/maps/memeng",
    },
    {
      id: 3,
      title: "Rumah Makan Sinar Pagi",
      rating: "4.9",
      address: "No.2D/1, Jl. Sei Deli No.2D/1",
      desc: "Tempat soto paling ikonik di Medan. Kuah santan kental yang gurih menjadi favorit warga lokal dan turis.",
      status: "Buka • 07:00 - 15:30",
      imageUrl: "/images/spot-sinarpagi.jpg", // Aset gambar RM Sinar Pagi
      mapPath: "/maps/sinarpagi",
    },
  ],
};
