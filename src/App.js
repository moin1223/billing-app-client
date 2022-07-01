import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import React, { createContext, useState } from "react";
import Home from './Pages/Home';
export const UserContext = createContext()



function App() {

  const [modal,setmodal] = useState (false)
  
    return (
      <UserContext.Provider value={[modal,setmodal]}>
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/form" element={<Popup />} /> */}
  </Routes>
  </UserContext.Provider>
    
   

  );
}

export default App;
