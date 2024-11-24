import { Link } from "react-router-dom";
import { useAccessibility } from "../context/AccessMode";

const Navbar = () => {
  const { isDarkMode,isLightMode, isMonochrome ,isLowSaturation, isHighSaturation, isContrast} = useAccessibility();

  return (
    
    <nav className={`navbar ${isDarkMode ? "accessibility-active" : ""} ${ isLightMode ? "light-mode-header": ""} ${isMonochrome ? "monochrome-mode-header": ""} ${isLowSaturation? "low-saturation-header": ""} ${isHighSaturation?"high-saturation-header":""} ${isContrast?"contrast-mode-header":""}` }>
      <div className="logo">
        <Link to="/" className={`navbar-link ${isDarkMode ? "accessibility-text" : ""}  ${isLightMode ? "light-mode-txt": ""}  ${isMonochrome ? "monochrome-mode-txt": ""}`}>
          My Blog
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={`navbar-link ${isDarkMode ? "accessibility-text" : ""}  ${isLightMode ? "light-mode-txt": ""}  ${isMonochrome ? "monochrome-mode-txt": ""}`}>
            Home
          </Link>
        </li>
        <li>
          <Link  to="/about" className={`navbar-link ${isDarkMode ? "accessibility-text" : ""}  ${isLightMode ? "light-mode-txt": ""}  ${isMonochrome ? "monochrome-mode-txt": ""}`}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`navbar-link ${isDarkMode ? "accessibility-text" : ""}  ${isLightMode ? "light-mode-txt": ""}  ${isMonochrome ? "monochrome-mode-txt": ""}`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

