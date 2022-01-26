import * as React from "react"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { Link } from "react-router-dom"
import { createTheme } from "@mui/material"
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone"
import { ThemeProvider } from "@emotion/react"
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone"
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone"
import LoginIcon from "@mui/icons-material/Login"
import StoreContext from "../uiltes/StoreContext"
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone"
import ChatTwoToneIcon from "@mui/icons-material/ChatTwoTone"
const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout } = React.useContext(StoreContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(0, 102,51)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <StorefrontTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Admin  Dashboard" />
          </ListItem>
        </List>
        <List>
          <Link to="/products">
            <ListItem button>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon titleAccess="المنتجات" />
              </ListItemIcon>
            </ListItem>
          </Link>
          <Link to="/users">
            <ListItem button>
              <ListItemIcon>
                <GroupTwoToneIcon titleAccess="المستخدمين" />
              </ListItemIcon>
            </ListItem>
          </Link>
          <Link to="/seller">
            <ListItem button>
              <ListItemIcon>
                <MonetizationOnTwoToneIcon titleAccess="البائعين" />
              </ListItemIcon>
            </ListItem>
          </Link>
        </List>
        <Link to="/order">
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartTwoToneIcon titleAccess="الطلبات" />
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/feedback">
          <ListItem button>
            <ListItemIcon>
              <ChatTwoToneIcon  titleAccess="التغذية الراجعة"/>
            </ListItemIcon>
        
          </ListItem>
        </Link>

        <List style={{ marginTop: "auto" }}>
          {localStorage.tokenAdmin ? (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="تسجيل الخروج" sx={{ color: "white", textDecoration: "none" }} onClick={logout} />
              </ListItem>
            </Link>
          ) : (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="تسجيل الدخول" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          )}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}
