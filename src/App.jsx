import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Container from "./Components/Container";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import BookNow from "./Pages/BookNow";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Container />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookNow />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
