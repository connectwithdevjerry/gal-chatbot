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
import { chats } from "../../myAiChats";
import { useState, useRef, useEffect } from "react";
import yay from "../assets/yay.webp";
import giphy from "../assets/giphy.webp";
import { kindOfTasks } from "../helper";
import DoubleBtn from "../components/DoubleBtn";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";

const Chat = () => {
  const [aiTyping, setAiTyping] = useState(true);
  const [checked, setChecked] = useState(false);
  const [authProcessing, setAuthProcessing] = useState(false);
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
  });

  const [aiChatToShow, setAiChatToShow] = useState(1);

  const [chatPool, setChatPool] = useState([
    {
      ...chats(
        details.name,
        kindOfTasks(details)[0],
        details.wishToReferFriends,
        details.doYouEngageOtherApps,
        details.followerRange,
        details.mysteryShoppingTask,
        details.locationToPerformTasks,
        details.email,
        details.shareHobbies1
      )[0],
      dateTime: new Date(),
    },
  ]);

  const [draft, setDraft] = useState("");
  const [activeElement, setActiveElement] = useState({ render: [] });
  const [msgLoading, setMsgLoading] = useState(false);
  const chatDivRef = useRef(null);

  const isSelect =
    activeElement.render[0] == "multiSelect" ||
    activeElement.render[0] == "singleSelect";

  const handleSignupWithFacebook = async () => {
    setAuthProcessing(true);
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
      const res = user.user;
      console.log({ res });
    } catch (error) {
      setAuthProcessing(false);
      console.log(error);
      return;
    }
  };
  const handleSignupWithGoogle = async () => {
    setAuthProcessing(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
      const email = user._tokenResponse.email;
      setDetails({ ...details, email });
    } catch (error) {
      console.log(error);
      setAuthProcessing(false);
      return;
    }
  };

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

    doubleButton: (
      <DoubleBtn
        authProcessing={authProcessing}
        handleSignupWithFacebook={handleSignupWithFacebook}
        handleSignupWithGoogle={handleSignupWithGoogle}
        chatPool={chatPool}
        setChatPool={setChatPool}
        name={activeElement.render[1]}
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
    myImage: (
      <ImageDisplay
        image={
          activeElement?.render[1] && activeElement?.render[1][0] === "clap"
            ? giphy
            : yay
        }
        message={activeElement?.render[1] ? activeElement?.render[1][1] : ""}
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
    ),
    singleSelect: (
      <SingleSelect
        authProcessing={authProcessing}
        setAuthProcessing={setAuthProcessing}
      />
    ),
  });

  useEffect(() => {
    if (chatDivRef.current) {
      chatDivRef.current.scrollTo({
        top: chatDivRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatPool]);

  console.log({ details, kot: kindOfTasks(details) });

  const myPad = activeElement.render[0] == "freeText" ? "pb-24" : "pb-6";

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
      <div
        ref={chatDivRef}
        className="overflow-y-scroll scroll-smooth scroll-m-0 relative mychat overflow-auto relative mt-16 z-0"
      >
        <div className={`flex flex-col drop-shadow-lg gap-2 ${myPad} pt-5 z-0`}>
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
            <div className="flex justify-center">
              {elements(activeElement.render[1])[activeElement.render[0]]}
            </div>
          )}

        {activeElement.render[0] === "multiSelect" && (
          <div className="flex flex-col justify-start">
            <div className="flex flex-row flex-wrap gap-1">
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
            </div>
            <div className="w-full flex justify-center">
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
          </div>
        )}

        {activeElement?.render[0] === "singleSelect" && (
          <div className="flex flex-wrap justify-start gap-2 pb-5">
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

        {activeElement?.render[0] === "image" && (
          <div className="flex flex-wrap justify-start gap-2 py-10 mb-14"></div>
        )}
        {/* {authButton && (
          
        )} */}
      </div>
    </div>
  );
};

export default Chat;
