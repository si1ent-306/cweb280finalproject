import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import login from '../views/login.vue'
import employees from '../views/employees.vue'
import players from '../views/players.vue'
import coaches from '../views/coaches.vue'
import games from '../views/games.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/players',
            name: 'players',
            component: players
        },
        {
            path: '/coaches',
            name: 'coaches',
            component: coaches
        },
        {
            path: '/games',
            name: 'games',
            component:games
        },
        {
            path: '/employees',
            name: 'employees',
            component: employees
        },

    ]
})
export default router;