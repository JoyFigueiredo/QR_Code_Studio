<template>
    <Header />

    <main class="content">
        <slot />
    </main>

    <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body,
#__nuxt {
    width: 100%;
    height: 100%;
}

.content {
    min-height: calc(100vh - 110px);
    padding-top: 70px;
    padding-bottom: 40px;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
