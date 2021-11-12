import React from 'react';
import Shop from './shop';
import About from './about';
import Nav from './nav';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}


const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
export default App;