<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat())
  try {
    const data = await ambilProyek()
    isiProyek(data)
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(
  state,
  (nilaiBaru) => {
    simpan(nilaiBaru)
  },
  { deep: true }
)
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi content">
      <div>
        <TombolFilter />
        <DaftarProyek />
      </div>
      <FormKontak />
    </main>

    <footer>
      <p>{{ profil.nama }} · 25523099 · 2026</p>
    </footer>
  </div>
</template>