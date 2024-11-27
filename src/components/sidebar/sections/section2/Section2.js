import { useState } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { ReactComponent as Ear } from "../../../../icons/assets/svg-export/svgexport-10.svg";
import { ReactComponent as Keyboard } from "../../../../icons/assets/svg-export//svgexport-12.svg";
import { ReactComponent as Smart } from "../../../../icons/assets/icons-svg/Smart-Navigation.svg"
import { ReactComponent as Voice } from "../../../../icons/assets/svg-export//svgexport-14.svg";
import { ReactComponent as Reader } from "../../../../icons/assets/icons-svg/Text-Reader.svg";
import { GrGrid } from "react-icons/gr";
import styles from './Section2.module.css'

const Section2 = () => {
  const [isOpen, setIsOpen] = useState(true); // تتبع القائمة الرئيسية
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={styles.dropdown_container}>
      <button className={styles.drop_btn1} onClick={toggleDropdown}>
        <span className={styles.dropdown}>Navigation Adjustment</span>
        {isOpen ? (
          <AiFillMinusSquare className={styles.drop_icon} />
        ) : (
          <AiFillPlusSquare className={styles.drop_icon} />
        )}
      </button>
      { isOpen && (
               <div className={styles.card_container_sec_line}>
               <div className={styles.card_sec_line}>
                   <Ear  className={styles.sec_line_icon}/>
                   <p className={styles.sec_line_p}>Screen Render Adjustment</p>
                   <p className={styles.hover_text}>Makes the site compatible for screen render users</p>
               </div>
               <div className={styles.card_sec_line}>
                   <Keyboard className={styles.sec_line_icon}/>
                   <p className={styles.sec_line_p}>Keyborad Navigation</p>
                   <p className={styles.hover_text}>Enables users to navigate by keyboard, without using the mouse</p>
               </div>  
               <div className={styles.card_sec_line}>
                   <GrGrid className={styles.sec_line_icon}/>
                   <p className={styles.sec_line_p}>Mousegrid</p>
                   <p className={styles.hover_text}>Enables voice and keypress navigation by dividing the screen into numbered sections</p>
               </div>  
               <div className={styles.card_sec_line}>
                   <Smart className={styles.sec_line_icon}/>
                   <p className={styles.sec_line_p}>Smart Navigation</p>
                   <p className={styles.hover_text}>Enables users to navigate the site by numeric keys</p>
               </div>  
               <div className={styles.card_sec_line}>
                   <Reader className={styles.sec_line_icon}/>
                   <p className={styles.sec_line_p}>Text Reader</p>
                   <p className={styles.hover_text}>Reading the site's text aloud, in supported browsers</p>
               </div>  
               <div className={styles.card_sec_line}>
                   <Voice className={styles.sec_line_icon}/>
                   <p className={styles.sec_line_p}>Voice Commands</p>
                   <p className={styles.hover_text}>Executing Commands with a microphone, in supported browsers</p>
               </div>            
           </div>
        )}
      
    </div>
  );
};

export default Section2;
