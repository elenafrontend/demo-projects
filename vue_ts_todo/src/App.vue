<template>
  <AppHeader />
  <AppFilters />

  <main class="app-main">
    <AppTodoList />
    <AppTodoAdd />
  </main>

  <AppFooter />

</template>

<script lang="ts">
import {defineComponent} from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFilters from "@/components/AppFilters.vue";
import AppTodoList from "@/components/AppTodoList.vue";
import AppTodoAdd from "@/components/AppTodoAdd.vue";
import AppFooter from "@/components/AppFooter.vue";

export default defineComponent({
  components: {
    AppFooter,
    AppTodoAdd,
    AppTodoList,
    AppFilters,
    AppHeader
  }
})
</script>