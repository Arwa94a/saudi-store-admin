import { useState } from "react"
import { Button } from "react-bootstrap"
import FeedBackView from "./FeedBackView"


function FeedBackTable(props) {
  const { feed } = props
  const [viewShow, setViewShow] = useState(false)


  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{feed._id}</td>
      <td>{feed.feedback}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{feed.orderId._id}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          مشاهدة
        </Button>
      </td>
      <FeedBackView show={viewShow} setShow={setViewShow} feed={feed} />
    </tr>
  )
}

export default FeedBackTable
