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
            <button onClick={props.dateLow}>
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
            <button onClick={props.typeLow}>
              <i className="fas fa-arrow-down"></i>
            </button>
          </>
        </li>
        <li className="box-filters-li">
          Amount
          <>
            <button onClick={props.amountHigh}>
              <i className="fas fa-arrow-up"></i>
            </button>
            <button onClick={props.typeLow}>
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
            <button onClick={props.addressLow}>
              <i className="fas fa-arrow-down"></i>
            </button>
          </>
        </li>
        <li className="box-filters-li">
          City
          <>
            <button onClick={props.cityHigh}>
              <i className="fas fa-arrow-up"></i>
            </button>
            <button onClick={props.cityLow}>
              <i className="fas fa-arrow-down"></i>
            </button>
          </>
        </li>
        <li className="box-filters-li">
          County
          <>
            <button onClick={props.countyHigh}>
              <i className="fas fa-arrow-up"></i>
            </button>
            <button onClick={props.countyLow}>
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
            <button onClick={props.nameLow}>
              <i className="fas fa-arrow-down"></i>
            </button>
          </>
        </li>
        <li className="box-filters-li">Action</li>
      </ul>
    </div>
  );
}

export default HistoryFilters;
