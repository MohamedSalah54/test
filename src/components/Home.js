import { useAccessibility } from "../context/AccessMode";
import { useState, useEffect } from "react";

function Home() {
  const { isDarkMode, isLightMode, isMonochrome, isLowSaturation, isHighSaturation, isContrast } = useAccessibility();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setBlogs(data); 
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className={`container ${isDarkMode ? "accessibility-mode" : ""} ${isLightMode ? "light-mode" : ""} ${isMonochrome ? "monochrome-mode" : ""} ${isLowSaturation? "low-saturation": ""}  ${isHighSaturation?"high-saturation":""} `}>
      <div className="head">
        <h1 className={`main-heading ${isDarkMode ? "accessibility-text" : ""} ${isLightMode ? "light-mode-txt" : ""} ${isMonochrome ? "monochrome-mode-txt" : ""}  ${isHighSaturation?"high-saturation-txt":""} `}>
          Latest Blog Posts
        </h1>
      </div>
      <section className="blog-container">
          {blogs.map((blog, index) => (
            <div key={index} className={`blog-card ${isDarkMode ? "accessibility-card" : ""} ${isLightMode ? "light-mode-card" : ""} ${isMonochrome ? "monochrome-mode-card" : ""} `}>
              <h2 className={`blog-title ${isDarkMode ? "accessibility-text" : ""} ${isLightMode ? "light-mode-txt" : ""} ${isMonochrome ? "monochrome-mode-txt" : ""} ${isLowSaturation? "low-saturation-txt": ""} ${isHighSaturation?"high-saturation-txt":""} ${isContrast?"contrast-mode-txt":""}`}>{blog.title}</h2>
              <p className={`blog-content ${isDarkMode ? "accessibility-p" : ""} ${isLightMode ? "light-mode-p" : ""} ${isMonochrome ? "monochrome-mode-p" : ""} `}>
                {blog.body}
              </p>
            </div>
        ))}
      </section>
    </div>
  );
}

export default Home;



