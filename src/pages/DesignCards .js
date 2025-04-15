import React, { useState } from "react";
import "./DesignCards.css";

const TabCard = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState("2d");

  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>

      <div className="tabs">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            className={activeTab === key ? "tab active" : "tab"}
            onClick={() => setActiveTab(key)}
          >
            {tabs[key].label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <img src={tabs[activeTab].image} alt={tabs[activeTab].label} />
        <h4>{tabs[activeTab].title}</h4>
        <p>{tabs[activeTab].description}</p>
      </div>
    </div>
  );
};

export const DesignCards = () => {
  const cardData = [
    {
      title: "Studio",
      tabs: {
        "2d": {
          label: "2D Design",
          image: "https://placehold.co/300x200",
          title: "Blueprint Layout",
          description: "Detailed 2D blueprint of the initial layout."
        },
        "3d": {
          label: "3D Design",
          image: "https://placehold.co/300x200",
          title: "3D Model Preview",
          description: "Visualized 3D version with spatial dimensions."
        }
      }
    },
    {
      title: "Two Bedroom",
      tabs: {
        "2d": {
          label: "2D Design",
          image: "https://placehold.co/300x200",
          title: "Floor Plan",
          description: "Architectural plan showcasing room layout."
        },
        "3d": {
          label: "3D Design",
          image: "https://placehold.co/300x200",
          title: "Interior Render",
          description: "High-quality interior 3D rendering."
        }
      }
    },
    {
      title: "Three Bedroom",
      tabs: {
        "2d": {
          label: "2D Design",
          image: "https://placehold.co/300x200",
          title: "Wireframe Sketch",
          description: "2D wireframe structure of the concept."
        },
        "3d": {
          label: "3D Design",
          image: "https://placehold.co/300x200",
          title: "3D Structure",
          description: "Finalized 3D model with textures."
        }
      }
    }
  ];

  return (
    <div className="card-container">
      {cardData.map((card, idx) => (
        <TabCard key={idx} title={card.title} tabs={card.tabs} />
      ))}
    </div>
  );
};
