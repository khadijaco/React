import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <Card
      className="border-0 shadow-sm h-100 news-card {
"
    >
      <Card.Img
        variant="top"
        src={news.img}
        alt={news.title}
        style={{ height: "350px", objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold fs-4">{news.title}</Card.Title>

        <div className="d-flex gap-3 text-muted small mb-2">
          <span>
            <FaUser className="me-1" />
            Admin
          </span>
          <span>
            <FaCalendarAlt className="me-1" />
            27 December, 2019
          </span>
        </div>

        <Card.Text className="text-muted">{news.description}</Card.Text>

        <Button
          variant="link"
          className="text-dark fw-bold text-decoration-none"
          as={Link}
          to="/cart"
        >
          read more <span>&gt;</span>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
