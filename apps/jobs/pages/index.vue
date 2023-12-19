<script lang="ts" setup>
const { data, pending, error } = await useFetch(
  "https://www.arbeitnow.com/api/job-board-api",
  {},
);
console.log(data.value);
</script>

<template>
  <div>
    <JobsSearch />
  </div>
</template>

<style scoped></style>
