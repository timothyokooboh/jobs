<script setup lang="ts">
import { BaseCheckbox, BaseButton } from "@app/ui-library";
import { categories } from "~/constants";
const props = defineProps<{
  selectedCategories: string[];
}>();

const emit = defineEmits([
  "update:selectedCategories",
  "close:dropdown",
  "search:jobs",
]);

const handleChange = (e: Event, value: string) => {
  const isChecked = (e.target as HTMLInputElement).checked;

  let categories = [...props.selectedCategories];
  if (isChecked) {
    emit("update:selectedCategories", [...categories, value]);
  } else {
    categories = categories.filter((category) => category !== value);
    emit("update:selectedCategories", categories);
  }
};
</script>

<template>
  <div class="relative">
    <div
      class="absolute top-0 left-0 z-20 bg-white shadow-lg py-4 px-6 w-[100%] max-w-[350px] dark:bg-primary-blue"
    >
      <button class="absolute top-0 right-3" @click="$emit('close:dropdown')">
        <Icon
          name="material-symbols:close-small-rounded"
          size="32px"
          class="hover:text-secondary-grey-300 duration-200 dark:text-white"
        />
      </button>

      <div class="mt-3">
        <div
          v-for="category in categories"
          :key="category"
          class="flex items-center mb-3"
        >
          <BaseCheckbox
            :id="category"
            :check-value="category"
            :checked="selectedCategories.includes(category)"
            @change="handleChange($event, category)"
          />
          <label :for="category" class="mt-3 dark:text-white">{{
            category
          }}</label>
        </div>
        <BaseButton
          class="py-2 w-full mt-3 dark:bg-primary-violet-200"
          @click="$emit('search:jobs')"
        >
          Search
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
