<script lang="ts">
import {defineComponent} from 'vue'
import AppTodoItem from "@/components/AppTodoItem.vue";

export default defineComponent({
  name: "AppTodoList",

  components: {AppTodoItem},
})

</script>

<template>
  <ul class="todo-list">

    <AppTodoItem :todo="{id: 0, done: true, text: 'Learn the basics of Vue'}" />

    <li class="todo-item">
      <div class="todo-item__status">
        <i class="bi bi-check2"></i>
      </div>
      <span class="todo-item__text">Learn the basics of Typescript</span>
      <button class="todo-item__remove-button">
        <i class="bi bi-trash3"></i>
      </button>
    </li>
    <li class="todo-item">
      <div class="todo-item__status">
        <i class="bi bi-check2"></i>
      </div>
      <span class="todo-item__text">Subscribe to the channel</span>
      <button class="todo-item__remove-button">
        <i class="bi bi-trash3"></i>
      </button>
    </li>
  </ul>
</template>