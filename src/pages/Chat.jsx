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
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
    gender: "",
    myOnlineTask: "",
    location: "",
    appChoice: "",
    kindOfTasks: {
      playingGames: false,
      answeringSurveys: false,
      testingNewApps: false,
      productReview: false,
      socialMediaTasks: false,
      otherTasks: false,
    },
  });
  const [aiChatToShow, setAiChatToShow] = useState(1);
  const [chatPool, setChatPool] = useState([
    { ...chats(details.name)[0], dateTime: new Date() },
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

  const isSelect =
    activeElement.render[0] == "multiSelect" ||
    activeElement.render[0] == "singleSelect";

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

    freeText: (
      <FreeText
        details={details}
        setDetails={setDetails}
        setActiveElement={setActiveElement}
        activeElement={activeElement}
        setChatPool={setChatPool}
        chatPool={chatPool}
        placeholder={activeElement.render[1]}
        name={activeElement.render[2]}
      />
    ),
    multiSelect: <MultiSelect />,
    singleSelect: <SingleSelect />,
  });

  console.log({ details, chatPool });

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
            chatPool?.map(({ message, me, seen }, index) => (
              <ChatItem
                key={index}
                details={details}
                chatPool={chatPool}
                setChatPool={setChatPool}
                setAiTyping={setAiTyping}
                activeElement={activeElement}
                setActiveElement={setActiveElement}
                aiChatToShow={aiChatToShow}
                setAiChatToShow={setAiChatToShow}
                message={message}
                seen={seen}
                me={me}
              />
            ))}
        </div>

        {activeElement.render[0] !== "noResponse" &&
          !activeElement.render[0]?.includes("Select") && (
            <div className="flex justify-center py-10">
              {elements(activeElement.render[1])[activeElement.render[0]]}
            </div>
          )}

        {activeElement.render[0] === "multiSelect" && (
          <div className="flex flex-wrap justify-start gap-2 py-10">
            {activeElement.render[1].map(({ task, checked, value }) => (
              <MultiSelect
                details={details}
                setDetails={setDetails}
                checked={checked}
                value={value}
                task={task}
                name={activeElement.render[2]}
              />
            ))}
            {
              <CustomButton
                chatPool={chatPool}
                setChatPool={setChatPool}
                activeElement={activeElement}
                setActiveElement={setActiveElement}
                afterMultiSelect={true}
                text={"Submit"}
                type={"btn"}
                allTasks={activeElement.render[1]}
                name={activeElement.render[2]}
                details={details}
              />
            }
          </div>
        )}

        {activeElement?.render[0] === "singleSelect" && (
          <div className="flex flex-wrap justify-start gap-2 py-10">
            {activeElement?.render[1]?.map((task) => (
              <SingleSelect
                task={task}
                details={details}
                setDetails={setDetails}
                name={activeElement.render[2]}
                chatPool={chatPool}
                setChatPool={setChatPool}
              />
            ))}
          </div>
        )}

        <div className="flex flex-wrap justify-start gap-2 py-10 mb-14">
          {/* <ImageDisplay image={yay} /> */}
        </div>
      </div>
    </div>
  );
};

export default Chat;
