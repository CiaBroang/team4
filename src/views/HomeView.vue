<script setup>
import HeroImage from "../components/HeroImage.vue";
/* import MockupPic from "../components/MockupPic.vue" */
</script>

<template>
  <main>
    <!-- div för navbar -->
    <HeroImage />

    <div id="Mockup">
        <img src="../assets/img/iPhone-pink-backgronund.jpg" alt="Iphone mockup"/>

    <div class="content-container">

    <!-- div för inloggningsknapp -->
    <div class="text-center">
      <router-link to="/Login">
         <v-btn class="logBtn custom-button" elevation="2" large>Log in</v-btn>
      </router-link>
    </div>


    <!-- div för registreringsknapp -->
    <div class="text-center">
      <router-link to="/Signup"><v-btn class="logBtn" elevation="2" large>Register</v-btn></router-link>
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
  </div>
  </div>
    <!-- <MockupPic /> -->
  </main>
</template>

<style scoped>

#Mockup{
  background-color: #F7E4D5;


}

#Mockup img {
  margin-right: 60%;
  height: auto;
  width: 40%;
  overflow-x: hidden;
  background-color: #F7E4D5;

}

  .custom-button {
    background-color: #FF851B;

  }

.text-center {
  margin: 30px;
  margin-left: 40%;
  /* display: block; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

button {
  width: 15vw;
  align-items: center;

}

#about {
  margin-bottom: 0;
  margin-left: 29%;

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
