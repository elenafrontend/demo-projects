<template>
  <AppHeader />
  <AppFilters />

  <main class="app-main">
    <AppTodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
    <AppTodoAdd @add-todo="addTodo" />
  </main>

  <AppFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFilters from "@/components/AppFilters.vue";
import AppTodoList from "@/components/AppTodoList.vue";
import AppTodoAdd from "@/components/AppTodoAdd.vue";
import AppFooter from "@/components/AppFooter.vue";
import { ITodo } from "@/types";

interface State {
  todos: ITodo[];
}

export default defineComponent({
  components: {
    AppFooter,
    AppTodoAdd,
    AppTodoList,
    AppFilters,
    AppHeader,
  },

  data(): State {
    return {
      todos: [
        { id: 0, done: true, text: "Learn the basics of Vue" },
        { id: 1, done: false, text: "Learn the basics of Typescript" },
        { id: 2, done: false, text: "Subscribe to the channel" },
      ],
    };
  },

  methods: {
    addTodo(todo: ITodo) {
      this.todos.push(todo);
    },

    toggleTodo(id: number) {
      const activeTodo = this.todos.find((todo: ITodo) => todo.id === id);
      if (activeTodo) {
        activeTodo.done = !activeTodo.done;
      }
    },

    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo: ITodo) => todo.id !== id);
    },
  },
});
</script>
