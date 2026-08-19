import { Route, Routes } from "react-router-dom";
import "./App.css";
import upImg from "./assets/up-arrow-svgrepo-com.png";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService/TermsOfService";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <button onClick={() => scrollToTop()} className="scroll-to-top">
        <img src={upImg} alt="" />
      </button>
    </>
  );
}

export default App;
