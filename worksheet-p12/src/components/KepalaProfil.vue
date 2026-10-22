<script setup>
defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header>
    <input type="checkbox" id="tema" class="pengalih-tema">
    <label for="tema" class="tombol-tema">Tema gelap</label>
    <div class="navbar">
      <div>
        <h1>Jurnal & Target Olahraga {{ profil.panggilan }}</h1>
        <p>Halaman catatan rutinitas latihan mingguan {{ profil.nama }}.</p>
      </div>
      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#jadwal-latihan">Jadwal Latihan</a></li>
          <li><a href="#pencatatan-latihan">Catat Latihan</a></li>
          <li><a href="#galeri">Galeri Latihan</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>