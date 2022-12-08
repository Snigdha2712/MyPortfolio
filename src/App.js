import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from './components/About/About';
import Achievements from './components/Work/Work';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <About/>
    <Achievements/>
    <Contact/>
    </div>
  );
}

export default App;
