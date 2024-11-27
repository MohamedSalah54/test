import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStateProvider } from "./context/GlobalStateSectin1";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sidebar from './components/sidebar/Sidebar';
import { GlobalStateProvider4 } from './context/GlobalStateSection4';
import { AccessibilityProvider } from './context/AccessMode';
import { ColorProvider } from './context/ColorContext';
import { CursorProvider } from './context/CursorContext'; // تأكد من استيراد CursorProvider
import {  FontProvider } from './context/FontContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { BrightModeProvider} from './context/BrightModeContext'
import { MonochromeProvider } from './context/MonochromeContext';
import { LowSaturationProvider } from './context/LowSaturationContext';
import { HighSaturationProvider } from './context/HightSaturationContext';
import { ContrastProvider } from './context/ContrastContext';
import { AudioProvider } from './context/MuteMediaContext';
function App() {
  return (
    <GlobalStateProvider> 
      <GlobalStateProvider4> 
        <AccessibilityProvider>
          <ColorProvider>
            <CursorProvider> 
              <FontProvider>
                <DarkModeProvider>
                  <BrightModeProvider>
                  <MonochromeProvider>
                    <LowSaturationProvider>
                      <HighSaturationProvider>
                        <ContrastProvider>
                          <AudioProvider>
                          <Router>
                            <Navbar />
                            <Sidebar />
                            <Routes>
                              <Route path="/" element={<Home />} />
                            </Routes>
                          </Router>
                          </AudioProvider>
                        </ContrastProvider>
                      </HighSaturationProvider>
                   </LowSaturationProvider>
                  </MonochromeProvider>
                 </BrightModeProvider>
                </DarkModeProvider>
              </FontProvider>
            </CursorProvider>
          </ColorProvider>
        </AccessibilityProvider>
      </GlobalStateProvider4>
    </GlobalStateProvider>
  );
}

export default App;
