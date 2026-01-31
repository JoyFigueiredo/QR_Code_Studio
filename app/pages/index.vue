<template>
  <div class="container">
    <Header />
    <main>
      <h1>Joice Figueiredo</h1>
      <h2>Digite o texto: </h2>

      <input class="input" type="texto" placeholder="Escreva aqui" v-model="texto" />

      <button @click="gerarQr">Gerar QR Code</button>
      <img v-if="mostrarQr"
        :src="`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrTexto)}`"
        alt="QR Code" />
      <p> Voce Digitou: {{ texto }} </p>

    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">

const texto = ref('') //Variavel q recebe o texto
const qrTexto = ref('')
const mostrarQr = ref(false)

function gerarQr() {
  if (!texto.value) {
    alert('Digite um texto primeiro')
    return
  }

  qrTexto.value = texto.value   // congela o texto
  mostrarQr.value = true        // libera o QR
}
</script>

<style scoped>
.container {
  padding: 20px;
}

.input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>