<template>
    <div class="container">
        <h1 class="col-md-7 mx-auto display-4 text-warning fw-bold bg-dark mt-4">Nuestras Pizzas</h1>
        <div class="row mt-5">
            <div class="col-12">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Stock</th>
                    </tr>
                </thead>
                <!--
                <tbody>
                    <td class="colspan-4 mx-auto display-4">No hay Stock de Pizzas</td>
                </tbody>
                -->
                <tbody v-for="(pizza, i) in productos" :key="i">
                    <tr>
                        <td>{{pizza.id}}</td>
                        <td>Pizza {{pizza.name}}</td>
                        <td>$ {{pizza.price}}</td>
                        <td>{{pizza.stock}}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        <h5 class="mt-4"><em>Las pizzas en rojo no estan disponibles para su venta</em></h5>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "Inventario",

  computed: {
    ...mapState(["productos"])
  },
  methods: {
    ...mapActions(["getData"]),
  },
  created() {
    this.getData()
  }
};
</script>
