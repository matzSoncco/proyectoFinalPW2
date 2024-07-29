<template>
    <!-- Editar {{$route.params.id}} - {{pelicula}} -->
    <form @submit.prevent="updateLoan(loanU)">
    <InputAsignacion :loanU="loanU" :texto="this.texto"/>
  </form>
  </template>
  
  <script>
  import {mapState, mapActions} from 'vuex'
  import InputAsignacion from '../components/Trabajadores/InputAsignacion.vue'
  export default {
    data(){
        return{
            texto:'Editar',
        }
    },
      components:{
        InputAsignacion
      },
      computed: {
          ...mapState(['loanU'])
      },
      methods: {
          ...mapActions(['setLoan', 'updateLoan'])
      },
      created(){
          this.setLoan(this.$route.params.id)
      }
  }
  </script>