import { useState, useEffect } from "react";
import { chats } from "../../myAiChats";
import ImageDisplay from "./ImageDisplay";
import { kindOfTasks } from "../helper";
import Loader from "./Loader";

const ChatItem = ({
  message,
  me,
  seen,
  activeElement,
  setActiveElement,
  details,
  setChatPool,
  chatPool,
  setAiChatToShow,
  aiChatToShow,
  speed = 10,
  setBtwnMsgLoading,
  btwnMsgLoading,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const itemStyle =
    message.length > 0
      ? "purple flex flex-wrap p-3 rounded-t-2xl rounded-bl-2xl text-white w-fit max-w-72"
      : "hidden";

  useEffect(() => {
    if (!btwnMsgLoading) return;

    setTimeout(() => {
      setBtwnMsgLoading(false);
    }, 500);

  }, [btwnMsgLoading]);

  useEffect(() => {
    let index = 0;
    let element;

    if (seen) {
      setDisplayedText(message);
      index = message.length;
      element = ["noResponse"];
      // return;
    }

    let messageGen = "";

    const interval = setInterval(() => {
      if (!seen) {
        messageGen += message[index];
        setDisplayedText(messageGen);
        index += 1;

        // select the next chat in chats
        element = chats(
          details.name,
          kindOfTasks(details)[0],
          details.wishToReferFriends,
          details.doYouEngageOtherApps,
          details.followerRange,
          details.mysteryShoppingTask,
          details.locationToPerformTasks,
          details.email,
          details.shareHobbies1
        )[aiChatToShow - 1].responseElement;
      }

      if (index === message.length) {
        clearInterval(interval);

        setBtwnMsgLoading(true);

        if (element[0] == "noResponse") {
          // options rather than noResponse in the previous message means that user needs to provide an answer
          if (aiChatToShow >= chats().length) return;

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
        }
        setActiveElement({ ...activeElement, render: element });
      }
    }, speed);

    return () => clearInterval(interval);
  }, [message, speed]);

  return (
    <>
      <div
        className={me ? itemStyle + " ml-auto darkest" : itemStyle}
        dangerouslySetInnerHTML={{ __html: displayedText }}
      />
      {me && btwnMsgLoading && <Loader />}
    </>
  );
};

export default ChatItem;
