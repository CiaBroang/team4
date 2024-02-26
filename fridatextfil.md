<script>
  export default {
    data: () => ({
      links: [
        'About Us',
        'Contact',
        'Jobs'
      ],
    }),
  }
</script>

<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Pocket planner</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<!-- <style scoped>
.g-grey-lighten-1{
  background-color: rgb(255, 156, 7);
}
</style> -->
