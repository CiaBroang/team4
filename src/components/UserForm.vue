<template>
    <v-card
      class="mx-auto"
      max-width="344"
      title="User Registration"
      subtitle="Sign up — don’t miss out on bonus features.

"
    >
      <v-container>
        <v-text-field
          v-model="first"
          color="primary"
          label="First name"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="last"
          color="primary"
          label="Last name"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
        ></v-text-field>
  
        <v-checkbox
          v-model="terms"
          color="black"
          label="I agree to Pocket Planner terms & conditions"
        ></v-checkbox>
      </v-container>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-spacer></v-spacer>
  
        <v-btn color="success">
          Create your account
  
          <v-icon icon="mdi-chevron-right" end></v-icon>

          
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>

<script>
  export default {
    data: () => ({
      first: null,
      last: null,
      email: null,
      password: null,
      terms: false,
    }),
  }
</script>

<style>


</style>