import React, { useState } from "react";
import { ButtonGroup, Button, Modal } from "react-bootstrap";

const ReactModal = (props) => {
  const { image, title, price, description } = props.product || {};
  console.log(image);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          Details
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <img className="w-25 m-auto" img src={image} alt="" />
            <Modal.Title>{title.slice(0, 15)}</Modal.Title>
            <h1 className="p-2 ms-5"> ${price}</h1>
          </Modal.Header>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default ReactModal;
