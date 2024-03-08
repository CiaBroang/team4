<template>
    <main>
      <div class="header">
        <h2>This is Pocket Planner</h2>
      </div>

      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card class="about-section" outlined>
              <v-card-title class="headline">About Pocket Planner</v-card-title>
              <v-card-text>Introducing Pocket Planner, your sleek and intuitive digital calendar for effortless scheduling on the go. With features like customizable reminders, color-coded categories, managing your schedule has never been easier. Stay organized, stay on top of your commitments — download Pocket Planner today!</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-card class="about-us-section" outlined>
              <v-card-title class="headline">About Us</v-card-title>
              <v-card-text>Pocket Planner was founded in 2024 by a team of passionate developers who wanted to simplify the way people manage their daily tasks and schedules. We believe in creating user-friendly and innovative solutions that enhance productivity and organization for individuals and businesses alike.</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="contact-section" outlined>
              <v-card-title class="headline">Contact Us</v-card-title>
              <v-card-text>
                <v-form ref="form" @submit.prevent="submitForm" label="contact form">
                  <v-text-field v-model="name" label="Name" required></v-text-field>
                  <v-text-field v-model="email" label="Email" required></v-text-field>
                  <v-textarea v-model="message" label="Message" required></v-textarea>
                  <v-btn color="primary" type="submit">Submit</v-btn>
                  <v-alert v-if="submitted" type="success">The form has been submitted.</v-alert>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </main>
  </template>

  <script setup>
  import { ref } from 'vue';

  const name = ref('');
  const email = ref('');
  const message = ref('');
  const submitted = ref(false);
  const form = ref(null)

  const submitForm = () => {
    submitted.value = true;
    form.value.reset()
  };
  </script>

  <style scoped>
  .header {
    text-align: center;
    margin: 20px 0;
    font-size: 1.6rem;
  }

  .about-section, .about-us-section, .contact-section {
    margin: 20px 0;
    padding: 20px;
  }

  .v-card-title {
    font-size: 1.4rem;
  }

  .v-card-text {
    font-size: 1rem;
  }

  </style>
