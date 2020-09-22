import React, { useEffect, useContext, useState } from "react";
// utils
import "./styles.css";
// utils
import API from "../../utils/API";
// components
import { Context } from "../Context";
import HistoryCard from "../HistoryCard";

function History() {
  const { value, setValue } = useContext(Context);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(value);
    API.get()
      .then((data) => {
        setData([data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
    setValue(false);
  }, [value]);
  function send(data) {
    API.sendOld(data)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="container">
      <div className="box">
        {data.map((item) => {
          console.log(item);
          return (
            <HistoryCard
              date={item.auction_date ? item.auction_date : item.takedown_date}
              type={item.type}
              address={item.address}
              name={item.name}
              send={send}
            />
          );
        })}
      </div>
    </div>
  );
}

export default History;
