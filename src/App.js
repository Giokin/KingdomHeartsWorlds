import React from "react";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Worlds from "./components/worlds";

function App() {
  return (
    <div>
      <nav>
        <p>Kingdom Hearts Worlds</p>
        <p>Kingdom Hearts II Worlds</p>
      </nav>
      <Routes>
        <Route path='/' element={<Worlds />} />
      </Routes>
    </div>
  );
}

export default App;
