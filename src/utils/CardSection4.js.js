import React, { useState } from "react"; // Make sure React is imported
import { ReactComponent as Virtual } from "../../src/icons/assets/svg-export/svgexport-41.svg";
import { ReactComponent as Newspaper } from "../../src/icons/assets/icons-svg/Page-Structure.svg";
import { ReactComponent as Captions } from "../../src/icons/assets/svg-export/svgexport-39.svg";
import { ReactComponent as Enlargment } from "../../src/icons/assets/svg-export/svgexport-15.svg";
import { ReactComponent as Img } from "../../src/icons/assets/icons-svg/Image-Description.svg";
import { ReactComponent as MagnifierTxt } from "../../src/icons/assets/icons-svg/Magnifier.svg";
import { ReactComponent as Magnifier } from "../../src/icons/assets/icons-svg/Magnifier.svg";
import { ReactComponent as ReadableFont } from "../../src/icons/assets/icons-svg/Readable-Font.svg";
import { ReactComponent as HighlightLinks } from "../../src/icons/assets/svg-export/svgexport-25.svg";
import { ReactComponent as HighlightHeaders } from "../../src/icons/assets/svg-export/svgexport-26.svg";
import { ReactComponent as Blinks } from "../../src/icons/assets/icons-svg/Blinks-Blocking.svg";
import { ReactComponent as Mute } from "../../src/icons/assets/icons-svg/Mute-Media.svg";
import { ReactComponent as ReadFocus } from "../../src/icons/assets/svg-export/svgexport-29.svg";
import { ReactComponent as ReadGuide } from "../../src/icons/assets/icons-svg/Read-Guide.svg";
import { ReactComponent as Dictionary } from "../../src/icons/assets/icons-svg/Dictionary.svg";
import { ReactComponent as ReadableMode } from "../../src/icons/assets/svg-export/svgexport-33.svg";
import styles from "../components/sidebar/sections/section4/Section4.module.css";
import { useAudioContext } from "../context/MuteMediaContext";

