import { state } from "./state.js";
import {
  barisFilter,
  form,
  inputJenis,
  inputTanggal,
  inputDurasi,
  tombolKirim,
  aturan,
  validasiInput,
  formSah,
  tandaiTombolAktif,
  render,
} from "./dom.js";

export function pasangPendengar() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;
    const terpilih = state.daftarProyek.filter(
      (latihan) => kategori === "semua" || latihan.kategori === kategori
    );

    tandaiTombolAktif(tombol);
    render(terpilih);
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