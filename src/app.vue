<script setup>
    import { greet } from './template_rust_vue/'
    let name = undefined;
    function say_hello(name) {
        greet(name);
    }
</script>

<template>
    <input v-model="name" placeholder="Name">
    <button @click="() => name && say_hello(name)">Say Hello</button>
</template>

<style scoped>

</style>
