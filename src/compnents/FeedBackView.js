import { Button, ListGroup, Modal } from "react-bootstrap"

function FeedBackView(props) {
  const { show, setShow, feed } = props

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>مشاهدة التغذية الراجعة</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>التغذية الراجعة :</strong> {feed.feedback}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>رقم الطلب:</strong> {feed.orderId._id}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FeedBackView
