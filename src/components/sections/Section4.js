import { useState, useContext } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { ReactComponent as FontSizing } from '../../icons/assets/svg-export/FontSizing.svg';
import { ReactComponent as Cursor } from '../../icons/assets/svg-export/svgexport-38.svg';
import { GlobalStateContext4 } from "../../context/GlobalStateSection4";
import FontSizeControl from "./FontSizeControl";
import bigCursorWhite from '../../icons/assets/images/cursors/bigcursorwhite.svg';
import bigCursorBlack from '../../icons/assets/images/cursors/bigcursorblack.svg';
import bigHandWhite from '../../icons/assets/images/cursors/bighandwhite.svg'
import bigHandBlack from '../../icons/assets/images/cursors/bighandblack.svg'
import { useEffect } from "react";



const Section4 = () => {
  const handleWhiteCursor = () => {
    setCursorIcon(`url(${bigCursorWhite}), auto`);
  };
  
  const handleBlackCursor = () => {
    setCursorIcon(`url(${bigCursorBlack}), auto`);
  };

  const [isOpen, setIsOpen] = useState(true); // تتبع القائمة الرئيسية
  const { cardsSection4 } = useContext(GlobalStateContext4); // استيراد البيانات من الـ Context
  const [selectedCard, setSelectedCard] = useState(null); // تتبع الكارت المحدد
  const [cursorIcon, setCursorIcon] = useState("auto"); // حالة شكل الماوس الافتراضي

  // إضافة حالة لإدارة حجم الخط والمسافة بين السطور والـ letter-spacing و word-spacing
  const [fontSize, setFontSize] = useState(16); // حجم الخط الافتراضي
  const [lineSpacing, setLineSpacing] = useState(1.5); // المسافة بين السطور الافتراضية
  const [letterSpacing, setLetterSpacing] = useState(0); // المسافة بين الحروف الافتراضية
  const [wordSpacing, setWordSpacing] = useState(0); // المسافة بين الكلمات الافتراضية
  const [mode, setMode] = useState('fontSize'); // وضع التحكم: إما 'fontSize' أو 'lineSpacing'

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleCardClick = (card) => {
    setSelectedCard((prevActiveCard) => (prevActiveCard === card ? null : card));
  };
  const [selectedElement, setSelectedElement] = useState(null); // لتحديد العنصر (Background/Headings/Contents)

  // وظائف لتغيير حجم الخط والمسافة بين السطور
  const increaseFontSize = () => setFontSize(fontSize + 2); // زيادة حجم الخط
  const decreaseFontSize = () => setFontSize(fontSize - 2); // تقليل حجم الخط
  
  const increaseLineSpacing = () => setLineSpacing(lineSpacing + 0.1); // زيادة المسافة بين السطور
  const decreaseLineSpacing = () => setLineSpacing(lineSpacing - 0.1); // تقليل المسافة بين السطور

  const increaseLetterSpacing = () => setLetterSpacing(letterSpacing + 0.1); // زيادة المسافة بين الحروف
  const decreaseLetterSpacing = () => setLetterSpacing(letterSpacing - 0.1); // تقليل المسافة بين الحروف

  const increaseWordSpacing = () => setWordSpacing(wordSpacing + 0.1); // زيادة المسافة بين الكلمات
  const decreaseWordSpacing = () => setWordSpacing(wordSpacing - 0.1); // تقليل المسافة بين الكلمات
  useEffect(() => {
    document.body.style.cursor = cursorIcon;
  }, [cursorIcon]);
  
  
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
      {isOpen && (
        <div className="font-container">
          <div className="wide-card">
            <div className="custom-font-container">
              <FontSizing className="custom-font-icon" />
              <div className="custom-font-title">
                <h4>Font Sizing</h4>
                <p className="p-font">Increase and Decrease the font size</p>
              </div>
            </div>
            <div className="font-btn">
              <button onClick={() => {
                setMode('fontSize');
                setSelectedElement("fontsize")}}
                style={{
                  backgroundColor: selectedElement === "fontsize" ? "green" : "#fff",
                  color: selectedElement === "fontsize" ? "white" : "black",
                }}
                >Font Size</button>

              <button onClick={() => {
                setMode('lineSpacing')
                setSelectedElement("linespacing")
                }} style={{
                  backgroundColor: selectedElement === "linespacing" ? "green" : "#fff",
                  color: selectedElement === "linespacing" ? "white" : "black",
                }}>Line Spacing</button>

              <button onClick={() => {
                setMode('wordSpacing')
                setSelectedElement("wordspacing")                
                }} style={{
                  backgroundColor: selectedElement === "wordspacing" ? "green" : "#fff",
                  color: selectedElement === "wordspacing" ? "white" : "black",
                }} >Word Spacing</button>

              <button onClick={() => {
                setMode('letterSpacing')
                setSelectedElement("letterSpacing")                
                }} style={{
                  backgroundColor: selectedElement === "letterSpacing" ? "green" : "#fff",
                  color: selectedElement === "letterSpacing" ? "white" : "black",
                }} >Letter Spacing</button>
            </div>
            <FontSizeControl
              mode={mode}
              fontSize={fontSize}
              lineSpacing={lineSpacing}
              letterSpacing={letterSpacing}
              wordSpacing={wordSpacing}
              increaseFontSize={increaseFontSize}
              decreaseFontSize={decreaseFontSize}
              increaseLineSpacing={increaseLineSpacing}
              decreaseLineSpacing={decreaseLineSpacing}
              increaseLetterSpacing={increaseLetterSpacing}
              decreaseLetterSpacing={decreaseLetterSpacing}
              increaseWordSpacing={increaseWordSpacing}
              decreaseWordSpacing={decreaseWordSpacing}
            />
          </div>
        </div>
      )}
     {isOpen && (
  <div className="cursor-container">
    <div className="wide-card">
      <div className="custom-cursor-container">
        <Cursor className="custom-cursor-icon" />
        <div className="custom-cursor-title">
          <h4>Cursor</h4>
          <p className="p-cursor">Change the site's cursor icon</p>
        </div>
      </div>
      {/* أزرار التحكم */}
      <div className="cursor-btn">
  <button
    onClick={handleWhiteCursor}
    onMouseEnter={() => setCursorIcon(`url(${bigHandWhite}) 10 10, pointer`)}
    onMouseLeave={() => setCursorIcon(`url(${bigCursorWhite}) 10 10, auto`)}
    style={{ cursor: cursorIcon }}
  >
    WHITE
  </button>

  <button
    onClick={handleBlackCursor}
    onMouseEnter={() => setCursorIcon(`url(${bigHandBlack}) 10 10, pointer`)}
    onMouseLeave={() => setCursorIcon(`url(${bigCursorBlack}) 10 10, auto`)}
    style={{ cursor: cursorIcon }}
  >
    BLACK
  </button>
</div>


    </div>
  </div>
)}

      {isOpen && (
        <div className="card-container-section4">
          {cardsSection4.map((card, index) => (
            <div
              className={`card-section4 ${selectedCard === index ? "selected-card" : ""}`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div className="section4-icon">{card.icon}</div>
              <p
                className="section4-p"
              >
                {card.text}
              </p>
              <p className="hover-text">{card.hoverText}</p>
              {selectedCard === index && (
                <div className="check-mark">✔</div> // علامة الصح
              )}
            </div>
          ))}
        </div>
      )}
      <style>
        {`
          .main-heading,.blog-title{
            font-size: ${fontSize}px;
            line-height: ${lineSpacing};
            letter-spacing: ${letterSpacing}px;
            word-spacing: ${wordSpacing}px;
          }
          .main-heading, .navbar-link, .blog-title {
            font-size: ${fontSize}px;
            line-height: ${lineSpacing};
            letter-spacing: ${letterSpacing}px;
            word-spacing: ${wordSpacing}px;
          }
          .blog-content {
            font-size: ${fontSize}px;
            line-height: ${lineSpacing};
            letter-spacing: ${letterSpacing}px;
            word-spacing: ${wordSpacing}px;
          }
        `}
      </style>
    </div>
  );
};

export default Section4;
