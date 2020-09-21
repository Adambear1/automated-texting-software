import React from "react";
import "./styles.css";

function HistoryCard(props) {
  return (
    <div class="history-card">
      <div class="col-2">{props.date}</div>
      <div class="col-2">{props.type}</div>
      <div class="col-4">{props.address}</div>
      <div class="col-4">{props.name}</div>
    </div>
  );
}

export default HistoryCard;
