import { trackEvent } from "../analytics";

const CustomButton = ({
  text,
  chatPool,
  afterMultiSelect,
  setChatPool,
  activeElement,
  setActiveElement,
  aiChatToShow,
  name,
  details,
  allTasks,
}) => {
  const handleClick = () => {
    trackEvent(`Question_${aiChatToShow}`, "button", `chat_no_${aiChatToShow}`, aiChatToShow);

    setActiveElement({ ...activeElement, render: ["noResponse"] });

    let message = "";

    if (afterMultiSelect) {
      // get all true options
      const allSelected = Object.keys(details[name]).filter(
        (value) => details[name][value] === true
      );

      console.log({ allSelected });

      // get the names of tasks that are selected
      const getNamesOfTasks = allTasks?.filter((_) =>
        allSelected.includes(_.value)
      );

      console.log({ getNamesOfTasks });

      message = getNamesOfTasks.map((task) => task.task).join(", ");
    }

    setChatPool([
      ...chatPool,
      {
        message: afterMultiSelect ? message : text,
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
