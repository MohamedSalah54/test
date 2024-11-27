import { useFontContext } from "../../../../context/FontContext";
import styles from './Section4.module.css';
import { FaCirclePlus, FaCircleMinus } from 'react-icons/fa6';

const FontSizeControl = ({ selectedProperty }) => {
  const { updateFont } = useFontContext();

  // دالة لزيادة أو تقليل القيمة المحددة
  const handleIncrease = () => {
    updateFont(selectedProperty, true);
  };

  const handleDecrease = () => {
    updateFont(selectedProperty, false);
  };
  return (
    <div className={styles.slider_container}>
      <div className={styles.slider}>
        {/* تعديل حجم الخط */}
        <FaCircleMinus 
          className={`${styles.slider_icon} ${styles.left}`} 
          onClick={handleDecrease} // تقليل حجم الخط
        />
        <FaCirclePlus 
          className={`${styles.slider_icon} ${styles.right}`} 
          onClick={handleIncrease} // زيادة حجم الخط
        />
        
       
      </div>
    </div>
  );
};

export default FontSizeControl;
