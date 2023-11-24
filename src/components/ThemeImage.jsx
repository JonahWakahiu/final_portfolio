import { FaDroplet } from "react-icons/fa6";
const ThemeImage = ({ color, handleColor }) => {
  const iconStyle = {
    color: color,
  };
  return (
    <FaDroplet
      style={iconStyle}
      className="theme_icon"
      onClick={() => handleColor(color)}
    />
  );
};
export default ThemeImage;
