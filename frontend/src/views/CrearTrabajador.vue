<template>
    <form @submit.prevent="procesarFormulario">
        <Input :trabajador="trabajador" :texto="this.texto"/>
    </form>
  </template>
  
  <script>
  
  import Input from '../components/Trabajadores/Input.vue'
  import {mapActions} from 'vuex'
  
  export default {
    name: 'Home',
    components: {
      Input
    },
    data() {
      return {
        trabajador: {
            dni: 0,
            position: '',
            contractDate: '',
            name: '',
            surname: '',
            workerStatus: false,
        },
        texto: "Crear"
      }
    },
    methods: {
      ...mapActions(['setTrabajadores']),
      procesarFormulario(){
        console.log(this.trabajador)
        // envian los datos
        this.setTrabajadores(this.trabajador)
  
        // limpiar datos
        this.trabajador = {
            dni: 0,
            position: '',
            contractDate: '',
            name: '',
            surname: '',
            workerStatus: false,
        }
      }
    },
  
  }
  </script>