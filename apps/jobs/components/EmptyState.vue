<template>
  <div class="flex flex-col items-center">
    <img src="/images/no-data.png" alt="no data found" />
    <div class="text-lg text-center text-primary-blue dark:text-white">
      <slot>
        <div>No results found</div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
