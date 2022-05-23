/* eslint-disable */
<template>
    <!-- Componente header -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" v-model="newToDo.name" autofocus @keyup.enter="submit()">
    </header>
</template>

<script>
export default {
  name: 'ToDoList',
  // props: {
  //   msg: String
  // }
  data() {
    return {
      newToDo: {
        name: null,
        completed: false,
        edit: false
      }
    }
  },
  methods: {
    submit() {
      const todoItem = {
        ...this.newToDo
      }
      this.$store.dispatch('addNewItem', todoItem)
      .then(() => {
        this.newToDo = {
          name: null,
          completed: false
        }
      })
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
