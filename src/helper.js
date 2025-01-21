export const kindOfTasks = (details) => {
  const tasks = Object.keys(details?.kindOfTasks || []).filter(
    (task) => details.kindOfTasks[task] === true
  );
  return tasks;
};
