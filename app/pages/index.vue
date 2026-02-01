<script setup lang="ts">
import { useQrCode } from '~/composables/useQrCode';

const { texto, historico, gerar, imprimir, baixar } = useQrCode()
const tamanhoQr = ref(200)

function gerarQr(payload: { texto: string; largura: number }) {
  gerar(payload.texto)
  tamanhoQr.value = payload.largura
}
</script>

<template>
  <div class="container">
    <main>
      <h2>Digite o texto que quer transformar em QR Code:</h2>

      <QrForm @gerar="gerarQr" @mudarTamanho="tamanhoQr = $event" />


      <QrPreview :texto="texto" :size="tamanhoQr" />


      <QrActions class="actions" v-if="texto" @imprimir="imprimir" @baixar="baixar" />
      <QrHistory :historico="historico" @selecionar="gerar" :ativo="texto" />

    </main>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.actions {
  margin-top: 20px;
  display: flex;
  gap: 12px;
  justify-content: center;
}
</style>
