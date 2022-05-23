/* eslint-disable */
<template>
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" v-model="newToDo.name" autofocus @keyup.enter="submit()">
    </header>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'ToDoListHeader',
  props: {
    totalCount: Number
  },
  data() {
    return {
      newToDo: {
        id: null,
        name: null,
        completed: false,
        edit: false
      },
    }
  },
  methods: {
    submit() {
      const todoItem = {
        ...this.newToDo,
        
      }
      todoItem.id = uuidv4()
      this.$store.dispatch('addNewItem', todoItem)
      .then(() => {
        this.newToDo = {
          name: null,
          completed: false,
          edit: false
        }
      })
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
