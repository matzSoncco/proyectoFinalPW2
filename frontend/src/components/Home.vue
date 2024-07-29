<template>
  <div class="w-screen h-screen flex">
    <div class="w-[400px] h-full bg-gray-200 text-white">
        <div class="h-[50px] bg-gray-900 flex justify-start items-center">
            <div class="px-[20px]">
                <h3 class="font-bold text-xl">Home</h3>
            </div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
            <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
                <RouterUser/>
            </div>
        </div>
    </div>
    <div class="w-full h-full bg-white">
      <div class="h-20 items-center">
        <h1 class="mt-10 text-center text-3xl font-bold">Fabrica Humeditos</h1>
      </div>
      <div>
        <p class="ml-4 mb-8 text-lg font-normal text-gray-900 dark:text-gray-900">"Humeditos" es una pequeña fábrica familiar ubicada en un pintoresco pueblo de montaña. Somos conocidos por nuestros dulces artesanales, especialmente por nuestros "humeditos", unos deliciosos bocaditos esponjosos y suaves, elaborados con ingredientes naturales y recetas tradicionales. Cada bocado es una explosión de sabor, elaborado con cariño y pasión.</p>
      </div>
      <img src="https://img.freepik.com/foto-gratis/interior-taller-fabrica-maquinas-proceso-produccion-fondo-industria-vidrio_645730-553.jpg" alt="Descripción de la imagen" class="mx-auto">
    </div>
  </div>
</template>

<script>
import RouterUser from './RouterUser.vue';
export default {
  components:{
    RouterUser
  }
}
</script>

<style>

</style>