import { useState, useContext } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { ReactComponent as FontSizing } from '../../../../icons/assets/svg-export/FontSizing.svg';
import { ReactComponent as Cursor } from '../../../../icons/assets/svg-export/svgexport-38.svg';
import FontSizeControl from "./../section4/FontSizeControl";
import CursorContext from "../../../../context/CursorContext";
import styles from './Section4.module.css';
import CardSection4 from "../../../../utils/CardSection4.js";

const Section4 = () => {
  const { handleWhiteCursor, handleBlackCursor, resetCursor } = useContext(CursorContext);

  const [isOpen, setIsOpen] = useState(true); // تتبع القائمة الرئيسية
  const [selectedProperty, setSelectedProperty] = useState("fontSize"); // الخاصية المحددة (افتراضيًا هي fontSize)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={styles.dropdown_container}>
      <button className={styles.drop_btn1} onClick={toggleDropdown}>
        <span className={styles.dropdown}>Content Adjustment</span>
        {isOpen ? (
          <AiFillMinusSquare className={styles.drop_icon} />
        ) : (
          <AiFillPlusSquare className={styles.drop_icon} />
        )}
      </button>
      {isOpen && (
        <div className={styles.font_container}>
          <div className={styles.wide_card}>
            <div className={styles.custom_font_container}>
              <FontSizing className={styles.custom_font_icon} />
              <div className={styles.custom_font_title}>
                <h4>Font Sizing</h4>
                <p className={styles.p_font}>Increase and Decrease the font size</p>
              </div>
            </div>
            <div className={styles.font_btn}>
              {/* تحديد نوع الخاصية */}
              <button onClick={() => setSelectedProperty("fontSize")}>Font Size</button>
              <button onClick={() => setSelectedProperty("lineSpacing")}>Line Spacing</button>
              <button onClick={() => setSelectedProperty("wordSpacing")}>Word Spacing</button>
              <button onClick={() => setSelectedProperty("letterSpacing")}>Letter Spacing</button>
            </div>
            {/* تمرير الخاصية المحددة لـ FontSizeControl */}
            <FontSizeControl selectedProperty={selectedProperty} />
          </div>
        </div>
      )}

      {isOpen && (
        <div className={styles.cursor_container}>
          <div className={styles.wide_card}>
            <div className={styles.custom_cursor_container}>
              <Cursor className={styles.custom_cursor_icon} />
              <div className={styles.custom_cursor_title}>
                <h4>Cursor</h4>
                <p className={styles.p_cursor}>Change the site's cursor icon</p>
              </div>
            </div>
            <div className={styles.cursor_btn}>
              <button onClick={handleWhiteCursor}>WHITE</button>
              <button onClick={handleBlackCursor}>BLACK</button>
            </div>
            <button onClick={resetCursor}>Reset Cursor</button>
          </div>
        </div>
      )}

      {isOpen && (
        <CardSection4/>
      )}
    </div>
  );
};

export default Section4;
