<template>
  <button
    class="text-body rounded-[5px] py-[16px] px-[40px] font-[700] transition-all duration-200 dark:bg-[#303642] dark:hover:bg-[#6A6E77] dark:text-white"
    :class="variantClasses"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary";
  }>(),
  {
    variant: "primary",
  },
);

const variantClasses = computed(() => {
  if (props.variant === "primary") {
    return "bg-primary-violet-200 text-white hover:bg-primary-violet-100";
  } else if (props.variant === "secondary") {
    return "bg-[#EEEFFC] text-primary-violet-200 hover:bg-[#C5C9F4]";
  }
  throw new Error(
    `variant must be primary or secondary but you provided ${props.variant}`,
  );
});
</script>
