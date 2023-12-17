import logo from './logo.svg';
import './App.css';
import Services from "../src/components/Services";
import Call from "../src/components/Call"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import GoogleAuth from './components/GoogleAuth';
import ContactUs from "./components/ContactUs"
import Cards from "../src/components/Cards";
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/services' element={<Services/>}/>
          <Route path='/call' element={<Call/>}/>
          <Route path='/auth' element={<GoogleAuth/>}/>
          <Route path='/mail' element={<ContactUs/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
