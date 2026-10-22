<template>
  <section id="jadwal-latihan" class="utama"> 
    <h2>Ringkasan Jadwal Mingguan</h2>
    <p>Jadwal dan Statistik Latihan Minggu Ini</p>

    <p id="muat" hidden>Memuat data latihan...</p>
    <p id="kosong" hidden>Belum ada latihan pada kategori ini.</p>
    <p id="galat" class="pesan-galat" hidden></p>

    <div id="daftar" class="katalog grid"></div>

    <h3>Riwayat Latihan Minggu Ini</h3>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Hari</th><th>Olahraga</th><th>Durasi</th><th>Kalori</th><th>Catatan</th></tr>
        </thead>
        <tbody>
          <tr><td>Senin</td><td>Lari Pagi</td><td>30 menit</td><td>250 kcal</td><td>Rute taman kota</td></tr>
          <tr><td>Rabu</td><td>GYM</td><td>45 menit</td><td>320 kcal</td><td>Latihan dada dan punggung</td></tr>
          <tr><td>Jumat</td><td>Futsal</td><td>60 menit</td><td>400 kcal</td><td>Bermain bersama teman kampus</td></tr>
        </tbody>
      </table>
    </div>

    <figure id="galeri">
      <img src="/Foto Sepatu.jpg" alt="Ringkasan Jadwal Mingguan" width="640" height="360">
      <figcaption>Perlengkapan wajib sebelum memulai sesi lari pagi mingguan.</figcaption>
    </figure>
  </section>
</template>