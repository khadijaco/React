import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaQuoteRight } from "react-icons/fa";

const slides = [
  {
    image:
      "https://i.pinimg.com/736x/67/6f/4a/676f4aa0141a7e48b3f08fe106116ca8.jpg",
    subtitle: "SARAH",
    title:
      "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    image:
      "https://i.pinimg.com/736x/8d/c2/06/8dc20618359d8161eaffe1a809722c49.jpg",
    subtitle: "Maha",
    title:
      "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    image:
      "https://i.pinimg.com/736x/0d/43/bd/0d43bd7a7f489a4c9c13456d64c2b22d.jpg",
    subtitle: "Sonia",
    title:
      "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
];

const Project2Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 400);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mt-5">
      <div
        className="text-center border rounded-5 shadow-sm p-4"
        style={{
          backgroundColor: "#f7f8f9dd",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.4s ease-in-out",
        }}
      >
        <img
          src={slides[currentSlide].image}
          alt="Client"
          className="rounded-circle"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />

        <h4 className="mt-3">{slides[currentSlide].subtitle}</h4>
        <p className="text-muted">Local shop owner </p>

        <p
          className="text-muted 
        text-center"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          {slides[currentSlide].title}
        </p>

        <div className="mt-3">
          <FaQuoteRight size={30} color="#54626a" />
        </div>
      </div>
    </div>
  );
};

export default Project2Index;
