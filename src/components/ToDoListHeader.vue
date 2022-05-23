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
.new-todo,
.edit {
	position: relative;
	margin: 0;
	width: 100%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	border: 0;
	color: inherit;
	padding: 6px;
	border: 1px solid #999;
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.new-todo {
	padding: 16px 16px 16px 60px;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>
