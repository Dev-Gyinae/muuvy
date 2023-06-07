import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  const formatTime = (time) => {
    return time.toLocaleTimeString();
  };

  return (
    <div>
      <i>
        <h5>Current Date and Time:</h5>
        <h5>Date: {formatDate(currentDateTime)}</h5>
        <h5 style={{ color: "green" }}>Time: {formatTime(currentDateTime)}</h5>
      </i>
    </div>
  );
};

export default Clock;
