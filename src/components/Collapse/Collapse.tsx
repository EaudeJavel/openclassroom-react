import React, { useState } from "react";
import "./Collapse.scss";

type CollapseProps = {
  title: string;
  content: string | string[];
};

const Collapse: React.FC<CollapseProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className={`collapse__icon ${isOpen ? "open" : ""}`}>
         <img src="/arrow.png" alt="arrow"/>
        </span>
      </button>
      {isOpen && (
        <div className="collapse__content">
          {Array.isArray(content) ? (
            <ul>
              <li>
                <p>
                  {content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </p>
              </li>
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
