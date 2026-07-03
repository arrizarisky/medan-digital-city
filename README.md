# Medan Digital City

Website lomba bertema Kota Medan yang dibangun dengan Vite, React, dan Tailwind CSS.

Dokumen ini menjadi panduan bersama untuk tim developer agar struktur folder, penamaan file, dan alur development tetap konsisten.

## Cara Menjalankan Project

Pastikan Node.js sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Perintah yang tersedia:

| Perintah          | Fungsi                                           |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Menjalankan development server Vite              |
| `npm run build`   | Membuat hasil build production ke folder `dist/` |
| `npm run preview` | Menjalankan preview dari hasil build             |

## Struktur Folder

```text
medan-digital-city/
|-- public/
|-- src/
|   |-- assets/
|   |   |-- icons/
|   |   |-- images/
|   |   `-- logo/
|   |-- components/
|   |   |-- sections/
|   |   `-- ui/
|   |-- constants/
|   |-- hooks/
|   |-- lib/
|   |-- pages/
|   |-- App.jsx
|   |-- main.jsx
|   `-- style.css
|-- index.html
|-- vite.config.js
|-- package.json
`-- README.md
```

## Aturan Penggunaan Folder

### `public/`

Digunakan untuk file statis yang harus dapat diakses langsung dari root website.

Gunakan folder ini untuk:

- `favicon`
- file publik yang tidak perlu diproses oleh Vite
- aset statis yang memang harus dipanggil dengan URL langsung seperti `/nama-file.ext`

Jangan gunakan folder ini untuk gambar atau ikon yang dipakai langsung di komponen React. Untuk kebutuhan itu, simpan di `src/assets/` agar tetap ikut proses bundling.

### `src/`

Folder utama semua source code aplikasi.

Semua file React, style global, data statis, helper, hook, dan aset aplikasi harus berada di dalam folder ini, kecuali file yang memang perlu berada di root seperti `index.html`, `vite.config.js`, dan `package.json`.

### `src/assets/`

Digunakan untuk menyimpan aset visual yang dipakai oleh komponen.

Aturan umum:

- simpan ikon di `src/assets/icons/`
- simpan gambar konten di `src/assets/images/`
- simpan logo atau identitas brand di `src/assets/logo/`
- gunakan nama file yang jelas dan konsisten, misalnya `mesjid-raya.jpg`, `tjong-afie-mansion.png`, atau `Logo_Kota_Medan.webp`
- kompres gambar sebelum masuk repository jika ukurannya besar

Import aset dari komponen, contoh:

```jsx
import logoMedan from "@/assets/logo/Logo_Kota_Medan.webp";
```

### `src/assets/icons/`

Digunakan khusus untuk ikon.

Jika ikon sering dipakai di banyak tempat, export melalui `src/assets/icons/index.js` supaya import lebih rapi.

Contoh:

```js
import globe from "./globe.svg";
import search from "./search.svg";

export { globe, search };
```

Aturan:

- satu file untuk satu ikon
- gunakan format SVG jika memungkinkan
- gunakan `index.js` sebagai pintu export ikon bersama

### `src/assets/images/`

Digunakan untuk gambar utama, gambar destinasi, gambar section, dan ilustrasi yang menjadi bagian dari UI.

Aturan:

- gunakan format `.webp` jika memungkinkan untuk optimasi ukuran
- gunakan `.jpg` untuk foto
- gunakan `.png` jika butuh transparansi atau gambar sudah tersedia dalam format tersebut
- hindari menyimpan gambar sementara, hasil export desain mentah, atau file yang tidak dipakai

### `src/assets/logo/`

Digunakan khusus untuk logo, lambang, atau identitas visual resmi.

Aturan:

- jangan mencampur logo dengan gambar konten biasa
- gunakan nama yang menjelaskan sumber atau brand logo
- jika ada beberapa versi, beri suffix yang jelas seperti `-dark`, `-light`, atau `-compact`

### `src/components/`

Digunakan untuk komponen React yang dapat digunakan di halaman.

Folder ini dibagi menjadi:

- `sections/` untuk section besar halaman
- `ui/` untuk komponen kecil dan reusable

Jangan letakkan file halaman utuh di sini. Halaman utuh harus berada di `src/pages/`.

### `src/components/sections/`

Digunakan untuk section besar yang menyusun halaman, misalnya:

