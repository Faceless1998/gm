import React from "react";
import PlanImage from "./../assets/1.jpg";

const Plan = () => {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1684 2381"
      width={1684}
      height={2381}
      style={{ position: "relative" , marginTop:"100px"}}
    >
      <defs>
        <image width={1684} height={2381} id="img1" href={PlanImage} />
        <style>
          {`
  .clickable {
  fill: rgba(255, 255, 255, 0.4);
  stroke: #0000ff;
  stroke-width: 0.5;
  cursor: pointer;
  transition: fill 0.3s ease;
}

.clickable:hover {
  fill: #ffe066;
}

.info-group {
  transition: transform 0.5s ease-in-out;
  transform-origin: center;
  pointer-events: none;
}

/* Animate to center of path on hover */
a:hover .info-group {
  transform: translate(536px, 1584.5px) scale(1.3);
}

.info-bg {
  fill: #3399ff;
  stroke: white;
  stroke-width: 1;
  rx: 5;
  ry: 5;
  transition: fill 0.4s ease, transform 0.4s ease;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

a:hover .info-bg {
  fill: #1164c3;
  transform: scale(1.15);
}

.info-text {
  fill: white;
  font-size: 16px;
  font-family: Arial, sans-serif;
}

.area-text {
  fill: white;
  font-size: 14px;
  font-weight: bold;
}

`}
        </style>
      </defs>

      <g id="Layer 1">
        <use href="#img1" transform="matrix(1,0,0,1,0,0)" />

        <a href="/apartment" aria-label="Apartment N-1">
          <path
            id="appt-n1"
            className="clickable"
            d="M278 1733 L794 1729 V1576 L610 1572 L611 1436 H284 Z"
          />
          <g className="info-group" transform="translate(400,1500)">
            <rect className="info-bg" width="120" height="50" x="-10" y="-40" />
            <text className="info-text" x="0" y="-20">
              APPT N-1
            </text>
            <text className="area-text" x="0" y="0">
              219 sq.m
            </text>
          </g>
        </a>
      </g>
    </svg>
  );
};

export default Plan;
