import { ref, computed, watch } from "vue";
import type { Ref } from "vue";
import { categories } from "~/constants";
import type { Job, QueryParams } from "~/types";

export const useGetJobs = (
  query: Ref<QueryParams> = ref({
    page: 1,
    title: "",
    category: [...categories],
  }),
) => {
  const jobs = ref<Job[]>([]);
  const loading = ref(false);

  const getData = async () => {
    try {
      loading.value = true;

      const { data } = await useFetch<{
        results: Record<string, any>[];
      }>("/api/jobs", {
        query: query.value,
      });

      const res = data.value?.results.map((item: any) => {
        return {
          id: item.id,
          title: item.name,
          company: item.company.name,
          locations: item.locations.map(
            (location: { name: string }) => location.name,
          ),
          remote: !!item.locations.find(
            (location: { name: string }) =>
              location.name === "Flexible / Remote",
          ),
          contents: item.contents,
          published_date: item.publication_date,
          categories: item.categories.map(
            (category: { name: string }) => category.name,
          ),
          levels: item.levels,
          url: item.refs.landing_page,
        };
      }) as Job[];

      jobs.value = [...jobs.value, ...res];
    } finally {
      loading.value = false;
    }
  };

  const filteredJobs = computed(() => {
    let result = jobs.value.filter((job) => {
      return job.title.toLowerCase().includes(query.value.title.toLowerCase());
    });

    // handle filtering by remote jobs
    if (query.value.location === "flexible/remote") {
      result = result.filter((job) => job.remote);
    } else {
      result = result.filter((job) => !job.remote);
    }

    // handle filtering by categories
    let resultByCategory: Job[] = [];
    if (query.value.category && query.value.category.length > 0) {
      for (const category of query.value.category) {
        for (const job of result) {
          if (job.categories.includes(category)) {
            resultByCategory.push(job);
          }
        }
      }
    } else {
      resultByCategory = result;
    }

    return resultByCategory;
  });

  watch(
    () => [query.value.page, query.value.category],
    () => {
      console.log("why");
      getData();
    },
    {
      immediate: true,
    },
  );

  watch(
    () => query.value.location,
    () => {
      getData();
    },
  );

  return {
    filteredJobs,
    loading,
  };
};
