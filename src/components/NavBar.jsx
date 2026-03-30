import {
  AccountCircle,
  Mail,
  MailLockRounded,
  NotificationAdd,
  Pets,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ onClose, mode, setMode }) => {
  const navItems = [
    { label: "About Me", to: "about" },
    { label: "Tech stack", to: "stack" },
    { label: "Services", to: "services" },
    { label: "Projects", to: "projects" },
  ];
  return (
    <AppBar
      position="sticky"
      sx={{
        // backgroundColor: "rgba(255, 255, 255, 0.32)",
        //  backdropFilter: "blur(10px)",
        // WebkitBackdropFilter: "blur(10px)",
        //  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        display: "flex",
        justifyContent: "space-between",
        width: "85%",
        margin: "auto",
        borderRadius: "10px",
        top: "12px",
        //  border: "1px solid #f04e23",
        // boxShadow: "0 0 50px #f04e23",
        backgroundColor: "#08080850",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h4"
          component={ScrollLink}
          to="home"
          sx={{
            display: { xs: "block", sm: "block" },
            textDecoration: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          F<span style={{ color: "#f04e23" }}>E</span>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={ScrollLink}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70} // Adjust based on navbar height
              duration={500}
              sx={{
                color: "#fff",
                textTransform: "capitalize",
                fontSize: "1rem",
                "&.active": {
                  color: "#ff4d05", // The orange glow color from your image
                  fontWeight: "bold",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#ff4d05",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        <IconButton
          sx={{
            display: { xs: "flex", sm: "none" },
            color: "white",
            fontSize: "3rem",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
