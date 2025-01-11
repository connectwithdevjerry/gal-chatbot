import {
  Navbar,
  ChatItem,
  Loader,
  CustomButton,
  MultiSelect,
  SingleSelect,
  ImageDisplay,
} from "../components";
import bgImage from "../assets/bgImage.png";
import gallery from "../assets/gallery.svg";
import { chats } from "../../myAiChats";
import { useState } from "react";
import yay from "../assets/yay.webp";
import giphy from "../assets/giphy.webp";

const Chat = () => {
  const [aiTyping, setAiTyping] = useState(true);
  const [draft, setDraft] = useState("");
  const [tasks, setTasks] = useState([
    { task: "Playing games 🎮", checked: false },
    { task: "Answering surveys 📊", checked: false },
    { task: "Testing new apps📱", checked: false },
    { task: "Promotions 🛍️", checked: false },
    { task: "Social media tasks", checked: false },
    { task: "Other", checked: false },
  ]);

  const text = "Sure, let's do this🔥";
  const elements = (text = "") => ({
    button: <CustomButton text={text} type={"btn"} />,
    multiSelect: "",
    freeText: "",
    singleSelect: "",
  });

  return (
    <div
      className="darker h-screen w-full px-5 pt-5 flex relative flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="fixed left-0 right-0 top-0 z-50">
        <Navbar />
      </div>
      {/* <div className="px-5 pt-5 pb-6 overflow-hidden" /> */}
      <div className="overflow-y-scroll scroll-smooth scroll-m-0 h-full relative mychat overflow-auto mt-16">
        <div className="z-0">
          <div className="flex flex-col drop-shadow-lg gap-5 pb-5 pt-2">
            {chats.map(({ message, me }, index) => (
              <ChatItem key={index} message={message} me={me} />
            ))}
          </div>
          <div>{aiTyping && <Loader />}</div>
        </div>
        <div className="flex justify-center py-10">
          <CustomButton text={text} type={"btn"} />
        </div>
        <div className="flex flex-wrap justify-start gap-2 py-10">
          {tasks.map((task) => (
            <MultiSelect task={task.task} />
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
      <div className="flex justify-between fixed bottom-0 left-0 right-0 pb-5 darker px-5 pt-2">
        <div className="flex justify-between w-10/12 pr-5 mr-1 border-2 border-slate-500 rounded-3xl">
          <input
            onChange={(e) => setDraft(e.target.value)}
            value={draft}
            placeholder="Type your message here..."
            className="py-3 w-full px-5 rounded-3xl border-0 text-white bg-transparent outline-0 outline-transparent text-lg"
            type="text"
          />
          <img className="w-8" src={gallery} alt="" />
        </div>
        <button>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="56"
              height="56"
              rx="28"
              fill={draft.length > 0 ? "#e6fe52" : "#8890af"}
            />
            <path
              d="M30.8325 25.1746L25.109 30.9592L18.5994 26.8877C17.6668 26.3041 17.8608 24.8874 18.9157 24.5789L34.3712 20.0528C35.3373 19.7696 36.2326 20.6728 35.9456 21.642L31.3731 37.0868C31.0598 38.1432 29.6512 38.332 29.0732 37.3953L25.106 30.9602"
              stroke="#1B1D29"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;
