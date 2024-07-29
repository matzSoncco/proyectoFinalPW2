<template>
  <div class="w-screen h-screen flex">
    <div class="w-[400px] h-full bg-gray-200 text-white">
        <div class="h-[50px] bg-gray-900 flex justify-start items-center">
            <div class="px-[20px]">
                <h3 class="font-bold text-xl">Header side</h3>
            </div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
            <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
                <RouterAdmin/>
            </div>
        </div>
    </div>
    <div class="w-full h-full bg-white">
        <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
            <CabeceraAdmin/>
        </div>      

        <div class="h-[calc(100vh-50px)] bg-white">
            <div class="h-20 items-center">
        <h1 class="mt-10 text-center text-3xl font-bold">Bienvenido de nuevo al modo Administrador</h1>
      </div>
      <div>
        <p class="ml-4 mb-8 text-lg font-normal text-gray-900 dark:text-gray-900">¿Que planea hacer hoy? Puede ver la lista de trabajadores o modificarla de ser el caso.</p>
      </div>
      <img src="https://i0.wp.com/www.ebizlatam.com/wp-content/uploads/2020/05/Administrador-de-TI.jpg?fit=787%2C524" alt="Descripción de la imagen" class="w-[500px] mx-auto">
        </div>
    </div>
  </div>
</template>

<script>
import RouterAdmin from '@/components/RouterAdmin.vue';
import CabeceraAdmin from '@/components/CabeceraAdmin.vue';
export default {
    components: {
        RouterAdmin,
        CabeceraAdmin
    },
    methods: {
        toggleSideBar(){

        }
    }
}
</script>

<style>

</style>