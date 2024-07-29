<template>
    <div class=" flex flex-col justify-between space-y-[10px]">
        <router-link to="/"
            class="inline-flex relative items-center py-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:text-black hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-gray-800">
            <svg class="ml-2 mr-2 w-[30px] h-[30px] fill-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                    clip-rule="evenodd" />
            </svg>
            Home
        </router-link>
        <router-link to="/administrador"
            class="inline-flex relative items-center py-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:text-black hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ml-2 mr-2 w-[30px] h-[30px] fill-current" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
            </svg>
            Crear Cuenta
        </router-link>

    </div>
    <div class="h-[50px]">
        <div>
            <router-link to="/administrador"
                class="inline-flex relative items-center py-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:text-black hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-200 dark:hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ml-3 mr-3 w-[25px] h-[25px] fill-current" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                </svg>
                Iniciar Sesion
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>