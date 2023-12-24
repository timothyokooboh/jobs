<script setup lang="ts">
import type { Job } from "~/types";

defineProps<Job>();

const bgColors = [
  "#939BF4",
  "#5964E0",
  "#121721",
  "#6E8098",
  "#E99210",
  "rgb(239 68 68)",
];
const randomColor = bgColors[Math.floor(Math.random() * (5 - 0 + 1) + 0)];
</script>

<template>
  <div
    class="relative bg-white px-[32px] pb-[36px] pt-[49px] rounded-[5px] dark:bg-primary-blue"
  >
    <!-- LOGO -->
    <div
      class="w-[50px] h-[50px] rounded-[15px] flex justify-center items-center absolute left-[32px] top-[-25px]"
      :style="{
        backgroundColor: randomColor,
      }"
    >
      <div class="uppercase font-[700] text-[10px] text-white">
        {{ company_name.slice(0, 4) }}
      </div>
    </div>

    <div class="text-secondary-grey-300 flex items-center gap-x-[14px] mb-4">
      <span>5h ago</span>
      <span class="w-[4px] h-[4px] bg-secondary-grey-300 rounded-full"></span>
      <span>{{ remote ? "Remote" : "On Site" }}</span>
    </div>

    <!-- TITLE -->
    <div
      class="text-primary-blue text-[20px] font-[700] mb-[17px] leading-[24.8px] dark:text-white"
    >
      {{ title }}
    </div>

    <div class="text-secondary-grey-300 text-body font-normal mb-[44px]">
      {{ company_name }}
    </div>

    <div class="text-primary-violet-200 text-[14px] font-[700]">
      {{ location }}
    </div>
  </div>
</template>

<style scoped></style>
