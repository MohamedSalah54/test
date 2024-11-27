import React, { createContext, useState, useEffect } from "react";

// إنشاء Context
export const ColorContext = createContext();

// إنشاء Provider
export const ColorProvider = ({ children }) => {
  // ألوان مختلفة لكل قسم
  const [colors, setColors] = useState({
    Backgrounds: `hsl(0, 0%, 100%)`,
    Headings: `hsl(0, 0%, 0%)`,
    Contents: `hsl(0, 0%, 50%)`,
  });

  const [hue, setHue] = useState(0); // قيمة التدرج اللوني (Hue)
  const [activeSection, setActiveSection] = useState("Backgrounds"); // القسم النشط الافتراضي

  // استرجاع الألوان من LocalStorage عند تحميل الصفحة وتطبيقها فورًا
  useEffect(() => {
    const savedColors = JSON.parse(localStorage.getItem("savedColors"));
    const savedSection = localStorage.getItem("selectedSection");

    if (savedColors) {
      setColors(savedColors);
      applyColorToSection(savedColors); // تطبيق الألوان المخزنة لكل قسم
    }

    if (savedSection) {
      setActiveSection(savedSection);
    }
  }, []);

  // تحويل قيمة الـ range إلى لون HSL وتحديث الألوان بناءً على القسم النشط
  const handleColorChange = (e) => {
    const newHue = e.target.value;
    setHue(newHue);

    // تحويل قيمة الـ hue إلى لون HSL
    const selectedColor = `hsl(${newHue}, 100%, 50%)`;

    // تحديث اللون للقسم النشط
    setColors((prevColors) => ({
      ...prevColors,
      [activeSection]: selectedColor,
    }));

    // تخزين الألوان في LocalStorage
    const updatedColors = {
      ...colors,
      [activeSection]: selectedColor,
    };

    localStorage.setItem("savedColors", JSON.stringify(updatedColors));
    localStorage.setItem("selectedSection", activeSection);

    // تطبيق الألوان على الأقسام
    applyColorToSection(updatedColors);
  };

  // دالة لتطبيق الألوان على الأقسام المختلفة
  const applyColorToSection = (colorSet) => {
    // الخلفية
    document.body.style.backgroundColor = colorSet.Backgrounds;

    // العناوين
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((el) => {
      el.style.color = colorSet.Headings;
    });

    // المحتوى
    document.querySelectorAll("p, span, a, li").forEach((el) => {
      el.style.color = colorSet.Contents;
    });
  };

  // دالة لإعادة ضبط الألوان إلى الافتراضي
  const resetColors = () => {
    const defaultColors = {
       Backgrounds: `hsl(0, 0%, 100%)`,
    Headings: `hsl(0, 0%, 0%)`,
    Contents: `hsl(0, 0%, 50%)`,
    };

    setColors(defaultColors);
    applyColorToSection(defaultColors);

    // إزالة الألوان المخزنة من LocalStorage
    localStorage.removeItem("savedColors");
    localStorage.removeItem("selectedSection");
  };

  return (
    <ColorContext.Provider value={{colors,hue,activeSection, setActiveSection,handleColorChange,resetColors,}}>
      {children}
    </ColorContext.Provider>
  );
};
export default ColorContext;