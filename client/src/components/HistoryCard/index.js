import React from "react";
import "./styles.css";

function HistoryCard(props) {
  return (
    <div class="history-card">
      <ul class={`history-ul ${props.setClass}`}>
        <li class="history-li">{`${props.date}`}</li>
        <li class="history-li">{`${props.type}`}</li>
        <li class="history-li">{`${props.amount}`}</li>
        <li class="history-li">{`${props.address}`}</li>
        <li class="history-li">{`${props.city}`}</li>
        <li class="history-li">{`${props.county}`}</li>
        <li class="history-li">{`${props.name}`}</li>
        <div>
          <button type="button" onClick={props.send}>
            <i class="far fa-paper-plane" id={`${props.id}`}></i>
          </button>
        </div>
        <div>
          <button type="button" onClick={props.delete}>
            <i class="far fa-trash-alt" id={`${props.id}`}></i>
          </button>
        </div>
      </ul>
    </div>
  );
}

export default HistoryCard;
