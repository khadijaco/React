import hand from "../assets/hand.jpg";
import iphon from "../assets/iphon.jpg";
import lab from "../assets/lab.jpg";
import labtob from "../assets/labtob.jpg";
import camr from "../assets/camr.jpg";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


import sbeca from "../assets/sbeca.jpg";
import tab from "../assets/tab.jpg";
import table from "../assets/table.jpg";
import camera from "../assets/camera.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const products = [
  {
    id: 1,
    name: "سماعة رأس",
    price: 35,
    image: sbeca,
  },
  {
    id: 2,
    name: "هاتف ذكي",
    price: 50,
    image: iphon,
  },
  {
    id: 3,
    name: "جهاز لوحي",
    price: 25,
    image: tab,
  },
];

function Index() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container-fluid p-0 m-0">
      <div className="bg-dark text-white py-2">
        <div className="d-flex justify-content-between align-items-center small">
          <div className="d-flex gap-3">
            <span>📞 +021-95-51-84</span>
            <span>✉️ email@email.com</span>
            <span>📍 1734 Stonecoal Road</span>
          </div>

          <div className="d-flex gap-3">
            <span>💲 USD</span>
            <span>🔒 My Account</span>
          </div>
        </div>

        <div className="mt-3 py-3">
          <div className="row align-items-center">
            <div className="col-md-3">
              <h1 className="text-white">
                Electro<span className="text-danger">.</span>
              </h1>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <select className="form-select">
                  <option>All Categories</option>
                  <option>Laptops</option>
                  <option>Smartphones</option>
                  <option>Cameras</option>
                  <option>Accessories</option>
                </select>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here"
                />

                <button className="btn btn-danger">Search</button>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-end gap-4">
              <div className="text-center text-white">
                <i className="bi bi-heart fs-4"></i>
                <p className="mb-0">Your Wishlist</p>
              </div>

              <div className="text-center text-white">
                <i className="bi bi-cart3 fs-4"></i>
                <p className="mb-0">Your Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav gap-lg-4">
              <li className="nav-item">
                <Link className="nav-link active text-dark" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/serves">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row g-3 justify-content-center">
        <div className="col-md-3 col-sm-6">
          <div className="collection-card shadow-lg">
            <img
              src={labtob}
              alt="Laptop"
              className="img-fluid w-100 hover-effect"
              style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="red-overlay"></div>

            <div className="card-content">
              <h2>
                Laptop
                <br />
                Collection
              </h2>
              <p>SHOP NOW ➜</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="collection-card shadow-lg">
            <img
              src={camera}
              alt="Laptop"
              className="img-fluid w-100 hover-effect"
              style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="red-overlay"></div>

            <div className="card-content">
              <h2>
                Laptop
                <br />
                Collection
              </h2>
              <p>SHOP NOW ➜</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="collection-card shadow-lg">
            <img
              src={hand}
              alt="Laptop"
              className="img-fluid w-100 hover-effect"
              style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="red-overlay"></div>

            <div className="card-content">
              <h2>
                Laptop
                <br />
                Collection
              </h2>
              <p>SHOP NOW ➜</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 m">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
                style={{
                  height: "200px",
                  objectFit: "contain",
                  padding: "10px",
                }}
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">{product.name}</h5>
                <p className="text-danger fw-bold fs-4">${product.price}</p>
                <button
                  className="btn btn-danger w-100"
                  onClick={() => addToCart(product)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-5">
          <h3 className="text-center">🛒 Shopping Cart</h3>
          <div className="card shadow-sm mt-3">
            <div className="card-body">
              {cart.length === 0 ? (
                <p className="text-center text-muted">Cart is empty</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex align-items-center justify-content-between border-bottom py-2"
                    >
                      <div>
                        <h6 className="mb-0">{item.name}</h6>
                        <p className="text-muted mb-0">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="d-flex gap-3">
                        <span className="fw-bold">
                          ${item.price * item.quantity}
                        </span>
                        <button
                          className="btn btn-sm btn-outline-danger "
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="text-end mt-3">
                    <p className="fs-5 fw-bold">Total: ${total}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#e8dee7" }}
      >
        <div className="row g-3 justify-content-center align-items-center mt-5">
          <div className="col-md-4 text-center">
            <img
              src={labtob}
              alt="Laptop"
              className="img-fluid"
              style={{
                maxHeight: "300px",
                objectFit: "contain",
                borderRadius: "10px",
              }}
            />
          </div>

          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center gap-3 mb-4">
              <div className="text-center">
                <div
                  className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  02
                  <p className="text-uppercase mt-3 mb-0 fs-6">Days</p>
                </div>
              </div>

              <div className="text-center">
                <div
                  className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  10
                  <p className="text-uppercase mt-3 mb-0 fs-6">Hours</p>
                </div>
              </div>

              <div className="text-center">
                <div
                  className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  34
                  <p className="text-uppercase mt-3 mb-0 fs-6">Mins</p>
                </div>
              </div>

              <div className="text-center">
                <div
                  className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  60
                  <p className="text-uppercase mt-3 mb-0 fs-6">Secs</p>
                </div>
              </div>
            </div>

            <h2 className="fw-bold">HOT DEAL THIS WEEK</h2>
            <p className="text-muted fs-5">NEW COLLECTION UP TO 50% OFF</p>
            <button className="btn btn-danger rounded-pill px-5 py-2 mt-2 shadow-lg">
              SHOP NOW
            </button>
          </div>

          <div className="col-md-4 text-center mt-4 mt-md-0">
            <img
              src={sbeca}
              alt="Headphones"
              className="img-fluid"
              style={{
                maxHeight: "300px",
                objectFit: "contain",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="row g-3 justify-content-center mt-4">
        <div className="col-md-4 mt-4">
          <div className="product-card border position-relative">
            <div className="position-relative">
              <img
                src={camr}
                alt="Laptop"
                className="img-fluid w-100"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                -30%
              </span>
            </div>

            <div className="text-center p-3 mt-4">
              <p className="text-muted small mb-1">CATEGORY</p>
              <h6 className="fw-bold">PRODUCT NAME GOES HERE</h6>
              <p>
                <span className="text-danger fw-bold">$980.00</span>{" "}
                <span className="text-muted text-decoration-line-through">
                  $990.00
                </span>
              </p>
              <div className="text-danger mb-2">★★★★★</div>
            </div>

            <div className="add-to-cart-bar bg-danger text-white text-center py-2">
              <button className="btn btn-danger w-100">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-4">
          <div className="product-card border position-relative">
            <div className="position-relative">
              <img
                src={iphon}
                alt="Laptop"
                className="img-fluid w-100"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                -30%
              </span>
            </div>

            <div className="text-center p-3 mt-4">
              <p className="text-muted small mb-1">CATEGORY</p>
              <h6 className="fw-bold">PRODUCT NAME GOES HERE</h6>
              <p>
                <span className="text-danger fw-bold">$980.00</span>{" "}
                <span className="text-muted text-decoration-line-through">
                  $990.00
                </span>
              </p>
              <div className="text-danger mb-2">★★★★★</div>
            </div>

            <div className="add-to-cart-bar bg-danger text-white text-center py-2">
              <button className="btn btn-danger w-100">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-4">
          <div className="product-card border position-relative">
            <div className="position-relative">
              <img
                src={table}
                alt="table"
                className="img-fluid w-100"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                -30%
              </span>
            </div>

            <div className="text-center p-3 mt-4">
              <p className="text-muted small mb-1">CATEGORY</p>
              <h6 className="fw-bold">PRODUCT NAME GOES HERE</h6>
              <p>
                <span className="text-danger fw-bold">$980.00</span>{" "}
                <span className="text-muted text-decoration-line-through">
                  $990.00
                </span>
              </p>
              <div className="text-danger mb-2">★★★★★</div>
            </div>

            <div className="add-to-cart-bar bg-danger text-white text-center py-2">
              <button className="btn btn-danger w-100">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 justify-content-center mt-4">
        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-2 d-flex flex-row align-items-center">
            <img
              src={table}
              alt="Laptop"
              className="img-fluid"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                marginRight: "15px",
              }}
            />
            <div>
              <p className="text-muted small mb-1">CATEGORY</p>
              <h6 className="fw-bold">PRODUCT NAME GOES HERE</h6>
              <p className="text-danger fw-bold fs-5">$980.00</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-2 d-flex flex-row align-items-center">
            <img
              src={sbeca}
              alt="Laptop"
              className="img-fluid"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                marginRight: "15px",
              }}
            />
            <div>
              <p className="text-muted small mb-1">CATEGORY</p>
              <h6 className="fw-bold">PRODUCT NAME GOES HERE</h6>
              <p className="text-danger fw-bold fs-5">$980.00</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-2 d-flex flex-row align-items-center">
            <img
              src={tab}
              alt="Laptop"
              className="img-fluid"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                marginRight: "15px",
              }}
            />
            <div>
              <p className="text-muted small mb-1">CATEGORY</p>
              <h6 className="fw-bold">PRODUCT NAME GOES HERE</h6>
              <p className="text-danger fw-bold fs-5">$980.00</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-2 d-flex flex-row align-items-center">
            <img
              src={hand}
              alt="Laptop"
              className="img-fluid"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                marginRight: "15px",
              }}
            />
            <div>
              <p className="text-muted small mb-1">CATEGORY</p>
              <h6 className="fw-bold">PRODUCT NAME GOES HERE</h6>
              <p className="text-danger fw-bold fs-5">$980.00</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-2 d-flex flex-row align-items-center">
            <img
              src={iphon}
              alt="Laptop"
              className="img-fluid"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                marginRight: "15px",
              }}
            />
            <div>
              <p className="text-muted small mb-1">CATEGORY</p>
              <h6 className="fw-bold">PRODUCT NAME GOES HERE</h6>
              <p className="text-danger fw-bold fs-5">$980.00</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-2 d-flex flex-row align-items-center">
            <img
              src={lab}
              alt="Laptop"
              className="img-fluid"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                marginRight: "15px",
              }}
            />
            <div>
              <p className="text-muted small mb-1">CATEGORY</p>
              <h6 className="fw-bold">PRODUCT NAME GOES HERE</h6>
              <p className="text-danger fw-bold fs-5">$980.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5" style={{ background: "lightgray" }}>
        <h1 className=" text-center fs-5 mt-5"> Sign Up for the NEWSLETTER</h1>

        <div className="col-md-5 mx-auto text-center">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
            />
            <button className="btn btn-danger">Subscribe</button>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3 mt-4 mb-4">
          <span>
            <FaFacebook size={30} color="#78a3b6" />
          </span>
          <span>
            <FaInstagram size={30} color="#824949" />
          </span>
          <span>
            <FaGithub size={30} color="#372f5d" />
          </span>
          <span>
            <FaLinkedin size={30} color="#321760" />
          </span>
        </div>
      </div>

      <div className="bg-dark text-white py-3">
        <div className="row g-3 justify-content-center align-items-center">
          <div className="col-md-3 col-6 text-center mt-3 mt-md-0">
            <h1 className="fs-4">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <p>
              {" "}
              <span>📍</span> 1734 Stonecoal Road
            </p>
            <p>
              {" "}
              <span>📞</span> +021-95-51-84
            </p>
            <p>
              {" "}
              <span>✉️</span> email@email.com
            </p>
          </div>

          <div className="col-md-3 col-6 text-center mt-3 mt-md-0">
            <h1 className="fs-4">Quick Links</h1>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Orders and Returns
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-6 text-center mt-3 mt-md-0">
            <h1 className="fs-4">Categories</h1>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Hot deals
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Cameras
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-6 text-center mt-3 mt-md-0">
            <h1 className="fs-4">Service</h1>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  View Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Track My Order
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=" border-top border-secondary mt-3 pt-3">
          <div className="d-flex gap-3 ">
            <span>© 2024 Electro. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
