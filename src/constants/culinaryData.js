// src/constants/culinaryData.js

import LontongMedanImg from "../assets/images/kuliner/lontong-medan.png";
import BikaAmbonImg from "../assets/images/kuliner/bika-ambon.png";
import JusMartabeImg from "../assets/images/kuliner/martabe.png";
import UcokDurianImg from "../assets/images/kuliner/ucok-durian.png";


export const culinaryConfig = {
  categories: [
    { id: "all", label: "Semua" },
    { id: "berat", label: "Makanan Berat" },
    { id: "camilan", label: "Camilan & Oleh-oleh" },
    { id: "segar", label: "Minuman Segar" },
  ],
  items: [
    {
      id: 1,
      title: "Lontong Medan",
      category: "berat",
      tag: "Makanan Berat",
      isMustTry: true,
      desc: "Perpaduan unik lontong, sayur gulai tauco yang sedap, serta taburan teri kacang dan kerupuk merah yang menciptakan cita rasa gurih-pedas autentik khas Medan.",
      imageUrl: LontongMedanImg, // Taruh di folder public/images/
      gridClass:
        "col-span-12 lg:col-span-7 aspect-[4/3] lg:aspect-auto lg:h-full",
    },
    {
      id: 2,
      title: "Bika Ambon",
      category: "camilan",
      tag: "Camilan",
      isMustTry: false,
      desc: "Kue basah tradisional bertekstur rongga semut dengan rasa pandan wangi.",
      imageUrl: BikaAmbonImg,
      gridClass:
        "col-span-12 sm:col-span-6 lg:col-span-5 aspect-[4/3] lg:aspect-auto",
    },
    {
      id: 3,
      title: "Jus Martabe",
      category: "segar",
      tag: "Minuman",
      isMustTry: false,
      desc: "Kombinasi segar buah markisa asli dan terong belanda khas Sumatra Utara.",
      imageUrl: JusMartabeImg,
      gridClass:
        "col-span-12 sm:col-span-6 lg:col-span-5 aspect-[4/3] lg:aspect-auto",
    },
    {
      id: 4,
      title: "Ucok Durian", 
      category: "camilan", 
      tag: "Ikonik",
      isMustTry: false,
      desc: "Raja durian dengan kualitas premium yang mendunia.",
      imageUrl: UcokDurianImg,
      gridClass: "col-span-12 lg:col-span-7 aspect-[16/9] lg:aspect-auto",
    },
  ],
};
