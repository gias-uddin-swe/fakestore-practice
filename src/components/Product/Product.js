import React from "react";
import { Button } from "react-bootstrap";
import ReactModal from "../ReactModal/ReactModal";

const Product = ({ addToCart, product }) => {
  const { image, title, price, category, description } = product || {};
  const [modalShow, setModalShow] = React.useState(false);
  console.log(image);
  return (
    <div className="col-md-4 p-2">
      <div className="card border p-2">
        <img className="img-fluid w-50 m-auto" src={image} alt="image" />

        <h1>{title.slice(0, 10)} </h1>
        <h1>{price}</h1>
        <p>{description.slice(0, 20)}n</p>
        <div className="d-flex justify-content-around">
          <button onClick={() => addToCart()} className="btn btn-success p-2">
            Add To Cart
          </button>
          <ReactModal product={product}></ReactModal>
          <button className="btn btn-danger p-2 ">Delete</button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Product;
