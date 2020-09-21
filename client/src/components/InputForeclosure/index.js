import React from "react";

function InputForeclosure(props) {
  return (
    <div class="row">
      <div class="col-6">
        <label for="form-default-amount">Default Amount</label>
        <input
          name="default_amount"
          type="number"
          class="form-control"
          id="form-default-amount"
          onChange={props.data}
        />
      </div>
      <div class="col-6">
        <label for="form-auction-date">Auction Date</label>
        <input
          name="auction_date"
          type="date"
          class="form-control"
          id="form-auction-date"
          onChange={props.data}
        />
      </div>
    </div>
  );
}

export default InputForeclosure;
