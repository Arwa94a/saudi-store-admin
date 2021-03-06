import { useContext } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";


function OrderView(props) {
    const { show, setShow, order } = props
    
    return (  <>
      <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>مشاهدة الطلب</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>اسم المشتري :</strong> {order.userId.username}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>الكمية:</strong> {order.quantity}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>صورة المنتج:</strong>
            <img src={order.productId.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>بائع المنتج:</strong> {order.productId.userSeller}
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

export default OrderView;