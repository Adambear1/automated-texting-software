import React from "react";

function InputFSBO(props) {
  return (
    <div>
      <div class="row">
        <div class="col-12">
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
    </div>
  );
}

export default InputFSBO;
