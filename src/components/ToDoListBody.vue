/* eslint-disable */
<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <div>
    <p>{{}}</p>
  </div>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all" @click="AllCompleted()">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{'completed':todo.completed, 'editing': todo.edit === true}" v-for="(todo, index) in todoItems" :key="index">
        <div class="view" v-show="todo.edit == false">
          <input class="toggle left-custom" type="checkbox" :checked="todo.completed" @click="changeComplete(todo)">
          <label @dblclick="todo.edit = true, editMode = true">{{ todo.name }}</label>
          <button class="destroy" @click="deleteToDoItem(todo.id)"></button>
        </div>
          <input class="edit" placeholder="edit name" v-model="newName" @keyup.enter="updateItem(todo), todo.edit = false">
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ToDoList',
  data() {
    return {
      newName: null,
    }
  },
  props: {
    todoItems: {
      type: Array,
      default: []
    }
  },
  computed: {
    // todoItems() {
    //   return this.$store.state.todoItems
    // },
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
    }, 
    updateItem(todo) {
      if (this.newName && this.newName !== ' ') {
        todo.name = this.newName
        todo.edit = false
        this.$store.dispatch('updatedToDo', todo)
        .then(() => {
          this.clearValues()
        })
      } else {
        this.clearValues()
      }
    },
    clearValues() {
      this.newName = null
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
