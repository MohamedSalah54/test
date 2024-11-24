import React from 'react';
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const FontSizeControl = ({
  mode,
  fontSize,
  lineSpacing,
  letterSpacing,
  wordSpacing,
  increaseFontSize,
  decreaseFontSize,
  increaseLineSpacing,
  decreaseLineSpacing,
  increaseLetterSpacing,
  decreaseLetterSpacing,
  increaseWordSpacing,
  decreaseWordSpacing,
}) => {
  return (
    <div className="slider-container">
      <div className="slider">
        {/* إذا كان الوضع هو 'fontSize' */}
        {mode === 'fontSize' ? (
          <>
            <FaCircleMinus className='slider-icon left' onClick={decreaseFontSize} />
            <FaCirclePlus className='slider-icon right' onClick={increaseFontSize} />
          </>
        ) : mode === 'lineSpacing' ? (
          // إذا كان الوضع هو 'lineSpacing'
          <>
            <FaCircleMinus className='slider-icon left' onClick={decreaseLineSpacing} />
            <FaCirclePlus className='slider-icon right' onClick={increaseLineSpacing} />
          </>
        ) : mode === 'letterSpacing' ? (
          // إذا كان الوضع هو 'letterSpacing'
          <>
            <FaCircleMinus className='slider-icon left' onClick={decreaseLetterSpacing} />
            <FaCirclePlus className='slider-icon right' onClick={increaseLetterSpacing} />
          </>
        ) : (
          // إذا كان الوضع هو 'wordSpacing'
          <>
            <FaCircleMinus className='slider-icon left' onClick={decreaseWordSpacing} />
            <FaCirclePlus className='slider-icon right' onClick={increaseWordSpacing} />
          </>
        )}
      </div>
    </div>
  );
};

export default FontSizeControl;