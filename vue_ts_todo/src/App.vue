<template>
  <AppHeader />
  <AppFilters
    :filterList="filterList"
    :active-filter="activeFilter"
    @set-filter="setActiveFilter"
  />

  <main class="app-main">
    <AppTodoList
      :todos="filteredTodos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
    <AppTodoAdd @add-todo="addTodo" />
  </main>

  <AppFooter :stats="stats" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFilters from "@/components/AppFilters.vue";
import AppTodoList from "@/components/AppTodoList.vue";
import AppTodoAdd from "@/components/AppTodoAdd.vue";
import AppFooter from "@/components/AppFooter.vue";
import { IStats, ITodo, TFilter } from "@/types";

interface State {
  todos: ITodo[];
  filterList: TFilter[];
  activeFilter: TFilter;
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
      filterList: ["All", "Active", "Done"],
      activeFilter: "All",
    };
  },

  computed: {
    filteredTodos(): ITodo[] {
      switch (this.activeFilter) {
        case "Active":
          return this.activeTodos;
        case "Done":
          return this.doneTodos;
        case "All":
        default:
          return this.todos;
      }
    },

    doneTodos(): ITodo[] {
      return this.todos.filter((todo) => todo.done);
    },

    activeTodos(): ITodo[] {
      return this.todos.filter((todo) => !todo.done);
    },

    stats(): IStats {
      return {
        active: this.activeTodos.length,
        done: this.doneTodos.length,
      };
    },
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

    setActiveFilter(filter: TFilter) {
      this.activeFilter = filter;
    },
  },
});
</script>
