<template>
    <div v-if="historico.length" class="history">
        <h3>Histórico dos últimos 5</h3>

        <ul>
            <li v-for="item in historico" :class="{ active: item === ativo }" @click="$emit('selecionar', item)">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    historico: string[]
    ativo: string
}>()
//historico é um vetor de string
defineEmits<{
    (e: 'selecionar', valor: string): void
}>()

</script>