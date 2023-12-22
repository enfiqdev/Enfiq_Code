import logo from './logo.svg';
import './App.css';
import Services from "../src/components/Services";
import Call from "../src/components/Call"
import Nav from './components/Nav';
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
       <Nav/> 
      <BrowserRouter>
        <Routes>
          <Route path='/services' element={<Services/>}/>
          <Route path='/call' element={<Call/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>


        </Routes>
      </BrowserRouter>
       {/*<Footer/>  */}
    </div>
  );
}

export default App;
