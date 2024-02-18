<script lang="ts">
import {defineComponent} from 'vue'
import AppTodoItem from "@/components/AppTodoItem.vue";
import {Todo} from "@/types/todo";

interface State {
  todos: Todo[]
}
export default defineComponent({
  name: "AppTodoList",

  components: {AppTodoItem},

  data(): State {
    return {
      todos: [
        {id: 0, done: true, text: 'Learn the basics of Vue'},
        {id: 1, done: false, text: 'Learn the basics of Typescript'},
        {id: 2, done: false, text: 'Subscribe to the channel'},
      ]
    }
  }
})
</script>

<template>
  <ul class="todo-list">
    <AppTodoItem v-for="item of todos" :key="item.id" :todo="item" />
  </ul>
</template>