import { useState } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="project_item">
      <img src={img} alt="" className="project_img" />

      <div className="project_hover" onClick={handleModal}>
        <h3 className="project_title">{title}</h3>
      </div>

      {modal && (
        <div className="project_modal">
          <div className="project_modal-content">
            <img
              src={Close}
              alt={Close}
              onClick={handleModal}
              className="modal_close"
            />

            <h3 className="modal_title">{title}</h3>

            <ul className="modal_list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modal_item" key={index}>
                    <span className="item_icon">{icon}</span>

                    <div>
                      <span className="item_title">{title}</span>
                      <span className="item_details">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <img src={img} className="modal_img" alt={img} />
          </div>
        </div>
      )}
    </div>
  );
};
export default PortfolioItem;
