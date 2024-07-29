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
      <div class="w-full h-full bg-gray-400">
          <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
              <CabeceraAdmin/>
          </div>      
  
          <div class="h-[calc(100vh-50px)] bg-white">
              <TablaAsignacion/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import RouterAdmin from '@/components/RouterAdmin.vue';
  import TablaAsignacion from '@/components/TablaAsignacion.vue';
  import CabeceraAdmin from '@/components/CabeceraAdmin.vue';
  export default {
      components: {
        TablaAsignacion,
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