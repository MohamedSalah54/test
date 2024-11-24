import { useState,useContext } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import {ReactComponent as FontSizing} from '../../icons/assets/svg-export/FontSizing.svg' 
import {ReactComponent as Cursor} from '../../icons/assets/svg-export/svgexport-38.svg' 
import { GlobalStateContext4 } from "../../context/GlobalStateSection4";
import FontSizeControl from "./FontSizeControl";



const Section4 = () => {
  const [isOpen, setIsOpen] = useState(true); // تتبع القائمة الرئيسية
  const { cardsSection4 } = useContext(GlobalStateContext4); // استيراد البيانات من الـ Context
  const [selectedCard, setSelectedCard] = useState(null); // تتبع الكارت المحدد


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleCardClick = (card) => {
    setSelectedCard((prevActiveCard) => (prevActiveCard === card ? null : card));
  };

  return (
    <div className="dropdown-container">
      <button className="drop-btn1" onClick={toggleDropdown}>
        <span className="dropdown">Content Adjustment</span>
        {isOpen ? (
          <AiFillMinusSquare className="drop-icon" />
        ) : (
          <AiFillPlusSquare className="drop-icon" />
        )}
      </button>
     {  isOpen && (
       <div className="font-container">
       <div className="wide-card">
         <div className="custom-font-container">
           <FontSizing className="custom-font-icon"/>
           <div className="custom-font-title">
             <h4>Font Sizing</h4>
             <p className="p-font">Increase and Decrease the font size</p>
           </div>
         </div>
         <div className="font-btn">
              <button>Font Size</button>
              <button>Line Spacing</button>
              <button>Word Spacing</button>
              <button>Letter Spacing</button>
           </div>
           <FontSizeControl/>
       </div>
       
     </div>
     
     
     )}
          {  isOpen && (
       <div className="cursor-container">
       <div className="wide-card">
         <div className="custom-cursor-container">
           <Cursor className="custom-cursor-icon"/>
           <div className="custom-cursor-title">
             <h4>Cusrsor </h4>
             <p className="p-cursor">Change the site's colors</p>
           </div>
         </div>
         <div className="cursor-btn">
              <button>WHITE</button>
              <button>BLACK</button>
           </div>
       </div>
       
     </div>
     
     
     )}
     
     
     {isOpen && (
        <div className="card-container-section4">
          {cardsSection4.map((card, index) => (
            <div
              className={`card-section4 ${
                selectedCard === index ? "selected-card" : ""
              }`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div className="section4-icon">{card.icon}</div>
              <p className="section4-p">{card.text}</p>
              <p className="hover-text">{card.hoverText}</p>
              {selectedCard === index && (
                <div className="check-mark">✔</div> // علامة الصح
              )}
            </div>
          ))}
        </div>
      )}
       
    </div>
  );
};

export default Section4;
