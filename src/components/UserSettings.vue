<template>
  <div id="app">
    <v-card
      class="mx-auto"
      max-width="344"
      title="Your settings"
      subtitle="Click save when you are done"
    >
      <v-form ref="form">
        <v-avatar size="x-large">
          <v-img
            alt="John"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          ></v-img>
        </v-avatar>

        <template v-if="user">
          <v-text-field
            v-model="user.firstname"
            color="primary"
            label="First name"
            variant="underlined"
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            v-model="user.lastname"
            color="primary"
            label="Last name"
            variant="underlined"
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            v-model="user.email"
            color="primary"
            label="Email"
            variant="underlined"
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            v-model="user.password"
            color="primary"
            label="Password"
            variant="underlined"
            :rules="[required]"
          ></v-text-field>

          <v-checkbox
            v-model="user.terms"
            label="I want Pocket Planner newsletter and discounts!"
          ></v-checkbox>
        </template>
        <!-- Två olika versioner för att sidan inte ska krasha om datan inte finns. Om användardata saknas, visa ändå inputfälten men låt dem vara tomma -->
        <template v-else>
          <v-text-field
            v-model="emptyUser.firstname"
            color="primary"
            label="First name"
            variant="underlined"
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            v-model="emptyUser.lastname"
            color="primary"
            label="Last name"
            variant="underlined"
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            v-model="emptyUser.email"
            color="primary"
            label="Email"
            variant="underlined"
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            v-model="emptyUser.password"
            color="primary"
            label="Password"
            variant="underlined"
            :rules="[required]"
          ></v-text-field>

          <v-checkbox
            v-model="emptyUser.terms"
            label="I want Pocket Planner newsletter and discounts!"
          ></v-checkbox>
        </template>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="success" @click="validate">
            Save
            <v-icon icon="mdi-shimmer" end></v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { useUserDataStore } from '@/stores/userDataStore'

export default {
  setup() {
    const userStore = useUserDataStore()

    const user = userStore.createdUsers[0]

    // Skapa ett tomt användarobjekt för inputfälten när användardata saknas, när jag inte la till detta krashade sidan
    const emptyUser = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      terms: false
    }

    return {
      user,
      emptyUser
    }
  },
  methods: {
    required(v) {
      return !!v || 'Field is required'
    },
    async validate() {
      const { valid } = await this.$refs.form.validate()

      if (valid) {
        this.saveSettings()
        alert('Saved!')
      }
    },
    saveSettings() {
      const userStore = useUserDataStore()
      userStore.updateUser(this.user)
    }
  }
}
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
}
</style>