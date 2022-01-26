import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import StoreContext from "../uiltes/StoreContext"

function Login() {
  const { login } = useContext(StoreContext)

  return (
    <div className="ms-4">
      <h1>تسجيل الدخول</h1>
      <Form className="mt-5" onSubmit={login}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            البريد الألكتروني
          </Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            اسم المستخدم
          </Form.Label>
          <Col md="6">
            <Form.Control type="text" name="username" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            كلمة المرور
          </Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">تسجيل الدخول</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Login
