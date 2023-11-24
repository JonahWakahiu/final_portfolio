import { Link } from "react-router-dom";
import Profile from "../../assets/user2.jpg";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home grid">
      <img src={Profile} alt={Profile} className="home_img" />

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>I'm Jonah Wakahiu. </span>
            Web designer
          </h1>

          <p className="home_desc">
            I'm a Kenyan based web designer & front-end developer focused on
            crafting clean & user-friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>

          <Link to="/about" className="button">
            More About Me
            <span className="button_icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color_block"></div>
    </section>
  );
};
export default Home;
