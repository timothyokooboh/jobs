import { ref, computed, watch } from "vue";
import type { Ref } from "vue";
import type { Job, QueryParams } from "~/types";

export const useGetJobs = (
  query: Ref<QueryParams> = ref({
    page: 1,
  }),
) => {
  const jobs = ref<Job[]>([]);

  const params = ref<Record<string, any>>({ page: query.value.page });

  const getData = async () => {
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
        locations: item.locations,
        remote: !!item.locations.find(
          (location: { name: string }) => location.name === "Flexible / Remote",
        ),
        contents: item.contents,
        published_date: item.publication_date,
        categories: item.categories,
        levels: item.levels,
        url: item.refs.landing_page,
      };
    }) as Job[];

    jobs.value = [...jobs.value, ...res];

    console.log(data.value);
  };

  const filteredJobs = computed(() => {
    if (query.value.location === "flexible/remote") {
      return jobs.value.filter((job) => job.remote);
    } else {
      return jobs.value.filter((job) => !job.remote);
    }
  });

  // const searchByRemoteOnly = (items: Job[]) => {
  //   const result = items.filter((job: Job) => {
  //     return job.remote === query.value.remote;
  //   });
  // };

  watch(
    () => query.value.page,
    () => {
      getData();
    },
    {
      immediate: true,
    },
  );

  watch(
    () => query.value.location,
    () => {
      console.log("location changed");
      getData();
    },
  );

  // if (query.value.category && query.value.category.length === 0) {
  //   obj.category = [
  //     "Software Engineering",
  //     "Design",
  //     "UX",
  //     "Design and UX",
  //     "IT",
  //     "Computer and IT",
  //     "Data and Analytics",
  //   ];
  // }

  return {
    filteredJobs,
    search: () => {},
  };
};
