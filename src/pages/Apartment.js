import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Apartment.css";

const Apartment = () => {
  const { apartmentNumber } = useParams();
  const [apartmentData, setApartmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  const imageUrls = [
    "https://placehold.co/800x500/31353b/ffffff?text=Living+Room",
    "https://placehold.co/800x500/3b3f46/ffffff?text=Bedroom",
    "https://placehold.co/800x500/2e3136/ffffff?text=Kitchen",
    "https://placehold.co/800x500/4a4f56/ffffff?text=Bathroom",
  ];

  useEffect(() => {
    if (!apartmentNumber) return;

    const fetchApartment = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/apartments/${apartmentNumber}`);
        setApartmentData(response.data);
      } catch (error) {
        console.error("Error fetching apartment data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApartment();
  }, [apartmentNumber]);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % imageUrls.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  const calculateTotalPrice = () => {
    return apartmentData ? apartmentData.price * apartmentData.squareMeter : 0;
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!apartmentData) return <div className="not-found">Apartment not found.</div>;

  return (
    <div className="apartment-wrapper">
      {/* Image Slider */}
      <div className="slider-box">
        <img src={imageUrls[currentImage]} alt="Apartment" className="slider-image" />
        <div className="slider-controls">
          <button onClick={handlePrev}>&#10094;</button>
          <button onClick={handleNext}>&#10095;</button>
        </div>
      </div>

      {/* Apartment Details */}
      <div className="apartment-card">
        <div className="info-block">
          <h2 className="apartment-title">Apartment {apartmentData.apartmentNumber}</h2>
          <div className="price">
            <h3>Price per m²: <span>${apartmentData.price}</span></h3>
            <h3>Total Price: <span>${calculateTotalPrice()}</span></h3>
          </div>
          <ul className="apartment-info">
            <li><strong>Size:</strong> {apartmentData.squareMeter} m²</li>
            <li><strong>Status:</strong> <span className={`status ${apartmentData.status}`}>{apartmentData.status}</span></li>
          </ul>
        </div>

        {/* Action Section */}
        <div className="action-block">
          <h3>Your Dream Apartment Awaits</h3>
          <p>Modern, comfortable, and stylish living — tailored to your lifestyle.</p>
          <button className="btn primary">Book a Viewing</button>
          <button className="btn secondary">Contact Agent</button>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
