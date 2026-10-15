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


## Pertemuan 8 – JavaScript Modern ES6+, Struktur Data, dan Array Methods

**Nama:** Ramadani Zein Abdullah  
**NIM:** 25523099

Topik: Halaman Jurnal & Target Olahraga Zein (hasil Pertemuan 6) kini memakai JavaScript. Identitas halaman, daftar keahlian, dan daftar latihan disimpan sebagai data di `js/app.js`, lalu diolah dengan fungsi murni dan array methods (`map`, `filter`, `find`).

### Struktur

- `profil.html` dan berkas CSS dari Pertemuan 6
- `js/app.js` berisi data, dua fungsi murni, dan array methods

### Catatan penggunaan AI

- Contoh kode untuk memunculkan tiga galat di lembar E
- membantu menjelaskan penjelasan worksheet yang saya tidadk mengerti


## Pertemuan 9 – DOM, Event, dan Interaktivitas

**Nama:** Ramadani Zein Abdullah  
**NIM:** 25523099

Topik: Halaman Jurnal & Target Olahraga Zein (hasil Pertemuan 8) kini berubah tanpa dimuat ulang. Data `daftarLatihan` dari `js/app.js` dipasang ke halaman sebagai kartu, difilter lewat tombol kategori, dan form catat latihan diberi validasi per kolom. Pekerjaan ada di folder `worksheet-p9/`.

### Struktur

- `profil.html` dan berkas CSS dari Pertemuan 8
- `js/app.js` berisi data dan fungsi (hanya ditambah `export` dan field `kategori`)
- `js/dom.js` (baru) berisi pemilihan elemen, render kartu, filter, dan validasi form
- `bukti/` berisi tiga tangkapan layar Lembar E

### Yang dikerjakan

- **Pemilihan elemen:** semua elemen dipilih dengan `querySelector` dan diuji di Console sampai tidak ada yang `null`. `dom.js` dimuat setelah `app.js`, keduanya `type="module"` sebelum `</body>`.
- **Render dari data:** kartu latihan dibuat dengan `createElement`, `textContent`, dan `append`, bukan HTML tulisan tangan. Fungsi `render(daftar)` mengosongkan wadah di baris pertama, menangani keadaan kosong, lalu mengisi ulang lewat `DocumentFragment`.
- **Event delegation:** satu `addEventListener("click")` di `#filter` melayani semua tombol, memakai `event.target.closest("button")` dan `dataset.kategori`. Tombol aktif ditandai dengan kelas `aktif`, gayanya di `komponen.css`.
- **Validasi form:** penangan `submit` memanggil `event.preventDefault()` di baris pertama. Setiap kolom punya aturan sendiri dengan `trim()`, pesan galat per kolom, `aria-invalid`, tombol kirim yang ditahan (`disabled`) sampai isinya layak, dan `focus()` ke kolom bermasalah.
- **Keamanan:** tidak ada `innerHTML`; semua isi dimasukkan sebagai teks.

### Elemen yang saya isi

| Bagian halaman | Pemilih | Nama variabel |
| --- | --- | --- |
| Daftar latihan | `#daftar` | `wadah` |
| Baris tombol filter | `#filter` | `barisFilter` |
| Pesan daftar kosong | `#kosong` | `kosong` |
| Form | `#form-latihan` | `form` |
| Kolom form | `#jenis-olahraga`, `#tanggal-latihan`, `#durasi-latihan` | `inputJenis`, `inputTanggal`, `inputDurasi` |
| Pesan galat | `#galat-jenis`, `#galat-tanggal`, `#galat-durasi` | `galatJenis`, `galatTanggal`, `galatDurasi` |

### Hasil uji

| Yang diuji | Hasil |
| --- | --- |
| Jumlah kartu saat halaman dibuka | 3 (sama dengan panjang `daftarLatihan`) |
| Klik "Kardio" | Hanya Senin dan Jumat tampil |
| Klik kategori tanpa isi | Kartu hilang, pesan "Belum ada latihan pada kategori ini." muncul |
| Klik filter berulang | Jumlah kartu tidak berlipat |
| Kirim form kosong | Halaman tidak dimuat ulang, tiga pesan galat muncul |
| Kolom hanya berisi spasi | Tetap dinyatakan tidak sah |

