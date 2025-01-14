const CustomButton = ({
  text,
  chatPool,
  setChatPool,
  activeElement,
  setActiveElement,
}) => {
  const handleClick = () => {
    
    setActiveElement({ ...activeElement, render: ["noResponse"] });
    setChatPool([
      ...chatPool,
      {
        message: text,
        me: true,
        seen: true,
        responseElement: ["noResponse"],
        dateTime: new Date(),
      },
    ]);
  };
  const btnStyle = "text-black px-5 py-3 rounded-3xl yellow mt-4 mb-6";
  return (
    <button
      onClick={handleClick}
      className="text-black cursor-pointer px-5 py-3 rounded-3xl yellow mt-4 mb-6"
    >
      {text}
    </button>
  );
};

export default CustomButton;
