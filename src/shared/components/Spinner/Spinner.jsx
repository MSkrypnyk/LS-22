import React, { useState, useEffect } from "react";
import "./Spinner.scss";
import spinnerImage from "/src/assets/img/spinner.png";
import "/src/animation/animation.scss";


export const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <img src={spinnerImage} alt="Spinner" className="spinner" />
      </div>
    );
  } else {
    return null; 
  }
};
