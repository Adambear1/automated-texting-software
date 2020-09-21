import React from "react";
import "./styles.css";
import History from "../../components/History";
import Input from "../../components/Input";

function Home() {
  return (
    <div className="container">
      <div className="row input-row">
        <div className="col-12 ">
          <Input />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <History />
        </div>
      </div>
    </div>
  );
}

export default Home;
