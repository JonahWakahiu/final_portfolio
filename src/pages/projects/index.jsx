import PortfolioItem from "../../components/PortfolioItem";
import { portfolio } from "../../data";
import "./project.css";

const Projects = () => {
  return (
    <section className="project section">
      <h3 className="section_title">
        My <span>Projects</span>
      </h3>

      <div className="project_container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
