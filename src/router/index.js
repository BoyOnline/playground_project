import { createRouter, createWebHistory } from "vue-router";
import Cart from "../views/Cart.vue"

const routes = [
    {
        path: "/",
        name: "Cart",
        component: Cart
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../views/Checkout.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router