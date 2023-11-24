import { FaDownload } from "react-icons/fa";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";
import JonahCv from "../../assets/JonahCv.pdf";
import "./about.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section_title" id="section_title">
          About <span>Me</span>
        </h2>

        <div className="about_container grid">
          <div className="about_info">
            <h3 className="section_subtitle">Personal Infos</h3>

            <ul className="info_list grid">
              <Info />
            </ul>
            <a href={JonahCv} className="button" download>
              Download Cv
              <span className="button_icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>

        <div className="separator"></div>

        <section className="skills">
          <h3 className="section_subtitle subtitle-center">My Skills</h3>

          <div className="skills_container grid">
            <Skills />
          </div>
        </section>

        <div className="separator"></div>

        <section className="resume">
          <h3 className="section_subtitle subtitle-center">
            Experience & Education
          </h3>

          <div className="resume_container grid">
            <div className="resume_data">
              {resume.map((val) => {
                if (val.category === "experience") {
                  return <ResumeItem key={val.id} {...val} />;
                }
              })}
            </div>

            <div className="resume_data">
              {resume.map((val) => {
                if (val.category === "education") {
                  return <ResumeItem key={val.id} {...val} />;
                }
              })}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};
export default About;
