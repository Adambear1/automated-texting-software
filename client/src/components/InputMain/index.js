import React from "react";

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
          onChange={props.type}
        >
          <option
            defaultValue="true"
            placeholder="Select One..."
            disabled="true"
          ></option>
          <option value="Cancelled">Cancelled</option>
          <option value="Expired">Expired</option>
          <option value="Foreclosure">Foreclosure</option>
          <option value="FSBO">FSBO</option>
        </select>
      </div>
    </>
  );
}

export default InputMain;
