import { useEffect, useState } from "react"
import SideBar from "./compnents/SideBar"
import axios from "axios"
import StoreContext from "./uiltes/StoreContext"
import { Box, CssBaseline } from "@mui/material"
import Products from "./Pages/Products"
import Users from "./Pages/Users"
import { toast, ToastContainer } from "react-toastify"
import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Pages/Login"
import Seller from "./Pages/Seller"
import Orders from "./Pages/Orders"
import Feedback from "./Pages/Feedback"
function App() {
  const [products, setProduct] = useState([])
  const [users, setUsers] = useState([])
  const [sellers, setSeller] = useState([])
  const [orders, setOrder] = useState([])
  const [feedback, setFeedback] = useState([])
  const navigate = useNavigate()
  //-------------------------products-------------------//
  const getProduct = async () => {
    const response = await axios.get("http://localhost:7000/api/product", {
      headers: {
        Authorization: localStorage.tokenAdmin,
      },
    })
    setProduct(response.data)
  }

  const deleteProduct = async productId => {
    try {
      await axios.delete(`http://localhost:7000/api/product/product-admin-delete/${productId}`, {
        headers: {
          Authorization: localStorage.tokenAdmin,
        },
      })
      toast.success("product is deleted")
      getProduct()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-----------------------------users---------------------//
  const getUsers = async () => {
    const response = await axios.get("http://localhost:7000/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenAdmin,
      },
    })
    setUsers(response.data)
  }

  const deleteUser = async userId => {
    try {
      await axios.delete(`http://localhost:7000/api/auth/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenAdmin,
        },
      })
      toast.success(" user id deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //-------------------------seller----------------------//
  const getSeller = async () => {
    const response = await axios.get("http://localhost:7000/api/auth/seller", {
      headers: {
        Authorization: localStorage.tokenAdmin,
      },
    })
    setSeller(response.data)
  }

  const deleteSeller = async sellerId => {
    try {
      await axios.delete(`http://localhost:7000/api/auth/seller/${sellerId}`, {
        headers: {
          Authorization: localStorage.tokenAdmin,
        },
      })
      toast.success(" seller id deleted")
      getSeller()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //---------------------------------order-------------------------//
  const getOrders = async () => {
    const response = await axios.get("http://localhost:7000/api/auth/orders", {
      headers: {
        Authorization: localStorage.tokenAdmin,
      },
    })
    setOrder(response.data)
  }

  const deleteOrder = async orderId => {
    try {
      await axios.delete(`http://localhost:7000/api/auth/orders/${orderId}`, {
        headers: {
          Authorization: localStorage.tokenAdmin,
        },
      })
      toast.success(" order is deleted")
      getOrders()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //--------------------------feed back---------------------//
  const getFeedback = async () => {
    const response = await axios.get("http://localhost:7000/api/auth/feedback", {
      headers: {
        Authorization: localStorage.tokenAdmin,
      },
    })
    setFeedback(response.data)
    console.log(feedback)
  }
  //------------------------------------------------//
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        username: form.elements.username.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:7000/api/auth/admin/login", adminBody)
      localStorage.tokenAdmin = response.data
      toast.success("login success")
      navigate("/products")
      getProduct()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = async () => {
    localStorage.removeItem("tokenAdmin")
  }

  useEffect(() => {
    getProduct()
    getUsers()
    getSeller()
    getOrders()
    getFeedback()
  }, [])

  const store = {
    products,
    deleteProduct,
    login,
    logout,
    users,
    deleteUser,
    sellers,
    deleteSeller,
    orders,
    deleteOrder,
    feedback,
  }
  return (
    <StoreContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </StoreContext.Provider>
  )
}

export default App
