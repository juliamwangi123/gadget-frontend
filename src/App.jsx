
import './App.css'
import {
  Navbar,
  Home,
  Signin,
  Signup
} from "./Components";

import { Route,Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App
