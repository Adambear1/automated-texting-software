import React from "react";

function InputSend(props) {
  return (
    <button type="submit" onClick={props.send}>
      <i class="far fa-paper-plane"></i>
    </button>
  );
}

export default InputSend;
