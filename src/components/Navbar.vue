<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <div class="container-fluid">
                <router-link class="navbar-brand text-warning fw-bold" to="/">Pizerria</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/inventario">Inventario</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/carrito">Carrito</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/ventas">Ventas</router-link>
                        </li>
                    </ul>
                </div>
                <p class="nav-item text-white me-3">Total de Pizza: {{ cantidadCarrito }}</p>
                <div @click="$router.push('/carrito')" class="carrito-icono"></div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "Navbar",
    computed: {
    ...mapGetters(["cantidadCarrito"])
    }

}
</script>

<style lang="scss" scoped>
    .carrito-icono {
        width: 24px;
        height: 24px;
        line-height: 24px;
        cursor: pointer;
        &::before {
            content: "shopping_cart";
            font-family: "Material Icons";
            font-size: 1.5rem;
            color: white;
        }
    }
</style>
