import React from "react";
import "./styles.css";

function InputSend(props) {
  return (
    <div className="input-button-submit text-center mt-2">
      <button type="submit" onClick={props.send}>
        <i className="far fa-paper-plane fa-3x "></i>
      </button>
    </div>
  );
}

export default InputSend;
