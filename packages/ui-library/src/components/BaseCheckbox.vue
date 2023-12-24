<template>
  <div class="relative cursor-pointer inline-block group checkbox-container">
    <input
      ref="fuck"
      type="checkbox"
      class="appearance-none cursor-pointer h-[24px] w-[24px] rounded-[3px] duration-200 bg-[#E7E8E9] checked:bg-primary-violet-200 group-hover:bg-[#D7D8F7]"
      :value="modelValue"
      @change="handleChange"
      v-bind="$attrs"
    />
    <img
      src="@rootImages/checkmark.svg"
      alt="checkmark"
      class="absolute top-[5px] left-[5px] icon"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const handleChange = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).checked);
};

const fuck = ref<HTMLInputElement | null>(null);

// const isChecked = () => {
//   console.log(fuck.value);
//   console.log(fuck.value?.checked);
//   return fuck.value?.checked;
// };
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
.checkbox-container:has(input:checked) {
  .icon {
    display: block;
  }
}

.icon {
  display: none;
}
</style>
