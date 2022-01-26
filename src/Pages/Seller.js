import { useContext } from "react";
import { Table } from "react-bootstrap";
import SellerTable from "../compnents/SellerTable";
import StoreContext from "../uiltes/StoreContext";

function Seller() {
      const{sellers}=useContext(StoreContext)
    return ( <>
       <h1 style={{ marginTop: 10 }}>البائعين </h1>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>#</th>
            <th style={{ width: "18%" }}>الأسم</th>
            <th style={{ width: "10%" }}>اسم المستخدم</th>
            <th style={{ width: "20%" }}>الايميل</th>
            <th style={{ width: "10%" }}>اسم المتجر</th>
            <th style={{ width: "7%" }}>رقم الجوال</th>
            <th style={{ width: "10%" }}>الصورة</th>
            <th style={{ width: "20%" }}>رقم السجل التجاري</th>
            <th style={{ width: "20%" }}>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map(seller => (
            <SellerTable key={seller._id} seller={seller} />
          ))}
        </tbody>
      </Table>
    </> );
}

export default Seller;