export const profil = {
  nama: "Ramadani Zein Abdullah",
  panggilan: "Zein",
  peran: "Mahasiswa Informatika yang gemar berolahraga",
  keahlian: ["Lari", "Gym", "Futsal"],
  jumlahLatihan: 3,
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");