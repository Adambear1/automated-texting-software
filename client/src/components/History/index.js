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
import Loader from "../Loader";
import { CurrencyFormat } from "../../utils/CurrencyFormat";

function History() {
  const { value, setValue } = useContext(Context);
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAll();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
    API.remove(id)
      .then((data) => {
        setValue(true);
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
          amountHigh={() =>
            state
              ? FilterAPICalls.amountHigh(API, setData, state)
              : FilterAPICalls.amountHighAll(API, setData)
          }
          amountLow={() =>
            state
              ? FilterAPICalls.amountLow(API, setData, state)
              : FilterAPICalls.amountLowAll(API, setData)
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
          cityHigh={() =>
            state
              ? FilterAPICalls.cityHigh(API, setData, state)
              : FilterAPICalls.cityHighAll(API, setData)
          }
          cityLow={() =>
            state
              ? FilterAPICalls.cityLow(API, setData, state)
              : FilterAPICalls.cityLowAll(API, setData)
          }
          countyHigh={() =>
            state
              ? FilterAPICalls.countyHigh(API, setData, state)
              : FilterAPICalls.countyHighAll(API, setData)
          }
          countyLow={() =>
            state
              ? FilterAPICalls.countyLow(API, setData, state)
              : FilterAPICalls.countyLowAll(API, setData)
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

        {loading ? (
          <Loader />
        ) : (
          data.map((item) => {
            return (
              <HistoryCard
                key={item._id}
                setClass={SetClass(item.type, item.date)}
                date={item.date}
                type={item.type}
                amount={CurrencyFormat(+item.amount)}
                address={item.address}
                city={item.city}
                county={item.county}
                name={item.name}
                id={item._id}
                delete={(e) => {
                  console.log(e.target);
                  remove(e, e.target.id);
                }}
                // send={send}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default History;
