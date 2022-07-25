import { Container, Box, Typography, Button } from "@mui/material";
import OrderCard from "../order/OrderCard";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";

export default function OrderPanel({ user, onCheckout }) {
  let total = 0;
  if (user !== null) {
    for (let product of user.order.products) {
      total += product.quantity * product.price;
    }
  }

  return (
    <Box
      minWidth="29%"
      sx={{
        height: "91vh",
        borderRight: "1px solid #E5E5E5",
      }}
    >
      {user && (
        <Container
          sx={{
            height: "100%",
            pt: 3,
            pb: 3,
            pr: 2,
            pl: 2,
            overflow: "hidden",
            overflowY: "auto",
          }}
        >
          <Typography variant="h6" color="secondary" sx={{ maxWidth: "300px" }}>
            {`${user.name}'s`}
          </Typography>
          <Typography variant="h5" color="primary" sx={{ maxWidth: "300px" }}>
            Orders
          </Typography>
          <Box sx={{ pt: 2, "& > *": { padding: "8px 0" } }}>
            {user.order.products.map((product, i) => {
              return <OrderCard key={i} product={product} />;
            })}
          </Box>
          {user.order.products.length <= 0 && (
            <Typography className="placeholder none" sx={{ pt: 2, pb: 3 }}>
              No orders yet.
            </Typography>
          )}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Total: </Typography>
            <Typography variant="h6">{`P${total.toFixed(2)}`} </Typography>
          </Box>
          {user.order.products.length > 0 && (
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={onCheckout}
              disableElevation
              sx={{ mt: 2, mb: 2 }}
            >
              Checkout
            </Button>
          )}
        </Container>
      )}
      {!user && (
        <Container
          className="bgPlaceholder"
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <ShoppingCartRounded
            sx={{ fontSize: 75, marginBottom: "30px" }}
            className="iconPlaceholder"
          />
          <Typography
            className="placeholder none"
            sx={{
              padding: "5px",
            }}
          >
            Please click 'View Orders' of a user to show orders and add products.
          </Typography>
        </Container>
      )}
    </Box>
  );
}
