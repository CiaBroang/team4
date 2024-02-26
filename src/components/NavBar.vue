<template>
  <v-app>
    <v-app-bar app color="white">
      <v-toolbar-title>
        <img class="mr-10" src="../assets/img/pocket-planner-favicon-color.png" alt="Logotyp" height="60">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-chip class="mr-10 chip-custom" size="x-large" color="orange" text>Sign in</v-chip>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn style="color: orange;" icon="$vuetify" v-bind="props">
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-app>
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

<style>

.v-application__wrap {
  min-height: auto !important;
  margin: 5vh;
}

.chip-custom {
  padding: 8px 30px;
}

.chip-custom:hover {
  background-color: #e0e0e0;
}

.icon {
  color: black;
}

.custom-dark-theme {
  color: black; /* Byt ut färgen till den mörka färgen du vill ha */
}
</style>