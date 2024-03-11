import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import CalendarView from '../views/CalendarView.vue'
import AboutContactView from '../views/ContactAboutView.vue'
import UserSettingsView from '../views/UserSettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutContactView
    },
    {
      path: '/login',
      name: 'logIn',
      component: LoginView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/settings',
      name: 'settings',
      component: UserSettingsView
    }
  ]
})

export default router
