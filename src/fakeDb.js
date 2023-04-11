export const addToLocalStorageDb = (id) => {
  let storedJob = JSON.parse(localStorage.getItem("job"));
  if (!storedJob) {
    storedJob = [];
  }
  if (!storedJob.includes(id)) {
    storedJob.push(id);
  }
  localStorage.setItem("job", JSON.stringify(storedJob));
};
