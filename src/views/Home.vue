<template>
  <div class="home">
    <div class="container">
      <h2 class="mt-5">PIZZERIA</h2>  
      <h1 class="col-md-7 mx-auto display-4 text-warning fw-bold bg-dark"><em>DONDE EL PROFE</em></h1>
      <div class="row">
        <div class="col-12 mt-5">
          <div class="card-pizzas">
              <div class="row">
                <div class="col-md-4 col-sm-6 mb-5" v-for="pizza in productosFiltrados" :key="pizza.name"> 
                  <div class="card h-100">
                    <img :src="pizza.img" class="card-img-top" alt="pizzas">
                    <div class="card-body">
                      <h3 class="card-title fw-bold">Pizza {{pizza.name}}</h3>
                      <p class="card-text">{{pizza.desc}}.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item text-capitalize" v-for="(ing, i) in pizza.ing" :key="i">{{ing.name}}</li>
                    </ul>
                      <h3 class="mt-3">Precio: ${{pizza.price}}</h3>
                    <div class="card-body row">
                      <!--<input class=" col-4 ms-auto" type="number" placeholder="cantidad">-->
                      <button @click="agregarPizza({id: pizza.id, nombre: pizza.name, precio: pizza.price})" class="btn btn-dark col-6 mx-auto" style="height: 40px">Agregar</button>                    
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"

export default {
  name: "Home",

  computed: {
    ...mapGetters(["productosFiltrados"]),
  },
  methods: {
    ...mapMutations(["agregarPizza"]),
  },
};
</script>
