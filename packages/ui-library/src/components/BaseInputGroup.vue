<template>
  <div
    class="flex items-center w-[90%] rounded-[6px] bg-white overflow-hidden dark:bg-primary-blue dark:text-white"
    :class="{ 'pl-[32px]': $slots.leftAddon, 'pr-[32px]': $slots.rightAddon }"
  >
    <slot name="leftAddon" />
    <slot name="input" />
    <slot name="rightAddon" />
  </div>
</template>
