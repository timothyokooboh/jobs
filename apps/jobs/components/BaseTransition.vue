<template>
  <Transition
    name="fade"
    appear
    mode="out-in"
    :style="{ '--transform': transform }"
  >
    <slot></slot>
  </Transition>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    from: "top" | "bottom" | "left" | "right";
  }>(),
  {
    from: "top",
  },
);

const transform = computed(() => {
  switch (props.from) {
    case "top":
      return "translateY(-30px)";
    case "bottom":
      return "translateY(30px)";
    case "right":
      return "translateX(30px)";
    case "left":
      return "translateX(-30px)";
    default:
      return "translateY(-30px)";
  }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 10s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px); /* var(--transform);*/
}
</style>
