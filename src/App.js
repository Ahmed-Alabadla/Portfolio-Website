import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Home from "./components/Home";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const { mode } = useSelector((state) => state.mode);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <div className={mode}>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-gray-800">
          <HashLoader color="#06b6d4" loading={loading} size={150} />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
