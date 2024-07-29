<template>
    <table class="ml-5 w-[calc(100%-50px)] text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-white uppercase bg-gray-100 dark:bg-blue-900 dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Codigo
                </th>
                <th scope="col" class="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" class="px-6 py-3">
                    Cantidad
                </th>
                <th scope="col" class="px-6 py-3">
                    Costo Unitario
                </th>
                <th scope="col" class="px-6 py-3">
                    Costo Total
                </th>
                <th scope="col" class="px-6 py-3">
                    Stock
                </th>
                <th scope="col" class="px-6 py-3">
                    Unidad
                </th>
                <th scope="col" class="px-6 py-3">
                    Numero de Guia
                </th>
                <th scope="col" class="px-6 py-3">
                    Imagen
                </th>
                <th scope="col" class="px-6 py-3">
                    Acciones
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in ppe" :key="item.id"
                class="odd:text-white odd:bg-gray-700 even:bg-gray-700 even:dark:bg-white">
                <th scope="row" class="px-6 py-4">
                    {{ item.idPpe }}
                </th>
                <td class="px-6 py-4">{{ item.name }}</td>
                <td class="px-6 py-4">{{ item.quantity }}</td>
                <td class="px-6 py-4">{{ item.unitCost }}</td>
                <td class="px-6 py-4">{{ item.totalCost }}</td>
                <td class="px-6 py-4">{{ item.stock }}</td>
                <td class="px-6 py-4">{{ item.unit }}</td>
                <td class="px-6 py-4">{{ item.guideNumber }}</td>
                <td>
                    <template v-if="item.image">
                    <img :src="item.image.url" :alt="item.name" class="img-thumbnail" style="width: 100px; height: auto;">
                    </template>
                    <span v-else>No hay imagen disponible</span>
                </td>
                <td class="px-8 py-4">
                    <router-link
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    :to="{
                            name: 'EditarEquipo',
                            params: {
                                id: item.idPpe
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
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['ppe'])
    },
    methods: {
        ...mapActions(['deletePpe'])
    }
}
</script>

<style></style>