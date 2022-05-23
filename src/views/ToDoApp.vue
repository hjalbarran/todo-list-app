<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <section class="todoapp" v-if="todoItems">
      <!-- HEADER -->
      <ToDoListHeader />
      <ToDoListBody :todoItems="filteredItems"/>
      <!-- FOOTER hidden: when no todos. Receives count of completed and uncompleted tasks, and also the dynamic filtering/routing-->
      <ToDoListFooter :unCompletedTasks="todoItemUnCompleted.length" :completedTask="todoItemCompleted.length" v-if="todoItems.length > 0" v-on:filterByCompleted="filterByCompletedMethod"/>
    </section> 
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoListHeader from '@/components/ToDoListHeader.vue'
import ToDoListBody from '@/components/ToDoListBody.vue'
import ToDoListFooter from '@/components/ToDoListFooter.vue'

export default {
  name: 'ToDoApp',
  components: {
    ToDoListHeader,
    ToDoListBody,
    ToDoListFooter
  },
  data() {
    return {
      filterByCompleted: null
    }
  },
  methods: {
    filterByCompletedMethod(val) {
      this.filterByCompleted = val
    }
  },
  computed: {
    filteredItems() {
      const totalItems = this.$store.state.todoItems
      if (this.filterByCompleted === null) return totalItems
      else {
        return totalItems.filter(e => e.completed == this.filterByCompleted)
      }
      
    },
    todoItems() {
      return this.$store.state.todoItems
    }, 
    todoItemCompleted() {
      if (this.$store.state.todoItems.length > 0)
      return this.$store.state.todoItems.filter(e => e.completed === true)
      else return 0
    },
    todoItemUnCompleted() {
      if (this.$store.state.todoItems.length > 0)
      return this.$store.state.todoItems.filter(e => e.completed === false)
      else return 0
    }
  },
  created() {
    this.$store.dispatch('fetchToDoItems')
    // .then(() => { })
    // .catch(() => { })
  }
}
</script>
