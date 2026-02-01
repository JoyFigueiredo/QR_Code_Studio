<template>
    <img v-if="texto" :src="qrUrl" :style="{ width: size + 'px', height: size + 'px' }" alt="QR Code" />
    <p class="qr-text">{{ texto }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{
    texto: string
    size: number
}>()

const qrUrl = computed(() =>
    `https://api.qrserver.com/v1/create-qr-code/?size=${props.size}x${props.size}&data=${encodeURIComponent(props.texto)}`
)
</script>

<style scoped>
.qr-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 🔥 centraliza QR e texto */
    gap: 8px;
}

.qr-text {
    text-align: center;
    font-size: 14px;
    word-break: break-word;
}
</style>