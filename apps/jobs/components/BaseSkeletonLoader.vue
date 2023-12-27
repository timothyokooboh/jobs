<template>
  <div class="skeleton-loader w-full max-w-[350px] h-[180px]">
    <div class="skeleton-line"></div>
  </div>
</template>

<style lang="scss" scoped>
.skeleton-loader {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0; /* Adjust the background color */
  border-radius: 10px; /* Adjust the border radius */
  overflow: hidden;
}

.skeleton-line {
  height: 100%; /* Adjust the height of each loading line */
  width: 100%; /* Adjust the width of each line */
  background-color: #e0e0e0; /* Adjust the background color of each line */
  animation: loading-animation 1.5s infinite ease-in-out; /* Loading animation */
}

@keyframes loading-animation {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
