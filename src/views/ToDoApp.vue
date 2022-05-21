<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- TODO Component -->
    <section class="todoapp" v-if="todoItems">
      <ToDoListHeader/>
      <ToDoListBody :todoItems="todoItems"/>
      <ToDoListFooter/>
    </section> 
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoListHeader from '@/components/ToDoListHeader.vue'
import ToDoListBody from '@/components/ToDoListBody.vue'
import ToDoListFooter from '@/components/ToDoListFooter.vue'
import axios from '@/services/axios.js'

export default {
  name: 'ToDoApp',
  components: {
    ToDoListHeader,
    ToDoListBody,
    ToDoListFooter
  },
  data() {
    return {
      todoItems: null,
    }
  },
  created() {
    // axios.get('https://my-json-server.typicode.com/hjalbarran/todo-list-app/todoItems')
    //   .then((response) => {
    //     this.todoItems = response.data
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
    axios.getToDoItems()
      .then((response) => {
        this.todoItems = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>
