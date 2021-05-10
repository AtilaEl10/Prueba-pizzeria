<template>
    <div class="container">
        <h1 class="col-md-7 mx-auto display-4 text-warning fw-bold bg-dark mt-4">Tus compras</h1>
        <div class="row mt-5">
            <div class="col-12">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Subtotal</th>
                    </tr>
                </thead>

                <tbody v-if="carrito && carrito.length === 0">
                    <tr>
                        <td colspan="6" class="mx-auto display-5 text-danger">Sin productos en el carrito</td>
                    </tr>
                </tbody>
                <tbody  v-else>
                    <tr v-for="(compra, i) in carrito" :key="i">
                        <td>{{i + 1}}</td>
                        <td>Pizza {{compra.nombre}}</td>
                        <td>$ {{compra.precio}}</td>
                        <td>{{compra.cantidad}}</td>
                        <td>$ {{compra.subtotal}}</td>
                    </tr>
                    <tr>
                        <td colspan="4" class="text-end fw-bold">Total:</td>
                        <td class="fw-bold">$ {{ totalCarrito}}</td>
                    </tr>
                    <tr>
                        <td colspan="5"><button @click="comprar" class="btn btn-warning">Comprar</button></td>
                    </tr>
                    <tr>
                        <td colspan="1"><button @click="limpiar" class="btn btn-secondary">Limpiar carrito</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex"

export default {
    data() {
        return {
//
        }
    },
    computed: {
        ...mapState(["carrito"]),
        ...mapGetters(["totalCarrito"])
    },
    methods: {
        ...mapMutations(["comprar"]),
        ...mapMutations(["limpiar"]),
    },
}
</script>