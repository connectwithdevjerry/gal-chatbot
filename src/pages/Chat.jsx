import { Navbar, ChatItem, Loader, CustomButton } from "../components";
import bgImage from "../assets/bgImage.png";
import gallery from "../assets/gallery.svg";
import send from "../assets/send.svg";
import { useState } from "react";

const Chat = () => {
  const [aiTyping, setAiTyping] = useState(false);
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

  const chats = [
    { message: "How are you today?", me: false },
    { message: "What are you doing?", me: true },
    { message: "What is your favorite?", me: false },
    { message: "What is your favorite?", me: false },
    { message: "What is your favorite?", me: false },
    { message: "What is your favorite?", me: false },
    { message: "What is your favorite?", me: false },
    { message: "What is your favorite?", me: false },
    { message: "What is your favorite?", me: false },
    { message: "What is your favorite?", me: false },
    { message: "What is your favorite?", me: false },
    { message: "What is your favorite?", me: false },
    { message: "What is your favorite?", me: false },
    { message: "What is your favorite?", me: false },
    { message: "Who are you?", me: true },
    { message: "who is your friend?", me: true },
  ];
  return (
    <div
      className="darker h-screen w-full px-5 pt-5 flex flex-col gap-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="overflow-y-scroll scroll-smooth scroll-m-0 h-full relative mychat">
        <div className="mb-20">
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
          {
            tasks.map((task) => (
              <label
                className="flex items-center flex-row text-black px-5 py-3 rounded-3xl bg-white"
                htmlFor={task.task}
              >
                <input type="checkbox" id={task.task} className="mr-1 rounded-xl" />
                {task.task}
              </label>
            ))
          }
        </div>
      </div>
      <div className="flex justify-between fixed bottom-0 left-0 right-0 pb-5 darker px-5 pt-3">
        <div className="flex justify-between w-10/12 pr-5 mr-1 border-2 border-slate-500 rounded-3xl">
          <input
            onChange={(e) => setDraft(e.target.value)}
            value={draft}
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
