<template>
    <img v-if="texto"
        :src="`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(texto)}`"
        alt="QR Code" />
</template>

<script setup lang="ts">
defineProps<{
    texto: string
}>()
</script>
