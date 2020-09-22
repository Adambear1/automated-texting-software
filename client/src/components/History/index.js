import React, { useEffect, useContext, useState } from "react";
// utils
import "./styles.css";
// utils
import API from "../../utils/API";
// components
import { Context } from "../Context";
import HistoryCard from "../HistoryCard";
import HistoryFilters from "../HistoryFilters";

function History() {
  const { value, setValue } = useContext(Context);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(value);
    API.get()
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setValue(false);
  }, [value]);
  function dateHigh() {
    API.dateHigh()
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function dateLow() {
    API.dateLow()
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function typeHigh() {
    API.typeHigh()
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function typeLow() {
    API.typeLow()
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function addressHigh() {
    API.addressHigh()
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function addressLow() {
    API.addressLow()
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function nameHigh() {
    API.nameHigh()
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function nameLow() {
    API.nameLow()
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="container">
      <div className="box">
        <HistoryFilters
          dateHigh={dateHigh}
          dateLow={dateLow}
          typeHigh={typeHigh}
          typeLow={typeLow}
          addressHigh={addressHigh}
          addressLow={addressLow}
          nameHigh={nameHigh}
          nameLow={nameLow}
        />
        {data.map((item) => {
          return (
            <HistoryCard
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
