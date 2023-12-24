export default eventHandler(async (event) => {
  try {
    const res = await fetch(`https://www.arbeitnow.com/api/job-board-api`);
    const json = await res.json();

    return json;
  } catch (err) {
    throw createError({
      statusCode: 400,
      statusMessage: "Unable to load jobs. Please try again",
    });
  }
});
