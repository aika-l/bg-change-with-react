import React from "react";

const Button = ({ func, textCh }) => {
  return (
    <div className="bcColor">
      <p>
        Background Color: <span>{textCh}</span>
      </p>
      <button className="clickMe" onClick={func}>
        Click Me
      </button>
    </div>
  );
};
export default Button;
