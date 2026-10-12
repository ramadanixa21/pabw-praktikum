import { daftarLatihan } from "./app.js";

const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#kosong");

const form = document.querySelector("#form-latihan");
const inputJenis = document.querySelector("#jenis-olahraga");
const inputTanggal = document.querySelector("#tanggal-latihan");
const inputDurasi = document.querySelector("#durasi-latihan");
const tombolKirim = document.querySelector("#form-latihan button[type='submit']");
const galatJenis = document.querySelector("#galat-jenis");
const galatTanggal = document.querySelector("#galat-tanggal");
const galatDurasi = document.querySelector("#galat-durasi");

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

function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  const fragmen = document.createDocumentFragment();
  daftar.forEach((latihan, urutan) => fragmen.append(buatKartu(latihan, urutan)));
  wadah.append(fragmen);
}

render(daftarLatihan);