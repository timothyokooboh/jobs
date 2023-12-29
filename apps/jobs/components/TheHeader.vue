<script setup lang="ts">
import { BaseDarkModeSwitch } from "@app/ui-library";
import { useDarkMode } from "../composables/useDark";

const { toggleDark } = useDarkMode();
</script>

<template>
  <div
    class="relative bg-primary-violet-200 pt-8 pb-[76px] px-6 flex justify-between md:px-10 md:rounded-bl-[65px] lg:px-[165px] lg:rounded-bl-[95px]"
  >
    <div
      class="clip-triangle absolute left-[0px] bottom-0 bg-[#6771e2] w-[150px] h-[80%] md:rounded-bl-[65px] lg:rounded-bl-[95px]"
    />
    <div
      class="clip-partial-eclipse absolute right-0 top-0 bg-[#6771e2] w-[150px] h-[100%]"
    />

    <NuxtLink
      to="/"
      class="w-[115px] h-[32px] z-[2] text-white text-3xl font-[700]"
    >
      techjobs
    </NuxtLink>

    <BaseDarkModeSwitch class="z-[2]" @click="toggleDark()" />
  </div>
</template>

<style scoped></style>
