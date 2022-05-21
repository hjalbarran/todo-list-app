import axios from '@/services/axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    loadingStatus: 'notLoading',
    todoItems: []
  },
  getters: {
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status
    },
    SET_TODOS(state, todoItems) {
      state.todoItems = todoItems
    }
  },
  actions: {
    fetchToDoItems(context) {
      axios.get('/todoItems')
        .then((response) => {
          commit('SET_TODOS', response.data)
        })
    }
  },
  modules: {
  }
})
