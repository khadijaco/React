import Footer from "../components/Footer";

import { Row, Col, Form, Button } from "react-bootstrap";
import {
  FaStore,
  FaClock,
  FaAddressBook,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
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
          Get 24/7 Support
        </p>
        <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>Contact us</h1>
      </div>

      <div className="container mt-5">
        <div
          className="container mt-5"
          style={{
            backgroundColor: "#f7f8f9dd",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Row className="mt-5">
            <Col md={7}>
              <h2 className="fw-bold mb-4">Have you any question?</h2>
              <p className="text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo
                alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore,
                esse natus!
              </p>

              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Phone" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={6} placeholder="Message" />
                </Form.Group>

                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#F28123",
                    border: "none",
                    borderRadius: "30px",
                    padding: "12px 40px",
                    fontWeight: "bold",
                  }}
                >
                  SUBMIT
                </Button>
              </Form>
            </Col>

            <Col md={5}>
              <div
                className="p-4"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="d-flex align-items-start mb-4">
                  <div
                    style={{
                      color: "#F28123",
                      fontSize: "24px",
                      marginRight: "15px",
                    }}
                  >
                    <FaStore />
                  </div>
                  <div>
                    <h5 className="fw-bold">Shop Address</h5>
                    <p className="text-muted mb-0">34/8, East Hukupara</p>
                    <p className="text-muted mb-0">Gifirtok, Sadan.</p>
                    <p className="text-muted mb-0">Country Name</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div
                    style={{
                      color: "#F28123",
                      fontSize: "24px",
                      marginRight: "15px",
                    }}
                  >
                    <FaClock />
                  </div>
                  <div>
                    <h5 className="fw-bold">Shop Hours</h5>
                    <p className="text-muted mb-0">MON - FRIDAY: 8 to 9 PM</p>
                    <p className="text-muted mb-0">SAT - SUN: 10 to 8 PM</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div
                    style={{
                      color: "#F28123",
                      fontSize: "24px",
                      marginRight: "15px",
                    }}
                  >
                    <FaAddressBook />
                  </div>
                  <div>
                    <h5 className="fw-bold">Contact</h5>
                    <p className="text-muted mb-0">Phone: +00 111 222 3333</p>
                    <p className="text-muted mb-0">
                      Email: support@fruitkha.com
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div>
        <div
          className="container-fluid mt-5"
          style={{
            backgroundColor: "#032130",
            color: "white",
            padding: "50px",
          }}
        >
          <h1 className="text-center mb-4">
            <FaMapMarkerAlt style={{ color: "#F28123", marginRight: "10px" }} />
            Find Our Location
          </h1>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.259875!3d40.697670!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
