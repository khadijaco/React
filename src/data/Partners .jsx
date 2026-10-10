import React from "react";
import { Row, Col } from "react-bootstrap";

const Partners = () => {
  const partners = [
    { name: "Get Lucky", font: "cursive" },
    { name: "Blueline", font: "serif" },
    { name: "Logo", font: "sans-serif" },
    { name: "Your Logo", font: "monospace" },
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="justify-content-center align-items-center">
        {partners.map((partner, index) => (
          <Col key={index} md={3} className="text-center mb-3">
            <h4
            className="borderr"
              style={{
                 fontFamily: partner.font,
                fontWeight: "bold",
                color: "#51728d",
                opacity: 0.7,
                
                letterSpacing: "2px",
              }}
            >
              {partner.name}
            </h4>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Partners;