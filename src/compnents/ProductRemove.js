import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import StoreContext from "../uiltes/StoreContext";

function ProductRemove(props) {
    const {deleteProduct}=useContext(StoreContext)
    const { show, setShow, productId } = props
    return ( <>
        <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>حذف المنتج</Modal.Title>
      </Modal.Header>
      <Modal.Body>هل انت متأكد من حذف المنتج</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          إلغاء
        </Button>
        <Button variant="danger" onClick={() => deleteProduct(productId)}>
          تأكيد
        </Button>
      </Modal.Footer>
    </Modal>
    </> );
}

export default ProductRemove;