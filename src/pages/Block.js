import React, { useState } from "react";
import "./block.css";
import ft2 from "../assets/ft2.png";

import { useNavigate, useLocation } from "react-router-dom";

import floors from "./Floors";

const Block = () => {
  const [tooltipText, setTooltipText] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMouseEnter = (event, text) => {
    setTooltipText(text);
    setIsVisible(true);
    setTooltipPosition({ x: event.pageX + 10, y: event.pageY + 10 });
  };

  const handleMouseMove = (event) => {
    setTooltipPosition({ x: event.pageX + 10, y: event.pageY + 10 });
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const selectedBlock = location.state?.block; // "A", "B", or "C"

  console.log("Selected Block:", selectedBlock);
  const handleClick = (floor) => {
    const floorNumber = floor.floorNumber || parseInt(floor.id.match(/\d+/)?.[0]);
  
    let targetPath = "/plan"; // default
  
    if (selectedBlock === "A") {
      targetPath = "/plana";
      
    } else if (selectedBlock === "B") {
      targetPath = "/planb";
    } else if (selectedBlock === "C") {
      targetPath = "/planc";
    }
  
    navigate(targetPath, {
      state: { floorNumber, block: selectedBlock },
    });
  };
  let filteredFloors = [];
  if (selectedBlock === "A") {
    filteredFloors = floors.filter((floor) => {
      const number = parseInt(floor.id.match(/\d+/)?.[0]);
      return number >= 1 && number <= 24;
    });
  } else if (selectedBlock === "B") {
    filteredFloors = floors.filter((floor) => {
      const number = parseInt(floor.id.match(/\d+/)?.[0]);
      return number >= 1 && number <= 26;
    });
  } else if (selectedBlock === "C") {
    filteredFloors = floors.filter((floor) => {
      const number = parseInt(floor.id.match(/\d+/)?.[0]);
      return number >= 1 && number <= 27;
    });  }


  return (
    <div>
      <div
        className="tooltip"
        style={{
          position: "absolute",
          left: `${tooltipPosition.x}px`,
          top: `${tooltipPosition.y}px`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "5px",
          borderRadius: "3px",
        }}
      >
        {tooltipText}
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6000 6000">
        <title>ft2</title>
        <defs>
          <image width={6000} height={6000} id="ft2" href={ft2} />
          <filter x="-50%" y="-50%" width="200%" height="200%" id="f1">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        <g id="Layer 1">
          <use id="Background" href="#ft2" transform="matrix(1,0,0,1,0,0)" />
          {filteredFloors.map((floor) => (
            <path
              key={floor.id}
              data-tooltip={floor.tooltip}
              id={floor.id}
              fillRule="evenodd"
              className={floor.id}
              d={floor.path}
              onMouseEnter={(e) => handleMouseEnter(e, floor.tooltip)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(floor)} // << make sure to pass floor here
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Block;
