<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Pizerria</router-link>
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
                            <router-link class="nav-link" to="/ventas">Ventas</router-link>
                        </li>
                    </ul>
                    <div class="carrito-icono">
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    name: "Navbar"
}
</script>

<style lang="scss" scoped>
.carrito-icono {
    width: 24px;
    height: 24px;
    &::before {
        content: "shopping_cart";
    }
}
</style>
