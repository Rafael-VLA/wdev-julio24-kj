import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';

// Importamos las páginas
import HomePage from './pages/HomePage.vue';
import ContactPage from './pages/ContactPage.vue';
import MainLayout from './layouts/MainLayout.vue';

// Definimos las rutas que se utilizarán
const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: "/",
                name: "home", // Identificados de la ruta
                component: HomePage
            },
            {
                path: "/contact",
                name: "contact",
                component: ContactPage
            }
        ]
    }
    // {
    //     path: '/dashboard',
    //     component: DashbioardLayout,
    //     children: [
    //         {
    //             path: "/",
    //             component: HomeDashbordPage
    //         },
    //         {
    //             path: "/contact",
    //             component: ChartDashboardPage
    //         }
    //     ]
    // }
];

// Configuramos el enrutador con las rutas y el modo de historia
export const router = createRouter({
    history: createWebHistory(),
    routes, //routes: routes
    linkActiveClass: "active",
    linkExactActiveClass: "active"
});