<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const tampil = computed(() => saring(state.daftarProyek, state.kategoriAktif))
</script>

<template>
  <section id="jadwal-latihan" class="utama">
    <h2>Ringkasan Jadwal Mingguan</h2>
    <p>Jadwal dan Statistik Latihan Minggu Ini</p>

    <p v-if="state.memuat" id="muat">Memuat data latihan...</p>
    <p v-else-if="state.galat" id="galat" class="pesan-galat tampil">{{ state.galat }}</p>
    <p v-else-if="tampil.length === 0" id="kosong">Belum ada latihan pada kategori ini.</p>

    <div v-else id="daftar" class="katalog grid">
      <div
        v-for="(item, urutan) in tampil"
        :key="item.id"
        :class="urutan === 0 ? 'kartu kartu--sorotan' : 'kartu'"
      >
        <div class="kartu__kaki">
          <h3>{{ item.hari }}</h3>
          <button
            type="button"
            class="favorit"
            @click="tambahFavorit(item.id)"
          >
            {{ state.favorit.includes(item.id) ? '★' : '☆' }}
          </button>
        </div>
        <p><strong>Olahraga:</strong> {{ item.olahraga }}</p>
        <p><strong>Durasi:</strong> {{ item.durasi }} menit</p>
        <p><strong>Kalori:</strong> {{ item.kalori }} kcal</p>
      </div>
    </div>

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