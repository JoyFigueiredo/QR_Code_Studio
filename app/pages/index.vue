<template>
  <div class="container">
    <Header />

    <main>
      <h1>Joice Figueiredo</h1>
      <h2>Digite o texto:</h2>

      <QrForm @gerar="gerarQr" />

      <QrPreview :texto="qrTexto" />

      <p v-if="qrTexto">Você digitou: {{ qrTexto }}</p>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">

const qrTexto = ref('')

function gerarQr(valor: string) {
  qrTexto.value = valor
}
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
