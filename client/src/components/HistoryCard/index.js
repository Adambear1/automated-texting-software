import React from "react";
import "./styles.css";

function HistoryCard(props) {
  return (
    <div class="history-card">
      <ul class="history-ul">
        <li class="history-li">{`${props.date}`}</li>
        <li class="history-li">{`${props.type}`}</li>
        <li class="history-li">{`${props.address}`}</li>
        <li class="history-li">{`${props.name}`}</li>
        <li class="history-li">
          <button type="button" onClick={props.send}>
            <i class="fas fa-share-square"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default HistoryCard;
