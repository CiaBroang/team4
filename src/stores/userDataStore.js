import { defineStore } from 'pinia'

export const useUserDataStore = defineStore('userStore', {
  state: () => (
      {firstname: '',
      lastname: '',
      email: '',
      password: '',
      terms: false,
      users: []
    }),
  actions: {
      updateUserFirstName(firstname) {
          console.log('woho firstname ändrades:', firstname);
          this.firstname = firstname;
      },
      updateUserLastName(lastname) {
          console.log('woho lastname ändrades:', lastname);
          this.lastname = lastname;
      },
      updateUserEmail(email) {
          console.log('woho email ändrades:', email);
          this.email = email;
      },
      updateUserPassword(password) {
        console.log('woho email ändrades:', password);
        this.password = password;
    },
    addUser() {
      const newUser = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      };
      this.users.push(newUser);
    }
  }
});