<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div id="filter" role="group" aria-label="Filter kategori latihan">
    <button
      type="button"
      :class="{ aktif: state.kategoriAktif === 'semua' }"
      :aria-pressed="state.kategoriAktif === 'semua'"
      @click="pilihKategori('semua')"
    >
      Semua
    </button>
    <button
      type="button"
      :class="{ aktif: state.kategoriAktif === 'kardio' }"
      :aria-pressed="state.kategoriAktif === 'kardio'"
      @click="pilihKategori('kardio')"
    >
      Kardio
    </button>
    <button
      type="button"
      :class="{ aktif: state.kategoriAktif === 'kekuatan' }"
      :aria-pressed="state.kategoriAktif === 'kekuatan'"
      @click="pilihKategori('kekuatan')"
    >
      Kekuatan
    </button>
    <button type="button" id="atur-ulang" @click="aturUlang">
      Atur ulang
    </button>
  </div>
</template>