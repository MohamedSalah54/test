import { useState,useContext } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import {ReactComponent as CustomColor} from '../../../../icons/assets/icons-svg/CustomColor.svg' 
import ColorBar from "../section3/ColorBar";
import { ReactComponent as Monochrome } from "../../../../icons/assets/icons-svg/Monochrome.svg";
import { ReactComponent as Dark } from "../../../../icons/assets/icons-svg/DarkHigh-Contrast.svg";
import { ReactComponent as Light } from "../../../../icons/assets/icons-svg/Bright-High-Contrast.svg";
import { ReactComponent as LowSaturation } from "../../../../icons/assets/icons-svg/Low-Saturation.svg";
import { ReactComponent as HighSaturation } from "../../../../icons/assets/icons-svg/High-Saturation.svg";
import { ReactComponent as Contrast } from "../../../../icons/assets/icons-svg/Contrast-Mode.svg";
import DarkModeContext from "../../../../context/DarkModeContext";
import BrightModeContext from "../../../../context/BrightModeContext";
import styles from './Section3.module.css'
import ColorContext from "../../../../context/ColorContext"; // المسار الصحيح للـ Context
import { useMonochrome } from "../../../../context/MonochromeContext";
import { useLowSaturation } from "../../../../context/LowSaturationContext";
import { useHighSaturation } from "../../../../context/HightSaturationContext";
import { useContrastMode } from "../../../../context/ContrastContext";

const Section3 = () => {
  const{toggleContrastMode} = useContrastMode()
  const {toggleHighSaturation} = useHighSaturation()
  const{toggleLowSaturation} = useLowSaturation()
  const {toggleMonochrome} = useMonochrome()
  const {toggleBrightMode} = useContext(BrightModeContext)
  const { setActiveSection } = useContext(ColorContext); // استدعاء التابع من الـ Context
  const { toggleDarkMode } = useContext(DarkModeContext)
const [isOpen, setIsOpen] = useState(true); // تتبع القائمة الرئيسية

const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (card) => {
    setActiveCard((prevActiveCard) => (prevActiveCard === card ? null : card));
  };


  return (
    <div className={styles.dropdown_container}>
      <button className={styles.drop_btn1} onClick={toggleDropdown}>
        <span className={styles.dropdown}>Color Adjustment</span>
        {isOpen ? (
          <AiFillMinusSquare className={styles.drop_icon} />
        ) : (
          <AiFillPlusSquare className={styles.drop_icon} />
        )}
      </button>
     {  isOpen && (
       <div className={styles.color_container}>
       <div className={styles.wide_card}>
         <div className={styles.custom_color_container}>
           <CustomColor className={styles.custom_color_icon}/>
           <div className={styles.custom_color_title}>
             <h4>Custom Color</h4>
             <p className={styles.p_color}>Change the site's colors</p>
           </div>
         </div>
         <div className={styles.color_btn}>
          <button
           onClick={() => setActiveSection("Backgrounds")}
         
              >
              Backgrounds
          </button>
          <button
   onClick={() => setActiveSection("Headings")}
         
              >
              
              Headings
          </button>
          <button
       onClick={() => setActiveSection("Contents")}
         
              >
                Contents
          </button>

           </div>
       </div>
       <ColorBar   />
  
     </div>
    
     )}
     
     {isOpen && (
        <div className={styles.card_container_sec_line}>
          <div
            className={`${styles.card_sec_line} ${activeCard === "monochrome" ? styles.active : ""}`}
            onClick={() => {
              handleCardClick("monochrome");
              toggleMonochrome()
            }}
          >
            <Monochrome className={styles.sec_line_icon} />
            <p className={styles.sec_line_p}>Monochrome</p>
            <p className={styles.hover_text}>Convert to black and white colors</p>
            {activeCard === "monochrome" && <div className={styles.checkmark}>✔</div>}
          </div>
          <div
            className={`${styles.card_sec_line} ${activeCard === "dark" ? styles.active : ""}`}
            onClick={() => {
              handleCardClick("dark");
              toggleDarkMode();
            }}
          >
            <Dark className={styles.sec_line_icon} />
            <p className={styles.sec_line_p}>Dark High-Contrast</p>
            <p className={styles.hover_text}>Changes the site's background to black, with bright fonts</p>
            {activeCard === "dark" && <div className={styles.checkmark}>✔</div>}
          </div>
              {/* بقية العناصر */}
      <div
        className={`${styles.card_sec_line} ${activeCard === "light" ? styles.active : ""}`}
        onClick={() => {
          handleCardClick("light");
          toggleBrightMode();
        }}
      >
        <Light className={styles.sec_line_icon} />
        <p className={styles.sec_line_p}>Bright High-Contrast</p>
        <p className={styles.hover_text}>Changes the site's background to white, with dark fonts</p>
        {activeCard === "light" && <div className={styles.checkmark}>✔</div>}
      </div>
      <div
        className={`${styles.card_sec_line} ${activeCard === "low-saturation" ? styles.active : ""}`}
        onClick={() => {
          handleCardClick("low-saturation");
          toggleLowSaturation()
        }}
      >
        <LowSaturation className={styles.sec_line_icon}/>
        <p className={styles.sec_line_p}>Low Saturation</p>
        <p className={styles.hover_text}>Reduce color saturation to minimal levels</p>
        {activeCard === "low-saturation" && <div className={styles.checkmark}>✔</div>}
      </div>
      <div
        className={`${styles.card_sec_line} ${activeCard === "high-saturation" ? styles.active : ""}`}
        onClick={() => {
          handleCardClick("high-saturation");
          toggleHighSaturation()
        }}
      >
        <HighSaturation className={styles.sec_line_icon}/>
        <p className={styles.sec_line_p}>High Saturation</p>
        <p className={styles.hover_text}>Increase color saturation to maximum levels</p>
        {activeCard === "high-saturation" && <div className={styles.checkmark}>✔</div>}
      </div>
      <div
        className={`${styles.card_sec_line} ${activeCard === "contrast" ? styles.active : ""}`}
        onClick={() => {
          handleCardClick("contrast");
          toggleContrastMode()
        }}
      >
        <Contrast className={styles.sec_line_icon}/>
        <p className={styles.sec_line_p}>Contrast Mode</p>
        <p className={styles.hover_text}>Enhance contrast for better readability</p>
        {activeCard === "contrast" && <div className={styles.checkmark}>✔</div>}
      </div>

        </div>
      )}
      
    </div>
  );
};

export default Section3;


