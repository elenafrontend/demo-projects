<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  name: "AppTodoItem",

  props: {
    todo: {
      type: Object as PropType<{
        id: number,
        text: string
        done: boolean,
      }>,
      required: true,
    }
  }
})
</script>

<template>
  <li class="todo-item" :class="{'todo-item--done': todo.done}">
    <div class="todo-item__status">
      <i class="bi bi-check2"></i>
    </div>
    <span class="todo-item__text">{{ todo.text }}</span>
    <button class="todo-item__remove-button">
      <i class="bi bi-trash3"></i>
    </button>
  </li>
</template>
