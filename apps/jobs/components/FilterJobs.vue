<script setup lang="ts">
import {
  BaseInputGroup,
  BaseInput,
  BaseCheckbox,
  BaseButton,
} from "@app/ui-library";

defineProps<{
  remote: boolean;
  visa_sponsorship: boolean;
}>();
defineEmits(["search", "update:remote", "update:visa_sponsorship"]);
</script>

<template>
  <div class="bg-white rounded-[10px]">
    <BaseInputGroup class="border-b border-solid border-[#E2E6EA] w-full">
      <template #leftAddon>
        <img src="../public/images/location.svg" alt="location" />
      </template>
      <template #input>
        <slot />
      </template>
    </BaseInputGroup>

    <form class="py-6 px-4">
      <div class="flex mb-4">
        <BaseCheckbox
          id="remote"
          class="mr-4"
          :checked="remote"
          @change="$emit('update:remote', $event.target.checked)"
        />
        <label for="remote" class="text-primary-blue font-[700]">Remote</label>
      </div>

      <div class="flex mb-6">
        <BaseCheckbox
          id="visa"
          class="mr-4"
          @change="$emit('update:visa_sponsorship', $event.target.checked)"
        />
        <label for="visa" class="text-primary-blue font-[700]"
          >Visa Sponsorship</label
        >
      </div>

      <BaseButton class="w-full" type="button" @click="$emit('search')">
        <div class="text-white font-[700]">Search</div>
      </BaseButton>
    </form>
  </div>
</template>

<style scoped></style>
