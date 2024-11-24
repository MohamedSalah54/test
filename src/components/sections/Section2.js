import { useState } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { ReactComponent as Ear } from "../../icons/assets/svg-export//svgexport-10.svg";
import { ReactComponent as Keyboard } from "../../icons/assets/svg-export//svgexport-12.svg";
import { ReactComponent as Smart } from "../../icons/assets/icons-svg/Smart-Navigation.svg"
import { ReactComponent as Voice } from "../../icons/assets/svg-export//svgexport-14.svg";
import { ReactComponent as Reader } from "../../icons/assets/icons-svg/Text-Reader.svg";
import { GrGrid } from "react-icons/gr";

const Section2 = () => {
  const [isOpen, setIsOpen] = useState(true); // تتبع القائمة الرئيسية
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="dropdown-container">
      <button className="drop-btn1" onClick={toggleDropdown}>
        <span className="dropdown">Navigation Adjustment</span>
        {isOpen ? (
          <AiFillMinusSquare className="drop-icon" />
        ) : (
          <AiFillPlusSquare className="drop-icon" />
        )}
      </button>
      { isOpen && (
               <div className="card-container-sec-line">
               <div className="card-sec-line">
                   <Ear  className="sec-line-icon"/>
                   <p className="sec-line-p">Screen Render Adjustment</p>
                   <p className="hover-text">Makes the site compatible for screen render users</p>
               </div>
               <div className="card-sec-line">
                   <Keyboard className="sec-line-icon"/>
                   <p className="sec-line-p">Keyborad Navigation</p>
                   <p className="hover-text">Enables users to navigate by keyboard, without using the mouse</p>
               </div>  
               <div className="card-sec-line">
                   <GrGrid className="sec-line-icon"/>
                   <p className="sec-line-p">Mousegrid</p>
                   <p className="hover-text">Enables voice and keypress navigation by dividing the screen into numbered sections</p>
               </div>  
               <div className="card-sec-line">
                   <Smart className="sec-line-icon"/>
                   <p className="sec-line-p">Smart Navigation</p>
                   <p className="hover-text">Enables users to navigate the site by numeric keys</p>
               </div>  
               <div className="card-sec-line">
                   <Reader className="sec-line-icon"/>
                   <p className="sec-line-p">Text Reader</p>
                   <p className="hover-text">Reading the site's text aloud, in supported browsers</p>
               </div>  
               <div className="card-sec-line">
                   <Voice className="sec-line-icon"/>
                   <p className="sec-line-p">Voice Commands</p>
                   <p className="hover-text">Executing Commands with a microphone, in supported browsers</p>
               </div>            
           </div>
        )}
      
    </div>
  );
};

export default Section2;
