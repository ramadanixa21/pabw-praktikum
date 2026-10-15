const ALAMAT = 'https://raw.githubusercontent.com/ramadanixa21/pabw-praktikum/refs/heads/main/worksheet-p10/data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    console.log('status', respons.status, 'ok', respons.ok);
    if (!respons.ok) throw new Error('status ' + respons.status);
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}