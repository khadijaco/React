import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Deal = () => {
  return (
    <div className="container mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <div className="position-relative">
            <img
              src="https://i.pinimg.com/736x/b0/23/09/b02309684b62b1caa18ad9111524d63f.jpg"
              alt="Strawberry"
              className="img-fluid"
            />{" "}
            <div
              className="position-absolute top-0 start-0"
              style={{
                backgroundColor: "#F28123",
                borderRadius: "50%",
                padding: "15px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h3>30%</h3>
              <p>off per kg</p>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <h2 className="text-warning">Deal of the month</h2>
          <h4>HIKAN STRAWABERRY</h4>
          <p className="text-muted">
            Quisquam minus maiores repudiandae nobis, minima saepe id, fugit
            ullam similique! Beatae, minima quisquam molestias facere ea.
          </p>

          <div className="row mt-4">
            <div className="col-3">
              <div className="border border-warning text-center p-3">
                <h3>00</h3>
                <p>Days</p>
              </div>
            </div>
            <div className="col-3">
              <div className="border border-warning text-center p-3">
                <h3>00</h3>
                <p>Hours</p>
              </div>
            </div>
            <div className="col-3">
              <div className="border border-warning text-center p-3">
                <h3>00</h3>
                <p>Mins</p>
              </div>
            </div>
            <div className="col-3">
              <div className="border border-warning text-center p-3">
                <h3>00</h3>
                <p>Secs</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="butn" style={{ width: "fit-content" }}>
              <FaShoppingCart />
              <Link to="/cart" className="text-decoration-none text-white">
                Add to Cart{" "}
              </Link>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Deal;
