/* eslint-disable */
<template>
    <!-- Componente header -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" v-model="newItem.name" autofocus @keyup.enter="test(newItem)">
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
      newItem: {
        name: null,
        completed: false
      }
    }
  },
  methods: {
    test(newItem) {
      console.log(newItem)
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
