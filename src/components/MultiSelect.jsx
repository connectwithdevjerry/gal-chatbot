const MultiSelect = ({
  task,
  checked,
  handleChecked,
  name,
  value,
  details,
  setDetails,
  chatLoop,
  setChatLoop,
}) => {
  const handleSelect = (checked) => {
    console.log({ checked });

    setDetails({
      ...details,
      [name]: { ...details[name], [value]: checked },
    });
  };

  return (
    <div className="checkbox-wrapper-12 flex items-center flex-row text-black px-5 py-3 rounded-3xl bg-white">
      <div className="cbx">
        <input
          checked={details[name] ? details[name][value] : false}
          value={details[name] ? details[name][value] : false}
          type="checkbox"
          name={name}
          onChange={(e) => handleSelect(e.target.checked)}
        />
        <label htmlFor="cbx-12"></label>
        <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
          <path d="M2 8.36364L6.23077 12L13 2"></path>
        </svg>
      </div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={task}>
            <feGaussianBlur
              result="blur"
              stdDeviation="4"
              in="SourceGraphic"
            ></feGaussianBlur>
            <feColorMatrix
              result="goo-12"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
              mode="matrix"
              in="blur"
            ></feColorMatrix>
            <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
          </filter>
        </defs>
      </svg>
      {task}
    </div>
  );
};

export default MultiSelect;
