<script lang="ts" setup>
import { BaseButton } from "@app/ui-library";
import FilterJobs from "~/components/FilterJobs.vue";
import type { Job } from "~/types";

const jobs = ref<Job[]>([]);
const loading = ref(false);
const filterJobsRef = ref<{ filters: { page: number } } | null>(null);

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
      class="mb-10 relative top-[-35px]"
      @list:jobs="jobs = $event"
      @is:loading="loading = $event"
    />

    <Transition name="fade" mode="out-in" appear>
      <div
        v-if="loading"
        key="loading"
        class="flex justify-between flex-wrap gap-5"
      >
        <BaseSkeletonLoader
          v-for="n in 20"
          :key="n"
          class="max-w-[100%] md:max-w-[350px]"
        />
      </div>

      <div v-else key="data">
        <Transition name="fade" mode="out-in">
          <div v-if="jobs.length === 0" class="text-center">
            No results found
          </div>

          <div v-else>
            <JobList :jobs="jobs" class="mb-[32px]" />

            <div class="flex justify-center pb-[62px]">
              <BaseButton
                class="dark:bg-primary-violet-200"
                @click="handlePagination"
              >
                Load More
              </BaseButton>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(30px);
}
</style>
