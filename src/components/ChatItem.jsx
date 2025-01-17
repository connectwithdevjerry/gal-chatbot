import { useState, useEffect } from "react";
import { chats } from "../../myAiChats";
import ImageDisplay from "./ImageDisplay";

const ChatItem = ({
  message,
  me,
  seen,
  activeElement,
  setActiveElement,
  isImage,
  image,
  details,
  setChatPool,
  chatPool,
  setAiChatToShow,
  aiChatToShow,
  speed = 70,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const itemStyle =
    "purple flex flex-wrap p-3 rounded-t-2xl rounded-bl-2xl text-white w-fit max-w-64";

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
        element = chats(details.name)[aiChatToShow - 1].responseElement;
      }

      if (index === message.length) {
        clearInterval(interval);
        if (element[0] == "noResponse") {
          // options rather than noResponse in the previous message means that user needs to provide an answer
          if (aiChatToShow >= chats().length) return;
          setChatPool([...chatPool, chats(details.name)[aiChatToShow]]);
          setAiChatToShow(aiChatToShow + 1);
        }
        setActiveElement({ ...activeElement, render: element });
      }
    }, speed);

    return () => clearInterval(interval);
  }, [message, speed]);

  return (
    <div className={me ? itemStyle + " ml-auto darkest" : itemStyle}>
      {displayedText}
    </div>
  );
};

export default ChatItem;
