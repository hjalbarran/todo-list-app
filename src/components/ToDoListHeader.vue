/* eslint-disable */
<template>
    <!-- Componente header -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus @keyup.enter="test()">
    </header>
</template>

<script>
export default {
  name: 'ToDoList',
  // props: {
  //   msg: String
  // }
  methods: {
    test() {
      console.log('123')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
