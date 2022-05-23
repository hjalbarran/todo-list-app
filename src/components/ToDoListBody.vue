/* eslint-disable */
<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all" @click="AllCompleted()">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <!-- completed: {{todoItemsCompleted}}
      <br>
      Uncompleted: {{todoItemsUncompleted}} -->
      <li :class="{'completed':todo.completed}" v-for="(todo, index) in todoItems" :key="index">
        <div class="view">
          <input class="toggle left-custom" type="checkbox" :checked="todo.completed" @click="changeComplete(todo)">
          <label @dblclick="todo.edit = true">{{ todo.name }}</label>
          <button class="destroy" @click="deleteToDoItem(todo.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
      </li>
      <!-- <li v-for="(todo, index) in todoItemsUncompleted" :key="index">
        <div class="view">
          <input class="toggle" type="checkbox">
          <label>{{ todo.name }}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web">
      </li> -->
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ToDoList',
  // props: {
  //   todoItems: {
  //     type: Array,
  //     default: []
  //   }
  // },
  computed: {
    todoItems() {
      return this.$store.state.todoItems
    },
    // todoItemsCompleted() {
    //   return this.todoItems.filter(e => e.completed === true)
    // },
    // todoItemsUncompleted() {
    //   return this.todoItems.filter(e => e.completed === false)
    // }
  },
  methods: {
    AllCompleted() {
      console.log("marcar todos complete")
    },
    changeComplete(todo) {
      todo.completed = !todo.completed
      this.$store.dispatch('updatedCompleted', todo)
    },
    deleteToDoItem(toDoID) {
      this.$store.dispatch('removeItem', toDoID)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-custom {
  left: 0;
} 
</style>
