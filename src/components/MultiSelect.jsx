import { trackEvent } from "../analytics";

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
  aiChatToShow,
}) => {
  const handleSelect = (checked) => {
    console.log({ checked });

    setDetails({
      ...details,
      [name]: { ...details[name], [value]: checked },
    });
  };

  return (
    <label className="flex items-center space-x-3 px-4 py-3 rounded-3xl bg-white text-black cursor-pointer transition w-max">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden peer"
          checked={details[name] ? details[name][value] : false}
          onChange={(e) => handleSelect(e.target.checked)}
        />
        <div className="w-4 h-4 border-2 border-black rounded-full flex items-center justify-center peer-checked:bg-black transition">
          {/* Ensure tick is always visible inside the black circle when selected */}
          <svg
            className="w-4 h-4 text-white opacity-1 peer-checked:opacity-100 transition"
            fill="none"
            viewBox="0 0 17 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 8.5L6.5 11L11 4"></path>
          </svg>
        </div>
      </div>
      <span>{task}</span>
    </label>
  );
};

export default MultiSelect;
