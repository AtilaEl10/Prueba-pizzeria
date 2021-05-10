<template>
    <div class="container">
        <h1 class="col-md-7 mx-auto display-4 text-warning fw-bold bg-dark mt-4">Ventas realizadas</h1>
        <div class="row mt-5">
            <div class="col-12">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Total</th>
                    </tr>
                </thead>
                <tbody v-if="ventas && ventas.length === 0">
                    <tr>
                        <td colspan="6" class="mx-auto display-7 text-danger">Sin ventas realizadas</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(venta, i) in ventas" :key="i">
                        <td>{{venta.id}}</td>
                        <td>Pizza {{venta.nombre}}</td>
                        <td>{{venta.cantidadVendida}}</td>
                        <td>$ {{venta.precioSubtotal}}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Ventas",

  computed: {
    ...mapState(["ventas"])
  },
};
</script>
