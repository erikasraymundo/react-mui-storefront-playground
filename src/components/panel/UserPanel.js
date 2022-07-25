import { Stack, Box, Typography } from "@mui/material";
import AddUser from "../user/AddUser";
import UserCard from "../user/UserCard";
import { useState } from "react";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

export default function UserPanel({ users, onSelectUser, onAddUser }) {
  const [enteredUser, setEnteredUser] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const onChangeUserInput = (event) => {
    setEnteredUser(event.target.value);
    setError(false);
    setHelperText("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (enteredUser.trim() === "") {
      setError(true);
      setHelperText("Can't add blank name.");
    } else {
      onAddUser(enteredUser);
      setEnteredUser("");
    }
  };

  return (
    <Box
      minWidth="26%"
      sx={{
        borderRight: "1px solid #E5E5E5",
      }}
    >
      <Box sx={{ pt: 2, pb: 1, borderBottom: "1px solid #DDD" }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ marginLeft: "20px" }}
        >
          <GroupsRoundedIcon color="primary" />
          <Typography variant="h5" color="primary">
            Users
          </Typography>
        </Stack>
        <Box
          sx={{
            p: 2,
            textAlign: "left",
          }}
        >
          <AddUser
            onChange={onChangeUserInput}
            onSubmit={onSubmit}
            value={enteredUser}
            error={error}
            helperText={helperText}
          />
        </Box>
      </Box>
      <Box
        sx={{
          height: "70vh",
          overflow: "hidden",
          overflowY: "auto",
          "& > *": {
            margin: "-1px -1px 0 -1px",
            border: "1px solid #ddd",
          },
        }}
      >
        {users.map((user) => {
          return (
            <UserCard key={user.id} user={user} onSelectUser={onSelectUser} />
          );
        })}
      </Box>
    </Box>
  );
}
