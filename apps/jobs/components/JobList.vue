<script setup lang="ts">
import type { Job } from "~/types";

defineProps<{
  jobs: Job[];
}>();
</script>

<template>
  <div>
    <div class="flex flex-col gap-y-[49px]">
      <JobListItem
        v-for="job in jobs"
        :key="job.slug"
        :title="job.title"
        :slug="job.slug"
        :description="job.description"
        :tags="job.tags"
        :created_at="job.created_at"
        :company_name="job.company_name"
        :url="job.url"
        :remote="job.remote"
        :location="job.location"
      />
    </div>
  </div>
</template>

<style scoped></style>
