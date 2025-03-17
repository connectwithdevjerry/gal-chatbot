import { trackEvent } from "../analytics";

const SingleSelect = ({
  task,
  name,
  details,
  setDetails,
  setChatPool,
  chatPool,
  aiChatToShow
}) => {
  const handleSelect = async () => {
    trackEvent(task, "singleSelect", `chat_no_${aiChatToShow}`, aiChatToShow);
    setDetails({
      ...details,
      [name]: task,
    });

    setChatPool([
      ...chatPool,
      {
        message: task,
        me: true,
        seen: true,
        responseElement: ["noResponse"],
        dateTime: new Date(),
      },
    ]);
  };
  return (
    <label
      className="flex items-center flex-row text-black px-5 py-3 rounded-3xl bg-white"
      htmlFor={task}
    >
      <input
        onChange={handleSelect}
        type="radio"
        id={task}
        name={name}
        className="mr-1 rounded-xl"
      />
      {task}
    </label>
  );
};

export default SingleSelect;
