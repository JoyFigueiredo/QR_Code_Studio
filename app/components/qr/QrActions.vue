<template>
    <div class="actions">
        <BaseButton @click="$emit('imprimir')">🖨️ Imprimir</BaseButton>
        <BaseButton @click="$emit('baixar')">⬇️ Baixar</BaseButton>
    </div>
</template>

<script setup lang="ts">
defineEmits(['imprimir', 'baixar'])
</script>
