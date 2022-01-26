import { useContext } from "react";
import { Table } from "react-bootstrap";
import UserTable from "../compnents/UsersTable";
import StoreContext from "../uiltes/StoreContext";

function Users() {
    const{users}=useContext(StoreContext)
    return ( <>
       <h1 style={{ marginTop: 10 }}>المستخدمين</h1>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>#</th>
            <th style={{ width: "18%" }}>الاسم</th>
            <th style={{ width: "7%" }}>رقم الجوال</th>
            <th style={{ width: "10%" }}>اسم المستخدم</th>
            <th style={{ width: "20%" }}>الايميل</th>
            <th style={{ width: "10%" }}>الصورة</th>
            <th style={{ width: "30%" }}>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserTable key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
    
    </> );
}


export default Users;