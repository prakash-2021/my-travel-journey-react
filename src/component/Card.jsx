import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src="/images/location.png" className="card__img" />
      <div>
        <div className="card__location">
          {props.location}
          <span className="card__text-gray">View on Google Map</span>
        </div>
        <h2>{props.title}</h2>
        <p className="card__date">{props.date}</p>
        <p className="card__description">{props.desc}</p>
      </div>
    </div>
  );
}
