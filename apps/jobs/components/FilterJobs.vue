<script setup lang="ts">
import { BaseButton, BaseCheckbox, BaseInput } from "@app/ui-library";
import { watchDebounced } from "@vueuse/core";

import { categories } from "~/constants";
import type { QueryParams } from "~/types";

const emit = defineEmits(["list:jobs", "is:loading"]);

const page = ref(1);
const title = ref("");
const remote = ref(false);
const isModalOpen = ref(false);
const selectedCategories = ref([...categories]);
const showCategoryList = ref(false);

const filters = ref<QueryParams>({
  page: page.value,
  category: [...selectedCategories.value],
  title: title.value,
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

watchDebounced(
  title,
  () => {
    handleSearch();
  },
  {
    debounce: 1000,
  },
);

const handleSearch = () => {
  isModalOpen.value = false;
  let obj = { ...filters.value, title: title.value };

  if (remote.value) {
    obj = { ...obj, page: 1, location: "flexible/remote" };
  } else {
    delete obj.location;
  }

  if (selectedCategories.value.length > 0) {
    obj = { ...obj, page: 1, category: [...selectedCategories.value] };
  } else {
    // use the default tech jobs categories
    obj = { ...obj, page: 1, category: categories };
  }

  filters.value = obj;
  showCategoryList.value = false;
};

defineExpose({
  filters,
});
</script>

<template>
  <div class="bg-white dark:bg-primary-blue">
    <SearchByTitle
      class="md:hidden"
      @start:filter="isModalOpen = true"
      @search="handleSearch"
    >
      <BaseInput
        v-model="title"
        placeholder="Filter by title..."
        class="w-full"
        @keypress.enter="handleSearch"
      />
    </SearchByTitle>

    <div class="hidden md:grid md:grid-cols-[1.5fr_1.5fr_2fr] md:items-center">
      <SearchByTitle
        class="border-r-[1px] border-[#E2E6EA] dark:border-[#2A3342] w-full"
      >
        <BaseInput
          v-model="title"
          placeholder="Filter by title..."
          class="w-full"
          @keypress.enter="handleSearch"
        />
      </SearchByTitle>

      <div>
        <SearchByCategory
          class="border-r-[1px] border-[#E2E6EA] dark:border-[#2A3342] w-full"
        >
          <BaseInput
            placeholder="Filter by Category..."
            @focus="showCategoryList = true"
          />
        </SearchByCategory>

        <CategoryList
          v-if="showCategoryList"
          v-model:selectedCategories="selectedCategories"
          class="hidden md:block"
          @close:dropdown="showCategoryList = false"
          @search:jobs="handleSearch"
        />
      </div>

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
          class="ml-2 px-[14px] lg:px-[36px] dark:bg-primary-violet-200"
          @click="handleSearch"
        >
          Search
        </BaseButton>
      </div>
    </div>

    <BaseModal v-if="isModalOpen" @close:modal="isModalOpen = false">
      <FilterJobsModalContent
        v-model:remote="remote"
        class="w-[90%] max-w-[500px]"
        @search="handleSearch"
      >
        <div>
          <SearchByCategory
            class="border-r-[1px] border-[#E2E6EA] dark:border-[#2A3342] w-full"
          >
            <BaseInput
              placeholder="Filter by Category..."
              @focus="showCategoryList = true"
            />
          </SearchByCategory>

          <CategoryList
            v-if="showCategoryList"
            v-model:selectedCategories="selectedCategories"
            class="md:hidden"
            @close:dropdown="showCategoryList = false"
            @search:jobs="handleSearch"
          />
        </div>
      </FilterJobsModalContent>
    </BaseModal>
  </div>
</template>
