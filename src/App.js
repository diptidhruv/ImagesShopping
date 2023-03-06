// import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/pages/Cart";
import Photos from "./components/pages/Photos";
import Captson from "./components/Captson";

function App() {
  return (
    <div className="container-fluid">
      {/* Shree Yamunaji */}
      <Header />
      <main className="m-3 d-flex justify-content-center">
        {/* <Photos /> */}
        <Routes>
          {/* <Route path="/Captson" element={<Captson />} /> */}
          <Route exact path="/" element={<Photos />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
