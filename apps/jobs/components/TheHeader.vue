<script setup lang="ts">
import { BaseDarkModeSwitch } from "@app/ui-library";
import { useDarkMode } from "../composables/useDark";

const { toggleDark } = useDarkMode();
</script>

<template>
  <div class="bg-primary-violet-200 pt-8 pb-[76px] px-6 flex justify-between">
    <img src="/images/jobs-logo.svg" class="w-[115px] h-[32px]" />

    <BaseDarkModeSwitch @click="toggleDark()" />
  </div>
</template>

<style scoped></style>
