<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "./components/BaseButton.vue";
import BaseInput from "./components/BaseInput.vue";
import BaseInputGroup from "./components/BaseInputGroup.vue";
import BaseDarkModeSwitch from "./components/BaseDarkModeSwitch.vue";
import BaseCheckbox from "./components/BaseCheckbox.vue";

const name = ref("");
const isOn = ref(false);
const fullTime = ref(false);
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

    <div class="mt-10">
      <BaseCheckbox v-model="fullTime" />
      fulltime: {{ fullTime }}
    </div>

    <BaseDarkModeSwitch class="mt-10" v-model:isDark="isOn" />
    {{ isOn }}
  </div>
</template>

<style scoped></style>
