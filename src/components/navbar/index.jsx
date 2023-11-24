import { NavLink } from "react-router-dom";
import { links } from "../../data";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav_menu show-menu" : "nav_menu"}`}>
        <ul className="nav_list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav_item" key={index}>
                <NavLink
                  to={path}
                  onClick={handleShowMenu}
                  className={({ isActive }) =>
                    isActive ? "nav_link active-nav" : "nav_link"
                  }
                >
                  <div className="nav_icon">{icon}</div>
                  <h3 className="nav_name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        onClick={handleShowMenu}
        className={`${showMenu ? "nav_toggle animate-toggle" : "nav_toggle"}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
export default Navbar;
