import React, { createContext, useState, useEffect, useContext } from "react";

// Creating the VoiceCommandsContext
const VoiceCommandsContext = createContext();

// Custom hook to use the VoiceCommandsContext
export const useVoiceCommandsContext = () => useContext(VoiceCommandsContext);

export const VoiceCommandsProvider = ({ children }) => {
  const [isVoiceCommandsEnabled, setIsVoiceCommandsEnabled] = useState(false);
  const [language, setLanguage] = useState("en");
  const [transcript, setTranscript] = useState("");
  const [commandLog, setCommandLog] = useState([]);
  const [isListening, setIsListening] = useState(false);

  let recognition;

  useEffect(() => {
    // Check if browser supports SpeechRecognition
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      console.error("Speech Recognition is not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      const current = event.resultIndex;
      const resultTranscript = event.results[current][0].transcript;
      setTranscript(resultTranscript);
      handleCommand(resultTranscript.toLowerCase());
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setCommandLog((log) => [...log, "Recognition error occurred."]);
    };

    recognition.onend = () => {
      if (isListening) {
        recognition.start();
      }
    };
  }, [isListening, language]);

  const handleCommand = (text) => {
    // Define commands based on language
    let commandExecuted = false;
    if (language === "en") {
      if (text.includes("scroll down")) {
        window.scrollBy(0, 100);
        setCommandLog((log) => [...log, "Scrolling Down"]);
        commandExecuted = true;
      }
      // Add more English commands...
    } else if (language === "ar") {
      if (text.includes("تمرير لأسفل")) {
        window.scrollBy(0, 100);
        setCommandLog((log) => [...log, "تمرير لأسفل"]);
        commandExecuted = true;
      }
      // Add more Arabic commands...
    }

    if (!commandExecuted) {
      setCommandLog((log) => [...log, `Unknown command: ${text}`]);
    }
  };

  const toggleListening = () => {
    if (!recognition) {
      console.error("SpeechRecognition is not initialized.");
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
      setCommandLog((log) => [...log, "Voice Commands stopped."]);
    } else {
      recognition.start();
      setIsListening(true);
      setCommandLog((log) => [...log, "Voice Commands started."]);
    }
  };

  return (
    <VoiceCommandsContext.Provider
      value={{
        isVoiceCommandsEnabled,
        setIsVoiceCommandsEnabled,
        language,
        setLanguage,
        transcript,
        commandLog,
        isListening,
        toggleListening,
      }}
    >
      {children}
    </VoiceCommandsContext.Provider>
  );
};
