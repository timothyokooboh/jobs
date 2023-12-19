<script setup lang="ts">
import { BaseInputGroup, BaseInput } from "@app/ui-library";
</script>
<template>
  <BaseInputGroup class="relative top-[-35px] mx-auto">
    <template #input>
      <BaseInput placeholder="Filter by title..." class="w-full" />
    </template>
    <template #rightAddon>
      <div class="flex items-center">
        <img src="/images/filter.svg" class="mr-[14px]" />
        <div
          class="h-[48px] w-[48px] bg-primary-violet-200 flex items-center justify-center rounded-[5px]"
        >
          <Icon name="ic:outline-search" size="32px" color="white" />
        </div>
      </div>
    </template>
  </BaseInputGroup>
</template>

<style scoped></style>
