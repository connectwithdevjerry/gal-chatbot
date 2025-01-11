import yay from "../assets/yay.webp";
import giphy from "../assets/giphy.webp";

const ImageDisplay = ({image}) => {
  return (
    <div className="purple p-2.5 rounded-2xl rounded-bl-none">
      <img className="w-64 rounded-md" src={image} alt="yay" />
      <p className="mt-2 text-slate-100">Games? A gamer in the house!</p>
    </div>
  );
};

export default ImageDisplay;
