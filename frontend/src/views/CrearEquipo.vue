<template>
    <form @submit.prevent="procesarFormulario">
        <InputEquipo :ppeU="ppeU" :texto="this.texto"/>
    </form>
  </template>
  
  <script>
  
  import InputEquipo from '../components/Trabajadores/InputEquipo.vue'
  import {mapActions} from 'vuex'
  
  export default {
    name: 'Home',
    components: {
        InputEquipo
    },
    data() {
      return {
        ppeU: {
            idPpe: '',
            name: '',
            quantity: 0,
            unitCost: 0.0,
            totalCost: 0.0,
            guideNumber: 0,
            stock: 0,
            unit: '',
            image: null,
        },
        texto: "Crear"
      }
    },
    methods: {
      ...mapActions(['setEquipos']),
      procesarFormulario(){
        console.log(this.ppeU)
        // envian los datos
        this.setEquipos(this.ppeU)
  
        // limpiar datos
        this.ppeU = {
            idPpe: '',
            name: '',
            quantity: 0,
            unitCost: 0.0,
            totalCost: 0.0,
            guideNumber: 0,
            stock: 0,
            unit: '',
            image: null
        }
      }
    },
  
  }
  </script>