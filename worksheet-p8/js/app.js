const profil = {
  nama: "Ramadani Zein Abdullah",
  panggilan: "Zein",
  peran: "Mahasiswa Informatika yang gemar berolahraga",
  keahlian: ["Lari", "Gym", "Futsal"],
  jumlahLatihan: 3,
};

const judulHalaman = `Jurnal & Target Olahraga ${profil.panggilan}`;
const deskripsiHalaman = `Halaman catatan rutinitas latihan mingguan ${profil.nama}.`;
const kota = profil.alamat?.kota ?? "Belum diisi";
const kalimat = `Nama saya ${profil.nama}, ${profil.peran}, dan saya mencatat ${profil.jumlahLatihan} latihan minggu ini.`;

const elemenJudul = document.querySelector("header h1");
const elemenDeskripsi = document.querySelector("header p");

document.title = judulHalaman;
elemenJudul.textContent = judulHalaman;
elemenDeskripsi.textContent = deskripsiHalaman;

console.log(typeof profil.nama);
console.log(typeof profil.jumlahLatihan);
console.log(kota);
console.log(kalimat);
console.log(profil);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.log(buatPerkenalan({ nama: "meswa", peran: "Pelari" }));
console.log(buatPerkenalan({ nama: "ayna", peran: "Pemain futsal" }));
console.log(formatKeahlian(["Renang", "Yoga"]));
console.log(formatKeahlian(["Sepeda"]));