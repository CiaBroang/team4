import { defineStore } from 'pinia'

export const useUserDataStore = defineStore('userStore', {
  state: () => ({ users: [] }),
  getters: {
    createdUsers: state => state.users
  },

  actions: {
    updateUser(userData) {
      const userIndex = this.users.findIndex(user => user.email === userData.email)
      if (userIndex !== -1) {
        this.users[userIndex] = userData
        console.log(`User with email ${userData.email} updated`)
      } else {
        console.error(`User with email ${userData.email} not found`)
      }
    },

    addUser(newUser) {
      this.users.push(newUser)
    }
  }
})