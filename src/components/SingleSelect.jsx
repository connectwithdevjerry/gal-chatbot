const SingleSelect = ({ task }) => {
  return (
    <label
      className="flex items-center flex-row text-black px-5 py-3 rounded-3xl bg-white"
      htmlFor={task}
    >
      <input
        onChange={(e) => alert(e.target.value)}
        type="radio"
        id={task}
        className="mr-1 rounded-xl"
      />
      {task}
    </label>
  );
};

export default SingleSelect;
