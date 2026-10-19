import { ambilProyek } from "./api.js";
import { isiProyek, pulihkan, muat } from "./state.js";
import { siapkanHalaman, tampilkanGalat, aturMemuat } from "./dom.js";
import { pasangPendengar } from "./events.js";

async function mulai() {
  siapkanHalaman();
  pulihkan(muat());
  pasangPendengar();
  aturMemuat(true);
  try {
    isiProyek(await ambilProyek());
  } catch (galat) {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang.");
  } finally {
    aturMemuat(false);
  }
}

mulai();