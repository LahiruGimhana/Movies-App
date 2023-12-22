import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePages from "./home/HomePages";
import SinglePage from "./components/watch/SinglePage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePages />} />
          <Route exact path="/singlepage/:id" element={<SinglePage />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Error route */}
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="" />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
