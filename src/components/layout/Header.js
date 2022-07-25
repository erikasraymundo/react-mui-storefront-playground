import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3_5428)">
                <path
                  d="M11.4203 21.7866C10.3578 22.0713 9.73105 23.171 10.0157 24.2335C10.3004 25.296 11.3931 25.935 12.4556 25.6503C13.5181 25.3656 14.1545 24.2633 13.8698 23.2008C13.5851 22.1383 12.4828 21.5019 11.4203 21.7866ZM1.74246 8.85063C1.88481 9.38189 2.43595 9.70009 2.96721 9.55774L3.93313 9.29892L9.3749 15.6985L8.70242 18.4048C8.34411 19.8881 9.69328 21.2141 11.1615 20.8207L21.7867 17.9737C22.3179 17.8313 22.6361 17.2802 22.4938 16.7489C22.3514 16.2177 21.8003 15.8995 21.269 16.0418L10.6438 18.8888L11.1887 16.6723L18.3849 14.7441C19.1093 14.55 19.6407 13.9831 19.8087 13.2962L21.5869 6.1008C21.7735 5.36753 21.0976 4.6997 20.3635 4.89641L6.06783 8.72693L5.05055 7.51906C4.80541 7.2224 4.40074 7.10307 4.03369 7.20142L2.44957 7.62589C1.91831 7.76824 1.60011 8.31937 1.74246 8.85063ZM21.0796 19.1984C20.017 19.4831 19.3903 20.5828 19.675 21.6453C19.9597 22.7078 21.0523 23.3468 22.1148 23.0621C23.1774 22.7774 23.8138 21.6751 23.529 20.6126C23.2443 19.5501 22.1421 18.9137 21.0796 19.1984Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_5428">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 6.21167) rotate(-15)"
                  />
                </clipPath>
              </defs>
            </svg>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, letterSpacing: "0.15em" }}
          >
            STORESHOPS
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
