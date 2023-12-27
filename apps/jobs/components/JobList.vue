<script setup lang="ts">
import type { Job } from "~/types";

defineProps<{
  jobs: Job[];
}>();
</script>

<template>
  <div>
    <div class="grid gap-y-[49px] gap-x-[11px] md:grid-cols-2 lg:grid-cols-3">
      <JobListItem
        v-for="job in jobs"
        :key="job.id"
        v-bind="job"
        class="hover:translate-y-[-5px] duration-200"
      />
    </div>
  </div>
</template>

<style scoped></style>
