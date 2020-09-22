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
  const [data, setData] = useState([]);
  useEffect(() => {
    all();
  }, [value]);
  function all() {
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
        all={() => all()}
        cancelledExpired={() =>
          TypeFilterAPICalls.cancelledExpired(API, setData)
        }
        FSBO={() => TypeFilterAPICalls.FSBO(API, setData)}
        foreclosure={() => TypeFilterAPICalls.foreclosure(API, setData)}
      />
      <div className="box">
        <HistoryFilters
          dateHigh={() => {
            FilterAPICalls.dateHigh(API, setData);
          }}
          dateLow={() => FilterAPICalls.dateLow(API, setData)}
          typeHigh={() => FilterAPICalls.typeHigh(API, setData)}
          typeLow={() => FilterAPICalls.typeLow(API, setData)}
          addressHigh={() => FilterAPICalls.addressHigh(API, setData)}
          addressLow={() => FilterAPICalls.addressLow(API, setData)}
          nameHigh={() => FilterAPICalls.nameHigh(API, setData)}
          nameLow={() => FilterAPICalls.nameLow(API, setData)}
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
