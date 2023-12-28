<script setup lang="ts">
import { BaseInputGroup, BaseInput } from "@app/ui-library";
defineEmits(["start:filter", "search"]);
</script>

<template>
  <div class="flex items-center">
    <BaseInputGroup class="w-full md:hidden">
      <template #input>
        <slot />
      </template>
      <template #rightAddon>
        <div class="flex items-center">
          <img
            src="/images/filter.svg"
            class="mr-[14px] cursor-pointer"
            @click="$emit('start:filter')"
          />
          <button
            @click="$emit('search')"
            class="h-[48px] w-[48px] bg-primary-violet-200 flex items-center justify-center rounded-[5px]"
          >
            <Icon name="ic:outline-search" size="32px" color="white" />
          </button>
        </div>
      </template>
    </BaseInputGroup>

    <BaseInputGroup class="hidden md:flex">
      <template #leftAddon>
        <Icon name="ic:outline-search" size="32px" color="#5964E0" />
      </template>
      <template #input>
        <slot />
      </template>
    </BaseInputGroup>
  </div>
</template>

<style scoped></style>
