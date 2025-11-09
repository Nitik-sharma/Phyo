import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Service from './Pages/Service';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="pt-[140px]">
  <Home />
  <About />
  <Team />
  <Service />
  <Contact />
</div>

    </div>
  );
}

export default App;
