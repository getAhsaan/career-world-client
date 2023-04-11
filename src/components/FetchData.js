export const jobCategoryData = async () => {
  const res1 = await fetch("jobCategoryData.json");
  const jobCategoryData = await res1.json();
  const res2 = await fetch("featuredJobsData.json");
  const featuredJobsData = await res2.json();
  return { jobCategoryData, featuredJobsData };
};
