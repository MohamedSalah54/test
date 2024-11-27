import { useContext, useState } from "react";
import { GlobalStateContext } from "../../../../context/GlobalStateSectin1";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import styles from './Section1.module.css'

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
    <div className={styles.dropdown_container}>
      <button className={styles.drop_btn1} onClick={toggleDropdown}>
        <span className={styles.dropdown}>Accessibility Profiles</span>
        {isOpen ? (
          <AiFillMinusSquare className={styles.drop_icon} />
        ) : (
          <AiFillPlusSquare className={styles.drop_icon} />
        )}
      </button>

      {isOpen && (
        <ul className={styles.dropdown_menu}>
          {items.map((item, index) => (
            <div key={index} className={styles.first_section}>
              <div className={styles.body_container}>
                <div className={styles.first_line}>
                  <button className={styles.bar} onClick={() => toggleItem(index)}>
                    {openItems[index] ? (
                      <FaCircleMinus className={styles.icon_list} />
                    ) : (
                      <FaCirclePlus className={styles.icon_list} />
                    )}
                    <span>{item}</span>
                  </button>
                  <span className={styles.on_off}>
                    <span
                      className={`${styles.toggle_button} ${
                        activeButtons[index] === "ON" ? styles.active : ""
                      }`}
                      onClick={() => handleButtonClick(index, "ON")}
                    >
                      ON
                    </span>
                    <span
                      className={`${styles.toggle_button} ${
                        activeButtons[index] === "OFF" ? styles.active : ""
                      }`}
                      onClick={() => handleButtonClick(index, "OFF")}
                    >
                      OFF
                    </span>
                  </span>
                </div>
                <div className={styles.second_line}>
                  {openItems[index] && cardsData[item] && (
                    <div className={styles.card_container_sec_line}>
                      {cardsData[item].map((card, i) => (
                        <div key={i} className={styles.card_section4}>
                          <div className={styles.section4_icon}>{card.icon}</div>
                          <p className={styles.section4_p}>{card.text}</p>
                          <p className={styles.hover_text}>{card.hoverText}</p>
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
