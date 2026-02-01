<template>
    <div class="form">

        <input class="input" type="text" placeholder="Escreva aqui" v-model="textoLocal" />
        <input class="largura" type="number" placeholder="Largura (px)" min="100" max="400" v-model.number="largura"
            @input="emitTamanho" />
        <Button @click="emitGerar">
            Gerar QR Code
        </Button>

    </div>
</template>

<script setup lang="ts">

const emit = defineEmits<{
    (e: 'gerar', payload: { texto: string; largura: number }): void
    (e: 'mudarTamanho', largura: number): void
}>()


const textoLocal = ref('')
const largura = ref(200)

function emitGerar() {
    if (!textoLocal.value) {
        alert('Digite um texto primeiro') // evita campo vazio
        return
    }

    emit('gerar', {
        texto: textoLocal.value,
        largura: largura.value
    })

}

function emitTamanho() {
    emit('mudarTamanho', largura.value)
}
</script>

<style scoped>
.input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.largura {
    padding: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>