# pabw-praktikum Ramadani Zein Abdullah -25523099

Repo ini memuat pekerjaan matkul pabw, 1 folder untuk setiap pertemuan

## Pertemuan 3 — Halaman profil saya

Topik halaman saya: Jadwal dan target olahraga saya.

- **Judul halaman:** Jurnal & Target Olahraga Zein
- **Deskripsi:** Halaman catatan rutinitas latihan mingguan dan pencapaian target kebugaran pribadi.
- **Tautan navigasi:** Jadwal Latihan (`#jadwal-latihan`), Catat Latihan (`#pencatatan-latihan`), Galeri (`#galeri`)
- **Dua bagian utama:** Ringkasan Jadwal Mingguan, Formulir Catat Latihan Baru
- **Kolom tabel:** Hari, Jenis Olahraga, Durasi (menit), Kalori Terbakar
- **Kolom form:** Jenis Olahraga, Tanggal Latihan, Durasi (menit)
- **Gambar:** `Foto Sepatu.jpg`

## catatan penggunaan AI

Saya mengerjakan plan di readme sendiri tetapi beberapa syntax menggunakan AI karena saya sedang memahami Bahasa pemrograman HTML dan setelah itu saya Mengerjakan sendiri dan memperbaiki Syntax AI yang tidak sesuai dengan plan saya


## Pertemuan 4 — Design token halaman profil
 
- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #0D9488 (tosca), dipilih karena memberikan kesan modern, segar, dan tingkat kontrasnya aman untuk dibaca.
 
### Token yang saya tetapkan
 
| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #0D9488 | tombol, tautan, penanda |
| --color-fg | #134E4A | warna teks utama |
| --color-bg | #F0FDFA | latar halaman |
| --radius-md | 0.75rem | sudut tombol dan kartu |
| --space-4 | 1.25rem | jarak standar antar elemen |
 
Kriteria selesai saya: mengubah --color-primary di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus.

## catatan penggunaan AI
pengunaan ai : dibantu saat memeriksa kontras warna dan beberapa perbaruan di profil.html

## Pertemuan 5 – Layout Modern: Flexbox dan Grid

Topik: Arsitektur tata letak halaman responsif seluler hingga desktop menggunakan CSS Grid dan Flexbox modern tanpa media query.

- **Pendekatan Layout:**
  - **CSS Grid (2D):** Digunakan untuk struktur kerangka utama (`.page`), tata letak konten (`.isi`), dan galeri kartu adaptif (`.katalog`).
  - **Flexbox (1D):** Digunakan untuk penataan komponen searah, seperti navigasi (`.navbar`) dan susunan isi internal kartu (`.kartu`).
- **Strategi Responsif:** Menggunakan `repeat(auto-fit, minmax(min(100%, 16rem), 1fr))` pada galeri serta `grid-column: 1 / -1` untuk kartu sorotan (`.kartu--sorotan`) agar tata letak fleksibel di layar 360px hingga 1280px.
- **Pembersihan & Standar CSS:** Tidak menggunakan `float`, `!important`, maupun satuan `px` keras pada deklarasi kolom (sepenuhnya menggunakan `rem`, `fr`, dan variabel CSS).

### Nilai Ukuran CSS yang Digunakan

| Nilai | Artinya | Dipakai untuk |
| --- | --- | --- |
| `1fr` | Membagi ruang sisa setelah ukuran tetap dihitung | Kolom konten utama |
| `16rem` | Lebar fleksibel yang mengikuti ukuran huruf akar (*root font-size*) | Lebar minimal kartu / sidebar |
| `minmax(16rem, 1fr)` | Batas bawah (minimum) dan batas atas (maksimum) satu jalur | Galeri kartu adaptif |
| `repeat(auto-fit, ...)` | Jumlah jalur/kolom mengikuti ruang yang tersedia secara otomatis | Galeri kartu (`.katalog`) |

Kriteria selesai saya: Halaman tampil konsisten, rapi, dan bebas dari *horizontal scrollbar* (luberan mendatar) saat diuji pada lebar 360 px dan 1280 px.

## catatan penggunaan AI
penggunaan ai : dibantu dalam menganalisis dan menyelesaikan masalah *overflow* pada layar 360px (mengubah `span 2` menjadi `1 / -1`).

## Pertemuan 6 – Responsif Mobile-First

Topik: Melanjutkan halaman Pertemuan 5 agar terbaca dari ponsel sampai desktop memakai meta viewport, satuan relatif, dan media query. Halaman dan lima berkas CSS lama dipakai kembali, lalu ditambah satu berkas baru: `responsif.css`.

- **Meta viewport:** `<meta name="viewport" content="width=device-width, initial-scale=1.0">` dipasang di `<head>`, sebelum tautan CSS.
- **Lebar tetap:** Tidak ditemukan elemen berlebar piksel tetap pada berkas CSS Pertemuan 5 (kolom memakai `rem`, `fr`, dan `minmax`), jadi tidak ada yang perlu diganti.
- **Gaya dasar (layar sempit):** `.content` dan `.grid` satu kolom (`1fr`) dengan `gap: var(--space-4)`, tanpa media query.
- **Dua titik henti (`min-width`, satuan `rem`):**
  - `48rem`: galeri kartu (`.grid`) menjadi 2 kolom.
  - `60rem`: sidebar (`.sisi`, formulir) bersanding dengan konten (`16rem 1fr`) dan galeri menjadi 3 kolom.
- **Gambar dan tabel:** `img` dibatasi `max-width: 100%`, tabel riwayat latihan dibungkus `.table-wrap` dengan `overflow-x: auto` sehingga bergulir sendiri di layar sempit.
- **Perubahan di `profil.html`:** menambah tautan `responsif.css` setelah `tema.css`, menambah kelas `content` pada `<main>` dan `grid` pada daftar kartu, serta menambah tabel Riwayat Latihan Minggu Ini.

### Titik henti yang saya tetapkan

| Titik henti | Yang berubah | Kenapa di lebar itu |
| --- | --- | --- |
| `48rem` (768 px) | Galeri dari 1 kolom menjadi 2 kolom | Dua kartu mulai muat berdampingan tanpa terlalu sempit |
| `60rem` (960 px) | Sidebar bersanding dengan konten, galeri 3 kolom | Ada ruang untuk sidebar `16rem` di samping konten |

### Hasil uji tiga lebar

| Lebar | Jumlah kolom | Catatan |
| --- | --- | --- |
| 360 px | 1 | Semua bertumpuk, tabel bergulir sendiri, foto mengecil, tanpa gulir mendatar |
| 768 px | 1 (konten), 2 (kartu) | Kartu Rabu dan Jumat berdampingan |
| 1280 px | 2 (konten), 3 (kartu) | Formulir di sidebar kiri, jadwal di kanan |

Kriteria selesai saya: Tidak ada gulir mendatar pada halaman di lebar 360 px, 768 px, dan 1280 px, dan jumlah kolom berubah sesuai titik henti.

## catatan penggunaan AI
penggunaan ai : menemukan dan memperbaiki luberan pada layar 360 px saat ukuran huruf diperbesar (menu navigasi diberi `flex-wrap: wrap` dan kolom `.page` memakai `minmax(0, 1fr)`).