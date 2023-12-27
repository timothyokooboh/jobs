<script setup lang="ts">
import { BaseButton, BaseCheckbox, BaseInput } from "@app/ui-library";

const emit = defineEmits(["list:jobs", "is:loading"]);

const page = ref(1);
const remote = ref(false);

const filters = ref<{ page: number; location?: string }>({
  page: page.value,
});
const { filteredJobs: jobs, loading } = useGetJobs(filters);
watch(
  jobs,
  (newValue) => {
    emit("list:jobs", newValue);
  },
  { immediate: true },
);

watch(
  loading,
  (newValue) => {
    emit("is:loading", newValue);
  },
  { immediate: true },
);

const isModalOpen = ref(false);

const handleSearch = () => {
  isModalOpen.value = false;
  if (remote.value) {
    filters.value = { ...filters.value, location: "flexible/remote" };
  } else {
    filters.value = {
      page: filters.value.page,
    };
  }
};

defineExpose({
  filters,
});
</script>

<template>
  <div class="bg-white dark:bg-primary-blue">
    <SearchByTitle class="md:hidden" @start:filter="isModalOpen = true">
      <BaseInput placeholder="Filter by title..." class="w-full" />
    </SearchByTitle>

    <div class="hidden md:grid md:grid-cols-3">
      <SearchByTitle
        class="border-r-[1px] border-[#E2E6EA] dark:border-[#2A3342] w-full"
      >
        <BaseInput placeholder="Filter by title..." class="w-full" />
      </SearchByTitle>

      <SearchByLocation
        class="border-r-[1px] border-[#E2E6EA] dark:border-[#2A3342] w-full"
      >
        <BaseInput
          v-model="filters.location"
          placeholder="Filter by location..."
        />
      </SearchByLocation>

      <div class="flex justify-between items-center px-4 py-4">
        <div class="flex-1">
          <div>
            <BaseCheckbox id="remote" v-model="remote" :checked="remote" />
            <label
              for="remote"
              class="text-primary-blue font-[700] ml-8 dark:text-white"
            >
              Remote</label
            >
          </div>
        </div>
        <BaseButton
          @click="handleSearch"
          class="ml-2 px-[14px] lg:px-[36px] dark:bg-primary-violet-200"
        >
          Search
        </BaseButton>
      </div>
    </div>

    <BaseModal v-if="isModalOpen" @close:modal="isModalOpen = false">
      <FilterJobsModalContent
        @search="handleSearch"
        v-model:remote="remote"
        class="w-[90%] max-w-[500px]"
      >
        <BaseInput
          placeholder="Filter by location..."
          v-model="filters.location"
        />
      </FilterJobsModalContent>
    </BaseModal>
  </div>
</template>
