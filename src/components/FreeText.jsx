import gallery from "../assets/gallery.svg";

const FreeText = ({
  placeholder,
  setActiveElement,
  activeElement,
  setChatPool,
  chatPool,
  details,
  setDetails,
  name,
}) => {
  const handleSend = () => {
    setActiveElement({ ...activeElement, render: ["noResponse"] });
    setChatPool([
      ...chatPool,
      {
        message: details[name],
        me: true,
        seen: true,
        responseElement: ["noResponse"],
        dateTime: new Date(),
      },
    ]);
  };

  return (
    <div className="flex justify-between fixed bottom-0 left-0 right-0 pb-2 darker px-5 pt-2 z-50">
      <div className="flex justify-between w-10/12 pr-5 mr-1 border-2 border-slate-500 rounded-3xl">
        <input
          onChange={(e) => setDetails({ ...details, [name]: e.target.value })}
          value={details[name]}
          name={name}
          placeholder={placeholder}
          className="py-3 w-full px-5 rounded-3xl border-0 text-white outline-0 text-lg bg-transparent focus:outline-0 focus:bg-transparent border-transparent autofill:bg-transparent placeholder-shown:bg-transparent placeholder-shown:border-0 target:bg-transparent"
          type="text"
        />
        <img className="w-8" src={gallery} alt="" />
      </div>
      <button onClick={handleSend}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="56"
            height="56"
            rx="28"
            fill={details[name].length > 0 ? "#e6fe52" : "#8890af"}
          />
          <path
            d="M30.8325 25.1746L25.109 30.9592L18.5994 26.8877C17.6668 26.3041 17.8608 24.8874 18.9157 24.5789L34.3712 20.0528C35.3373 19.7696 36.2326 20.6728 35.9456 21.642L31.3731 37.0868C31.0598 38.1432 29.6512 38.332 29.0732 37.3953L25.106 30.9602"
            stroke="#1B1D29"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default FreeText;
