import { pilihKategori, tambahFavorit } from "./state.js";
import {
  wadah,
  barisFilter,
  form,
  inputJenis,
  inputTanggal,
  inputDurasi,
  tombolKirim,
  aturan,
  validasiInput,
  formSah,
} from "./dom.js";

export function pasangPendengar() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button[data-kategori]");
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
  });

  wadah.addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");
    if (!tombol) return;
    tambahFavorit(Number(tombol.dataset.id));
  });

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
}