import { useContext, useState } from "react";
import { Table } from "react-bootstrap";
import ProductsTable from "../compnents/ProductsTable";
import StoreContext from "../uiltes/StoreContext";

function Products() {
    const{products}=useContext(StoreContext)
    return ( <>
       <h1 style={{ marginTop: 10 }}>المنتجات</h1>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "9%" }}>الموضوع</th>
            <th style={{ width: "18%" }}>الوصف</th>
            <th style={{ width: "18%" }}>الصورة</th>
            <th style={{ width: "7%" }}>السعر</th>
            <th style={{ width: "10%" }}>الكمية</th>
            <th style={{ width: "15%" }}>متوسط التقييم</th>
            <th style={{ width: "9%" }}>البائع</th>
            <th style={{ width: "18%" }}>الموقع</th>
            <th style={{ width: "30%" }}>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductsTable key={product._id} product={product} />
          ))}
        </tbody>
      </Table>
    </> );
}

export default Products;