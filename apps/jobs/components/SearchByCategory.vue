<script setup lang="ts">
import { BaseInputGroup, BaseInput } from "@app/ui-library";
</script>

<template>
  <BaseInputGroup class="flex">
    <template #leftAddon>
      <Icon name="material-symbols:category" size="32px" color="#5964E0" />
    </template>
    <template #input>
      <slot />
    </template>
  </BaseInputGroup>
</template>

<style scoped></style>
