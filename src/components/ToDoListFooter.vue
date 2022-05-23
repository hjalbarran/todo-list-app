/* eslint-disable */
<template>
    <footer class="footer">
      <span class="todo-count"><strong>{{ unCompletedTasks || 0}}</strong> item left</span>
      <ul class="filters">
        <li @click="filterByCompleted(null)">
          <a class="selected" href="#/">All</a>
        </li>
        <li @click="filterByCompleted(false)">
          <a href="#/active">Active</a>
        </li>
        <li @click="filterByCompleted(true)">
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button class="clear-completed" v-if="completedTask > 0">Clear completed</button>
    </footer>
</template>

<script>
export default {
  name: 'ToDoListFooter',
  props: {
    unCompletedTasks: Number,
    completedTask: Number
  },
  methods: {
    filterByCompleted(data) {
      this.$emit('filterByCompleted', data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
