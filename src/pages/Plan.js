import React from 'react'
import Logo from "./../assets/logo.png"
import PlanImage from './../assets/plan.jpg';


const Plan = () => {
  return (
    
    <div>
      <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      /* Custom Scrollbar Styles */\n      ::-webkit-scrollbar {\n        width: 16px;\n        height: 16px;\n      }\n\n      ::-webkit-scrollbar-track {\n        background-color: #f1f1f1;\n        border-radius: 8px;\n        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);\n      }\n\n      ::-webkit-scrollbar-thumb {\n        background-color: #3115e7;\n        border-radius: 8px;\n        border: 4px solid #f1f1f1;\n        transition: background-color 0.3s ease;\n      }\n\n      ::-webkit-scrollbar-thumb:hover {\n        background-color: #e3c729;\n      }\n\n      ::-webkit-scrollbar-horizontal {\n        height: 16px;\n      }\n\n      body {\n        margin: 0;\n        padding: 0;\n        background-color: #f4f4f4;\n      }\n\n      .header_section {\n        background-color: rgba(\n          161,\n          189,\n          221,\n          0.1\n        ); /* Almost fully transparent */\n        padding: 5px 0;\n        width: 100%;\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 1000;\n        transition: background-color 0.3s ease-in-out;\n      }\n\n      .header_section.scrolled {\n        background-color: #1164c3; /* Solid color after scrolling */\n      }\n\n      .navbar {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 0 20px;\n      }\n\n      .navbar-brand img {\n        height: 40px;\n        width: 125px;\n      }\n\n      .navbar-nav {\n        display: flex;\n        gap: 20px;\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      .nav-item a {\n        text-decoration: none;\n        color: white;\n        font-size: 16px;\n        font-weight: bold;\n        transition: transform 0.3s ease, padding 0.3s ease;\n      }\n\n      .nav-item a:hover {\n        transform: scale(1.1);\n        padding: 12px 24px;\n      }\n\n      .User_option {\n        display: flex;\n        gap: 15px;\n        margin-left: auto;\n      }\n\n      .User_option a {\n        padding: 10px 20px;\n        border-radius: 5px;\n        text-decoration: none;\n        font-weight: bold;\n        transition: transform 0.3s ease, padding 0.3s ease;\n      }\n\n      .User_option a:first-child {\n        background-color: transparent;\n        border: 2px solid white;\n        color: white;\n      }\n\n      .User_option a:last-child {\n        background-color: #ff9800;\n        color: white;\n      }\n    "
    }}
  />
      {/* <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="" />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                HOME
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/#house">
                Blocks
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link" href="/Block">
                Floors
              </a>
            </li>
           
        
          </ul>
        </nav>
      </div>
    </header> */}





      <>
  {/* Centered Image with Overlay Boxes */}
  <div className="image-container">
  <img src={PlanImage} alt="Floor Plan" />

    {/* APPT N-1 (clickable) */}
    <a href="/apartment">
      <div className="overlay-box overlay-box-1">
        <div className="info-box">
          APPT N-1
          <div className="area-text">219 sq.m</div>
        </div>
      </div>
    </a>
    {/* APPT N-2 (SOLD, not clickable) */}
    <div className="overlay-box overlay-box-2">
      <div className="sold-box">SOLD</div>
    </div>
    {/* APPT N-3 (clickable) */}
    <a href="/apartment">
      <div className="overlay-box overlay-box-3">
        <div className="info-box">
          APPT N-3
          <div className="area-text">219 sq.m</div>
        </div>
      </div>
    </a>
    {/* APPT N-4 (clickable) */}
    <a href="/apartment">
      <div className="overlay-box overlay-box-4">
        <div className="info-box">
          APPT N-4
          <div className="area-text">219 sq.m</div>
        </div>
      </div>
    </a>
    {/* APPT N-5 (SOLD, not clickable) */}
    <div className="overlay-box overlay-box-5">
      <div className="sold-box">SOLD</div>
    </div>
    {/* APPT N-6 (clickable) */}
    <a href="/apartment">
      <div className="overlay-box overlay-box-6">
        <div className="info-box">
          APPT N-6
          <div className="area-text">219 sq.m</div>
        </div>
      </div>
    </a>
    {/* APPT N-7 (clickable) */}
    <a href="/apartment">
      <div className="overlay-box overlay-box-7">
        <div className="info-box">
          APPT N-7
          <div className="area-text">219 sq.m</div>
        </div>
      </div>
    </a>
  </div>
</>



    </div>



  )
}

export default Plan
