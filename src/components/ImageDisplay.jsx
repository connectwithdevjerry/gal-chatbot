import { chats } from "../../myAiChats";
import { kindOfTasks } from "../helper";

const ImageDisplay = ({
  chatPool,
  setChatPool,
  emojiLink,
  emojiText,
  setAiChatToShow,
  aiChatToShow,
  setActiveElement,
  activeElement,
  details,
  message,
}) => {
  const handleOnLoad = () => {
    setChatPool([
      ...chatPool,
      chats(
        details.name,
        kindOfTasks(details)[0],
        details.wishToReferFriends,
        details.doYouEngageOtherApps,
        details.followerRange,
        details.mysteryShoppingTask,
        details.locationToPerformTasks,
        details.email,
        details.shareHobbies1
      )[aiChatToShow],
    ]);

    setAiChatToShow(aiChatToShow + 1);

    setActiveElement({ ...activeElement, render: ["noResponse"] });
  };

  return (
    <div
      onLoad={handleOnLoad}
      className="purple w-64 p-2.5 rounded-2xl rounded-bl-none"
    >
      <img className="w-64 rounded-md" src={emojiLink} alt={emojiText} />
      <p className="mt-2 text-slate-100">{message}</p>
    </div>
  );
};

export default ImageDisplay;
