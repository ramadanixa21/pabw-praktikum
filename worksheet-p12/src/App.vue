<script setup>
import { profil } from './data.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
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