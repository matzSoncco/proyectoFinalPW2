<template>
    <table class="ml-5 w-[calc(100%-50px)] text-sm text-left rtl:text-right text-black dark:text-black">
      <thead class="text-white uppercase bg-gray-100 dark:bg-blue-900 dark:text-white">
        <tr>
          <th scope="col" class="px-6 py-3">Nombre Trabajador</th>
          <th scope="col" class="px-6 py-3">Apellido Trabajador</th>
          <th scope="col" class="px-6 py-3">Código de Orden de Trabajo</th>
          <th scope="col" class="px-6 py-3">Fecha de asignación</th>
          <th scope="col" class="px-6 py-3">Estado de devolución</th>
          <th scope="col" class="px-6 py-3">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in loan" :key="item.id" class="odd:text-white odd:bg-gray-700 even:bg-gray-700 even:dark:bg-white">
          <td class="px-6 py-4">{{ getWorkerName(item.worker) }}</td>
          <td class="px-6 py-4">{{ getWorkerSurname(item.worker) }}</td>
          <td class="px-6 py-4">{{ item.workOrderCode }}</td>
          <td class="px-6 py-4">{{ item.loanDate }}</td>
          <td class="px-6 py-4">{{ item.loanStatus }}</td>
          <td class="px-6 py-4">
            <router-link
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    :to="{
                            name: 'EditarAsignacion',
                            params: {
                                id: item.idLoan
                            }
                        }"
                    >
                    Editar
                    </router-link >
                    <button  class="mt-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        @click="deletePpe(item.idPpe)"
                    >Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['loan', 'worker']),
    },
    methods: {
      getWorkerName(workerId) {
        const worker = this.worker.find(w => w.dni == workerId);
        return worker ? worker.name : 'N/A';
      },
      getWorkerSurname(workerId) {
        const worker = this.worker.find(w => w.dni == workerId);
        return worker ? worker.surname : 'N/A';
      },
    },
  };
  </script>
  
  <style>
  </style>
  