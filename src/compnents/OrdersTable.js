import { useState } from "react"
import { Button } from "react-bootstrap"
import OrderRemove from "./OrderRemove"
import OrderView from "./OrderView"


function OrdersTable(props) {
  const { order } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{order._id}</td>
      <td>{order.userId.username}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{order.quantity}</td>
      <td>
        <img src={order.productId.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>

      <td>{order.productId.userSeller}</td>
  

      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>Delete</Button>
      </td>
      <OrderView show={viewShow} setShow={setViewShow} order={order} />
      <OrderRemove show={deleteShow} setShow={setDeleteShow} orderId={order._id} />
    </tr>
  )
}

export default OrdersTable
