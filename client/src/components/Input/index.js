import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
// utils
import { zipcodes } from "../../utils/zipcodes";
import { cities } from "../../utils/cities";
import { format } from "../../utils/DateFormatter";
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
  useEffect(() => {
    try {
      if (data["type"]) {
        document
          .getElementsByClassName("form-date")[0]
          .classList.removeClass("hide");
      }
      // if (date["type"] === "Foreclosure") {
      //   document
      //     .getElementsByClassName("form-foreclosure")[0]
      //     .classList.removeClass("hide");
      //   document
      //     .getElementsByClassName("form-date")[0]
      //     .classList.removeClass("hide");
      // }
    } catch (error) {
      console.log(error);
    }
    console.log(date);
  }, [data]);
  function onChange(e) {
    setData({ ...data, ...date, [e.target.name]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
    API.post(data)
      .then((data) => {
        setValue(true);
        setState("Success");
        setTimeout(() => {
          setState(null);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setState("Error");
        setTimeout(() => {
          setState(null);
        }, 2000);
      });
  }
  return (
    <form onSubmit={onSubmit}>
      <InputMain
        data={onChange}
        date={(e) => {
          setDate({ [e.target.name]: format(e.target.value) });
        }}
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
