import Card from "../Card/Card";
import "./Vas.css";
const vasData = [
  {
    id: 1,
    name: "item_1",
    info: `Factory & Supplier Audit
We assist you in visiting the supplier's warehouse for a comprehensive assessment.`,
    imgSrc: "https://www.w3schools.com/w3images/jeans3.jpg",
  },
  {
    id: 2,
    name: "item_2",
    info: `Factory & Supplier Audit
We assist you in visiting the supplier's warehouse for a comprehensive assessment.`,
    imgSrc: "https://www.w3schools.com/w3images/jeans3.jpg",
  },
  {
    id: 3,
    name: "item_3",
    info: `Factory & Supplier Audit
We assist you in visiting the supplier's warehouse for a comprehensive assessment.`,
    imgSrc: "https://www.w3schools.com/w3images/jeans3.jpg",
  },
  {
    id: 4,
    name: "item_4",
    info: `Factory & Supplier Audit
We assist you in visiting the supplier's warehouse for a comprehensive assessment.`,
    imgSrc: "https://www.w3schools.com/w3images/jeans3.jpg",
  },
  {
    id: 5,
    name: "item_5",
    info: `Factory & Supplier Audit
We assist you in visiting the supplier's warehouse for a comprehensive assessment.`,
    imgSrc: "https://www.w3schools.com/w3images/jeans3.jpg",
  },
  {
    id: 6,
    name: "item_6",
    info: `Factory & Supplier Audit
We assist you in visiting the supplier's warehouse for a comprehensive assessment.`,
    imgSrc: "https://www.w3schools.com/w3images/jeans3.jpg",
  },
  {
    id: 7,
    name: "item_7",
    info: `Factory & Supplier Audit
We assist you in visiting the supplier's warehouse for a comprehensive assessment.`,
    imgSrc: "https://www.w3schools.com/w3images/jeans3.jpg",
  },
  {
    id: 8,
    name: "item_8",
    info: `Factory & Supplier Audit
We assist you in visiting the supplier's warehouse for a comprehensive assessment.`,
    imgSrc: "https://www.w3schools.com/w3images/jeans3.jpg",
  },
];
const Vas = () => {
  return (
    <div className="vas-main">
      <h1>Value-added services</h1>
      <br />
      <p>Additional services to streamline operations and save costs.</p>
      <div className="vas-card">
        {vasData.map((vas) => (
          <Card vas={vas} key={vas.id} />
        ))}
      </div>
    </div>
  );
};

export default Vas;
