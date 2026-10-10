import Footer from "../components/Footer";

import Partners from "../data/Partners ";

import React from "react";
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Checkout = () => {
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
        <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>
          <div>
            <p
              style={{
                color: "#F28123",
                letterSpacing: "5px",
                fontSize: "14px",
              }}
            >
              Fresh and Organic
            </p>
            <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>
              Check Out Product
            </h1>
          </div>
        </h1>
      </div>

      <div className="container mt-5">
        <Row>
          <Col md={7}>
            <div
              className="p-3 mb-4"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "5px" }}
            >
              <h5 className="fw-bold">
                <FaCheckCircle className="text-warning me-2" />
                Billing Address
              </h5>
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Address" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Phone" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Say Something"
                />
              </Form.Group>
            </Form>

            <div
              className="p-3 mb-4 mt-5"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "5px" }}
            >
              <h5 className="fw-bold">
                <FaCheckCircle className="text-warning me-2" />
                Shipping Address
              </h5>
            </div>

            <div
              className="p-3 mb-4 mt-5"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "5px" }}
            >
              <h5 className="fw-bold">
                <FaCheckCircle className="text-warning me-2" />
                Card Details
              </h5>
            </div>
          </Col>

          <Col md={5}>
            <Table bordered>
              <tbody>
                <tr>
                  <td>Product</td>
                  <td>Total</td>
                </tr>
                <tr>
                  <td>Strawberry</td>
                  <td>$85.00</td>
                </tr>

                <tr>
                  <td>Berry</td>
                  <td> $70.00</td>
                </tr>
                <tr>
                  <td>Lemon</td>
                  <td>$35.00</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>$190</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>$50</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>$240</td>
                </tr>
              </tbody>
            </Table>

            <Button
              style={{
                backgroundColor: "#F28123",
                border: "none",
                borderRadius: "30px",
                padding: "12px 40px",
                fontWeight: "bold",
              }}
            >
              Place Order
            </Button>
          </Col>
        </Row>
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

export default Checkout;
