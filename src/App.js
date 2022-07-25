import "./App.css";
import Header from "./components/layout/Header";
import UserPanel from "./components/panel/UserPanel";
import OrderPanel from "./components/panel/OrderPanel";
import ProductPanel from "./components/panel/ProductPanel";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import StaticOrders from "./data/Orders.json";
import StaticProducts from "./data/Products.json";
import AlertDialog from "./components/alert/AlertDialog";
import AlertSnackbar from "./components/alert/AlertSnackbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#466F4F",
    },
    secondary: {
      main: "#5A6A38",
    },
  },
});

export default function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [alertCheckoutOpen, setAlertCheckoutOpen] = useState(false);
  const [alertUserAddedOpen, setAlertUserAddedOpen] = useState(false);

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((response) => {
      let data = response.data;
      let temp = [];

      for (let userObj of data) {
        let order = {};

        for (let orderObj of StaticOrders) {
          let products = [];

          if (userObj.id === orderObj.userId) {
            for (let tempProductObj of orderObj.products) {
              for (let productObj of StaticProducts) {
                if (tempProductObj.id === productObj.id) {
                  products.push({
                    id: tempProductObj.id,
                    name: productObj.name,
                    image: productObj.image,
                    price: productObj.price,
                    quantity: tempProductObj.quantity,
                  });

                  break;
                }
              }
            }

            order = { id: orderObj.id, products: products };
            break;
          }
        }

        temp.push({ id: userObj.id, name: userObj.name, order: order });
      }

      setUsers(temp);
    });
  }, []);

  const onSelectUser = (user) => {
    setSelectedUser(user);
  };

  const onAddUser = (enteredUser) => {
    let id = users[users.length - 1].id + 1;
    let orderId = users[users.length - 1].order.id + 1;

    setUsers((prevState) => {
      return [
        ...prevState,
        {
          id: id,
          name: enteredUser,
          order: {
            id: orderId,
            products: [],
          },
        },
      ];
    });

    setAlertUserAddedOpen(true);
  };

  const addToCart = (product) => {
    let clonedUsers = users.slice();
    for (let user of clonedUsers) {
      if (user.id === selectedUser.id) {
        let flag = false;
        for (let p of user.order.products) {
          if (p.id === product.id) {
            p.quantity += 1;
            flag = true;
            break;
          }
        }

        if (!flag) {
          user.order.products.push({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: 1,
          });
        }

        console.log(user);
        break;
      }
    }

    setUsers(clonedUsers);
  };

  const alertCheckoutClose = () => {
    setAlertCheckoutOpen(false);
  };

  const alertUserAddedClose = () => {
    setAlertUserAddedOpen(false);
  };

  const checkout = () => {
    setAlertCheckoutOpen(true);
    const clonedUsers = users.slice();
    let userToCheckout = clonedUsers.find(
      (user) => user.id === selectedUser.id
    );
    userToCheckout.order.products = [];
    setUsers(clonedUsers);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
          }}
        >
          <UserPanel
            users={users}
            onSelectUser={onSelectUser}
            onAddUser={onAddUser}
          ></UserPanel>
          <OrderPanel user={selectedUser} onCheckout={checkout}></OrderPanel>
          <ProductPanel
            user={selectedUser}
            addToCart={addToCart}
          ></ProductPanel>
        </Box>
        <AlertDialog
          open={alertCheckoutOpen}
          onClose={alertCheckoutClose}
          title="You've successfully checkout!"
        />
        <AlertSnackbar
          open={alertUserAddedOpen}
          severity="success"
          onClose={alertUserAddedClose}
          message="The user has been added!"
        />
      </div>
    </ThemeProvider>
  );
}
