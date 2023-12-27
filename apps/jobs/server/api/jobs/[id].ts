export default eventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const id = getRouterParam(event, "id");
  try {
    const data = await $fetch(`https://www.themuse.com/api/public/jobs/${id}`, {
      query: {
        api_key: config.apiKey,
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
