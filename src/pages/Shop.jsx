import Footer from "../components/Footer";

import Partners from "../data/Partners ";

import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Strawberry",
    price: 85,
    img: "https://themewagon.github.io/fruitkha/assets/img/products/product-img-1.jpg",
  },
  {
    id: 2,
    name: "Berry",
    price: 70,
    img: "https://themewagon.github.io/fruitkha/assets/img/products/product-img-2.jpg",
  },
  {
    id: 3,
    name: "Lemon",
    price: 35,
    img: "https://themewagon.github.io/fruitkha/assets/img/products/product-img-3.jpg",
  },
  {
    id: 4,
    name: "Orange",
    price: 50,
    img: "https://themewagon.github.io/fruitkha/assets/img/products/product-img-4.jpg",
  },
  {
    id: 5,
    name: "Grapes",
    price: 60,
    img: "https://themewagon.github.io/fruitkha/assets/img/products/product-img-5.jpg",
  },
  {
    id: 6,
    name: "Watermelon",
    price: 40,
    img: "https://themewagon.github.io/fruitkha/assets/img/products/product-img-6.jpg",
  },
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
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
            <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>Shop</h1>
          </div>
        </h1>
      </div>

      <div className="container mt-5 ">
        <h1 className="text-center ">
          {" "}
          <span className="text-warning">Our</span> Products
        </h1>
        <p className="text-muted text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas itaque eveniet beatae optio.
        </p>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Filter by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="row mt-5">
          {filteredProducts.map((product) => (
            <div className="col-md-4 " key={product.id}>
              <div className="card mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5>{product.name}</h5>
                  <p>Per Kg ${product.price}</p>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#F28123",
                      Color: "white",
                      borderRadius: "20px",
                      padding: "10px 20px",
                    }}
                  >
                    <FaShoppingCart />
                    <Link
                      to="/cart"
                      className="text-decoration-none text-white"
                    >
                      Add to Cart
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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

export default Shop;
