<script lang="ts" setup>
import { BaseButton } from "@app/ui-library";
import FilterJobs from "~/components/FilterJobs.vue";
import type { Job } from "~/types";

const jobs = ref<Job[]>([]);
const loading = ref(false);
const filterJobsRef = ref(null);

const handlePagination = () => {
  if (filterJobsRef.value) {
    filterJobsRef.value.filters.page = filterJobsRef.value.filters.page + 1;
  }
};
</script>

<template>
  <div>
    <FilterJobs
      ref="filterJobsRef"
      @list:jobs="jobs = $event"
      @is:loading="loading = $event"
      class="mb-10 relative top-[-35px]"
    />

    <AppTransition from="bottom">
      <div v-if="loading" class="flex justify-between flex-wrap gap-5">
        <BaseSkeletonLoader v-for="n in 20" />
      </div>

      <div v-else>
        <JobList :jobs="jobs" class="mb-[32px]" />

        <div class="flex justify-center pb-[62px]">
          <BaseButton @click="handlePagination"> Load More </BaseButton>
        </div>
      </div>
    </AppTransition>
  </div>
</template>
