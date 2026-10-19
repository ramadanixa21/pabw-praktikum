import { render } from "./dom.js";

export const state = {
  daftarProyek: [],
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state.daftarProyek);
}