import Accordion from "./components/Accordion/Accordion";
import AmazonSeller from "./components/AmazonSeller/AmazonSeller";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
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
  return (
    <>
      <NavBar />
      <Header />
      <AmazonSeller />
      {allData.map((singleData) => (
        <Accordion singleData={singleData} key={singleData.id} />
      ))}
      <Vas />
      <Footer />
    </>
  );
}

export default App;
