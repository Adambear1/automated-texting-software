import React, { useState, useEffect } from "react";
// utils
import API from "../../utils/API";
// components
import InputCancelledExpired from "../InputCancelledExpired";
import InputForeclosure from "../InputForeclosure";
import InputFSBO from "../InputFSBO";
import InputMain from "../InputMain";
import InputSend from "../InputSend";
import InputSuccess from "../InputSuccess";
import InputFail from "../InputFail";
import InputError from "../InputError";

function Input() {
  const [data, setData] = useState();
  const [type, setType] = useState();
  const [component, setComponent] = useState({
    Cancelled: <InputCancelledExpired data={onChange} type={type} />,
    Expired: <InputCancelledExpired data={onChange} type={type} />,
    Foreclosure: <InputForeclosure data={onChange} />,
    FSBO: <InputFSBO data={onChange} />,
  });
  const [state, setState] = useState({});
  const [status, setStatus] = useState({
    Success: <InputSuccess />,
    Fail: <InputFail />,
    Error: <InputError />,
  });

  useEffect(() => {}, [data, type]);
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
        setState("Success");
        setTimeout(() => {
          setState(null);
        }, 2000);
      })
      .catch((err) => {
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
        type={(e) => {
          setType(e.target.value);
        }}
      />
      {type && component[type]}
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
