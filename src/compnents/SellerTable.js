import { useState } from "react"
import { Button } from "react-bootstrap"
import SEllerRemove from "./SellerRemove"
import SellerView from "./SellerView"

function SellerTable(props) {
  const { seller } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{seller._id}</td>
      <td>{seller.firstName} {seller.lastName}</td>
      <td>{seller.username}</td>
      <td>{seller.email}</td>
      <td>{seller.nameStore}</td>
      <td>{seller.phone}</td>
      <td>
        <img src={seller.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{seller.commercialRegister}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          مشاهدة
        </Button>
      <Button variant="danger" onClick={() => setDeleteShow(true)}>
          حذف
        </Button>
      </td>
      <SellerView show={viewShow} setShow={setViewShow} seller={seller} />
      <SEllerRemove show={deleteShow} setShow={setDeleteShow} sellerId={seller._id} />
    </tr>
  )
}

export default SellerTable
