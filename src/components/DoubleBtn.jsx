import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { app } from "../firebase";

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
}) => {
  const handleClick = async (val) => {
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
      // await handleSignupWithGoogle();
      setAuthProcessing(true);
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      try {
        const user = await signInWithPopup(auth, provider);
        // const user = await signInWithRedirect(auth, provider);
        const email = user._tokenResponse.email;
        setDetails({ ...details, email });

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
