import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PlayerView from "../views/PlayerView.vue";
import EmployeeView from "@/views/EmployeeView.vue";
import GamesView from "@/views/GamesView.vue";
import CoachesView from "@/views/CoachesView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
        {
            path: "/players",
            name: "players",
            component: PlayerView,
        },
        {
            path: "/employees",
            name: "employees",
            component: EmployeeView,
        },
        {
            path: "/games",
            name: "games",
            component: GamesView,
        },
        {
            path: "/coaches",
            name: "coaches",
            component: CoachesView,
        }
    ],
});

export default router;