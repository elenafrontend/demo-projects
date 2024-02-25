<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IStats } from "@/types";

export default defineComponent({
  name: "AppFooter",

  props: {
    stats: {
      type: Object as PropType<IStats>,
      required: true,
    },
  },
});
</script>

<template>
  <footer class="app-footer">
    {{ stats.active }} more to do, {{ stats.done }} done
  </footer>
</template>
