import React from "react";

function InputCancelledExpired(props) {
  return (
    <div>
      <div class="row">
        <div class="col-12">
          <label for="form-cancelled-expired">Date {props.type}</label>
          <input
            name="takedown_date"
            type="date"
            class="form-control"
            id="form-cancelled-expired"
            onChange={props.data}
          />
        </div>
      </div>
    </div>
  );
}

export default InputCancelledExpired;
