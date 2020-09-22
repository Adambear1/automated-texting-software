import React, { useEffect, useContext, useState } from "react";
// styling
import "./styles.css";
// utils
import { TypeFilterAPICalls } from "../../utils/TypeFilterAPICalls";
import { FilterAPICalls } from "../../utils/FilterAPICalls";
import { SetClass } from "../../utils/SetClass";
import API from "../../utils/API";
// components
import { Context } from "../Context";
import HistoryCard from "../HistoryCard";
import HistoryFilters from "../HistoryFilters";
import HistoryTypeFilters from "../HistoryTypeFilters";

function History() {
  const { value, setValue } = useContext(Context);
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll();
    console.log(state);
  }, [value]);
  function getAll() {
    API.get()
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setValue(false);
  }
  return (
    <div className="container">
      <HistoryTypeFilters
        all={() => {
          getAll();
          setState({ type: "" });
        }}
        cancelledExpired={() => {
          TypeFilterAPICalls.cancelledExpired(API, setData);
          setState({ type: "Cancelled" });
        }}
        FSBO={() => {
          TypeFilterAPICalls.FSBO(API, setData);
          setState({ type: "FSBO" });
        }}
        foreclosure={() => {
          TypeFilterAPICalls.foreclosure(API, setData);
          setState({ type: "Foreclosure" });
        }}
      />
      <div className="box">
        <HistoryFilters
          dateHigh={() => {
            FilterAPICalls.dateHigh(API, setData, state);
          }}
          dateLow={() => FilterAPICalls.dateLow(API, setData, state)}
          typeHigh={() => FilterAPICalls.typeHigh(API, setData, state)}
          typeLow={() => FilterAPICalls.typeLow(API, setData, state)}
          addressHigh={() => FilterAPICalls.addressHigh(API, setData, state)}
          addressLow={() => FilterAPICalls.addressLow(API, setData, state)}
          nameHigh={() => FilterAPICalls.nameHigh(API, setData, state)}
          nameLow={() => FilterAPICalls.nameLow(API, setData, state)}
        />
        {data.map((item) => {
          // DateComparison(item.type, item.date, today);
          return (
            <HistoryCard
              // icon={() => {

              // }}
              setClass={SetClass(item.type, item.date)}
              date={item.date}
              type={item.type}
              address={item.address}
              name={item.name}
              // send={send}
            />
          );
        })}
      </div>
    </div>
  );
}

export default History;
