import { useState } from "react";
import { FaArrowsAlt } from "react-icons/fa";
import { ReactComponent as Navside } from "../icons/assets/svg-export/svgexport-3.svg";
import { ReactComponent as Logo } from "../icons/assets/icons-svg/logo.svg";
import { ReactComponent as LogoSide } from "../icons/assets/icons-svg/logoSide.svg";
import { FaArrowsAltH } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import { Link } from "react-router-dom";
import AccessabilityState from "./AccessabilityState";
import Sendfeedback from "./Sendfeedback";
import AccessabilityWidget from "./AccessibilityWidget";
import { useAccessibility } from "../context/AccessMode";

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

  const { darkMode,isMonochrome,isLowSaturation, isHighSaturation, isContrast } = useAccessibility();

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
    <div>

      {isCardVisible && <AccessabilityState closeCard={closeCard} />}
      {isFeedbackVisable && <Sendfeedback closeFeedback={closeFeedback} />}
      {isWidgetVisable && <AccessabilityWidget closeWidget={closeWidget} />}


      {!isOpen && !isCardVisible &&!isFeedbackVisable && (
        <button
          onClick={toggleSidebar}
          className="toggleBtn"
          onMouseEnter={() => setIconVisible(true)}
          onMouseLeave={() => setIconVisible(false)}
        >
          <Logo />
          {iconVisible && <FaArrowsAlt className="selector" />}
        </button>
      )}

      {/* الشريط الجانبي */}
      <div className={`sidebar ${isOpen ? "open" : ""} ${expanded ? "expanded" : ""} ${isMonochrome? "monochrome-mode":""} ${isLowSaturation?"low-saturation": ""} ${isHighSaturation?"high-saturation": ""} ${isContrast?"contrast-mode":""}`}>
        <div className="header">
          <Navside className="INDmenuHeader_bg" />
          <button onClick={toggleSidebar} className="closeBtn">
            X
          </button>

          <h2 className={`txt ${expanded ? "expandedTxt" : ""}`}>Accessibility</h2>
          <div className="language-selector">
            <select className={`opt ${expanded ? "expandedOpt" : ""}`}>
              <option>اللغة العربية</option>
              <option selected>English</option>
            </select>
          </div>
          <div className="access-logos">
            <LogoSide className="logoside" onClick={darkMode} />
            <FaArrowsAltH className={`arr ${isMonochrome? "monochrome-mode-arr":""}`} data-tooltip="Arrow icon" onClick={toggleExpand} />
            <FiEyeOff className={`eye-off ${isMonochrome? "monochrome-mode-arr":""}`} data-tooltip="Eye off icon"onClick={showWidget} />
          </div>
        </div>

        <div className="sidebar-body">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
        <div className="sidebar-footer">
          <div className="access-fotter">
            <button data-tooltip="Click to turn off accessibility" onClick={resetToDefault}>
              Turn Off
            </button>
            <button data-tooltip="View the accessibility statement" onClick={showCard}>
              Accessibility Statement
            </button>
            <button data-tooltip="Send us your feedback" onClick={showFeedback}>Send Feedback</button>
          </div>
          <div className="copyright-footer">
            <span>
              Powered by <Link to="/" className="equal">EqualWeb</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySidebar;




