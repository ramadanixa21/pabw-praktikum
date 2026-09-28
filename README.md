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