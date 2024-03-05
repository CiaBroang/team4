<script setup>
import HeroImage from "../components/HeroImage.vue";
/* import MockupPic from "../components/MockupPic.vue" */
</script>

<template>
  <main>
    <HeroImage />

    <!-- div wrapper för main content på startsidan -->
    <div class="content-container">

      <!-- <MockupPic /> -->
      <div id="Mockup" class="leftFlex">
        <img src="../assets/img/iPhone-pink-backgronund.jpg" alt="Iphone mockup" />
      </div>

      <div class="rightFlex">

        <!-- div för inloggningsknapp -->
        <div class="text-center">
          <router-link to="/Login">
            <v-btn class="logBtn custom-button" elevation="2" large>Sign in</v-btn>
          </router-link>
          <!-- div för registreringsknapp -->
          <router-link to="/Signup"><v-btn class="logBtn" elevation="2" large>Register</v-btn></router-link>
        </div>

        <!-- div för beskrivning av "produkten" -->
        <v-container id="about" align="center">
          <v-card width="450" align="center" justify="center" variant="elevated">
            <v-card-item>
              <v-card-title class="Title">About Pocket Planner</v-card-title>
            </v-card-item>

            <v-card-text class="text-h6"> "Introducing Pocket Planner, your sleek and intuitive digital calendar for
              effortless
              scheduling on the go. With features like customizable reminders, color-coded categories, managing your
              schedule has never been easier. Stay organized, stay on top of your commitments — download Pocket Planner
              today!" </v-card-text>
          </v-card>
        </v-container>
      </div>

    </div>

  </main>
</template>

<style scoped>
.content-container {
  display: flex;
  flex-wrap: wrap;
}

#Mockup {
  display: flex;
  background-color: #F7E4D5;
  flex: 2;
  width: 50%;
}

#Mockup img {
  width: 100%;
  height: auto;
}

.rightFlex {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}

.logBtn{
  border-radius: 20px;



}

.custom-button {
  background-color: #ff851b;/* #fff2e0; */
  color: #ffffff;
  border-radius: 20px;

}

.Title{
  font-weight: 600 !important;
}

.text-center {
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

button {
  width: 15vw;
  align-items: center;
  margin: 10px;
}

#about {
  margin-bottom: 0;
  padding-top: 0;
}

@media (max-width: 1300px) {
  .content-container {
    flex-direction: column-reverse;
  }

  #Mockup {
    width: 100%;
    float: right;
  }

  .rightFlex {
    float: left;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

}

@media (max-width: 750px) {
  button {
    width: 25vw;
  }
}

@media (max-width: 600px) {
  button {
    width: 40vw;
  }

  #about {
    display: flex;
    width: 80vw;
    justify-content: center;
  }

  .text-center {
    margin: 20px;
    padding-top: 2vh;

  }
}

@media (max-width: 450px) {
  #about {
    display: flex;
    width: 95vw;
    justify-content: center;
  }

}
</style>
