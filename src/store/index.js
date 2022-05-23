import axios from '@/services/axios'
import { createStore, storeKey } from 'vuex'

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
    CHECK_ALL_TODOS(state, boolean) {
      state.todoItems.map(todo => todo.completed = boolean)
    }, 
    REMOVE_ALL_COMPLETED(state) {
      // 1. I dont know if it refers to cleaR -> delete 
      state.todoItems = state.todoItems.filter(element => {
        return !(state.todoItems.filter(e => e.completed === true)).includes(element)
      })
      // 2. Or is just filtering.
      // return state.todoItems = state.todoItems.filter(element => !element.completed)

    }
  },
  actions: {
    fetchToDoItems({ commit }) {
      // Creating a Promise object in order to handle data in a notification to the user, sending some data to front.
      return new Promise((resolve, reject) => {
        axios.getToDoItems()
          .then((response) => {
            commit('SET_TODOS', response.data)
            resolve(response)
          })
          .catch((error) => {
            console.error(error)
            reject(error)
          })
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
    },
    editbulkCompleted({ commit }, boolean) {
      // Call to DB json-server to do the task
      // if true -> commit
      commit('CHECK_ALL_TODOS', boolean)
    }, 
    clearAllCompleted({ commit }) {
      // Call to DB json-server to do the task
      // if true -> commit
      commit('REMOVE_ALL_COMPLETED')
    }
    
  },
  modules: {
  }
})
