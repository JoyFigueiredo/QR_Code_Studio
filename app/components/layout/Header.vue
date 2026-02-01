<template>
    <header class="header">
        <img src="../../public/images/logo.png" alt="Logo" class="logo" />
        <h1>QR Code Studio</h1>
    </header>
</template>

<script setup lang="ts">
</script>

<style>
.header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: #c25802;
    /* laranja */
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.header h1 {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.5px;
}

.logo {
    position: absolute;
    left: 60px;
    height: 100px;
    width: auto;
}
</style>