import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStateProvider } from "./context/GlobalStateSectin1";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { GlobalStateProvider4 } from './context/GlobalStateSection4';
import { AccessibilityProvider } from './context/AccessMode';

function App() {


  return (
    <GlobalStateProvider> 
       <GlobalStateProvider4> 
        <AccessibilityProvider>

      <Router>
        <Navbar />
          <Sidebar  />
          <Routes>
            <Route path="/" element={<Home  />} />
          </Routes>
      </Router>
      </AccessibilityProvider>
      </GlobalStateProvider4>
    </GlobalStateProvider>
  );
}

export default App;
