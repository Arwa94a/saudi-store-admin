import { useContext } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import StoreContext from "../uiltes/StoreContext";

function SellerView(props) {
    const { show, setShow, seller } = props
    
    return (  <>
      <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>بيانات البائع</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>الأسم:</strong> {seller.firstName} {seller.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>اسم المستخدم :</strong> {seller.username}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>البريد الإلكتروني:</strong> {seller.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>المتجر :</strong> {seller.nameStore}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>الجوال:</strong> {seller.phone}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>photo:</strong>
            <img src={seller.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong> السجل التجاري :</strong> {seller.commercialRegister}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>الطلبات:</strong>
            <ListGroup>
              {seller.order.map(oneOrder => (
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

export default SellerView;