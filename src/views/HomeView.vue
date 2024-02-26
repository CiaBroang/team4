<script setup>
import HeroImage from "../components/HeroImage.vue";
</script>

<template>
  <main>
    <!-- div för navbar -->
    <HeroImage />

    <!-- div för inloggningsknapp -->
    <div class="text-center">
      <v-btn class="logBtn" elevation="2" large>Log in</v-btn>
    </div>
    <!-- div för registreringsknapp -->
    <div class="text-center">
      <v-btn class="logBtn" elevation="2" large>Register</v-btn>
    </div>

    <!-- div för beskrivning av "produkten" -->

    <v-container id="about" align="center">
      <v-card width="400" align="center" justify="center" variant="elevated">
        <v-card-item>
          <v-card-title>About Pocket Planner</v-card-title>
        </v-card-item>

        <v-card-text> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum." </v-card-text>
      </v-card>
    </v-container>

    <!-- div för footer -->
  </main>
</template>

<style scoped>


.text-center {
  margin: 50px;
  display: block;
}

button {
  width: 15vw;
  align-items: center;
}

#about {
  margin-bottom: 5vh;
}

@media (max-width: 750px) {
  button {
    width: 25vw;
  }
}

@media (max-width: 550px) {
  button {
    width: 30vw;
  }

  #about {
    display: flex;
    width: 85vw;
  }

  .text-center {
    margin: 30px;
    padding-top: 2vh;

  }
}
</style>
