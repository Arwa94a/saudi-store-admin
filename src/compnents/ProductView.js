import { useContext } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import StoreContext from "../uiltes/StoreContext";

function ProductView(props) {
    const { show, setShow, product } = props
    
    return (  <>
      <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>مشاهدة المنتجات</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>عنوان المنتج:</strong> {product.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>وصف المنتج:</strong> {product.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>الصورة:</strong>{" "}
            <img src={product.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>السعر:</strong> {product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>الكمية:</strong> {product.quantity}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>البائع:</strong> {product.userSeller.username}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>الموقع:</strong> {product.location}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          إغلاق
        </Button>
      </Modal.Footer>
    </Modal>
    
    </>);
}

export default ProductView;