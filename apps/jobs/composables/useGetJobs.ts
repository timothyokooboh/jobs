// import { ref, computed, watch } from "vue";
import type { Ref } from "vue";
import type { Job } from "~/types";

export const useGetJobs = (
  props: Ref<{
    page: number;
    searchTerm: string;
    location: string;
    remote: boolean;
    visa_sponsorship: null | boolean;
  }>,
) => {
  const jobs = ref<Job[]>([]);
  const filteredJobs = ref<Job[]>([]);
  const loading = ref(false);

  const test = () => {
    useFetch<{ data: Job[] }>("https://www.arbeitnow.com/api/job-board-api", {
      query: {
        page: props.value.page,
        visa_sponsorship: props.value.visa_sponsorship,
      },
    }).then((res) => {
      if (res.data.value?.data) {
        jobs.value = [...jobs.value, ...res.data.value.data];
        filteredJobs.value = jobs.value;
        loading.value = res.pending.value;
      }
    });
  };

  const searchByTitle = () => {
    filteredJobs.value = jobs.value.filter((job: Job) => {
      return job.title
        .toLowerCase()
        .includes(props.value.searchTerm.toLowerCase());
    });
  };

  const searchByLocation = () => {
    const result = jobs.value.filter((job: Job) => {
      return job.location
        .toLowerCase()
        .includes(props.value.location.toLowerCase());
    });

    return result;
  };

  const searchByRemoteOnly = (items: Job[]) => {
    const result = items.filter((job: Job) => {
      return job.remote === props.value.remote;
    });

    return result;
  };

  const search = () => {
    const jobsByLocation = searchByLocation();
    const jobsByRemoteOnly = searchByRemoteOnly(jobsByLocation);
    filteredJobs.value = jobsByRemoteOnly;
  };

  watch(
    [() => props.value.page, () => props.value.visa_sponsorship],
    () => {
      test();
    },
    { immediate: true },
  );

  watch(
    () => props.value.searchTerm,
    () => {
      searchByTitle();
    },
  );

  return {
    loading,
    filteredJobs,
    search,
  };
};
