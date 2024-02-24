<script lang="ts">
import { defineComponent, PropType } from "vue";
import AppTodoItem from "@/components/AppTodoItem.vue";
import { Todo } from "@/types/todo";

export default defineComponent({
  name: "AppTodoList",

  components: { AppTodoItem },

  props: {
    todos: {
      type: Array as PropType<Todo[]>,
    },
  },

  emits: {
    toggleTodo: (id: number) => Number.isInteger(id),
    deleteTodo: (id: number) => Number.isInteger(id),
  },

  methods: {
    toggleTodo(id: number) {
      this.$emit("toggleTodo", id);
    },

    deleteTodo(id: number) {
      this.$emit("deleteTodo", id);
    },
  },
});
</script>

<template>
  <ul class="todo-list">
    <AppTodoItem
      v-for="todo of todos"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </ul>
</template>
