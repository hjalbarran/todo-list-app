import axios from 'axios'

const apiClient = axios.create({
    // baseURL: 'https://my-json-server.typicode.com/hjalbarran/todo-list-app',
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export default {
    getToDoItems() {
        return apiClient.get('/todoItems')
    },
    postToDoItem(todoItem) {
        return apiClient.post('/todoItems', todoItem)
    },
    changeCompleted(todo) {
        return apiClient.put('/todoItems/' + todo.id, todo)
    },
    updateToDo(todo) {
        return apiClient.put('/todoItems/' + todo.id, todo)
    },
    deleteToDoItem(id) {
        return apiClient.delete('/todoItems/' + id)
    }
}

