import { daftarLatihan } from "./app.js";

const wadah       = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong      = document.querySelector("#kosong");

const form         = document.querySelector("#form-latihan");
const inputJenis   = document.querySelector("#jenis-olahraga");
const inputTanggal = document.querySelector("#tanggal-latihan");
const inputDurasi  = document.querySelector("#durasi-latihan");
const tombolKirim  = document.querySelector("#form-latihan button[type='submit']");
const galatJenis   = document.querySelector("#galat-jenis");
const galatTanggal = document.querySelector("#galat-tanggal");
const galatDurasi  = document.querySelector("#galat-durasi");

const cek = { wadah, barisFilter, kosong, form, inputJenis, inputTanggal,
              inputDurasi, tombolKirim, galatJenis, galatTanggal, galatDurasi };

Object.entries(cek).forEach(([nama, el]) => {
  if (el === null) console.error(`NULL: ${nama}`);
});
console.log("daftarLatihan:", daftarLatihan.length, "item");
window.cek = cek; 