import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
// utils
import { zipcodes } from "../../utils/zipcodes";
import { cities } from "../../utils/cities";
import { format } from "../../utils/DateFormatter";
import { Alert } from "../../utils/FormAlert";
import API from "../../utils/API";
// components
import { Context } from "../Context";
import InputMain from "../InputMain";
import InputSend from "../InputSend";
import InputSuccess from "../InputSuccess";
import InputFail from "../InputFail";
import InputError from "../InputError";

function Input() {
  const { value, setValue } = useContext(Context);
  const [data, setData] = useState({});
  const [date, setDate] = useState({});
  const [state, setState] = useState({});
  const [status, setStatus] = useState({
    Success: <InputSuccess />,
    Fail: <InputFail />,
    Error: <InputError />,
  });
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");

  useEffect(() => {
    try {
      if (data["type"]) {
        document
          .getElementsByClassName("form-date")[0]
          .classList.remove("hide");
      }
      if (data["type"] === "Foreclosure") {
        document
          .getElementsByClassName("form-foreclosure")[0]
          .classList.remove("hide");
        document
          .getElementsByClassName("form-date")[0]
          .classList.remove("hide");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }, [data]);
  useEffect(() => {
    zipcodes.map((item) => {
      for (const cities in item) {
        item[cities].map((zc) => {
          if (+zc === +zipcode) {
            setCity(cities.split("_").join(" "));
          }
        });
      }
    });
  }, [zipcode]);
  useEffect(() => {
    cities.map((item) => {
      for (const counties in item) {
        item[counties].map((cnty) => {
          if (cnty === city) {
            setCounty(counties.split("_").join(" "));
          }
        });
      }
    });
  }, [city]);
  function onChange(e) {
    setData({
      ...data,
      ...date,
      ...city,
      ...zipcode,
      ...county,
      [e.target.name]: e.target.value,
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    API.post(data)
      .then((data) => {
        setValue(true);
        Alert(setState, "Success");
      })
      .catch((err) => {
        console.log(err);
        Alert(setState, "Error");
      });
  }
  return (
    <form onSubmit={onSubmit}>
      <InputMain
        data={onChange}
        date={(e) => {
          setDate({ [e.target.name]: format(e.target.value) });
        }}
        zipcode={(e) => setZipcode(e.target.value)}
        type={data["type"] && data["type"]}
        city={city && `${city}${", "}`}
        county={county && `${county} County`}
      />
      {state && status[state]}
      <div className="row">
        <div className="col-12 align-item-center">
          <InputSend send={onSubmit} />
        </div>
      </div>
    </form>
  );
}

export default Input;
