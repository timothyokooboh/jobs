export const useHandleScroll = () => {
  const hasScrolledAwayFromTop = ref(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  onMounted(() => {
    window.addEventListener("scroll", () => {
      hasScrolledAwayFromTop.value = window.scrollY > 0;
    });
  });

  return {
    hasScrolledAwayFromTop,
    scrollToTop,
  };
};
