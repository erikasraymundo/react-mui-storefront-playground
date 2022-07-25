import { TextField, Button, FormGroup, Box } from "@mui/material";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";

export default function AddUser({ value, error, helperText, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <FormGroup>
        <Box sx={{ display: "flex", alignContent: "center" }}>
          <TextField
            label="Enter name"
            onChange={onChange}
            value={value}
            fullWidth
            error={error}
            helperText={helperText}
            sx={{ mr: 1 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ height: 55 }}
            disableElevation
          >
            <PersonAddRoundedIcon />
          </Button>
        </Box>
      </FormGroup>
    </form>
  );
}
