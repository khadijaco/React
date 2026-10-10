import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <Row className="mt-5">
        <Col md={4} className="text-center">
          <FaShippingFast
            className="border"
            size={50}
            color="#F28123  
          "
          />
          <h5 className="mt-3">Free Shipping</h5>
          <p>When order over $75</p>
        </Col>

        <Col md={4} className="text-center">
          <FaHeadset className="border" size={50} color="#F28123" />
          <h5 className="mt-3">24/7 Support</h5>
          <p>Get support all day</p>
        </Col>

        <Col md={4} className="text-center">
          <FaUndo className="border" size={50} color="#F28123" />
          <h5 className="mt-3">Refund</h5>
          <p>Get refund within 3 days!</p>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
