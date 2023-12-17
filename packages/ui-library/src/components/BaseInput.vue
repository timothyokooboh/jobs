<template>
  <input
    class="py-[28px] px-4 text-body font-normal text-primary-blue rounded-[6px] flex-1 outline-none placeholder:text-[#8c8f97] dark:bg-primary-blue dark:text-white"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const handleInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<style scoped></style>
