import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
// utils
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
  const [data, setData] = useState();
  const [state, setState] = useState({});
  const [status, setStatus] = useState({
    Success: <InputSuccess />,
    Fail: <InputFail />,
    Error: <InputError />,
  });
  useEffect(() => {
    try {
      console.log(data["type"]);
      if (data["type"] === "Cancelled" || data["type"] === "Expired") {
        console.log(
          document.getElementsByClassName("form-cancelled-expired")[0]
        );
        document
          .getElementsByClassName("form-cancelled-expired")[0]
          .classList.remove("hide");
        document
          .getElementsByClassName("form-fsbo")[0]
          .classList.addClass("hide");
        document
          .getElementsByClassName("form-foreclosure")[0]
          .classList.addClass("hide");
      }
      if (data["type"] === "FSBO") {
        document
          .getElementsByClassName("form-cancelled-expired")[0]
          .classList.add("hide");
        document
          .getElementsByClassName("form-fsbo")[0]
          .classList.remove("hide");
        document
          .getElementsByClassName("form-foreclosure")[0]
          .classList.addClass("hide");
      }
      if (data["type"] === "Foreclosure") {
        document
          .getElementsByClassName("form-cancelled-expired")[0]
          .classList.add("hide");
        document.getElementsByClassName("form-fsbo")[0].classList.add("hide");
        document
          .getElementsByClassName("form-foreclosure")[0]
          .classList.remove("hide");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }, [data]);
  function onChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
    if (!data) {
      setState("Fail");
      setTimeout(() => {
        setState(null);
      }, 2000);
    }
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
        type={() => {
          try {
            return data["type"];
          } catch (error) {
            console.log(error);
          }
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