### Kasus yang saya temui

| Gejala | Sebab | Perbaikan |
| --- | --- | --- |
| `NULL: form`, `NULL: tombolKirim`, `NULL: galatDurasi` di Console | `id="form-latihan"` dan `id="galat-durasi"` belum ada di HTML | Menambah dua id di `profil.html` |
| `render is not defined` | Fungsi `render` ikut terhapus dari `dom.js` saat mengganti baris terakhir | Mengembalikan fungsi `render` sebelum dipanggil |
| Pendengar menumpuk di Event Listeners (dipancing sengaja) | `addEventListener` dipasang di dalam `render` | Memasang pendengar sekali di luar `render` |
| Daftar kosong tanpa penjelasan (dipancing sengaja) | Blok `daftar.length === 0` dinonaktifkan | Mengaktifkan kembali blok keadaan kosong |
| `querySelectorAll(...).innerHTML` menghasilkan `undefined` | NodeList tidak punya `innerHTML` | Memakai `querySelector` untuk satu elemen |

Kriteria selesai saya: halaman berjalan tanpa galat di Console, daftar terbentuk dari array, kartu tidak pernah berlipat, satu pendengar di induk melayani semua tombol filter, dan form tidak memuat ulang halaman serta menampilkan pesan galat per kolom.

## catatan penggunaan AI

- **Dibantu AI:** penulisan kode `js/dom.js` (render kartu, filter dengan event delegation, validasi form).
- **Saya kerjakan sendiri:** halaman, data, dan seluruh CSS dari pertemuan sebelumnya; menjalankan dan menguji hasilnya di Console dan DevTools; menemukan dan memperbaiki galat di tabel di atas; memancing dua kasus di Lembar E; tangkapan layar bukti; serta commit ke Git.


## Pertemuan 10 – JavaScript Asinkron: fetch, Promise, dan JSON

**Nama:** Ramadani Zein Abdullah  
**NIM:** 25523099

Topik: Halaman Jurnal & Target Olahraga Zein (hasil Pertemuan 9) kini mengambil data jadwal latihan secara asinkron dari jaringan memakai `fetch`, `async/await`, dan JSON. Lapisan pengambilan data dipisahkan ke dalam `js/api.js`, perakit di `js/app.js`, dan penggambaran empat keadaan antarmuka (memuat, berhasil, gagal, kosong) di `js/dom.js`. Pekerjaan ada di folder `worksheet-p10/`.

### Struktur

- `profil.html` dan enam berkas CSS dari pertemuan sebelumnya (ditambah elemen `#muat` dan `#galat`)
- `data/proyek.json` (baru) berisi data jadwal latihan mingguan dalam format JSON
- `js/api.js` (baru) berisi `ALAMAT` di satu tempat dan fungsi `export async function ambilProyek()`
- `js/dom.js` berisi manipulasi DOM dan mengekspor kontrak `render`, `tampilkanGalat`, serta `aturMemuat`
- `js/app.js` berisi perakit utama `async function muat()` dengan blok `try / catch / finally`

### Yang dikerjakan

- **Pemisahan lapisan data (`js/api.js`):** Data array dari `app.js` dipindahkan ke `data/proyek.json` (dan diambil juga lewat `raw.githubusercontent.com`). Kata `fetch` hanya muncul di `js/api.js` dengan pemeriksaan `if (!respons.ok)` sebelum memanggil `respons.json()`.
- **Penanganan galat dengan `async/await` dan `try/catch`:** Mengubah rantai Promise menjadi `async/await` yang dibungkus `try/catch` di `api.js` dan ditangkap kembali di `app.js` untuk menampilkan pesan galat di halaman (bukan sekadar di Console).
- **Membaca JSON dua arah:** Membaca teks JSON dari jaringan menjadi larik objek JavaScript dengan `respons.json()`, dan menguji arah sebaliknya (objek ke teks JSON) dengan `JSON.stringify()`.
- **Empat keadaan antarmuka (`js/dom.js`):** Menampilkan pesan memuat (`#muat`) sebelum balasan datang, menggambar kartu ke `#daftar` saat berhasil, menampilkan pesan galat (`#galat`) saat jaringan mati atau status 404/500, dan menampilkan pesan kosong (`#kosong`) saat larik bernilai `[]`.

