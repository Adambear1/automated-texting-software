import React from "react";
import "./styles.css";

function HistoryFilters(props) {
  return (
    <div className="box-filters">
      <ul className="box-filters-ul">
        <li className="box-filters-li">
          Date
          <>
            <button onClick={props.dateHigh}>
              <i className="fas fa-arrow-up"></i>
            </button>
            <button onClick={props.dateDown}>
              <i className="fas fa-arrow-down"></i>
            </button>
          </>
        </li>
        <li className="box-filters-li">
          Type
          <>
            <button onClick={props.typeHigh}>
              <i className="fas fa-arrow-up"></i>
            </button>
            <button onClick={props.typeDown}>
              <i className="fas fa-arrow-down"></i>
            </button>
          </>
        </li>
        <li className="box-filters-li">
          Address
          <>
            <button onClick={props.addressHigh}>
              <i className="fas fa-arrow-up"></i>
            </button>
            <button onClick={props.addressDown}>
              <i className="fas fa-arrow-down"></i>
            </button>
          </>
        </li>
        <li className="box-filters-li">
          Name
          <>
            <button onClick={props.nameHigh}>
              <i className="fas fa-arrow-up"></i>
            </button>
            <button onClick={props.nameDown}>
              <i className="fas fa-arrow-down"></i>
            </button>
          </>
        </li>
      </ul>
    </div>
  );
}

export default HistoryFilters;
