import { useContext } from "react"
import { Table } from "react-bootstrap"
import FeedBackTable from "../compnents/FeedBackTable"
import StoreContext from "../uiltes/StoreContext"

function Feedback() {
  const { feedback } = useContext(StoreContext)
  console.log(feedback);
  return (
    <>
      
      <h1 style={{ marginTop: 10 }}>تغذية راجعة </h1>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "9%" }}>تغذية راجعة</th>
            <th style={{ width: "18%" }}>المستخدم</th>
            <th style={{ width: "30%" }}>إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map(feed => (
            <FeedBackTable key={feed._id} feed={feed} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Feedback
