import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import OrdersTable from "../compnents/OrdersTable"
import StoreContext from "../uiltes/StoreContext"

function Orders() {
  const [show, setShow] = useState(false)
  const { orders } = useContext(StoreContext)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Orders</h1>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "9%" }}>اسم المستخدم </th>
            <th style={{ width: "18%" }}>الكمية</th>
            <th style={{ width: "18%" }}>الصورة</th>
            <th style={{ width: "10%" }}>اسم البائع</th>
            <th style={{ width: "30%" }}>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <OrdersTable key={order._id} order={order} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Orders
