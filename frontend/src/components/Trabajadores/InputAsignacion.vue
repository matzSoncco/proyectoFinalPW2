<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:small-10">
        <div class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">N</div>
            <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
              <h2 class="leading-relaxed">Nuevo Préstamo</h2>
              <small class="text-sm text-gray-500 font-normal leading-relaxed">Crea un nuevo préstamo</small>
            </div>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="flex flex-col">
                <label class="leading-loose">Trabajador</label>
                <select class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
                    <template v-for="item in worker" :key="item.id">
                        <option :value="item.dni">{{ item.name }}: {{ item.dni }}</option>
                    </template>
                  <!-- Aquí debes agregar las opciones de trabajadores -->
                </select>
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Material</label>
                <select class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" v-model="loanU.material">
                    <template v-for="item in material" :key="item.id">
                        <option :value="item.idMaterial" selected>{{ item.name }}: {{ item.idMaterial }}</option>
                    </template>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Herramienta</label>
                <select class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" v-model="loanU.tool">
                    <template v-for="item in tool" :key="item.id">
                        <option :value="item.idTool" selected>{{ item.name }}: {{ item.idTool }}</option>
                    </template>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Equipo</label>
                <select class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" v-model="loanU.equipment">
                    <template v-for="item in equipment" :key="item.id">
                        <option :value="item.idEquipment" selected>{{ item.name }}: {{ item.idEquipment }}</option>
                    </template>
                </select>
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Código de Orden de Trabajo</label>
                <input type="number" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" v-model.number="loanU.workOrderCode">
              </div>
              <div class="flex items-center space-x-4">
                <div class="flex flex-col">
                    <label class="leading-loose">Fecha de Préstamo</label>
                    <input type="date" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" v-model="loanU.loanDate">
                </div>
                <div class="flex flex-col">
                    <label class="leading-loose">Fecha de Devolución</label>
                    <input type="date" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" v-model="loanU.returnLoadDate">
                </div>
            </div>
                <div class="flex">
                    <label class="leading-loose">Estado</label>
                <div class="ml-5 flex relative focus-within:text-gray-600 text-gray-400">
                  <input type="checkbox" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                  v-model="loanU.loanStatus"
                  >
                </div>

            </div>
          </div>
          <div class="pt-4 flex items-center space-x-4">
              <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
              </button>
              <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
              type="submit"
              >Procesar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
      ...mapState(['worker', 'material', 'equipment', 'tool']),
    },
    props: {
        loanU: Object,
        texto: "",

    }
}
</script>

<style scoped></style>