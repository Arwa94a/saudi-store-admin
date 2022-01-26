import { useContext } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import StoreContext from "../uiltes/StoreContext";

function UserView(props) {
    const { show, setShow, user } = props
    
    return (  <>
      <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title> بيانات المستخدم</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>الاسم:</strong> {user.firstName} {user.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>رقم الجوال:</strong> {user.phone}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>اسم المستخدم :</strong> {user.username}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>الصورة:</strong>
            <img src={user.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>البريد الالكتروني:</strong> {user.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>الطلبات:</strong>
            <ListGroup>
              {user.order.map(oneOrder => (
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>
                    {oneOrder._id}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
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

export default UserView;