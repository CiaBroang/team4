<template>
    <div id="app">
        <v-card class="mx-auto px-6 py-8" max-width="344" title="Log in" subtitle="Log in to see your pocket planner.">
            <container class="signup">

                <a @click="$router.push('/signup')" class="underline-link" style="cursor: pointer;">
                    Or sign up here!
                </a>
            </container>
            <v-divider class="border-opacity-25" color="white"></v-divider>
            <v-form v-model="form" @submit.prevent="onSubmit">
                <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" label="Email"
                    variant="underlined"></v-text-field>

                <v-text-field v-model="password" :readonly="loading" label="Password"
                    placeholder="Enter your password" hint="8 characters" persistent-hint 
                    variant="underlined" :rules="[rules.required, rules.min]"></v-text-field>

                <br>

                <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit"
                    variant="elevated">
                    Sign In
                </v-btn>
            </v-form>
        </v-card>
    </div>
</template>




<script>
export default {
    data: () => ({
        form: false,
        email: null,
        loading: false,
        password: null,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters'
        }
    }),

    methods: {
        onSubmit() {
            if (!this.form) return

            this.loading = true

            setTimeout(() => (this.loading = false), 2000);
            this.$router.push('/calendar'); //Add Pinia logic before to check if the user exists and then log in
        },
        required(v) {
            return !!v || 'Field is required'
        },
    },
}
</script>

<style>
#app {
    display: flex;
    flex-direction: column;
    min-height: 80vh;
}

.v-card {
    margin: 2em;
}


.underline-link {
    text-decoration: underline;
    color: inherit;
    margin-bottom: 1em;
}

.signup {
    margin-left: 1em;
}

.border-opacity-25 {
    margin: 1em;
}
</style>