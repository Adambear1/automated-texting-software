import React from "react";
import "./styles.css";

function HistoryTypeFilters(props) {
  return (
    <div className="box-type-filters">
      <ul className="box-type-filters-ul">
        <li className="box-type-filters-li">
          <button type="button" onClick={props.all}>
            All
          </button>
        </li>
        <li className="box-type-filters-li">
          <button type="button" onClick={props.cancelledExpired}>
            Cancelled/Expired
          </button>
        </li>
        <li className="box-filters-li">
          <button type="button" onClick={props.FSBO}>
            FSBO
          </button>
        </li>
        <li className="box-filters-li">
          <button type="button" onClick={props.foreclosure}>
            Foreclosure
          </button>
        </li>
      </ul>
    </div>
  );
}

export default HistoryTypeFilters;
