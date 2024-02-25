<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TFilter } from "@/types";

export default defineComponent({
  name: "AppFilters",

  props: {
    filterList: {
      type: Array as PropType<TFilter[]>,
      required: true,
    },
    activeFilter: {
      type: String as PropType<TFilter>,
      required: true,
    },
  },

  emits: {
    setFilter: (filter: TFilter) => filter,
  },

  methods: {
    setFilter(filter: TFilter) {
      this.$emit("setFilter", filter);
    },
  },
});
</script>

<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button
        v-for="filter in filterList"
        :key="filter"
        class="button"
        :class="{ 'button--primary': filter === activeFilter }"
        @click="setFilter(filter)"
      >
        {{ filter }}
      </button>
    </section>
  </aside>
</template>
