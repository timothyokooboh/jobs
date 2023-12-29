export default eventHandler(async (event) => {
  const query = getQuery(event);
  const config = useRuntimeConfig(event);
  try {
    const data = await $fetch(`https://www.themuse.com/api/public/jobs`, {
      query: {
        api_key: config.apiKey,
        ...query,
      },
    });

    return data;
  } catch (err) {
    throw createError({
      statusCode: 400,
      statusMessage: "Unable to load jobs. Please try again",
    });
  }
});
