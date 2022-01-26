import { useState } from "react"
import { Button } from "react-bootstrap"
import ProductRemove from "./ProductRemove"
import ProductView from "./ProductView"

function ProductsTable(props) {
  const { product } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{product._id}</td>
      <td>{product.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{product.description}</td>
      <td>
        <img src={product.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>

      <td>{product.price}</td>
      <td>{product.quantity}</td>
      {product.ratingAverage <= 0 ? <td>لم يتم التقييم بعد </td> : <td>{product.ratingAverage}</td>}
      <td>{product.userSeller.username}</td>
      <td>{product.location}</td>

      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          مشاهدة
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          حذف
        </Button>
      </td>
      <ProductView show={viewShow} setShow={setViewShow} product={product} />
      <ProductRemove show={deleteShow} setShow={setDeleteShow} productId={product._id} />
    </tr>
  )
}

export default ProductsTable
