import './App.css';
import Call from './components/Call';
import Hero from './components/Hero';
import Services from './components/Services';
import Nav from './components/Nav';
import Footer from './components/Footer'
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services />
      <Project/>
      <About/>
      <Call />
      <Footer />
    </div>
  );
}

export default App;
