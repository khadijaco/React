import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaTruck, FaDollarSign, FaHeadset, FaBriefcase } from "react-icons/fa";
import Project2Index from "../components/Project2Index";
import Partners from "../data/Partners ";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* ========== 1. قسم Hero ========== */}
      <div
        style={{
          backgroundColor: "#051922",
          paddingTop: "150px",
          paddingBottom: "100px",
          textAlign: "center",
          color: "white",
        }}
      >
        <p style={{ color: "#F28123", letterSpacing: "5px", fontSize: "14px" }}>
          WE SALE FRESH FRUITS
        </p>
        <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>About Us</h1>
      </div>

      {/* ========== 2. قسم Why Fruitkha ========== */}
      <div className="container mt-5">
        <Row className="align-items-center">
          {/* العمود الأيسر: النص */}
          <Col md={6}>
            <h1 className="fw-bold">
              Why <span className="text-warning">Fruitkha</span>
            </h1>
            <Row className="mt-4">
              <Col md={6}>
                <div className="d-flex align-items-start">
                  <div
                    style={{
                      backgroundColor: "#F28123",
                      borderRadius: "50%",
                      padding: "15px",
                      color: "white",
                      marginRight: "15px",
                    }}
                  >
                    <FaTruck size={20} />
                  </div>
                  <div>
                    <h5>Home Delivery</h5>
                    <p className="text-muted small">
                      Sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-start">
                  <div
                    style={{
                      backgroundColor: "#F28123",
                      borderRadius: "50%",
                      padding: "15px",
                      color: "white",
                      marginRight: "15px",
                    }}
                  >
                    <FaDollarSign size={20} />
                  </div>
                  <div>
                    <h5>Best Price</h5>
                    <p className="text-muted small">
                      Sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-start">
                  <div
                    style={{
                      backgroundColor: "#F28123",
                      borderRadius: "50%",
                      padding: "15px",
                      color: "white",
                      marginRight: "15px",
                    }}
                  >
                    <FaBriefcase size={20} />
                  </div>
                  <div>
                    <h5>Custom Box</h5>
                    <p className="text-muted small">
                      Sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-start">
                  <div
                    style={{
                      backgroundColor: "#F28123",
                      borderRadius: "50%",
                      padding: "15px",
                      color: "white",
                      marginRight: "15px",
                    }}
                  >
                    <FaHeadset size={20} />
                  </div>
                  <div>
                    <h5>Quick Refund</h5>
                    <p className="text-muted small">
                      Sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <img
              src="https://i.pinimg.com/736x/00/47/e4/0047e4de4dc1ee69f015f9cd54805613.jpg"
              alt="Fruit Basket"
              className="img-fluid"
              style={{ borderRadius: "20px" }}
            />
          </Col>
        </Row>
      </div>

      <div
        className="container mt-5 border rounded-5 shadow-sm p-4"
        style={{ backgroundColor: "#f7f8f9dd" }}
      >
        <Row className="align-items-center">
          <Col md={6}>
            <div>
              <h1 className="fw-bold display-4">December sale is on!</h1>
              <h2 className="fw-bold display-4">
                with big <span className="text-warning">Discount...</span>
              </h2>
              <p className="mt-3 d-flex align-items-center">
                <span className="text-muted fs-4 me-2">
                  Sale! <br /> Upto
                </span>
                <span className="text-warning fw-bold display-3">50%</span>
                <span className="text-muted fs-4 ms-2">off</span>
              </p>
              <button
                className=" 
                mt-3 butn"
              >
                <Link to="/Shop" className="text-decoration-none text-white">
                  {" "}
                  Shop Now{" "}
                </Link>
              </button>
            </div>
          </Col>

          <Col md={6}>
            <div className="position-relative">
              <img
                src="https://i.pinimg.com/736x/86/09/c1/8609c1965eaca48b99119db4748355ab.jpg"
                alt="Strawberry"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Project2Index />
      </div>

      <div>
        <Partners />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
