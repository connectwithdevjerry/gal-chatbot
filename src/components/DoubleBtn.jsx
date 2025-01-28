const DoubleBtn = ({
  authProcessing,
  handleSignupWithFacebook,
  handleSignupWithGoogle,
  name,
  chatPool,
  setChatPool,
}) => {
  const handleClick = async (val) => {
    if (val === "facebook") {
      await handleSignupWithFacebook();
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
    } else if (val === "google") {
      await handleSignupWithGoogle();
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
    }
  };

  return (
    <div className="flex justify-center gap-2">
      <button
        disabled={authProcessing}
        onClick={() => handleClick("facebook")}
        className="text-black cursor-pointer px-5 py-3 text-sm rounded-3xl yellow mt-4 mb-6"
      >
        {name[1]}
      </button>
      <button
        disabled={authProcessing}
        onClick={() => handleClick("google")}
        className="text-black cursor-pointer px-5 py-3 text-sm rounded-3xl yellow mt-4 mb-6"
      >
        {name[0]}
      </button>
    </div>
  );
};

export default DoubleBtn;
