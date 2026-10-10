import Footer from "../components/Footer";
import { useState } from "react";
import Partners from "../data/Partners ";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Table } from "react-bootstrap";

const Cart = () => {
  const [count, setCount] = useState(0);
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
          Fresh and Organic
        </p>
        <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>Cart</h1>
      </div>

      <div className="container mt-5">
        <Row>
          <Col md={7}>
            <Table bordered>
              <tbody>
                <tr style={{ background: "#f4f0f0d3" }}>
                  <td style={{ background: "#f4f0f0d3", textAlign: "center" }}>
                    Product Image
                  </td>
                  <td style={{ background: "#f4f0f0d3" }}>Product Name</td>
                  <td style={{ background: "#f4f0f0d3" }}>Price</td>
                  <td style={{ background: "#f4f0f0d3" }}>Quantity</td>
                  <td style={{ background: "#f4f0f0d3" }}>Total</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://i.pinimg.com/736x/44/60/1d/44601db0191d02fc067c1c5b0acb5abb.jpg"
                      alt=""
                      width="50"
                    />
                  </td>
                  <td>Strawberry</td>
                  <td>$85</td>
                  <td>
                    <Form.Control
                      type="number"
                      min="1"
                      value={count}
                      onChange={(e) => setCount(parseInt(e.target.value))}
                      style={{
                        width: "80px",
                        margin: "0 auto",
                        textAlign: "center",
                      }}
                    />
                  </td>

                  <td>1</td>
                </tr>

                <tr>
                  <td>
                    <img
                      src="https://i.pinimg.com/736x/13/f5/4b/13f54b794f0fa12fc79c0711052544d5.jpg"
                      alt="Berry"
                      width="50"
                    />
                  </td>
                  <td>Berry</td>
                  <td> $70.00</td>
                  <td>
                    <Form.Control
                      type="number"
                      min="1"
                      value={count}
                      onChange={(e) => setCount(parseInt(e.target.value))}
                      style={{
                        width: "80px",
                        margin: "0 auto",
                        textAlign: "center",
                      }}
                    />
                  </td>

                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://i.pinimg.com/736x/71/6d/6c/716d6c0173382d40b0bb604e2807685e.jpg"
                      alt="Lemon"
                      width="50"
                    />
                  </td>
                  <td>Lemon</td>
                  <td>$35.00</td>
                  <td>
                    <Form.Control
                      type="number"
                      min="1"
                      value={count}
                      onChange={(e) => setCount(parseInt(e.target.value))}
                      style={{
                        width: "80px",
                        margin: "0 auto",
                        textAlign: "center",
                      }}
                    />
                  </td>

                  <td>1</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col md={5}>
            <Table bordered>
              <tbody>
                <tr>
                  <td style={{ background: "#f4f0f0d3" }}>Total</td>
                  <td style={{ background: "#f4f0f0d3" }}>Price</td>
                </tr>
                <tr>
                  <td>Subtotal:</td>
                  <td>$85.00</td>
                </tr>

                <tr>
                  <td>Shipping:</td>
                  <td> $70.00</td>
                </tr>
                <tr>
                  <td>Total:</td>
                  <td>$155.00</td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-center mt-3 me-3 gap-4">
              <button className="butn mt-3">
                <Link to="/Cart" className="text-decoration-none text-white">
                  Update Cart
                </Link>
              </button>

              <button className="butn mt-3">
                <Link
                  to="/Checkout"
                  className="text-decoration-none text-white"
                >
                  Check Out
                </Link>
              </button>
            </div>

            <br />
            <br />
            <p>Apply Coupon</p>

            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Coupon" />
              </Form.Group>
            </Form>
            <button className="butn mt-3">
              <Link to="/" className="text-decoration-none text-white">
                Know More
              </Link>
            </button>
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

export default Cart;
