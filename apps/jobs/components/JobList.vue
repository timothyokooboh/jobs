<script setup lang="ts">
import type { Job } from "~/types";

defineProps<{
  jobs: Job[];
}>();
</script>

<template>
  <div>
    <div v-if="jobs.length === 0" class="text-center">No results found</div>
    <div
      class="md:grid gap-y-[49px] gap-x-[11px] md:grid-cols-2 lg:grid-cols-3"
    >
      <JobListItem
        v-for="job in jobs || []"
        :key="job.id"
        v-bind="job"
        class="hover:translate-y-[-5px] duration-200 w-full mb-[49px] md:mb-0"
      />
    </div>
  </div>
</template>

<style lang="scss">
// css
</style>
