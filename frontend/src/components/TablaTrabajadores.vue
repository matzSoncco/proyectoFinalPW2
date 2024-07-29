<template>
    <table class="ml-5 w-[calc(100%-50px)] text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-white uppercase bg-gray-100 dark:bg-blue-900 dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    DNI
                </th>
                <th scope="col" class="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" class="px-6 py-3">
                    Apellido
                </th>
                <th scope="col" class="px-6 py-3">
                    Cargo
                </th>
                <th scope="col" class="px-6 py-3">
                    Fecha de Contrato
                </th>
                <th scope="col" class="px-6 py-3">
                    Estado
                </th>
                <th scope="col" class="px-6 py-3">
                    Acciones
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in worker" :key="item.id" class="odd:text-white odd:bg-gray-700 even:bg-gray-700 even:dark:bg-white">
                <th scope="row" class="px-6 py-4">
                    {{ item.dni }}
                </th>
                <td class="px-6 py-4">{{ item.name }}</td>
                <td class="px-6 py-4">{{ item.surname }}</td>
                <td class="px-6 py-4">{{ item.position }}</td>
                <td class="px-6 py-4">{{ item.contractDate }}</td>
                <td class="px-6 py-4">{{ item.workerStatus ? 'Activo' : 'Inactivo' }}</td>
                <td class="px-6 py-4">
                    <router-link
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    :to="{
                            name: 'EditarTrabajador',
                            params: {
                                id: item.dni
                            }
                        }"
                    >
                    Editar
                    </router-link >
                    <button  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        @click="deletePeliculas(item.dni)"
                    >Eliminar</button>
                </td>
            </tr>
            
        </tbody>
    </table>

</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState(['worker'])
    },
    methods: {
        ...mapActions(['deletePeliculas'])
    }
}
</script>

<style>

</style>