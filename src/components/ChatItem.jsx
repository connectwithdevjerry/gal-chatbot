const ChatItem = ({ message, me }) => {
  const itemStyle =
    "purple flex flex-wrap p-3 rounded-t-2xl rounded-bl-2xl text-white w-fit max-w-64";
  return (
    <div className={me ? itemStyle + " ml-auto darkest" : itemStyle}>{message}</div>
  );
};

export default ChatItem;
