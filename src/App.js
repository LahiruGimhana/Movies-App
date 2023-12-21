import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePages from "./home/HomePages";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePages />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Error route */}
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="" />
        </Routes>
      </>
    </Router>
  );
}

export default App;
