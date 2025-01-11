const MultiSelect = ({ task }) => {
  return (
    <label
      className="flex items-center flex-row text-black px-5 py-3 rounded-3xl bg-white"
      htmlFor={task}
    >
      <input type="checkbox" id={task} className="mr-1 rounded-xl" />
      {task}
    </label>
  );
};

export default MultiSelect;
