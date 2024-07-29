<template>
    <!-- Editar {{$route.params.id}} - {{pelicula}} -->
    <form @submit.prevent="updateTrabajador(trabajador)">
    <Input :trabajador="trabajador" :texto="this.texto"/>
  </form>
  </template>
  
  <script>
  import {mapState, mapActions} from 'vuex'
  import Input from '../components/Trabajadores/Input.vue'
  export default {
    data(){
        return{
            texto:'Editar',
        }
    },
      components:{
          Input
      },
      computed: {
          ...mapState(['trabajador'])
      },
      methods: {
          ...mapActions(['setWorker', 'updateTrabajador'])
      },
      created(){
          this.setWorker(this.$route.params.id)
      }
  }
  </script>