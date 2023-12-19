<template>
  <span class="flex items-center">
    <img src="@rootImages/sun.svg" alt="sunlight" />

    <button
      class="group bg-white flex items-center mx-4 px-[5px] w-[48px] h-[24px] rounded-[25px]"
      @click="$emit('update:isDark', !isDark)"
    >
      <div
        class="h-[14px] w-[14px] rounded-full bg-primary-violet-200 duration-200 group-hover:bg-primary-violet-100"
        :class="{ 'translate-x-[25px]': isDark }"
      />
    </button>
    <img src="@rootImages/moon.svg" alt="moon" />
  </span>
</template>

<script setup lang="ts">
defineProps({
  isDark: Boolean,
});

defineEmits(["update:isDark"]);
</script>
