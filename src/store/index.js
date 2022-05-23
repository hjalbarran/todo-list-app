import axios from '@/services/axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    todoItems: []
  },
  getters: {
  },
  mutations: {
    SET_TODOS(state, todoItems) {
      state.todoItems = todoItems
    },
    ADD_TODO(state, todo) {
      state.todoItems.push(todo)
    },
    UPDATE_TODO(state, todoItem) {
      const arrayIndex = state.todoItems.findIndex((p) => p.id === todoItem.id)
      Object.assign(state.todoItems[arrayIndex], todoItem)
    },
    REMOVE_TODO(state, toDoID) {
      const ItemIndex = state.todoItems.findIndex((p) => p.id === toDoID)
      state.todoItems.splice(ItemIndex, 1)
    }, 
  },
  actions: {
    fetchToDoItems({ commit }) {
      axios.getToDoItems()
      .then((response) => {
        commit('SET_TODOS', response.data)
      })
      .catch((error) => {
        console.error(error)
      })
    },
    addNewItem({ commit }, todoItem) {
      axios.postToDoItem(todoItem)
      .then(() => {
        commit('ADD_TODO', todoItem)
      })
      .catch((error) => {
        console.error(error)
      })
    },
    updatedCompleted({ commit }, todoItem) {
      axios.changeCompleted(todoItem)
      .then(() => {
        commit('UPDATE_TODO', todoItem)
      })
      .catch((error) => {
        console.error(error)
      })
    },
    updatedToDo({ commit }, todoItem) {
      axios.updateToDo(todoItem)
      .then(() => {
        commit('UPDATE_TODO', todoItem)
      })
      .catch((error) => {
        console.error(error)
      })
    },
    removeItem({ commit }, toDoID) {
      axios.deleteToDoItem(toDoID) 
      .then(() => {
        commit('REMOVE_TODO', toDoID)
      })
      .catch((error) => {
        console.error(error)
      })
    }
    
  },
  modules: {
  }
})
