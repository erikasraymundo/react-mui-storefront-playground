import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

export default function ProductCard({ product, displayCart, onClick }) {
  return (
    <Card sx={{}}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={product.image}
        height={175}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            gutterBottom
            component="div"
            sx={{ fontSize: "1.075em", fontWeight: 600 }}
          >
            {product.name}
          </Typography>
          <Typography gutterBottom component="div" sx={{ fontWeight: 600 }}>
            {`P${product.price.toFixed(2)}`}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      {displayCart && (
        <CardActions>
          <Button
            size="small"
            startIcon={<AddShoppingCartRoundedIcon />}
            onClick={(event) => onClick(product)}
          >
            Add to cart
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
