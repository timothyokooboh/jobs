<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "./components/BaseButton.vue";
import BaseInput from "./components/BaseInput.vue";
import BaseInputGroup from "./components/BaseInputGroup.vue";

const name = ref("");
</script>

<template>
  <div class="m-[80px] bg-blue-300 p-10">
    <BaseButton variant="secondary">sign in</BaseButton>

    <BaseInputGroup class="mt-10">
      <template #leftAddon> 🔍 </template>
      <template #input>
        <BaseInput
          placeholder="email address"
          v-model="name"
          class="bg-transparent"
        />
      </template>
      <template #rightAddon>✉️</template>
    </BaseInputGroup>
    {{ name }}
  </div>
</template>

<style scoped></style>
