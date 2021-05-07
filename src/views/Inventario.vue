<template>
    <div class="container">
        <h1>Nuestras Pizzas</h1>
        <h4>Las pizzas en rojo no estan disponibles para su venta</h4>
        <div class="row">
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
                <tbody v-for="(pizza, i) in pizzas" :key="i">
                    <tr>
                        <td>{{pizza.id}}</td>
                        <td>Pizza {{pizza.name}}</td>
                        <td>$ {{pizza.price}}</td>
                        <td>Stock</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "Inventario",

  computed: {
    ...mapState(["pizzas"])
  },
  methods: {
    ...mapActions(["getData"]),
  },
  created() {
    this.getData()
  }
};
</script>
