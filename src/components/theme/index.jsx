import { useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { themes } from "../../data";
import ThemeImage from "../ThemeImage";
import "./theme.css";

const getLocalStorageColor = () => {
  let color = "chartreuse";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }
  return color;
};

const getLocalStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Theme = () => {
  const [showSwitcher, setShowSwitcher] = useState(true);
  const [color, setColor] = useState(getLocalStorageColor());
  const [theme, setTheme] = useState(getLocalStorageTheme());

  const handleShowSwitcher = () => {
    setShowSwitcher(!showSwitcher);
  };

  const handleSetColor = (color) => {
    setColor(color);
  };

  const handleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--main-color", color);
    localStorage.setItem("color", color);
  }, [color]);
  return (
    <>
      <div className={`${showSwitcher ? "show-switcher" : ""} style_switcher`}>
        <div className="style_switcher-toggler" onClick={handleShowSwitcher}>
          <FaCog />
        </div>

        <div className="theme_toggler" onClick={handleTheme}>
          {theme === "light-theme" ? <BsMoon /> : <BsSun />}
        </div>

        <h3 className="style_switcher-title">Style Switcher</h3>
        <div className="style_switcher-items">
          {themes.map((theme, index) => {
            return (
              <ThemeImage key={index} {...theme} handleColor={handleSetColor} />
            );
          })}
        </div>

        <div className="style_switcher-close" onClick={handleShowSwitcher}>
          &times;
        </div>
      </div>
    </>
  );
};
export default Theme;