- `Navbar.jsx`
- `Hero.jsx`
- `QuickFacts.jsx`
- `Destination.jsx`
- `Potential.jsx`
- `Explore.jsx`
- `Footer.jsx`

Aturan:

- satu file mewakili satu section besar
- nama file menggunakan PascalCase, contoh `Hero.jsx`
- jika section membutuhkan data list, simpan datanya di `src/constants/`
- komponen section boleh mengatur layout section tersebut, tetapi jangan menyimpan data panjang langsung di dalam JSX jika data itu bisa dipisahkan
- hindari membuat satu section terlalu panjang; jika ada bagian kecil yang dipakai ulang, pindahkan ke `src/components/ui/`

### `src/components/ui/`

Digunakan untuk komponen kecil yang reusable dan tidak terikat pada satu section tertentu.

Contoh komponen yang cocok di folder ini:

- `Button.jsx`
- `Card.jsx`
- `SectionTitle.jsx`
- `Container.jsx`
- `Badge.jsx`

Aturan:

- komponen harus reusable
- jangan menyimpan data konten khusus halaman di sini
- gunakan props untuk variasi teks, warna, gambar, atau behavior
- nama file menggunakan PascalCase

### `src/constants/`

Digunakan untuk data statis dan konfigurasi konten.

Contoh file saat ini:

- `NavData.js`
- `destinationData.js`
- `exploreData.js`
- `potentialData.js`

Gunakan folder ini untuk:

- data navigasi
- data destinasi wisata
- data potensi kota
- data card atau list yang ditampilkan di section
- konfigurasi konten yang jarang berubah

Aturan:

- nama variable export harus jelas, contoh `navConfig`, `destinationData`, atau `potentialData`
- jangan menyimpan logic UI di folder ini
- jangan import komponen React ke dalam file constants
- jika data membutuhkan gambar, import gambar di file data atau simpan path sesuai kebutuhan komponen

### `src/hooks/`

Digunakan untuk custom React hooks.

Contoh penggunaan nanti:

- `useScrollDirection.js`
- `useWindowSize.js`
- `useIntersectionObserver.js`

Aturan:

- nama file dan function harus diawali `use`
- hook hanya berisi logic reusable, bukan JSX
- jika logic hanya dipakai satu komponen dan sangat sederhana, boleh tetap ditaruh di komponen tersebut
- pindahkan ke `hooks/` jika logic mulai dipakai lebih dari satu tempat

### `src/lib/`

Digunakan untuk helper, utility, konfigurasi library, atau fungsi umum yang tidak bergantung langsung pada UI.

Contoh penggunaan:

- formatter teks atau angka
- helper className
- konfigurasi animasi
- fungsi validasi
- wrapper library pihak ketiga

Aturan:

- jangan simpan komponen React di sini
- fungsi harus kecil, jelas, dan reusable
- beri nama file sesuai fungsinya, contoh `formatText.js` atau `animationConfig.js`

### `src/pages/`

Digunakan untuk komponen halaman.

Saat ini halaman utama berada di:

- `Home.jsx`

Aturan:

- satu file mewakili satu halaman
- halaman bertugas menyusun section, bukan menyimpan seluruh detail UI
- import section dari `src/components/sections/`
- jika nanti menggunakan routing, halaman baru ditambahkan di folder ini

Contoh pola:

```jsx
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Footer />
    </main>
  );
}
```

### `src/App.jsx`

Komponen root aplikasi.

Fungsi utama:

- memanggil halaman utama
- menjadi tempat konfigurasi routing jika project nanti memakai router
- membungkus layout global jika diperlukan

Aturan:

- jangan menaruh banyak section langsung di `App.jsx`
- susunan section halaman tetap berada di file dalam `src/pages/`
- jika ada routing, definisikan struktur route di sini atau di file route khusus

### `src/main.jsx`

Entry point React.

Fungsi utama:

- membuat React root
- me-render `<App />`
- meng-import style global dari `style.css`

Aturan:

- jarang perlu diedit
- jangan menaruh komponen halaman atau logic UI di file ini
- hanya tambahkan provider global jika diperlukan, misalnya router, theme provider, atau state provider

### `src/style.css`

Digunakan untuk style global.

Saat ini file ini memuat Tailwind CSS dan style dasar seperti font serta margin body.

Aturan:

