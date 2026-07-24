import amazonImg from "../../assets/amazon.jpg";
import "./AmazonSeller.css";
const AmazonSeller = () => {
  return (
    <div className="amazon-div">
      <div>
        <img src={amazonImg} alt="amazonImg" style={{ width: "80%" }} />
      </div>
      <div>
        <h1> Tailored for Amazon sellers </h1>
        <br />
        <h3> Trusted by top Amazon trainers</h3>
        <br />
        <p>
          {" "}
          We provide customized solutions to enhance your brand, like logo
          printing, personalized packaging, and product upgrades for a better
          look and performance. We also bring your ideas to life with a
          cost-effective production plan, covering everything from prototyping
          to final production.
        </p>
      </div>
    </div>
  );
};

export default AmazonSeller;
