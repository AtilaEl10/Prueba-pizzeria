import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    carrito: [],
    ventas: []
  },
  getters: {
    cantidadCarrito(state) {
      return state.carrito.length
    },
    productosFiltrados(state) {
      const productos = state.productos.filter((pizza) => pizza.stock > 0)
      return !productos ? [] : productos
    },
    totalCarrito(state) {
      const carrito = state.carrito
      if(carrito.length === 0) return 0
      const total = carrito.reduce((acc, x) => acc + x.subtotal, 0)
      return total 
    },
  },
  mutations: {
    cargarData(state, payload){
      state.productos = payload
    },
    agregarPizza(state, payload) {
      const agregar = payload.id
      const cantidad = 1
      const nombre = payload.nombre
      const precio = payload.precio
      const subtotal = precio * cantidad

      const finder = state.carrito.find((obj) => obj.id === agregar)
      if(!finder) {
        const obj = {
          id: agregar,
          cantidad,
          nombre,
          precio,
          subtotal,
        }
        state.carrito.push(obj)
      }else {
        finder.cantidad = cantidad + finder.cantidad
        finder.subtotal = finder.cantidad * precio
      }
    },
    comprar(state) {
      const confirmacion = confirm("¿Quiere confirmar tu compra?")
      console.log("Pucha que estuvo dificil :(");
      if(confirmacion) {
        console.log("Falle con los test :(");
        const venta = state.carrito.map(obj => {
          const obj2 = {
            id: obj.id,
            nombre: obj.nombre,
            precioSubtotal: obj.subtotal,
            cantidadVendida: obj.cantidad,
          }
          return obj2
        })
        // para que la funcion se sume al total de las ventas
        venta.forEach((producto) => {
          const nuevaVenta = producto;
          const finder = state.ventas.find((obj) => obj.id === nuevaVenta.id)

          if(!finder) {
            state.ventas.push(nuevaVenta)
          }else {
            state.ventas = state.ventas.map((vend) => {
              const obj3 = {
                id: vend.id,
                nombre: vend.nombre,
                precioSubtotal: vend.id === nuevaVenta.id ? vend.precioSubtotal + nuevaVenta.precioSubtotal : vend.precioSubtotal,
                cantidadVendida: vend.id === nuevaVenta.id ? vend.cantidadVendida + nuevaVenta.cantidadVendida : vend.cantidadVendida,
              }
              return obj3
            })
          }
        })
        // state.ventas = venta

          // DEscontar al stock
        state.productos.forEach((producto) => {
            const id = producto.id;

            state.carrito.forEach((el) => {
              if(el.id === id) {
                producto.stock = producto.stock - el.cantidad
              }
            })
        })
      }
    },
    limpiar(state) {
      state.carrito = []
    }
  },
  actions: {
    async getData({ commit }) {
      const url = "https://us-central1-apis-varias-mias.cloudfunctions.net/pizzeria"
      try {
        const req = await axios(url)
        const pizzas = req.data
        const pizzasStock = pizzas.map((obj)=>{
          obj.stock = 10
          return obj
        })

        commit("cargarData", pizzasStock)

        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
});
