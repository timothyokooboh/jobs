<template>
  <div
    class="skeleton-loader w-full max-w-[350px] h-[180px] bg-[#f0f0f0] dark:bg-secondary-grey-300"
  >
    <div class="skeleton-line bg-[#e0e0e0] dark:bg-primary-blue"></div>
  </div>
</template>

<style lang="scss" scoped>
.skeleton-loader {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
}

.skeleton-line {
  height: 100%;
  width: 100%;
  animation: loading-animation 1.5s infinite ease-in-out;
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
