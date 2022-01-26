import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import StoreContext from "../uiltes/StoreContext";

function SEllerRemove(props) {
    const {deleteSeller}=useContext(StoreContext)
    const { show, setShow, sellerId } = props
    return ( <>
        <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>حذف البائع</Modal.Title>
      </Modal.Header>
      <Modal.Body>هل انت متأكد من حذف البائع </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          إلغاء
        </Button>
        <Button variant="danger" onClick={() => deleteSeller(sellerId)}>
          تأكيد
        </Button>
      </Modal.Footer>
    </Modal>
    </> );
}

export default SEllerRemove;