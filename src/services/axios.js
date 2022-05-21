import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/hjalbarran/todo-list-app',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export default {
    getToDoItems() {
        return apiClient.get('/todoItems')
    }
}

