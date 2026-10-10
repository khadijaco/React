import Footer from "../components/Footer";
import React from "react";
import Partners from "../data/Partners ";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/d6/8d/5f/d68d5fa3147058702c280fa00e7e3fa2.jpg",
    title: "You will vainly look for fruit on it in autumn.",
    description:
      "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/df/68/04/df6804f088cbddc0e298af88efda64ab.jpg",
    title: "A man's worth has its season, like tomato.",
    description:
      "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/1200x/09/1f/e7/091fe7d40e28567a9b90ccaa5aec2c76.jpg",
    title: "Good thoughts bear good fresh juicy fruit.",
    description:
      "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
  },
];

function News() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#132a35",
          paddingTop: "150px",
          paddingBottom: "100px",
          textAlign: "center",
          color: "white",
        }}
      >
        <p style={{ color: "#F28123", letterSpacing: "5px", fontSize: "14px" }}>
          Organic Information
        </p>
        <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>News Article</h1>
      </div>

      <div className="container mt-5">
        <h1 className="text-center">
          <span className="text-warning">Our</span> News
        </h1>
        <p className="text-center text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <div className="row mt-5">
          {newsData.map((news) => (
            <div className="col-md-4 mb-4" key={news.id}>
              <NewsCard news={news} />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4"></div>
      </div>

      <div>
        <Partners />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default News;
