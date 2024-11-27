import { useState } from "react";
import { FaArrowsAlt } from "react-icons/fa";
import { ReactComponent as Navside } from "../../icons/assets/svg-export/svgexport-3.svg";
import { ReactComponent as Logo } from "../../icons/assets/icons-svg/logo.svg";
import { ReactComponent as LogoSide } from "../../icons/assets/icons-svg/logoSide.svg";
import { FaArrowsAltH } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import Section1 from "../sidebar/sections/section1/Section1";
import Section2 from "../sidebar/sections/section2/Section2";
import Section3 from "../sidebar/sections/section3/Section3";
import Section4 from "../sidebar/sections/section4/Section4";
import { Link } from "react-router-dom";
import AccessabilityState from "../footer/AccessabilityState";
import Sendfeedback from "../footer/Sendfeedback";
import AccessabilityWidget from "../footer/AccessibilityWidget";
import styles from './AccessibilitySidebar.module.css'

const AccessibilitySidebar = () => {
  // القيم الافتراضية
  const defaultState = {
    isOpen: false,
    iconVisible: false,
    expanded: false,
  };

  // إدارة الحالة
  const [isOpen, setIsOpen] = useState(defaultState.isOpen);
  const [iconVisible, setIconVisible] = useState(defaultState.iconVisible);
  const [expanded, setExpanded] = useState(defaultState.expanded);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isFeedbackVisable, setIsFeedbackVisable] = useState(false);
  const [isWidgetVisable, setIsWidgetVisable] = useState(false);


  // تبديل التوسيع
  const toggleExpand = () => setExpanded(!expanded);

  // تبديل الشريط الجانبي
  const toggleSidebar = () => setIsOpen(!isOpen);

  // إعادة الضبط للقيم الافتراضية
  const resetToDefault = () => {
    setIsOpen(defaultState.isOpen);
    setIconVisible(defaultState.iconVisible);
    setExpanded(defaultState.expanded);

  };

  // إظهار البطاقة
  const showCard = () => {
    setIsCardVisible(true);
    setIsOpen(false); // إغلاق الشريط الجانبي عند ظهور البطاقة
  };

  // إغلاق البطاقة
  const closeCard = () => {
    setIsCardVisible(false); // إخفاء البطاقة عند الضغط على "Close"
  };

  const showFeedback = () =>{
    setIsFeedbackVisable(true)
    setIsOpen(false)
  }

  const closeFeedback = () =>{
    setIsFeedbackVisable(false)
  }

  /** Accessibility Wedget */

  const showWidget = () =>{
    setIsWidgetVisable(true)
    setIsOpen(false)
  }

  const closeWidget = () =>{
    setIsWidgetVisable(false)
  }



  return (
    <div >

      {isCardVisible && <AccessabilityState closeCard={closeCard} />}
      {isFeedbackVisable && <Sendfeedback closeFeedback={closeFeedback} />}
      {isWidgetVisable && <AccessabilityWidget closeWidget={closeWidget} />}


      {!isOpen && !isCardVisible &&!isFeedbackVisable && (
        <button
          onClick={toggleSidebar}
          className={styles.toggleBtn}
          onMouseEnter={() => setIconVisible(true)}
          onMouseLeave={() => setIconVisible(false)}
        >
          <Logo />
          {iconVisible && <FaArrowsAlt className={styles.selector} />}
        </button>
      )}

      {/* الشريط الجانبي */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""} ${expanded ? styles.expanded : ""} `}>
        <div className={styles.header}>
          <Navside className={styles.INDmenuHeader_bg} />
          <button onClick={toggleSidebar} className={styles.closeBtn}>
            X
          </button>

          <h2 className={`${styles.txt} ${expanded ? styles.expandedTxt : ""}`}>Accessibility</h2>
          <div className={styles.languageSelector}>
            <select className={`${styles.opt} ${expanded ? styles.expandedOpt : ""}`}>
              <option>اللغة العربية</option>
              <option selected>English</option>
            </select>
          </div>
            <LogoSide className={styles.logoSide} />
            <FaArrowsAltH className={`${styles.arr} `} data-tooltip="Arrow icon" onClick={toggleExpand} />
            <FiEyeOff className={`${styles.eyeOff }`} data-tooltip="Eye off icon"onClick={showWidget} />
        </div>

        <div className={styles.sidebarBody}>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
        <div className={styles.sidebarFooter}>
          <div className={styles.accessFotter}>
            <button data-tooltip="Click to turn off accessibility" onClick={resetToDefault}>
              Turn Off
            </button>
            <button data-tooltip="View the accessibility statement" onClick={showCard}>
              Accessibility Statement
            </button>
            <button data-tooltip="Send us your feedback" onClick={showFeedback}>Send Feedback</button>
          </div>
          <div className={styles.copyrightFooter}>
            <span>
              Powered by <Link to="/" className={styles.equal}>EqualWeb</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySidebar;




