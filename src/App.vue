<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <NavBar />
    <router-view />
  <FooterComponent />
</template>

<script>

export default {
data: () => ({
  items: [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
  ],
}),
}
</script>