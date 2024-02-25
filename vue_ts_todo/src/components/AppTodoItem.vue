<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITodo } from "@/types";

export default defineComponent({
  name: "AppTodoItem",

  props: {
    todo: {
      type: Object as PropType<ITodo>,
      required: true,
    },
  },

  methods: {
    toggleTodo() {
      this.$emit("toggleTodo", this.todo.id);
    },

    deleteTodo() {
      this.$emit("deleteTodo", this.todo.id);
    },
  },

  emits: {
    toggleTodo: (id: number) => Number.isInteger(id),
    deleteTodo: (id: number) => Number.isInteger(id),
  },
});
</script>

<template>
  <li
    class="todo-item"
    :class="{ 'todo-item--done': todo.done }"
    @click="toggleTodo"
  >
    <div class="todo-item__status">
      <i class="bi bi-check2"></i>
    </div>
    <span class="todo-item__text">{{ todo.text }}</span>
    <button class="todo-item__remove-button" @click.stop="deleteTodo">
      <i class="bi bi-trash3"></i>
    </button>
  </li>
</template>
