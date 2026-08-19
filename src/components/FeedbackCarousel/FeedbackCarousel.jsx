import { useState } from "react";
import "./FeedbackCarousel.css";

const feedback = [
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    text: "This product completely changed the way our team works. It's simple, fast, and beautiful.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Michael Smith",
    role: "Frontend Developer",
    text: "The experience is fantastic. Everything feels smooth and intuitive.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Emma Wilson",
    role: "Product Manager",
    text: "Our productivity has improved significantly since we started using it.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
];

export default function FeedbackCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % feedback.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + feedback.length) % feedback.length);
  };

  return (
    <section className="feedback-section">
      <h2>What Our Customers Say</h2>

      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="feedback-card">
          <img src={feedback[current].avatar} alt={feedback[current].name} />

          <div className="stars">★★★★★</div>

          <p>"{feedback[current].text}"</p>

          <h3>{feedback[current].name}</h3>
          <span>{feedback[current].role}</span>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="dots">
        {feedback.map((_, index) => (
          <button
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
