import logo from './logo.svg';
import './App.css';
import Services from "../src/components/Services";
import Call from "../src/components/Call"
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/services' element={<Services/>}/>
          <Route path='/call' element={<Call/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
