import upImg from "../../assets/up-arrow-svgrepo-com.png";
import Accordion from "../Accordion/Accordion";
import AmazonSeller from "../AmazonSeller/AmazonSeller";
import FeedbackCarousel from "../FeedbackCarousel/FeedbackCarousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SmallDetail from "../SmallDetail/SmallDetail";
import Ticker from "../Ticker/Ticker";
import Vas from "../Vas/Vas";
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
const Home = () => {
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
      <SmallDetail />
      <Header />
      <AmazonSeller />
      {allData.map((singleData) => (
        <Accordion singleData={singleData} key={singleData.id} />
      ))}
      <FeedbackCarousel />
      <Vas />
      <Footer />
      <button onClick={() => scrollToTop()} className="scroll-to-top">
        <img src={upImg} alt="" />
      </button>
    </>
  );
};

export default Home;