- gunakan untuk global reset, font, variable global, dan style dasar
- untuk style spesifik komponen, utamakan class Tailwind langsung di JSX
- jangan menaruh style yang hanya berlaku untuk satu komponen besar jika bisa ditulis langsung di komponen tersebut

### `index.html`

Template HTML utama yang dipakai Vite.

Aturan:

- gunakan untuk metadata global, title, root element, favicon, atau script yang benar-benar global
- jangan menaruh markup halaman di sini
- React akan me-render aplikasi ke element dengan `id="root"`

### `vite.config.js`

Konfigurasi Vite.

Saat ini digunakan untuk:

- plugin React
- plugin Tailwind CSS
- alias import

Alias yang tersedia:

```js
"@": "./src"
"@lib": "./src/lib"
```

Gunakan alias agar import lebih rapi:

```jsx
import Hero from "@/components/sections/Hero";
import { navConfig } from "@/constants/NavData";
```

### `dist/`

Folder hasil build production.

Aturan:

- folder ini dihasilkan otomatis oleh `npm run build`
- jangan edit file di dalam `dist/` secara manual
- jika perlu mengubah tampilan atau logic, edit file di `src/`, lalu build ulang

### `node_modules/`

Folder dependency hasil `npm install`.

Aturan:

- jangan edit isi folder ini
- jangan commit folder ini ke repository
- jika dependency bermasalah, periksa `package.json` dan `package-lock.json`

## Konvensi Penamaan

Gunakan aturan berikut agar codebase mudah dibaca:

| Jenis File      | Format                     | Contoh                            |
| --------------- | -------------------------- | --------------------------------- |
| Komponen React  | PascalCase                 | `Hero.jsx`, `DestinationCard.jsx` |
| Custom hook     | camelCase diawali `use`    | `useWindowSize.js`                |
| Data constants  | camelCase atau deskriptif  | `destinationData.js`              |
| Helper lib      | camelCase                  | `formatText.js`                   |
| Gambar dan ikon | kebab-case atau nama resmi | `mesjid-raya.jpg`, `search.svg`   |

## Aturan Import

Gunakan alias `@` untuk import dari dalam `src`.

Disarankan:

```jsx
import Navbar from "@/components/sections/Navbar";
import { destinationData } from "@/constants/destinationData";
```

Hindari import relatif yang terlalu panjang:

```jsx
import Navbar from "../../../components/sections/Navbar";
```

## Alur Menambah Section Baru

Jika ingin menambah section baru, gunakan langkah ini:

1. Buat komponen section di `src/components/sections/NamaSection.jsx`
2. Jika section memakai data list, buat data di `src/constants/namaSectionData.js`
3. Jika membutuhkan gambar, simpan gambar di `src/assets/images/`
4. Import section baru ke halaman yang sesuai di `src/pages/`
5. Jalankan `npm run dev` dan cek tampilan responsif

## Alur Menambah Komponen Reusable

Jika ada UI kecil yang dipakai berulang:

1. Buat file di `src/components/ui/`
2. Buat komponen menerima props
3. Hindari isi konten yang terlalu spesifik halaman
4. Import komponen tersebut ke section yang membutuhkan

## Alur Menambah Data Konten

Jika ingin menambah atau mengubah konten seperti navigasi, destinasi, potensi, atau list explore:

1. Cari file data terkait di `src/constants/`
2. Tambahkan data dengan struktur yang sama seperti item lainnya
3. Pastikan komponen yang memakai data tersebut tidak perlu diubah kecuali ada field baru
4. Jika menambah field baru, update komponen section yang membaca data itu

## Checklist Sebelum Commit

Sebelum membuat commit atau pull request, pastikan:

- `npm run dev` berjalan tanpa error
- `npm run build` berhasil
- tidak ada file yang tidak dipakai
- gambar sudah dikompres jika ukurannya besar
- komponen baru berada di folder yang sesuai
- data statis tidak ditulis langsung terlalu panjang di JSX
- import menggunakan alias `@` jika berasal dari `src`
- tampilan sudah dicek di desktop dan mobile

## Prinsip Development Tim

- Jaga komponen tetap kecil dan mudah dipahami
- Pisahkan data dari tampilan jika data mulai panjang
- Gunakan struktur folder yang sudah ada sebelum membuat folder baru
- Jangan mengubah file build otomatis seperti `dist/`
- Diskusikan dulu jika ingin menambah dependency baru
- Prioritaskan konsistensi codebase dibanding gaya pribadi

`Ketua`
