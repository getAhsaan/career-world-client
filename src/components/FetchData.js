export const jobCategoryData = async () => {
  const res1 = await fetch("/jobCategoryData.json");
  const jobCategoryData = await res1.json();
  const res2 = await fetch("/featuredJobsData.json");
  const featuredJobsData = await res2.json();
  return { jobCategoryData, featuredJobsData };
};

export const jobDetailsLoader = async ({ params }) => {
  const res2 = await fetch("/featuredJobsData.json");
  const featuredJobsData = await res2.json();
  const targetJob = featuredJobsData.find((jd) => jd.id == params.id);
  return targetJob;
};

export const appliedJobsLoader = async () => {
  let storedJob = JSON.parse(localStorage.getItem("job"));
  if (!storedJob) {
    storedJob = [];
  }
  const res2 = await fetch("/featuredJobsData.json");
  const featuredJobsData = await res2.json();
  const appliedJobData = [];
  featuredJobsData.forEach((fdata) => {
    storedJob.forEach((sjob) => {
      if (fdata.id == sjob) {
        appliedJobData.push(fdata);
      }
    });
  });
  return appliedJobData;
};
