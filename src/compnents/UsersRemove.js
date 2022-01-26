import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import StoreContext from "../uiltes/StoreContext";

function UserRemove(props) {
    const {deleteUser}=useContext(StoreContext)
    const { show, setShow, userId } = props
    return ( <>
        <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>حذف المستخدم </Modal.Title>
      </Modal.Header>
      <Modal.Body>هل انت متأكد من حذف المستخدم؟</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          إلغاء
        </Button>
        <Button variant="danger" onClick={() => deleteUser(userId)}>
          تأكيد
        </Button>
      </Modal.Footer>
    </Modal>
    </> );
}

export default UserRemove;