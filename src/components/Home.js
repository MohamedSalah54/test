import React, { useEffect, useRef } from "react";
import audio from '../audio/videoplayback.mp3'

const Home = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // تشغيل الصوت بشكل صامت عند تحميل الصفحة لتجاوز سياسات المتصفح
    if (audioRef.current) {
      audioRef.current.muted = false; // تأكيد أن الصوت غير صامت
      audioRef.current.play().catch((error) => {
        console.log("Error playing audio: ", error); // تسجيل أي خطأ
      });
    }
  }, []);

  const styles = {
    container: {
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "2rem",
      color: "#333",
    },
    paragraph: {
      fontSize: "1rem",
      color: "#555",
      lineHeight: "1.5",
      maxWidth: "600px",
      margin: "20px auto",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
    },
    audio: {
      marginTop: "20px",
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to My Home Page</h1>
      <p style={styles.paragraph}>
        This is a simple home page component with inline styles. Explore and enjoy the design!
      </p>
      <button style={styles.button} onClick={() => alert("Button Clicked!")}>
        Click Me
      </button>

      {/* إضافة عنصر الصوت مع autoplay */}
      <div style={styles.audio}>
        <audio ref={audioRef} autoPlay controls>
          <source src={audio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default Home;
