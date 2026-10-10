import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#032130", color: "white", paddingTop: "40px" }}
    >
      <div
        className="container py-5 shadow-lg"
        style={{ borderBottom: "1px solid #1a3a4d" }}
      >
        <Row>
          <Col md={3} className="mb-4">
            <h5 className="text-white mb-3">About us</h5>
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "#F28123",
                marginBottom: "15px",
              }}
            ></div>
            <p className="text-white" style={{ fontSize: "14px" }}>
              Ut enim ad minim veniam perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium.
            </p>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="text-white mb-3">Get in Touch</h5>
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "#F28123",
                marginBottom: "15px",
              }}
            ></div>
            <p className="text-white" style={{ fontSize: "14px" }}>
              34/8, East Hukupara, Gifirtok, Sadan.
            </p>
            <p className="text-white" style={{ fontSize: "14px" }}>
              support@fruitkha.com
            </p>
            <p className="text-white" style={{ fontSize: "14px" }}>
              +00 111 222 3333
            </p>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="text-white mb-3">Pages</h5>
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "#F28123",
                marginBottom: "15px",
              }}
            ></div>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  <span className="text-warning">› </span>
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/About" className="text-white text-decoration-none">
                  <span className="text-warning">› </span> About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/shop" className="text-white text-decoration-none">
                  <span className="text-warning">› </span> Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/News" className="text-white text-decoration-none">
                  <span className="text-warning">› </span> News
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">
                  <span className="text-warning">› </span> Contact
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="text-white mb-3">Subscribe</h5>
            <div
              style={{
                width: "40px",
                height: "2px",
                backgroundColor: "#F28123",
                marginBottom: "15px",
              }}
            ></div>
            <p className="text-white" style={{ fontSize: "14px" }}>
              Subscribe to our mailing list to get the latest updates.
            </p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Email"
                className="me-2"
                style={{
                  backgroundColor: "#0d2533",
                  border: "1px solid #1a3a4d",
                  color: "white",
                }}
              />
              <Button
                style={{
                  backgroundColor: "#17355d",
                  border: "none",
                  color: "#e66e13",
                }}
              >
                <FaPaperPlane />
              </Button>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        style={{
          borderTop: "1px solid #1a3a4d",
          marginTop: "30px",
          padding: "20px 0",
        }}
      >
        <div
          className="container shadow-lg"
          style={{ borderBottom: "1px solid #1a3a4d" }}
        >
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="text-white mb-0" style={{ fontSize: "14px" }}>
                Copyrights © 2019
                <span className="text-warning">Imran Hossain</span>, All Rights
                Reserved.
                <br />
                Distributed By
                <span className="text-warning">Themewagon</span>
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3 fs-5">
                <FaFacebook
                  className="text-white"
                  style={{ cursor: "pointer" }}
                />
                <FaTwitter
                  className="text-white"
                  style={{ cursor: "pointer" }}
                />
                <FaInstagram
                  className="text-white"
                  style={{ cursor: "pointer" }}
                />
                <FaLinkedin
                  className="text-white"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
