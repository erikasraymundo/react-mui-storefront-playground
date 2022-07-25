import { Avatar, Typography, Box, Stack } from "@mui/material";

export default function OrderCard({ product }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        variant="rounded"
        src={product.image}
        sx={{ width: 50, height: 50 }}
      />
      <Stack width="100%">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "1.075em", fontWeight: 600 }}>
            {product.name}
          </Typography>
          <Typography sx={{ fontSize: "1.075em", fontWeight: 500 }}>
            {`P${(product.price * product.quantity).toFixed(2)}`}
          </Typography>
        </Box>
        <Typography variant="subtitle1">{`x${product.quantity}`}</Typography>
      </Stack>
    </Stack>
  );
}
