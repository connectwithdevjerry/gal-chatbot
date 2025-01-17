const ImageDisplay = ({ image, message }) => {
  return (
    <div className="purple w-64 p-2.5 rounded-2xl rounded-bl-none">
      <img className="w-64 rounded-md" src={image} alt="yay" />
      <p className="mt-2 text-slate-100">{message}</p>
    </div>
  );
};

export default ImageDisplay;
