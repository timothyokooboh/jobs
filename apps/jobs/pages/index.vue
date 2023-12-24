<script lang="ts" setup>
import { ref } from "vue";
import { BaseInput, BaseButton } from "@app/ui-library";

const params = ref({
  page: 1,
  searchTerm: "",
  location: "",
  remote: false,
  visa_sponsorship: null,
});
const { filteredJobs: jobs, search } = useGetJobs(params);
const isModalOpen = ref(false);

const handleSearch = () => {
  search();
  isModalOpen.value = false;
};
</script>

<template>
  <div>
    <JobSearch class="mb-10" @start:filter="isModalOpen = true">
      <BaseInput
        placeholder="Filter by title..."
        class="w-full"
        v-model="params.searchTerm"
      />
    </JobSearch>

    <JobList :jobs="jobs" class="mb-[32px]" />

    <div class="flex justify-center pb-[62px]">
      <BaseButton @click="params.page = params.page + 1">
        Load More
      </BaseButton>
    </div>

    <BaseModal v-if="isModalOpen" @close:modal="isModalOpen = false">
      <FilterJobs
        @search="handleSearch"
        v-model:remote="params.remote"
        v-model:visa_sponsorship="params.visa_sponsorship"
      >
        <BaseInput placeholder="Filter by location" v-model="params.location" />
      </FilterJobs>
    </BaseModal>
  </div>
</template>

<style scoped></style>
