import upImg from "../src/assets/up-arrow-svgrepo-com.png";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import AmazonSeller from "./components/AmazonSeller/AmazonSeller";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Ticker from "./components/Ticker/Ticker";
import Vas from "./components/Vas/Vas";
const allData = [
  {
    id: 1,
    title: "Title 1",
    data: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    title: "Title 2",
    data: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    title: "Title 3",
    data: "Lorem ipsum dolor sit amet consectetur.",
  },
];
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
      <Ticker />
      <Header />
      <AmazonSeller />
      {allData.map((singleData) => (
        <Accordion singleData={singleData} key={singleData.id} />
      ))}
      <Vas />
      <Footer />
      <button onClick={() => scrollToTop()} className="scroll-to-top">
        <img src={upImg} alt="" />
      </button>
    </>
  );
}

export default App;
