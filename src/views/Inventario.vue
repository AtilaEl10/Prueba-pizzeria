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

                <tbody v-if="productos && productos.stock === 0">
                    <tr>
                        <td colspan="6" class="mx-auto display-7 text-danger">Sin stock de pizzas</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(pizza, i) in productos" :key="i" :class="{noStock: productos.stock === 0}">
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
import { mapState } from "vuex"

export default {
  name: "Inventario",
  data() {
    return {
//
    }
  },
  computed: {
    ...mapState(["productos"])
  },
};
</script>

<style scoped>
  .noStock {
    background-color: rgb(189, 117, 117);
    color: white;
  }
</style>
