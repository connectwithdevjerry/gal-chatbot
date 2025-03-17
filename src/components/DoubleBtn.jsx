import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import axios from "axios";
import { app } from "../firebase";
import { trackEvent } from "../analytics";
import { LOCALHOST } from "../paths";

const DoubleBtn = ({
  authProcessing,
  handleSignupWithFacebook,
  handleSignupWithGoogle,
  details,
  setAuthProcessing,
  name,
  chatPool,
  setChatPool,
  setDetails,
  aiChatToShow,
}) => {
  const handleClick = async (val) => {
    trackEvent("signin_to_google", "button", "_In", aiChatToShow);
    if (val === "facebook") {
      setAuthProcessing(true);
      const auth = getAuth(app);
      const provider = new FacebookAuthProvider();
      try {
        const user = await signInWithPopup(auth, provider);
        // const user = await signInWithRedirect(auth, provider);
        const res = user.user;
        console.log({ res });

        setChatPool([
          ...chatPool,
          {
            message: name[1],
            me: true,
            seen: true,
            responseElement: ["noResponse"],
            dateTime: new Date(),
          },
        ]);
      } catch (error) {
        setAuthProcessing(false);
        console.log(error);
        return;
      } finally {
        setAuthProcessing(false);
      }
    } else if (val === "google") {
      // await handleupWithGoogle();
      setAuthProcessing(true);
      const auth = getAuth(app);

      const provider = new GoogleAuthProvider();
      try {
        const user = await signInWithPopup(auth, provider);
        // const user = await signInWithRedirect(auth, provider);
        const email = user._tokenResponse.email;

        const userUid = user.user.uid;

        const id = crypto.randomUUID();

        console.log({ referrer: id });
        console.log({ details: user.user.uid });

        setDetails({
          ...details,
          email,
          uid: userUid,
          referrer: id,
        });

        // save user details to google sheets

        console.log(details);

        // save data to google sheets

        axios
          .post(`${LOCALHOST}/save-to-google-sheets`, {
            ...details,
            rewardType: Object.keys(details?.rewardType || {})?.join(", "),
            kindOfTasks: Object.keys(details?.kindOfTasks || {})?.join(", "),
            funTasksTypes: Object.keys(details?.funTasksTypes || {})?.join(
              ", "
            ),
            shareHobbies1: Object.keys(details?.shareHobbies1 || {})?.join(
              ", "
            ),
            taskMotivation: Object.keys(details?.taskMotivation || {})?.join(
              ", "
            ),
            referrerId: id,
            uid: userUid,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.message || "failed to save");
          });

        setChatPool([
          ...chatPool,
          {
            message: name[0],
            me: true,
            seen: true,
            responseElement: ["noResponse"],
            dateTime: new Date(),
          },
        ]);
      } catch (error) {
        console.log(error);
        setAuthProcessing(false);
        return;
      } finally {
        setAuthProcessing(false);
      }
    }
  };

  return (
    <div className="flex justify-center gap-2">
      <button
        disabled={authProcessing}
        onClick={() => handleClick("facebook")}
        className="text-black cursor-pointer px-5 py-3 text-sm rounded-3xl yellow mt-4 mb-6"
      >
        {!authProcessing ? name[1] : "Sigining in..."}
      </button>
      <button
        disabled={authProcessing}
        onClick={() => handleClick("google")}
        className="text-black cursor-pointer px-5 py-3 text-sm rounded-3xl yellow mt-4 mb-6"
      >
        {!authProcessing ? name[0] : "Sigining in..."}
      </button>
    </div>
  );
};

export default DoubleBtn;
