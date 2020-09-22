import React from "react";
// import "./styles.css";
function InputMain(props) {
  return (
    <>
      <div class="form-group">
        <label for="form-name">Owner Name</label>
        <input
          autoFocus="true"
          name="name"
          type="text"
          class="form-control"
          onChange={props.data}
          id="form-name"
        />
      </div>
      <div class="form-group">
        <label for="form-address">Property Address</label>
        <input
          name="address"
          type="text"
          class="form-control"
          onChange={props.data}
          id="form-address"
        />
      </div>
      <div class="form-group">
        <label for="form-phoneNumber">Phone Number</label>
        <input
          name="phoneNumber"
          type="tel"
          class="form-control"
          onChange={props.data}
          id="form-phoneNumber"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
      </div>
      <div class="form-group">
        <label for="form-email">Email</label>
        <input
          name="email"
          type="email"
          class="form-control"
          id="form-email"
          onChange={props.data}
        />
      </div>
      <div class="form-group">
        <label for="form-type">Type</label>
        <select
          name="type"
          class="form-control"
          id="form-type"
          onChange={props.data}
        >
          <option defaultValue="true" placeholder="Select One..."></option>
          <option value="Cancelled">Cancelled</option>
          <option value="Expired">Expired</option>
          <option value="Foreclosure">Foreclosure</option>
          <option value="FSBO">FSBO</option>
        </select>
      </div>
      {/* Cancelled/Expired */}
      <div class="form-group ">
        <div class="form-cancelled-expired hide">
          <label for="form-cancelled-expired">Date {props.type}</label>
          <input
            name="takedown_date"
            type="date"
            class="form-control"
            id="form-cancelled-expired"
            onChange={props.date}
          />
        </div>
      </div>
      {/* FSBO */}
      <div class="form-group ">
        <div class="form-fsbo hide">
          <label for="form-list-site">Listing Site</label>
          <input
            name="list_site"
            type="text"
            class="form-control"
            id="form-list-site"
            onChange={props.data}
          />
        </div>
      </div>
      {/* Foreclosure */}
      <div class="form-group ">
        <div class="form-foreclosure hide">
          <label for="form-default-amount ">Default Amount</label>
          <input
            name="default_amount"
            type="number"
            class="form-control"
            id="form-default-amount"
            onChange={props.data}
          />
          <label for="form-auction-date">Auction Date</label>
          <input
            name="auction_date"
            type="date"
            class="form-control"
            id="form-auction-date"
            onChange={props.date}
          />
        </div>
      </div>
    </>
  );
}

export default InputMain;
