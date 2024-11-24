import React, { useState } from 'react';
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const FontSizeControl = () => {
  const [position, setPosition] = useState(10); // حالة لتحديد قيمة اللون

  const handleIncrease = () => {
    if (position < 100) setPosition(position + 10); // زيادة اللون
  };

  const handleDecrease = () => {
    if (position > 0) setPosition(position - 10); // تقليل اللون
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="color-fill" style={{ width: `${position}%`, backgroundColor: '#555' }}></div>
        <FaCircleMinus className='slider-icon left' onClick={handleDecrease} />
        <FaCirclePlus className='slider-icon right' onClick={handleIncrease} />
      </div>
    </div>
  );
};

export default FontSizeControl;
