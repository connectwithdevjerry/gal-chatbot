import {
  Navbar,
  ChatItem,
  Loader,
  CustomButton,
  MultiSelect,
  SingleSelect,
  ImageDisplay,
  FreeText,
} from "../components";
import bgImage from "../assets/bgImage.png";

import { chatsEnd, chats } from "../../myAiChats";
import { useState } from "react";
import yay from "../assets/yay.webp";
import giphy from "../assets/giphy.webp";
import { v4 as uuidv4 } from "uuid";

const Chat = () => {
  const [aiTyping, setAiTyping] = useState(true);
  const [checked, setChecked] = useState(false);
  const [aiChatToShow, setAiChatToShow] = useState(1);
  const [chatPool, setChatPool] = useState([
    { ...chats[0], dateTime: new Date() },
  ]);
  const [draft, setDraft] = useState("");
  const [activeElement, setActiveElement] = useState({ render: [] });
  const [msgLoading, setMsgLoading] = useState(false);
  const [tasks, setTasks] = useState([
    { task: "Playing games 🎮", checked: false },
    { task: "Answering surveys 📊", checked: false },
    { task: "Testing new apps📱", checked: false },
    { task: "Promotions 🛍️", checked: false },
    { task: "Social media tasks", checked: false },
    { task: "Other", checked: false },
  ]);

  const elements = (text = "") => ({
    button: (
      <CustomButton
        chatPool={chatPool}
        setChatPool={setChatPool}
        activeElement={activeElement}
        setActiveElement={setActiveElement}
        text={text}
        type={"btn"}
      />
    ),
    multiSelect: <MultiSelect />,
    freeText: (
      <FreeText
        draft={draft}
        setDraft={setDraft}
        placeholder={activeElement.render[1]}
      />
    ),
    singleSelect: <SingleSelect />,
  });

  // chats.forEach((chat) => {
  //   let myuuid = uuidv4();
  //   chat.sysMsgId = myuuid;
  // });

  return (
    <div
      className="darker h-screen w-full px-5 flex relative flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="overflow-y-scroll scroll-smooth scroll-m-0 relative mychat overflow-auto relative mt-16 z-0">
        <div className="flex flex-col drop-shadow-lg gap-2 pb-5 pt-2 z-0">
          {msgLoading && <Loader />}
          {console.log(setTimeout(() => setMsgLoading(false), 10000))}
          {!msgLoading &&
            chatPool.map(({ message, me, seen }, index) => (
              <ChatItem
                key={index}
                chatPool={chatPool}
                setChatPool={setChatPool}
                setAiTyping={setAiTyping}
                activeElement={activeElement}
                setActiveElement={setActiveElement}
                aiChatToShow={aiChatToShow}
                setAiChatToShow={setAiChatToShow}
                active={activeElement === index}
                message={message}
                seen={seen}
                me={me}
              />
            ))}
        </div>

        <div className="flex justify-center py-10">
          {activeElement.render[0] !== "noResponse" &&
            elements(activeElement.render[1])[activeElement.render[0]]}
        </div>

        <div className="flex flex-wrap justify-start gap-2 py-10">
          {tasks.map((task) => (
            <MultiSelect
              handleChecked={() => setChecked(!checked)}
              checked={checked}
              task={task.task}
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-start gap-2 py-10">
          {tasks.map((task) => (
            <SingleSelect task={task.task} />
          ))}
        </div>
        <div className="flex flex-wrap justify-start gap-2 py-10 mb-14">
          <ImageDisplay image={yay} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
