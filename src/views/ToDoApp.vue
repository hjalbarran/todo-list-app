<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <section class="todoapp" v-if="todoItems">
      <!-- HEADER -->
      <ToDoListHeader />
      <!-- BODY -->
      <ToDoListBody :todoItems="filteredItems"/>
      <!-- FOOTER hidden: when no todos. Receives count of completed and uncompleted tasks, and also the dynamic filtering/routing-->
      <ToDoListFooter :unCompletedTasks="todoItemUnCompleted.length" :completedTask="todoItemCompleted.length" v-if="todoItems.length > 0" v-on:filterByCompleted="filterByCompletedMethod"/>
    </section> 
    <footer class="info">
			<p>Done by <a href="https://github.com/hjalbarran" target="_blank">Humberto Albarrán</a> @Madrid, Spain</p>
		</footer>

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
    // Useful if I want to show some notificaton to the user...
    // .then(() => { })
    // .catch(() => { })
  }
}
</script>

<style scoped>
.info {
	margin: 65px auto 0;
	color: #bfbfbf;
	font-size: 10px;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
	text-align: center;
}

.info p {
	line-height: 1;
}

.info a {
	color: inherit;
	text-decoration: none;
	font-weight: 400;
}

.info a:hover {
	text-decoration: underline;
}
</style>
