import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/administrador',
    name: 'Dash',
    component: () => import('../views/master/Dashboard.vue')
  },
  {
    path: '/trabajadores',
    name: 'Trabajadores',
    component: () => import('../views/Trabajadores.vue')
  },
  {
    path: '/equipos',
    name: 'Equipos',
    component: () => import('../views/Equipos.vue')
  },
  {
    path: '/asignaciones',
    name: 'Asignaciones',
    component: () => import('../views/Asignaciones.vue')
  },
  {
    path: '/editTrabajador/:id',
    name: 'EditarTrabajador',
    component: () => import('../views/EditarTrabajador.vue')
  },
  {
    path: '/login',
    name: 'Create',
    component: () => import('../components/Login/Create.vue')
  },
  {
    path: '/crearTrabajador',
    name: 'CreateTrabajador',
    component: () => import('../views/CrearTrabajador.vue')
  },
  {
    path: '/editEquipo/:id',
    name: 'EditarEquipo',
    component: () => import('../views/EditarEquipo.vue')
  },
  {
    path: '/crearEquipo',
    name: 'CreateEquipo',
    component: () => import('../views/CrearEquipo.vue')
  },
  {
    path: '/editAsignacion/:id',
    name: 'EditarAsignacion',
    component: () => import('../views/EditarAsignacion.vue')
  },
  {
    path: '/crearAsignacion',
    name: 'CreateAsignacion',
    component: () => import('../views/CrearAsignacion.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
