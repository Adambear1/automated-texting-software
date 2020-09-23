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
  function remove(e, id) {
    e.stopPropagation();
    API.remove({ _id: id })
      .then((data) => {
        setValue(true);
        // setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="container">
      <HistoryTypeFilters
        all={() => {
          getAll();
          setState("");
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
            console.log(data);
          }}
          dateLow={() => {
            FilterAPICalls.dateLow(API, setData, state);
            console.log(data);
          }}
          typeHigh={() =>
            state
              ? FilterAPICalls.typeHigh(API, setData, state)
              : FilterAPICalls.typeHighAll(API, setData)
          }
          typeLow={() =>
            state
              ? FilterAPICalls.typeLow(API, setData, state)
              : FilterAPICalls.typeLowAll(API, setData)
          }
          addressHigh={() =>
            state
              ? FilterAPICalls.addressHigh(API, setData, state)
              : FilterAPICalls.addressHighAll(API, setData)
          }
          addressLow={() =>
            state
              ? FilterAPICalls.addressLow(API, setData, state)
              : FilterAPICalls.addressLowAll(API, setData)
          }
          nameHigh={() =>
            state
              ? FilterAPICalls.nameHigh(API, setData, state)
              : FilterAPICalls.nameHighAll(API, setData)
          }
          nameLow={() =>
            state
              ? FilterAPICalls.nameLow(API, setData, state)
              : FilterAPICalls.nameLowAll(API, setData)
          }
        />
        {data.map((item) => {
          return (
            <HistoryCard
              setClass={SetClass(item.type, item.date)}
              date={item.date}
              type={item.type}
              address={item.address}
              name={item.name}
              id={item._id}
              delete={(e) => {
                console.log(e.target);
                remove(e, e.target.id);
              }}
              // send={send}
            />
          );
        })}
      </div>
    </div>
  );
}

export default History;
