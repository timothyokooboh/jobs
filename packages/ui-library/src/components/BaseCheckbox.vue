<template>
  <label class="relative cursor-pointer inline-block group">
    <input
      type="checkbox"
      class="appearance-none cursor-pointer h-[24px] w-[24px] rounded-[3px] duration-200 bg-[#E7E8E9] checked:bg-primary-violet-200 group-hover:bg-[#D7D8F7]"
      :value="modelValue"
      @change="handleChange"
    />
    <img
      v-if="modelValue"
      src="@rootImages/checkmark.svg"
      alt="checkmark"
      class="absolute top-[5px] left-[5px]"
    />
  </label>
</template>

<script setup lang="ts">
defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const handleChange = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).checked);
};
</script>

<style scoped></style>