### Empat keadaan antarmuka yang saya tangani

| Keadaan | Pemilih | Kapan tampil | Apa yang tampil di halaman |
| --- | --- | --- | --- |
| Memuat | `#muat` | Sebelum balasan `fetch` selesai (`aturMemuat(true)`) | Teks "Memuat data latihan..." |
| Berhasil | `#daftar` | Balasan `200 OK` dan larik berisi data latihan | 3 kartu latihan (Senin, Rabu, Jumat) |
| Gagal | `#galat` | Jaringan mati (*Offline*) atau status bukan 2xx (404/500) | Pesan merah "Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman." |
| Kosong | `#kosong` | Balasan sah tetapi larik kosong (`daftar.length === 0`) | Teks "Belum ada data." |

### Kasus yang saya temui

| Gejala | Sebab | Perbaikan |
| --- | --- | --- |
| Galat 404 `favicon.ico` di Console saat halaman dibuka | Browser otomatis meminta ikon tab yang belum diatur di HTML | Menambahkan `<link rel="icon" href="data:,">` di dalam `<head>` pada `profil.html` |
| Nama fungsi `tampilkanGalat` bentrok di `js/dom.js` | Nama `tampilkanGalat` sudah dipakai untuk fungsi validasi input form di Pertemuan 9 | Mengubah nama fungsi validasi form menjadi `validasiInput` dan memakai `tampilkanGalat(pesan)` untuk kontrak galat jaringan |
| Pesan galat tampil saat nama berkas disalahkan (`data/proyk.json`) | Server mengembalikan status 404 (dipancing sengaja di Lembar B & E) | Ditangani oleh `if (!respons.ok) throw new Error(...)` lalu alamat dikembalikan ke semula |
| `SyntaxError` saat tanda kutip JSON dihapus atau `await` tanpa `async` | Format JSON tidak sah atau fungsi pemanggil belum diberi kata kunci `async` (dipancing sengaja di Lembar E) | Memastikan fungsi memakai `async` dan mengembalikan tanda kutip ganda yang valid di `data/proyek.json` |
| Halaman tanpa kartu dan Console bersih tanpa galat | Balasan sah tetapi berisi larik kosong `[]` (dipancing sengaja di Lembar E) | Ditangani oleh pemeriksaan `if (daftar.length === 0)` di `render()` yang menampilkan `#kosong` |

Kriteria selesai saya: `fetch` hanya ada di `js/api.js`, `respons.ok` diperiksa sebelum membaca JSON, keempat keadaan antarmuka (memuat, berhasil, gagal, kosong) tampil dengan benar di halaman, Console bersih dari galat, dan data berhasil dimuat dari `data/proyek.json` maupun `raw.githubusercontent.com`.

## catatan penggunaan AI

- **Dibantu AI:** merapikan pemisahan kode di `js/api.js`, `js/app.js`, dan `js/dom.js` agar sesuai dengan kontrak ekspor fungsi Pertemuan 10, serta menyusun dokumentasi tabel.
- **Saya kerjakan sendiri:** menyalin dan menyiapkan struktur berkas dari Pertemuan 9, memindahkan data latihan ke `data/proyek.json`, menjalankan pengujian keempat keadaan antarmuka di DevTools (Network & Console), menyimulasikan tiga kasus sulit di Lembar E, mengambil alamat GitHub Raw, serta melakukan commit dan push ke Git.