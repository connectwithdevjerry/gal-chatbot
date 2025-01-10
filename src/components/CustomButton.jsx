const CustomButton = ({ text }) => {
  const btnStyle = "text-black px-5 py-3 rounded-3xl yellow mt-4 mb-6";
  return (
    <button className="text-black px-5 py-3 rounded-3xl yellow mt-4 mb-6">
      {text}
    </button>
  );
};

export default CustomButton;
