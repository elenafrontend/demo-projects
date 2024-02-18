<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "AppFilters"
})
</script>

<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button class="button button--primary">All</button>
      <button class="button">Active</button>
      <button class="button">Done</button>
    </section>
  </aside>
</template>

