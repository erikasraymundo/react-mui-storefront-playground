import { Grid, Container, Typography } from "@mui/material";
import ProductCard from "../product/ProductCard";
import StaticProducts from "../../data/Products.json";

export default function ProductPanel ({ user, addToCart }) {
  return (
    <Container
      minWidth="60%"
      sx={{
        overflow: "hidden",
        overflowY: "auto",
        height: "91vh",
      }}
    >
      <Typography
        variant="h5"
        color="primary"
        sx={{ pt: 3, pb: 3, pl: 1, pr: 1 }}
      >
        More Products
      </Typography>
      <Grid
        container
        sx={{ pl: 1, pr: 1 }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
      >
        {StaticProducts.map((product, i) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={i}>
              <ProductCard
                displayCart={user != null}
                key={product.id}
                product={product}
                onClick={addToCart}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
