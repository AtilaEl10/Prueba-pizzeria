import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Vista Home", () => {

  test("Presencia de Título", () => {
    const wrapper = shallowMount(Home);
    const h1 = wrapper.find("h1");
    const titulo = "<em>DONDE EL PROFE</em>";
    expect(h1.text()).toBe(titulo)
  })
})