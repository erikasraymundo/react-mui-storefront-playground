import { Avatar, Typography, Button, Box, Badge, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function UserCard({ user, onSelectUser }) {
  var quantity = 0;
  user.order.products.forEach((product) => {
    quantity += product.quantity;
  });

  return (
    <Box
      sx={{
        p: 1,
        minWidth: "320px",
        display: "flex",
        alignItems: "center",
        "& > *": {
          margin: "5px 10px",
        },
      }}
    >
      <Avatar
        className="lightBorder"
        variant="rounded"
        src={`https://robohash.org/${user.id}`}
        sx={{ width: 60, height: 60 }}
      />
      <Stack spacing={0.75}>
        <Typography
          sx={{ marginRight: "25px", fontSize: "1.075em", fontWeight: 600 }}
        >
          {user.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& > .cardBadge": {
              marginRight: "30px",
              alignSelf: "center",
            },
          }}
        >
          <StyledBadge
            className="cardBadge"
            badgeContent={quantity}
            color="secondary"
          >
            <ShoppingCartRoundedIcon />
          </StyledBadge>
          <Button
            variant="outlined"
            color="secondary"
            disableElevation={true}
            size="small"
            onClick={(event) => onSelectUser(user)}
          >
            View Orders
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
