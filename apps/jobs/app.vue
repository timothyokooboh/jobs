<script lang="ts" setup>
import { ref } from "vue";
import {
  BaseButton,
  BaseCheckbox,
  BaseInput,
  BaseDarkModeSwitch,
} from "@app/ui-library";

const on = ref(false);
</script>

<template>
  <div class="bg-secondary-grey-200 p-10">
    <BaseButton>hello</BaseButton>
    <BaseCheckbox v-model="on" />
    <BaseInput placeholder="email"></BaseInput>
    <BaseDarkModeSwitch v-model:isDark="on" />
  </div>
</template>
