import { personalInfo } from "../data";

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, desc }, index) => {
        return (
          <li className="info_item" key={index}>
            <span className="info_title">{title}</span>
            <span className="info_desc">{desc}</span>
          </li>
        );
      })}
    </>
  );
};
export default Info;
