<template>
  <div
    class="fixed top-0 left-0 h-screen w-screen z-10 bg-[rgba(0,0,0,0.3)] flex flex-col justify-center items-center px-6"
    @click.self="$emit('close:modal')"
  >
    <Transition name="slideIn" appear mode="out-in">
      <slot />
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineEmits(["close:modal"]);
</script>

<style scoped>
.slideIn-enter-active,
.slideIn-leave-active {
  transition: all 0.5s ease;
}

.slideIn-enter-from,
.slideIn-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
