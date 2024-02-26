

<template>
  <v-layout>
  <v-footer class="custom-footer">
    <v-row justify="center" no-gutters>
      <v-col cols="12" class="d-flex justify-center">
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
  data: () => ({
    links: [
      'About Us',
      'Contact',
      'Jobs'
    ],
  }),
}
</script>

<style>
.custom-footer {
  background-color: #ff851b !important ;
  position: absolute;
  bottom: 0;
  height: 75px !important ;
}

</style>
