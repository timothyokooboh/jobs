<script setup lang="ts">
import type { Job } from "~/types";
import { BaseButton } from "@app/ui-library";

const route = useRoute();
const { data, pending } = useFetch<{
  id: string;
  name: string;
  company: { name: string };
  locations: { name: string }[];
  contents: string;
  publication_date: string;
  categories: { name: string }[];

  refs: { landing_page: string };
}>(`/api/jobs/${route.params.id}`);

const job = ref<Job>({
  id: "",
  title: "",
  company: "",
  locations: [],
  remote: false,
  contents: "",
  published_date: "",
  categories: [],
  url: "",
});

watch(
  data,
  (newValue) => {
    if (data.value) {
      job.value = {
        id: data.value.id,
        title: data.value.name,
        company: data.value.company.name,
        locations: data.value.locations,
        remote: !!data.value.locations.find(
          (location: { name: string }) => location.name === "Flexible / Remote",
        ),
        contents: data.value.contents,
        published_date: data.value.publication_date,
        categories: data.value.categories.map((item) => item.name),

        url: data.value.refs.landing_page,
      };
    }
  },
  { immediate: true },
);
</script>

<template>
  <Transition name="fade" mode="out-in" appear>
    <div v-if="pending" class="mt-10">
      <BaseSkeletonLoader class="mb-5 max-w-[inherit]" />
      <BaseSkeletonLoader class="h-[400px] max-w-[inherit]" />
    </div>

    <section v-else>
      <div
        class="relative bg-white top-[-10px] pt-[40px] pb-[40px] mb-6 dark:bg-primary-blue md:flex md:justify-between md:items-center md:py-0 md:pr-10"
      >
        <div class="mb-[27px] md:mb-0 md:flex md:items-center">
          <div
            class="w-[50px] h-[50px] rounded-[15px] flex justify-center items-center absolute left-[50%] top-[-25px] shadow-md translate-x-[-50%] md:relative md:left-0 md:top-0 md:translate-x-0 md:mr-10 md:w-[140px] md:h-[140px] md:rounded-none"
            :style="{
              backgroundColor: generateRandomColors(),
            }"
          >
            <div
              v-if="job.company"
              class="uppercase font-[700] text-[10px] text-white"
            >
              <div class="md:hidden">
                {{ job.company.slice(0, 4) }}
              </div>
              <div class="hidden md:block">
                {{ job.company.slice(0, 10) }}
              </div>
            </div>
          </div>

          <div
            class="text-center text-primary-blue text-[20px] font-[700] dark:text-white"
          >
            {{ job.company }}
          </div>
        </div>

        <div class="text-center">
          <a
            :href="job.url"
            target="_blank"
            class="text-primary-violet-200 font-[700] bg-[#EEEFFC] px-5 py-4 rounded-[5px] dark:bg-[#1F273F]"
          >
            Company Site
          </a>
        </div>
      </div>

      <div class="bg-white py-10 px-6 mb-[140px] dark:bg-primary-blue">
        <section class="md:flex md:justify-between md:items-center">
          <div>
            <div
              class="text-secondary-grey-300 text-[16px] font-normal mb-3 dark:text-secondary-grey-300"
            >
              1w ago
            </div>
            <div
              class="text-primary-blue text-[20px] font-[700] mb-3 dark:text-white"
            >
              {{ job.title }}
            </div>
            <div>
              <div
                v-for="location in job.locations"
                :key="location.name"
                class="text-primary-violet-200 text-[14px] font-[700]"
              >
                {{ location.name }}
              </div>
            </div>
          </div>

          <a :href="job.url" target="_blank">
            <BaseButton class="w-full mt-[57px] dark:bg-primary-violet-200"
              >Apply Now</BaseButton
            >
          </a>
        </section>

        <div
          v-if="job.contents"
          v-html="job.contents"
          class="mt-8 text-secondary-grey-300 leading-[26px]"
          style="font-weight: 400"
        />
      </div>

      <div
        class="bg-white z-10 p-6 fixed left-0 bottom-0 w-full dark:bg-primary-blue md:flex md:justify-between md:items-center"
      >
        <div class="hidden md:block">
          <div class="text-primary-blue text-5 font-[700] dark:text-white">
            {{ job.title }}
          </div>
          <div class="text-secondary-grey-300 text-base font-normal">
            {{ job.company }}
          </div>
        </div>
        <a :href="job.url" target="_blank">
          <BaseButton class="w-full dark:bg-primary-violet-200 md:w-fit"
            >Apply Now</BaseButton
          >
        </a>
      </div>
    </section>
  </Transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(30px);
}
</style>
