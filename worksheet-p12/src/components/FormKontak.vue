<template>
  <section id="pencatatan-latihan" class="sisi">
    <h2>Formulir Catat Latihan Baru</h2>

    <form id="form-latihan" action="/simpan" method="post" novalidate>
      <div class="form-kolom">
        <label for="jenis-olahraga">Jenis Olahraga</label>
        <input type="text" id="jenis-olahraga" name="jenis-olahraga" required placeholder="Contoh: Lari, Renang">
        <p id="galat-jenis" class="pesan-galat">Jenis olahraga wajib diisi.</p>
      </div>
      <br>
      <div class="form-kolom">
        <label for="tanggal-latihan">Tanggal Latihan</label>
        <input type="date" id="tanggal-latihan" name="tanggal-latihan" required>
        <p id="galat-tanggal" class="pesan-galat">Tanggal tidak boleh kosong.</p>
      </div>
      <br>
      <div class="form-kolom">
        <label for="durasi-latihan">Durasi (dalam menit)</label>
        <input type="number" id="durasi-latihan" name="durasi-latihan" min="1" max="300" required>
        <p id="galat-durasi" class="pesan-galat">Durasi wajib diisi dengan angka (1 - 300).</p>
      </div>

      <button type="submit">Simpan Latihan</button>
    </form>
  </section>
</template>