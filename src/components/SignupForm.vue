<template>
      <div id="app">
  <v-card class="mx-auto" max-width="344" title="Create account" subtitle="Sign up — don’t miss out on bonus features.">
    <span class="or-login">
      <a class="underline-link" @click="$router.push('/login')" style="cursor: pointer;">Already a user? Log in here!</a>
    </span>
    <v-form ref="form">
      <v-text-field v-model="firstname" color="primary" label="First name" variant="underlined"
        :rules="[required]"></v-text-field>

      <v-text-field v-model="lastname" color="primary" label="Last name" variant="underlined"
        :rules="[required]"></v-text-field>

      <v-text-field v-model="email" color="primary" label="Email" variant="underlined" :rules="[required]"></v-text-field>

      <v-text-field v-model="password" color="primary" label="Password" placeholder="Enter your password"
        variant="underlined" :rules="[required]"></v-text-field>

      <v-checkbox v-model="terms" label="I agree to Pocket Planner terms & conditions"
        :rules="[v => !!v || 'You must agree to continue!']" required></v-checkbox>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>


      <v-btn color="success" @click="validate">
        Create your account
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
    </v-form>
  </v-card>
</div>
</template>

<script>
import { useUserDataStore } from '@/stores/userDataStore';

export default {
  data: () => ({
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    terms: false,
  }),
  methods: {

    required(v) {
      return !!v || 'Field is required'
    },
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {

        const newUser = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        };

        useUserDataStore().addUser(newUser);
        console.log(newUser);
        alert(`Welcome ${this.firstname}! We created your Pocket Planer`);
        this.$router.push('/calendar');
      }
    },
    }
};
</script>

<style>

#app {
    display: flex;
    flex-direction: column;
    min-height: 85vh;
}

.v-card {
  margin: 2em;
}

.v-form {
  margin: 2em;
}

.underline-link {
  text-decoration: underline;
  color: inherit;
}

.or-login {
  margin-left: 1em;
}</style>