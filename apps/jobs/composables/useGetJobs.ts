export const useGetJobs = () => {
  const getJobs = async () => {
    const { data, pending, error } = await useFetch("api/jobs", {});
    return {
      data: data.value,
      pending: pending.value,
      error: error.value,
    };
  };

  return {
    getJobs,
  };
};
