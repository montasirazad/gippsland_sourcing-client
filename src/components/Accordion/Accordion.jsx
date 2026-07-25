import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ singleData }) => {
  const [open, setOpen] = useState(false);
  const { title, data } = singleData;

  return (
    <div className="accordion-data-div-main">
      <div className="accordion-title-div">
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          {/* <button onClick={() => setOpen(!open)}>{open ? "➖" : '➕'}</button> */}
          <button
            className={`accordion-data-div-main-button ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            {open ? "-" : "+"}
          </button>
        </div>
      </div>

      <div className={`accordion-data-div ${open ? "active" : ""}`}>
        <p>{open && data}</p>
      </div>
    </div>
  );
};

export default Accordion;
