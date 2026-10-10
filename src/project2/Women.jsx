import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// ⚠️ لا تستورد photo هنا لأنها غير موجودة!
import pot from "../assets/pot.jpg";
import pott from "../assets/pott.jpg";
import wman from "../assets/wman.jpg";
opt
import opt from "../assets/opt.jpg";
import coll from "../assets/coll.jpg";
import clo from "../assets/clo.jpg";
import cloth from "../assets/cloth.jpg";
import clothh from "../assets/clothh.jpg";
import clothe from "../assets/clothe.jpg";
import colth from "../assets/colth.jpg";
import hur from "../assets/hur.jpg";
import shos from "../assets/shos.jpg";

import access from "../assets/access.jpg";




// للسله

const products = [
  {
    id: 1,
    name: "Esprit Ruffle Shirt",
    price: 160,
    image: coll,
  },
  {
    id: 2,
    name: "Herschel supply", 
    price:" $150",
    image: clothh,
  },
  {
    id: 3,
    name: "Only Check Trouser ",
    price: 125,
    image: shos,
  },
  {
    id: 4,
    name: "Only Check Trouser ",
    price: 105,
    image: colth,
  },
  {
    id: 5,
    name: "Vintage Inspired Classic ",
    price: 125,
    image: hur,
  },
  {
    id: 6,
    name: "Shirt in Stretch Cotton",
    price: 125,
    image: clothe,
  },
  {
    id: 7,
    name: "Pieces Metallic Printed ",
    price: 125,
    image: cloth,
  },
  {
    id: 8,
    name: "Only Check Trouser ",
    price: 125,
    image: clo,
  },

    {
    id: 9,
    name: "Only Check Trouser ",
    price: 125,
    image: wman,
  },
    {
    id: 10,
    name: "Only Check Trouser ",
    price: 125,
    image: pott,
  },
    {
    id: 11,
    name: "Only Check Trouser ",
    price: 125,
    image: wman,
  },
    {
    id: 12,
    name: "Only Check Trouser ",
    price: 125,
    image: pot,
  },
];





function Women() {


// ===================== تفعيل السله====================
 





 const [isSearchOpen, setIsSearchOpen] = useState(false);
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
      <div className="bg-dark text-white py-2 small"></div>

      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="navbar-brand fw-bold">COZA STORE</span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav gap-lg-4 mx-auto">
              <li className="nav-item link">
                <Link className="nav-link text-dark" to="/">
                  Home
                </Link>
              </li>
             
              <li className="nav-item link">
                <Link className="nav-link text-dark" to="/Women">
            Women
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex gap-4">
            <i
              className="bi bi-search fs-5"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              style={{ cursor: "pointer" }}
            ></i>

            <span className="position-relative">
              <i className="bi bi-cart3 fs-5 "></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2
              </span>
            </span>

            <span className="position-relative">
              <i className="bi bi-heart fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </span>
          </div>
        </div>
      </nav>

      {isSearchOpen && (
        <div className="container py-3 border-bottom">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
            />
            <button className="btn btn-dark">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      )}

   <div className="row g-3 m">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100 shadow-sm border-2">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid  rounded-5 imag"
                style={{
                   width: "100%",
                  height: "100%", 
                  objectFit: "cover",
                  padding: "10px",
                  margin: "0px",
                }}
              />
              <div className="text-center p-3">
                <h5 className="fw-audit">{product.name}</h5>
                <p className="text-danger fw-bold fs-4">${product.price}</p>
                <button
                  className="btn-outline-dark butt"
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
            <div >
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
                      <div className="d-flex gap-3 butn">
                        <span className="fw-bold">
                          ${item.price * item.quantity}
                        </span>
                        <button
                          className="btn btn-outline-danger remove-btn"
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
    </div>
  );
}

export default Women;