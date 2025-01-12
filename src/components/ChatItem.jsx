import { useState, useEffect } from "react";

const ChatItem = ({ message, me, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const itemStyle =
    "purple flex flex-wrap p-3 rounded-t-2xl rounded-bl-2xl text-white w-fit max-w-64";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prevText) => prevText + message[index]);
      index += 1;
      if (index === message.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [message, speed]);

  return (
    <div
      className={me ? itemStyle + " ml-auto darkest" : itemStyle}
      dangerouslySetInnerHTML={{ __html: displayedText }}
    />
  );
};

export default ChatItem;
