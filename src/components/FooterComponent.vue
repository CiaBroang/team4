<template>
  <v-layout>
    <v-footer class="custom-footer">
      <v-row justify="center" no-gutters>
        <v-col cols="12" class="d-flex justify-center">
          <a v-for="link in links" :key="link.text" :href="link.url" class="mx-2">
            <v-btn color="white" variant="text" rounded="xl">
              {{ link.text }}
            </v-btn>
          </a>
        </v-col>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Pocket planner</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'About Us', url: '/about' },
        { text: 'Contact', url: '#' },
        { text: 'Jobs', url: '#' }
      ]
    }
  }
}
</script>

<style>
.v-layout {
  overflow-y: hidden;
}
.custom-footer {
  background-color: #ff851b !important;
  position: absolute;
  bottom: 0;
  height: 75px !important;
}
</style>
