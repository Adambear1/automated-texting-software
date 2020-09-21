import React, { useState, useEffect } from "react";
import InputCancelledExpired from "../InputCancelledExpired";
import InputForeclosure from "../InputForeclosure";
import InputFSBO from "../InputFSBO";
import InputMain from "../InputMain";
import InputSend from "../InputSend";

function Input() {
  const [data, setData] = useState();
  const [type, setType] = useState();
  const [component, setComponent] = useState({
    Cancelled: <InputCancelledExpired data={onChange} type={type} />,
    Expired: <InputCancelledExpired data={onChange} type={type} />,
    Foreclosure: <InputForeclosure data={onChange} />,
    FSBO: <InputFSBO data={onChange} />,
  });
  useEffect(() => {
    console.log(data);
    console.log(type);
  }, [data, type]);
  function onChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <form>
      <InputMain
        data={onChange}
        type={(e) => {
          setType(e.target.value);
        }}
      />
      {type && component[type]}
      <div className="row">
        <div className="col-12 align-item-center">
          <InputSend send={onSubmit} />
        </div>
      </div>
    </form>
  );
}

export default Input;
