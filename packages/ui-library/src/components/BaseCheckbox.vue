<template>
  <label class="checkbox-wrapper group">
    <input
      type="checkbox"
      :value="modelValue"
      @change="handleChange"
      v-bind="$attrs"
    />
    <span
      class="checkmark bg-[#e7e8e9] dark:bg-[#313743] group-hover:bg-[#D7D8F7] dark:group-hover:bg-primary-midnight"
    ></span>
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

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
/* The checkbox-wrapper */
.checkbox-wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 5px;
}

/* On mouse-over, add a grey background color */
// .checkbox-wrapper:hover input ~ .checkmark {
//   background-color: #d7e8f7;
// }

/* When the checkbox is checked, add a blue background */
.checkbox-wrapper input:checked ~ .checkmark {
  background-color: #5964e0;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-wrapper input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-wrapper .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
