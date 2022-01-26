import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import StoreContext from "../uiltes/StoreContext";

function OrderRemove(props) {
    const {deleteOrder}=useContext(StoreContext)
    const { show, setShow, orderId } = props
    return ( <>
        <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>حذف المنتج</Modal.Title>
      </Modal.Header>
      <Modal.Body>هل انت متأكد من حذف هذا الطلب</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          الغاء
        </Button>
        <Button variant="danger" onClick={() => deleteOrder(orderId)}>
          تأكيد
        </Button>
      </Modal.Footer>
    </Modal>
    </> );
}

export default OrderRemove;