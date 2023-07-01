<script setup lang="ts">
import { ref } from 'vue';
import { greet } from './template_rust_vue/';

const name = ref();
</script>

<template>
    <input v-model="name" placeholder="Name">
    <button @click="name && greet(name)">Say Hello</button>
</template>
