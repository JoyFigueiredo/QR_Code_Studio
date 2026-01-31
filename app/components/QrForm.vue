<template>
    <div>
        <input class="input" type="text" placeholder="Escreva aqui" v-model="textoLocal" />

        <button @click="enviar">
            Gerar QR Code
        </button>
    </div>
</template>

<script setup lang="ts">

const emit = defineEmits<{
    (e: 'gerar', valor: string): void
}>()

const textoLocal = ref('')

function enviar() {
    if (!textoLocal.value) {
        alert('Digite um texto primeiro')
        return
    }

    emit('gerar', textoLocal.value)
}
</script>

<style scoped>
.input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>