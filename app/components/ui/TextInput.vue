<template>
  <input
    class="input"
    :placeholder="placeholder"
    v-model="model"
  />
</template>

<script setup lang="ts">
const model = defineModel<string>()

defineProps<{
  placeholder?: string
}>()
</script>

<style scoped>
.input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
