<template>
    <!-- Editar {{$route.params.id}} - {{pelicula}} -->
    <form @submit.prevent="updatePpe(ppeU)">
    <InputEquipo :ppeU="ppeU" :texto="this.texto"/>
  </form>
  </template>
  
  <script>
  import {mapState, mapActions} from 'vuex'
  import InputEquipo from '../components/Trabajadores/InputEquipo.vue'
  export default {
    data(){
        return{
            texto:'Editar',
        }
    },
      components:{
        InputEquipo
      },
      computed: {
          ...mapState(['ppeU'])
      },
      methods: {
          ...mapActions(['setPpe', 'updatePpe'])
      },
      created(){
          this.setPpe(this.$route.params.id)
      }
  }
  </script>