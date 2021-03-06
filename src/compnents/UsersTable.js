import { useState } from "react"
import { Button } from "react-bootstrap"
import UserRemove from "./UsersRemove"

import UserView from "./UserView"

function UserTable(props) {
  const { user } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user._id}</td>
      <td>{user.firstName} {user.lastName}</td>
      <td>{user.phone}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <img src={user.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          مشاهدة
        </Button>
        {user.role==="User"?(<Button variant="danger" onClick={() => setDeleteShow(true)}>
          حذف
        </Button>):null}
      </td>
      <UserView show={viewShow} setShow={setViewShow} user={user} />
      <UserRemove show={deleteShow} setShow={setDeleteShow} userId={user._id} />
    </tr>
  )
}

export default UserTable
