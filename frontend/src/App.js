import React from "react";
import Navbar from "./layouts/navbar";
import { BrowserRouter } from 'react-router-dom';
import Rutas from "./pages/rutas";


function App() {

  return (
    <div className="App">
      
        <BrowserRouter>
          <Navbar />
          <Rutas />
        </BrowserRouter>
      
    </div>
  );
}

export default App;
