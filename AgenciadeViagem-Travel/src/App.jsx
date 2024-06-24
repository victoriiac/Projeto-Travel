import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* PAGE */
import Home from './Components/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Price from './Components/Price/Price';
import Services from './Components/Services/Services';
// import Team from './Components/Team/Team';
import Navbar from './Components/Navbar/Navbar';
import './global.style.css'

/* APP */
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Price />} />
          {/* <Route path="/team" element={<Team />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
