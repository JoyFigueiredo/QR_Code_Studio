<template>
    <button type="button" class="btn">
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps<{
    type?: 'button' | 'submit'
}>()
</script>

<style scoped>
.btn {
    background-color: #ff8c00;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
}
</style>