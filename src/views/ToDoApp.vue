<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- TODO Component -->
    <section class="todoapp">
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

export default {
  name: 'ToDoApp',
  components: {
    ToDoListHeader,
    ToDoListBody,
    ToDoListFooter
  },
  data() {
    return {
      // todoItems: [
      //   {
      //     name: 'Primero',
      //     completed: true,
      //   },
      //   {
      //     name: 'Segundo',
      //     completed: false,
      //   },
      // ]
    }
  }
}
</script>
