import { daftarLatihan } from "./app.js";

const wadah       = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong      = document.querySelector("#kosong");
const muatElemen  = document.querySelector("#muat");
const galatElemen = document.querySelector("#galat");

const form         = document.querySelector("#form-latihan");
const inputJenis   = document.querySelector("#jenis-olahraga");
const inputTanggal = document.querySelector("#tanggal-latihan");
const inputDurasi  = document.querySelector("#durasi-latihan");
const tombolKirim  = document.querySelector("#form-latihan button[type='submit']");
const galatJenis   = document.querySelector("#galat-jenis");
const galatTanggal = document.querySelector("#galat-tanggal");
const galatDurasi  = document.querySelector("#galat-durasi");

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

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    const aktif = tombol === tombolAktif;
    tombol.classList.toggle("aktif", aktif);
    tombol.setAttribute("aria-pressed", aktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarLatihan.filter(
    (latihan) => kategori === "semua" || latihan.kategori === kategori
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});

tandaiTombolAktif(barisFilter.querySelector('[data-kategori="semua"]'));

const aturan = [
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
      const sah = inputDurasi.value.trim() !== ""
        && Number.isInteger(angka) && angka >= 1 && angka <= 300;
      return sah ? "" : "Isi durasi dengan angka bulat 1 sampai 300 menit.";
    },
  },
];

function validasiInput({ input, galat, periksa }) {
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

const formSah = () => aturan.every((item) => item.periksa() === "");

form.addEventListener("input", (event) => {
  const item = aturan.find((a) => a.input === event.target);
  if (!item) return;
  validasiInput(item);
  tombolKirim.disabled = !formSah();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const pertamaBermasalah = aturan.filter((item) => !validasiInput(item))[0];
  if (pertamaBermasalah) {
    pertamaBermasalah.input.focus();
    return;
  }

  console.log("Latihan baru:", {
    olahraga: inputJenis.value.trim(),
    tanggal: inputTanggal.value,
    durasi: Number(inputDurasi.value),
  });

  form.reset();
  aturan.forEach((item) => {
    item.galat.classList.remove("tampil");
    item.input.removeAttribute("aria-invalid");
  });
  tombolKirim.disabled = false;
});