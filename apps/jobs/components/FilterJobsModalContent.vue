<script setup lang="ts">
import { BaseCheckbox, BaseButton } from "@app/ui-library";

defineProps<{
  remote: boolean;
}>();
defineEmits(["search", "update:remote", "update:visa_sponsorship"]);
</script>

<template>
  <div class="bg-white rounded-[10px] dark:bg-primary-blue">
    <div class="border-b border-solid border-[#E2E6EA] w-full">
      <slot />
    </div>

    <form class="py-6 px-4">
      <div class="flex mb-4">
        <BaseCheckbox
          id="remote_jobs"
          class="mr-40"
          :checked="remote"
          @change="$emit('update:remote', $event.target.checked)"
        />
        <label
          for="remote_jobs"
          class="text-primary-blue font-[700] dark:text-white select-none"
          >Remote</label
        >
      </div>

      <BaseButton
        class="w-full dark:bg-primary-violet-200"
        type="button"
        @click="$emit('search')"
      >
        <div class="text-white font-[700]">Search</div>
      </BaseButton>
    </form>
  </div>
</template>

<style scoped></style>