const CardSection4 = () => {

  const { handleMuteClick  } = useAudioContext();
  const [isOpen, setIsOpen] = useState(true); // Track if the main menu is open
  const [selectedCard, setSelectedCard] = useState(null); // Track the selected card

  const handleCardClick = (card) => {
    setSelectedCard((prevActiveCard) => (prevActiveCard === card ? null : card));
  };

  return (
    <>
      {isOpen && (
        <div className={styles.card_container_section4}>
          <div
            className={`${styles.card_section4} ${selectedCard === 0 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(0)}
          >
            <div className={styles.section4_icon}><Blinks /></div>
            <p className={styles.section4_p}>Blinks Blocking</p>
            <p className={styles.hover_text}>Stops blinking and flashing of moving elements.</p>
            {selectedCard === 0 && <div className={styles.check_mark}>✔</div>}
          </div>
          
          <div
            className={`${styles.card_section4} ${selectedCard === 1 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(1)}
          >
            <div className={styles.section4_icon}><Captions /></div>
            <p className={styles.section4_p}>Add Captions (Beta)</p>
            <p className={styles.hover_text}>Add captions to videos and audio.</p>
            {selectedCard === 1 && <div className={styles.check_mark}>✔</div>}
          </div>

          <div
            className={`${styles.card_section4} ${selectedCard === 2 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(2)}
          >
            <div className={styles.section4_icon}><Magnifier /></div>
            <p className={styles.section4_p}>Magnifier</p>
            <p className={styles.hover_text}>Zooms the screen display.</p>
            {selectedCard === 2 && <div className={styles.check_mark}>✔</div>}
          </div>

          <div
            className={`${styles.card_section4} ${selectedCard === 3 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(3)}
          >
            <div className={styles.section4_icon}><ReadableFont /></div>
            <p className={styles.section4_p}>Readable Font</p>
            <p className={styles.hover_text}>Convert the site's fonts to [sans-serif] and readable ones.</p>
            {selectedCard === 3 && <div className={styles.check_mark}>✔</div>}
          </div>

          <div
            className={`${styles.card_section4} ${selectedCard === 4 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(4)}
          >
            <div className={styles.section4_icon}><Img /></div>
            <p className={styles.section4_p}>Image Descriptions</p>
            <p className={styles.hover_text}>Displays image descriptions in a floating window.</p>
            {selectedCard === 4 && <div className={styles.check_mark}>✔</div>}
          </div>

          <div
            className={`${styles.card_section4} ${selectedCard === 5 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(5)}
          >
            <div className={styles.section4_icon}><HighlightLinks /></div>
            <p className={styles.section4_p}>Highlight Links</p>
            <p className={styles.hover_text}>Highlights the site links.</p>
            {selectedCard === 5 && <div className={styles.check_mark}>✔</div>}
          </div>

          <div
            className={`${styles.card_section4} ${selectedCard === 6 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(6)}
          >
            <div className={styles.section4_icon}><HighlightHeaders /></div>
            <p className={styles.section4_p}>Highlight Headers</p>
            <p className={styles.hover_text}>Highlights the site headers.</p>
            {selectedCard === 6 && <div className={styles.check_mark}>✔</div>}
          </div>

          <div
            className={`${styles.card_section4} ${selectedCard === 7 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(7)}
          >
            <div className={styles.section4_icon}><Enlargment /></div>
            <p className={styles.section4_p}>Enlarge Buttons</p>
            <p className={styles.hover_text}>Enlarges buttons to meet WCAG accessibility regulations.</p>
            {selectedCard === 7 && <div className={styles.check_mark}>✔</div>}
          </div>

          <div
            className={`${styles.card_section4} ${selectedCard === 8 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(8)}
          >
            <div className={styles.section4_icon}><ReadableMode /></div>
            <p className={styles.section4_p}>Readable Mode</p>
            <p className={styles.hover_text}>Displays the site's contents in a new window clearly and readable.</p>
            {selectedCard === 8 && <div className={styles.check_mark}>✔</div>}
          </div>

          <div
            className={`${styles.card_section4} ${selectedCard === 9 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(9)}
          >
            <div className={styles.section4_icon}><MagnifierTxt /></div>
            <p className={styles.section4_p}>Text Magnifier</p>
            <p className={styles.hover_text}>Increase the content chosen by the cursor, shown in a tooltip.</p>
            {selectedCard === 9 && <div className={styles.check_mark}>✔</div>}
          </div>

          <div
            className={`${styles.card_section4} ${selectedCard === 10 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(10)}
          >
            <div className={styles.section4_icon}><Newspaper /></div>
            <p className={styles.section4_p}>Page Structure</p>
            <p className={styles.hover_text}>Generate a list of page landmarks, headers, and links.</p>
            {selectedCard === 10 && <div className={styles.check_mark}>✔</div>}
          </div>

          <div
            className={`${styles.card_section4} ${selectedCard === 11 ? styles.selected_card : ""}`}
            onClick={() => {
              handleCardClick(11);
              handleMuteClick(); 
            }}
          >
            <div className={styles.section4_icon}><Mute /></div>
            <p className={styles.section4_p}>Mute Media</p>
            <p className={styles.hover_text}>Mutes all sounds and vocal elements.</p>
            {selectedCard === 11 && <div className={styles.check_mark}>✔</div>}
          </div>

          <div
            className={`${styles.card_section4} ${selectedCard === 12 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(12)}
          >
            <div className={styles.section4_icon}><ReadFocus /></div>
            <p className={styles.section4_p}>Read focus</p>
            <p className={styles.hover_text}>Shift the page focus automatically to the selected content.</p>
            {selectedCard === 12 && <div className={styles.check_mark}>✔</div>}
          </div>
          <div
            className={`${styles.card_section4} ${selectedCard === 13 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(13)}
          >
            <div className={styles.section4_icon}><ReadGuide /></div>
            <p className={styles.section4_p}>Reading guide</p>
            <p className={styles.hover_text}>Create a virtual bar that follows the cursor to improve the reader's focus.</p>
            {selectedCard === 13 && <div className={styles.check_mark}>✔</div>}
          </div>
          <div
            className={`${styles.card_section4} ${selectedCard === 14 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(14)}
          >
            <div className={styles.section4_icon}><Dictionary /></div>
            <p className={styles.section4_p}>Dictionary</p>
            <p className={styles.hover_text}>Describe words by mose.</p>
            {selectedCard === 14 && <div className={styles.check_mark}>✔</div>}
          </div>

          <div
            className={`${styles.card_section4} ${selectedCard === 15 ? styles.selected_card : ""}`}
            onClick={() => handleCardClick(15)}
          >
            <div className={styles.section4_icon}><Virtual /></div>
            <p className={styles.section4_p}>Virtual Keyboard</p>
            <p className={styles.hover_text}>Enables users to type contents using the mouse.</p>
            {selectedCard === 15 && <div className={styles.check_mark}>✔</div>}
          </div>

          
        </div>
      )}
    </>
  );
};

export default CardSection4;
