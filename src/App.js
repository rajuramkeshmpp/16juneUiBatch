// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Dashboard from './Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container mt-3">
        <Routes>
           <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
