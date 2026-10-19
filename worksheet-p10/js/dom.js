import { profil } from "./data.js";

const elemenJudul     = document.querySelector("header h1");
const elemenDeskripsi = document.querySelector("header p");
const wadah           = document.querySelector("#daftar");
export const barisFilter = document.querySelector("#filter");
const kosong          = document.querySelector("#kosong");
const muatElemen      = document.querySelector("#muat");
const galatElemen     = document.querySelector("#galat");

export const form         = document.querySelector("#form-latihan");
export const inputJenis   = document.querySelector("#jenis-olahraga");
export const inputTanggal = document.querySelector("#tanggal-latihan");
export const inputDurasi  = document.querySelector("#durasi-latihan");
export const tombolKirim  = document.querySelector("#form-latihan button[type='submit']");
const galatJenis   = document.querySelector("#galat-jenis");
const galatTanggal = document.querySelector("#galat-tanggal");
const galatDurasi  = document.querySelector("#galat-durasi");

export function siapkanHalaman() {
  const judulHalaman = `Jurnal & Target Olahraga ${profil.panggilan}`;
  const deskripsiHalaman = `Halaman catatan rutinitas latihan mingguan ${profil.nama}.`;
  document.title = judulHalaman;
  elemenJudul.textContent = judulHalaman;
  elemenDeskripsi.textContent = deskripsiHalaman;
  tandaiTombolAktif(barisFilter.querySelector('[data-kategori="semua"]'));
}

function buatBaris(label, nilai) {
  const p = document.createElement("p");
  const tebal = document.createElement("strong");
  tebal.textContent = `${label}:`;
  p.append(tebal, ` ${nilai}`);
  return p;
}

function buatKartu(latihan, urutan) {
  const kartu = document.createElement("div");
  kartu.className = urutan === 0 ? "kartu kartu--sorotan" : "kartu";

  const judul = document.createElement("h3");
  judul.textContent = latihan.hari;

  kartu.append(
    judul,
    buatBaris("Olahraga", latihan.olahraga),
    buatBaris("Durasi", `${latihan.durasi} menit`),
    buatBaris("Kalori", `${latihan.kalori} kcal`)
  );
  return kartu;
}

export function aturMemuat(sedangMemuat) {
  muatElemen.hidden = !sedangMemuat;
  if (sedangMemuat) {
    galatElemen.hidden = true;
    galatElemen.classList.remove("tampil");
  }
}

export function tampilkanGalat(pesan) {
  wadah.textContent = "";
  kosong.hidden = true;
  galatElemen.textContent = pesan;
  galatElemen.hidden = false;
  galatElemen.classList.add("tampil");
}

export function render(daftar) {
  wadah.textContent = "";
  galatElemen.hidden = true;
  galatElemen.classList.remove("tampil");

  if (daftar.length === 0) {
    kosong.textContent = "Belum ada data.";
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  const fragmen = document.createDocumentFragment();
  daftar.forEach((latihan, urutan) => fragmen.append(buatKartu(latihan, urutan)));
  wadah.append(fragmen);
}

export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    const aktif = tombol === tombolAktif;
    tombol.classList.toggle("aktif", aktif);
    tombol.setAttribute("aria-pressed", aktif);
  });
}

export const aturan = [
  {
    input: inputJenis,
    galat: galatJenis,
    periksa: () =>
      inputJenis.value.trim() === ""
        ? "Isi jenis olahraga, misalnya Lari atau Renang."
        : "",
  },
  {
    input: inputTanggal,
    galat: galatTanggal,
    periksa: () =>
      inputTanggal.value === ""
        ? "Pilih tanggal latihan dari kalender."
        : "",
  },
  {
    input: inputDurasi,
    galat: galatDurasi,
    periksa: () => {
      const angka = Number(inputDurasi.value);
      const sah =
        inputDurasi.value.trim() !== "" &&
        Number.isInteger(angka) &&
        angka >= 1 &&
        angka <= 300;
      return sah ? "" : "Isi durasi dengan angka bulat 1 sampai 300 menit.";
    },
  },
];

export function validasiInput({ input, galat, periksa }) {
  const pesan = periksa();
  galat.textContent = pesan;
  galat.classList.toggle("tampil", pesan !== "");
  if (pesan !== "") {
    input.setAttribute("aria-invalid", "true");
  } else {
    input.removeAttribute("aria-invalid");
  }
  return pesan === "";
}

export const formSah = () => aturan.every((item) => item.periksa() === "");