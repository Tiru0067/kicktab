import React, { useEffect, useState } from "react";
import { format } from "date-fns";

import "./index.css";

const DateTime = () => {
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    // Set the current date when component first loads
    setDate(format(new Date(), "EEEE, MMM dd yyyy"));

    // Update time every second
    const interval = setInterval(() => {
      const currentTime = format(new Date(), "hh:mm");
      setTime(currentTime);
    }, 1000);

    // clear time interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="date-time">
      <h1 className="time">{time}</h1>
      <p className="date">{date}</p>
    </div>
  );
};

export default DateTime;
