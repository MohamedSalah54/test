import { useContext, useState } from "react";
import { GlobalStateContext } from "../../context/GlobalStateSectin1";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const Section1 = () => {
  const {
    items,
    cardsData,
    openItems,
    setOpenItems,
    activeButtons,
    setActiveButtons,
  } = useContext(GlobalStateContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (index) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleButtonClick = (index, type) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [index]: type,
    }));
  };

  return (
    <div className="dropdown-container">
      <button className="drop-btn1" onClick={toggleDropdown}>
        <span className="dropdown">Accessibility Profiles</span>
        {isOpen ? (
          <AiFillMinusSquare className="drop-icon" />
        ) : (
          <AiFillPlusSquare className="drop-icon" />
        )}
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <div key={index} className="first-section">
              <div className="body-container">
                <div className="first-line">
                  <button className="bar" onClick={() => toggleItem(index)}>
                    {openItems[index] ? (
                      <FaCircleMinus className="icon-list" />
                    ) : (
                      <FaCirclePlus className="icon-list" />
                    )}
                    <span>{item}</span>
                  </button>
                  <span className="on-ff">
                    <span
                      className={`toggle-button ${
                        activeButtons[index] === "ON" ? "active" : ""
                      }`}
                      onClick={() => handleButtonClick(index, "ON")}
                    >
                      ON
                    </span>
                    <span
                      className={`toggle-button ${
                        activeButtons[index] === "OFF" ? "active" : ""
                      }`}
                      onClick={() => handleButtonClick(index, "OFF")}
                    >
                      OFF
                    </span>
                  </span>
                </div>
                <div className="second-line">
                  {openItems[index] && cardsData[item] && (
                    <div className="card-container-sec-line">
                      {cardsData[item].map((card, i) => (
                        <div key={i} className="card-section4">
                          <div className="section4-icon">{card.icon}</div>
                          <p className="section4-p">{card.text}</p>
                          <p className="hover-text">{card.hoverText}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Section1;
