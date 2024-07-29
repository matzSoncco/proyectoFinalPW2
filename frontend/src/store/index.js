import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    worker: [],
    trabajador: {
      dni: 0,
      position: '',
      contractDate: '',
      name: '',
      surname: '',
      workerStatus: false,
    },
    ppe: [],
    ppeU: {
      idPpe: '',
      name: '',
      quantity: 0,
      unitCost: 0.0,
      totalCost: 0.0,
      guideNumber: 0,
      stock: 0,
      unit: '',
      image: null,
    },
    loan: [],
    loanU: {
      idLoan: '',
      worker: '',
      material: '',
      tool: '',
      equipment: '',
      workOrderCode: 0,
      loanDate: '',
      returnLoadDate: '',
      loanStatus: false,
    },
    equipment: [],
    equipmentU: {
      idEquipment: '',
      name: '',
      quantity: '',
      level: '',
      stock: '',
      guideNumber: '',
    },
    material: [],
    materialU: {
      idMaterial: '',
      name: '',
      quantity: '',
      stock: '',
      guideNumber: '',
      unit: '',
    },
    ppeLoan: [],
    ppeLoanU: {
      idPpeLoan: '',
      worker: '',
      ppe: '',
      loanDate: '',
      newLoanDate: '',
      manager: '',
      description: '',
    },
    tool: [],
    toolU: {
      idTool: '',
      name: '',
      quantity: '',
      level: '',
      stock: '',
      guideNumber: '',
    },
  },
  getters: {
  },
  mutations: {
    cargar(state, payload) {
      state.worker = payload
    },
    cargarPpe(state, payload) {
      state.ppe = payload
    },
    cargarEquipment(state, payload) {
      state.equipment = payload
    },
    cargarLoan(state, payload) {
      state.loan = payload
    },
    cargarMaterial(state, payload) {
      state.material = payload
    },
    cargarPpeLoan(state, payload) {
      state.ppeLoan = payload
    },
    cargarTool(state, payload) {
      state.tool = payload
    },
    //********************************************** */
    set(state, payload) {
      console.log('Entro a set')
      state.worker.push(payload)
      router.push('/trabajadores')
    },
    trabajador(state, payload) {
      if (!state.worker.find(item => item.dni == payload)) {
        router.push('/trabajadores')
        return
      }
      state.trabajador = state.worker.find(item => item.dni == payload)
    },
    update(state, payload) {
      state.worker = state.worker.map(item => item.dni == payload.dni ? payload : item)
      router.push('/trabajadores')
    },
    eliminar(state, payload) {
      state.worker = state.worker.filter(item => item.dni != payload)
    },
    //********************************************** */
    setPpeU(state, payload) {
      state.ppe.push(payload)
      router.push('/equipos')
    },
    ppeU(state, payload) {
      if (!state.ppe.find(item => item.idPpe === payload)) {
        router.push('/equipos')
        return
      }
      state.ppeU = state.ppe.find(item => item.idPpe === payload)
    },
    updatePpeU(state, payload) {
      state.ppe = state.ppe.map(item => item.idPpe === payload.idPpe ? payload : item)
      router.push('/equipos')
    },
    eliminarPpe(state, payload) {
      state.ppe = state.ppe.filter(item => item.idPpe !== payload)
    },
    //********************************************** */
    setLoanU(state, payload) {
      state.loan.push(payload)
      router.push('/asignaciones')
    },
    loanU(state, payload) {
      if (!state.loan.find(item => item.idLoan == payload)) {
        router.push('/asignaciones')
        return
      }
      state.loanU = state.loan.find(item => item.idLoan == payload)
    },
    updateLoanU(state, payload) {
      state.loan = state.loan.map(item => item.idLoan == payload.idLoan ? payload : item)
      router.push('/asignaciones')
    },
    eliminarLoan(state, payload) {
      state.loan = state.loan.filter(item => item.idLoan != payload)
    },
  },
  actions: {
    async cargarLocalStorage({ commit }) {
      try {
        const res = await fetch ('http://127.0.0.1:8000/api/worker/')
        const resPpe = await fetch ('http://127.0.0.1:8000/api/ppe/')
        const resEquipment = await fetch ('http://127.0.0.1:8000/api/equipment/')
        const resLoan = await fetch ('http://127.0.0.1:8000/api/loan/')
        const resMaterial = await fetch ('http://127.0.0.1:8000/api/material/')
        const resPpeLoan = await fetch ('http://127.0.0.1:8000/api/ppeloan/')
        const resTool = await fetch ('http://127.0.0.1:8000/api/tool/')
        
        const dataDB = await res.json()
        const dataBDPpe = await resPpe.json()
        const dataDBEquipment = await resEquipment.json()
        const dataBDLoan = await resLoan.json()
        const dataDBMaterial = await resMaterial.json()
        const dataBDPpeLoan = await resPpeLoan.json()
        const dataDBTool = await resTool.json()

        const arrayTrabajadores = []
        const arrayPpe = []
        const arrayEquipment = []
        const arrayLoan = []
        const arrayMaterial = []
        const arrayPpeLoan = []
        const arrayTool = []

        for(let id in dataDB){
          arrayTrabajadores.push(dataDB[id])
        }
        for(let id in dataBDPpe){
          arrayPpe.push(dataBDPpe[id])
        }
        for(let id in dataDBEquipment){
          arrayEquipment.push(dataDBEquipment[id])
        }
        for(let id in dataBDLoan){
          arrayLoan.push(dataBDLoan[id])
        }
        for(let id in dataDBMaterial){
          arrayMaterial.push(dataDBMaterial[id])
        }
        for(let id in dataBDPpeLoan){
          arrayPpeLoan.push(dataBDPpeLoan[id])
        }
        for(let id in dataDBTool){
          arrayTool.push(dataDBTool[id])
        }

        console.log("entro")
        console.log(arrayTrabajadores)
        console.log(arrayPpe)
        console.log(arrayEquipment)
        console.log(arrayLoan)
        console.log(arrayMaterial)
        console.log(arrayPpeLoan)
        console.log(arrayTool)

        commit('cargar', arrayTrabajadores)
        commit('cargarPpe', arrayPpe)
        commit('cargarEquipment', arrayEquipment)
        commit('cargarLoan', arrayLoan)
        commit('cargarMaterial', arrayMaterial)
        commit('cargarPpeLoan', arrayPpeLoan)
        commit('cargarTool', arrayTool)

      } catch (error) {
        console.log(error)
      }
    
    },
    //********************************************** */
    async setTrabajadores({ commit }, trabajador) {
      console.log('Entro a setWorker')
      try {
        console.log('Entro a setWorker')
        const res = await fetch(`http://127.0.0.1:8000/api/worker/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(trabajador)
        })
    
        if (!res.ok) {
          throw new Error(`Error creando trabajador: ${res.statusText}`);
        }
    
        const dataDB = await res.json();
        console.log('Entro a setWorker')
        console.log(dataDB)
        commit('set', dataDB)
      } catch (error) {
        console.log(error)
      }
    },    
    setWorker({ commit }, id) {
      console.log("SetWorker")
      commit('trabajador', id)
    },
    async updateTrabajador({ commit }, trabajador) {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/worker/${trabajador.dni}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(trabajador)
        })
    
        if (!res.ok) {
          throw new Error(`Error updating trabajador: ${res.statusText}`);
        }
    
        const dataDB = await res.json();
        commit('update', dataDB);
      } catch (error) {
        console.error(error);
      }
    },
    async deletePeliculas({ commit }, id) {
      try {
        const res = await fetch (`http://127.0.0.1:8000/api/worker/${id}/`,{
          method: 'DELETE',
        })
        commit('eliminar', id)
      } catch (error) {
        console.log(error)
      }
      
    },
    //********************************************** */
    async setEquipos({ commit }, ppeU) {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/ppe/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ppeU)
        })
    
        if (!res.ok) {
          throw new Error(`Error creando equipod: ${res.statusText}`);
        }
    
        const dataDB = await res.json();
        console.log(dataDB)
        commit('setPpeU', dataDB)
      } catch (error) {
        console.log(error)
      }
    },    
    setPpe({ commit }, id) {
      commit('ppeU', id)
    },
    async updatePpe({ commit }, ppeU) {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/ppe/${ppeU.idPpe}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ppeU)
        })
    
        if (!res.ok) {
          throw new Error(`Error updating trabajador: ${res.statusText}`);
        }
    
        const dataDB = await res.json();
        commit('updatePpeU', dataDB);
      } catch (error) {
        console.error(error);
      }
    },
    async deletePpe({ commit }, id) {
      try {
        const res = await fetch (`http://127.0.0.1:8000/api/ppe/${id}/`,{
          method: 'DELETE',
        })
        commit('eliminarPpe', id)
      } catch (error) {
        console.log(error)
      }
      
    },
    //********************************************** */
    async setAsignacion({ commit }, loanU) {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/loan/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loanU)
        })
    
        if (!res.ok) {
          throw new Error(`Error creando equipod: ${res.statusText}`);
        }
    
        const dataDB = await res.json();
        console.log(dataDB)
        commit('setLoanU', dataDB)
      } catch (error) {
        console.log(error)
      }
    },    
    setLoan({ commit }, id) {
      commit('loanU', id)
    },
    async updateLoan({ commit }, ppeU) {
        console.log('Entro update')
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/loan/${ppeU.idLoan}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ppeU)
        })
    
        if (!res.ok) {
          throw new Error(`Error updating trabajador: ${res.statusText}`);
        }
    
        const dataDB = await res.json();
        commit('updateLoanU', dataDB);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteLoan({ commit }, id) {
      try {
        const res = await fetch (`http://127.0.0.1:8000/api/loan/${id}/`,{
          method: 'DELETE',
        })
        commit('eliminarLoan', id)
      } catch (error) {
        console.log(error)
      }
      
    },
  },
  modules: {
  }
})
