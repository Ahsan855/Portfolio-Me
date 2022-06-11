import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./Pages/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App sm:px-5 md:px-0">
      <Navbar />
      <Home />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
