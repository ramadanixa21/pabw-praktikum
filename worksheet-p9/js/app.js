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

console.log(buatPerkenalan({ nama: "Meswa", peran: "Pelari" }));
console.log(buatPerkenalan({ nama: "Ayna", peran: "Pemain futsal" }));
console.log(formatKeahlian(["Renang", "Yoga"]));
console.log(formatKeahlian(["Sepeda"]));

const daftarLatihan = [
  { hari: "Senin", olahraga: "Lari Pagi", durasi: 30, kalori: 250 },
  { hari: "Rabu", olahraga: "GYM", durasi: 45, kalori: 320 },
  { hari: "Jumat", olahraga: "Futsal", durasi: 60, kalori: 400 },
];

console.table(profil.keahlian);
console.table(daftarLatihan);

const latihanBerat = daftarLatihan.filter((latihan) => latihan.durasi >= 45);
console.table(latihanBerat);

const futsal = daftarLatihan.find((latihan) => latihan.olahraga === "Futsal");
console.log(futsal);

const namaLatihan = daftarLatihan.map((latihan) => latihan.olahraga);
console.log(namaLatihan);
console.log(namaLatihan.length === daftarLatihan.length);

const urutKalori = [...daftarLatihan].sort((a, b) => b.kalori - a.kalori);
console.table(urutKalori);
console.table(daftarLatihan);

let totalKalori = 0;
for (const latihan of daftarLatihan) {
  totalKalori += latihan.kalori;
}
console.log(totalKalori);
