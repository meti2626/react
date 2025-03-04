import React, { useState } from 'react';

const Kello = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  setInterval(updateTime, 1000);

  return (
    <div>
      <h1>Current Time</h1>
      <p>{time}</p>
    </div>
  );
};

export default Kello;