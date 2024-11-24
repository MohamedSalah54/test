import { useState } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import {ReactComponent as CustomColor} from '../../icons/assets/icons-svg/CustomColor.svg' 
import ColorBar from "./ColorBar";
import { ReactComponent as Monochrome } from "../../icons/assets/icons-svg/Monochrome.svg";
import { ReactComponent as Dark } from "../../icons/assets/icons-svg/DarkHigh-Contrast.svg";
import { ReactComponent as Light } from "../../icons/assets/icons-svg/Bright-High-Contrast.svg";
import { ReactComponent as LowSaturation } from "../../icons/assets/icons-svg/Low-Saturation.svg";
import { ReactComponent as HighSaturation } from "../../icons/assets/icons-svg/High-Saturation.svg";
import { ReactComponent as Contrast } from "../../icons/assets/icons-svg/Contrast-Mode.svg";
import { useAccessibility } from "../../context/AccessMode";

const Section3 = () => {
  
const {darkMode, lightMode, monochrome, LowSaturationHandler, highSaturationHandler, contrastHandler} = useAccessibility ()

const [isOpen, setIsOpen] = useState(true); // تتبع القائمة الرئيسية

const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [selectedElement, setSelectedElement] = useState(null); // لتحديد العنصر (Background/Headings/Contents)
  const [colors, setColors] = useState({
    navbarBackground: '#fff',   // الخلفية الداكنة للـ navbar
    navbarColor: 'white',       // اللون الأبيض للنصوص في navbar
    linkColor: 'white',         // لون الروابط في navbar
    containerBackground: '#fff', // الخلفية البيضاء للصندوق
    blogContainerGap: '20px',    // المسافة بين العناصر في blog-container
  });
  const [sliderValue, setSliderValue] = useState(0); // حفظ القيمة الحالية للشريط

  const resetColors = () => {
    setColors({
      navbarBackground: '#fff',
      navbarColor: 'white',
      linkColor: 'white',
      containerBackground: '#fff',
      blogContainerGap: '20px',
    });
    setSliderValue(0)
  };
  
  
  // تحديث اللون عند تغيير قيمة الـ ColorBar
  const handleColorChange = (newColor) => {
    if (selectedElement) {
      setColors((prevColors) => ({
        ...prevColors,
        [selectedElement]: newColor, // تحديث اللون للعنصر المحدد
      }));
    }
  };

  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (card) => {
    setActiveCard((prevActiveCard) => (prevActiveCard === card ? null : card));
  };


  return (
    <div className="dropdown-container">
      <button className="drop-btn1" onClick={toggleDropdown}>
        <span className="dropdown">Color Adjustment</span>
        {isOpen ? (
          <AiFillMinusSquare className="drop-icon" />
        ) : (
          <AiFillPlusSquare className="drop-icon" />
        )}
      </button>
     {  isOpen && (
       <div className="color-container">
       <div className="wide-card">
         <div className="custom-color-container">
           <CustomColor className="custom-color-icon"/>
           <div className="custom-color-title">
             <h4>Custom Color</h4>
             <p className="p-color">Change the site's colors</p>
           </div>
         </div>
         <div className="color-btn">
                  <button
                    onClick={() => {
                      setSelectedElement("background");
                    }}
                    style={{
                      backgroundColor: selectedElement === "background" ? "green" : "#fff",
                      color: selectedElement === "background" ? "white" : "black",
                    }}
                  >
                    Backgrounds
          </button>
          <button
                onClick={() => {
                  setSelectedElement("headings");
                }}
                style={{
                  backgroundColor: selectedElement === "headings" ? "green" : "#fff",
                  color: selectedElement === "headings" ? "white" : "black",
                }}
              >
                Headings
          </button>
          <button
                onClick={() => {
                  setSelectedElement("contents");
                }}
                style={{
                  backgroundColor: selectedElement === "contents" ? "green" : "#fff",
                  color: selectedElement === "contents" ? "white" : "black",
                }}
              >
                Contents
          </button>

           </div>
       </div>
       <ColorBar   onChangeColor={handleColorChange} resetColors={resetColors}  sliderValue={sliderValue} // تمرير قيمة الشريط إلى ColorBar
          setSliderValue={setSliderValue}  />
       <style>
        {`
          .container,.navbar {
            background-color: ${colors.background}; /* تطبيق لون الخلفية */
          }
          .main-heading ,.navbar-link, .blog-title {
            color: ${colors.headings}; /* تطبيق لون العناوين */
          }
          .blog-content {
            color: ${colors.contents}; /* تطبيق لون المحتوى */
          }
        `}
      </style>
     </div>
    
     )}
     
     {isOpen && (
        <div className="card-container-sec-line">
          <div
            className={`card-sec-line ${activeCard === "monochrome" ? "active" : ""}`}
            onClick={() => {
              monochrome();
              handleCardClick("monochrome");
            }}
          >
            <Monochrome className="sec-line-icon" />
            <p className="sec-line-p">Monochrome</p>
            <p className="hover-text">Convert to black and white colors</p>
            {activeCard === "monochrome" && <div className="checkmark">✔</div>}
          </div>
          <div
            className={`card-sec-line ${activeCard === "dark" ? "active" : ""}`}
            onClick={() => {
              darkMode();
              handleCardClick("dark");
            }}
          >
            <Dark className="sec-line-icon" />
            <p className="sec-line-p">Dark High-Contrast</p>
            <p className="hover-text">Changes the site's background to black, with bright fonts</p>
            {activeCard === "dark" && <div className="checkmark">✔</div>}
          </div>
              {/* بقية العناصر */}
      <div
        className={`card-sec-line ${activeCard === "light" ? "active" : ""}`}
        onClick={() => {
          lightMode();
          handleCardClick("light");
        }}
      >
        <Light className="sec-line-icon" />
        <p className="sec-line-p">Bright High-Contrast</p>
        <p className="hover-text">Changes the site's background to white, with dark fonts</p>
        {activeCard === "light" && <div className="checkmark">✔</div>}
      </div>
      <div
        className={`card-sec-line ${activeCard === "low-saturation" ? "active" : ""}`}
        onClick={() => {
          LowSaturationHandler();
          handleCardClick("low-saturation");
        }}
      >
        <LowSaturation className="sec-line-icon" />
        <p className="sec-line-p">Low Saturation</p>
        <p className="hover-text">Reduce color saturation to minimal levels</p>
        {activeCard === "low-saturation" && <div className="checkmark">✔</div>}
      </div>
      <div
        className={`card-sec-line ${activeCard === "high-saturation" ? "active" : ""}`}
        onClick={() => {
          highSaturationHandler();
          handleCardClick("high-saturation");
        }}
      >
        <HighSaturation className="sec-line-icon" />
        <p className="sec-line-p">High Saturation</p>
        <p className="hover-text">Increase color saturation to maximum levels</p>
        {activeCard === "high-saturation" && <div className="checkmark">✔</div>}
      </div>
      <div
        className={`card-sec-line ${activeCard === "contrast" ? "active" : ""}`}
        onClick={() => {
          contrastHandler();
          handleCardClick("contrast");
        }}
      >
        <Contrast className="sec-line-icon" />
        <p className="sec-line-p">Contrast Mode</p>
        <p className="hover-text">Enhance contrast for better readability</p>
        {activeCard === "contrast" && <div className="checkmark">✔</div>}
      </div>

        </div>
      )}
      
    </div>
  );
};

export default Section3;


