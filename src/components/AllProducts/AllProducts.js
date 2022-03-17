import { React, useEffect, useState } from "react";
import "./AllProducts.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Product from "../Product/Product";

const AllProducts = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const searchProducts = (value) => {
    console.log(searchValue);
  };

  return (
    <div className="container mt-5">
      <h1>Our All PRoducts</h1>
      <div className="search-box w-50 m-auto mt-5">
        <InputGroup size="lg">
          <FormControl
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
          <InputGroup.Text
            onClick={(e) => searchProducts(e)}
            id="inputGroup-sizing-lg"
          >
            Search Products
          </InputGroup.Text>
        </InputGroup>
      </div>

      {/* another components */}

      <div className="row mt-5">
        {products?.map((pd) => (
          <Product key={pd?.id} product={pd} addToCart={addToCart}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
