import "./Ticker.css";

const items = [
  "Furniture",
  "Shoes",
  "Electronics",
  "Cloths",
  "China",
  "Amazon",
  "Ali Express",
];

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__track">
        {[...items, ...items,...items].map((item, index) => (
          <div className="ticker__item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
