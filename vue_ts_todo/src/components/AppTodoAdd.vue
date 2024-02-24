<script lang="ts">
import { defineComponent } from "vue";
import { ITodo } from "@/types";

interface State {
  isFormVisible: boolean;
  todoText: string;
}
export default defineComponent({
  name: "AppTodoAdd",

  data(): State {
    return {
      isFormVisible: false,
      todoText: "",
    };
  },

  methods: {
    showForm() {
      this.isFormVisible = true;
    },

    closeForm() {
      this.isFormVisible = false;
    },

    addTodo() {
      this.$emit("addTodo", {
        id: Date.now(),
        text: this.todoText,
        done: false,
      });
      this.todoText = "";
    },
  },

  emits: {
    addTodo: (todo: ITodo) => todo,
  },
});
</script>

<template>
  <section class="add-todo">
    <form v-if="isFormVisible" @submit.prevent="addTodo" class="add-todo__form">
      <button class="close-button" type="button" @click="closeForm">
        <i class="bi bi-x"></i>
      </button>
      <div class="text-input text-input--focus">
        <input v-model="todoText" class="input" />
      </div>
      <button class="button button--filled">Add task</button>
    </form>
    <button v-else @click="showForm" class="add-todo__show-form-button">
      <i class="bi bi-plus-lg"></i>
    </button>
  </section>
</template>

<style scoped></style>
