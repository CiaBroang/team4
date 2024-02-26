<script setup>
import HeroImage from "../components/HeroImage.vue";
</script>

<template>
  <main>
    <!-- div för navbar -->
    <HeroImage />

    <!-- div för inloggningsknapp -->
   <!--  <div class="text-center">
      <router-link to="/LoginView"><v-btn class="logBtn" elevation="2" large >Log in</v-btn></router-link>
    </div> -->



<div class="text-center">
  <router-link to="/LoginView">
    <v-btn class="logBtn custom-button" elevation="2" large>Log in</v-btn>
  </router-link>
</div>


    <!-- div för registreringsknapp -->
    <div class="text-center">
      <router-link to="/SignupView"><v-btn class="logBtn" elevation="2" large>Register</v-btn></router-link>
    </div>

    <!-- div för beskrivning av "produkten" -->

    <v-container id="about" align="center">
      <v-card width="400" align="center" justify="center" variant="elevated">
        <v-card-item>
          <v-card-title>About Pocket Planner</v-card-title>
        </v-card-item>

        <v-card-text> "Introducing Pocket Planner, your sleek and intuitive digital calendar for effortless scheduling on the go. With features like customizable reminders, color-coded categories, managing your schedule has never been easier. Stay organized, stay on top of your commitments — download Pocket Planner today!" </v-card-text>
      </v-card>
    </v-container>
  </main>
</template>

<style scoped>

  .custom-button {
    background-color: #FF851B;
  }

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
