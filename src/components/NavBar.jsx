import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const NavBar = ({ onClose, mode, setMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: "About Me", to: "about" },
    { label: "Tech stack", to: "stack" },
    { label: "Services", to: "services" },
    { label: "Projects", to: "projects" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 220,
        paddingTop: 2,
        height: "100%",
        backgroundColor: "#FF5722",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={ScrollLink}
              to={item.to}
              onClick={toggleDrawer(false)}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "85%",
        margin: "auto",
        // borderRadius: "22px",
        top: "8px",
        // backgroundColor: "#08080850",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h3"
          component={ScrollLink}
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            // fontFamily: "'Montserrat', sans-serif",
            fontFamily: "'Titan One', sans-serif",
            // fontWeight: 600,
            color: "#FF5722",
            letterSpacing: 2,
          }}
        >
          F<span style={{ color: "#ffffffff" }}>E</span>
        </Typography>

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={ScrollLink}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontSize: "1rem",
                fontFamily: "'Lilita One', sans-serif",
                // fontFamily: "'Titan One', sans-serif",
                // fontStyle: "normal",
                fontWeight: 300,
                "&.active": {
                  color: "#ff4d05",
                  fontWeight: "bold",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#fff",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Nav */}
        <IconButton
          sx={{ display: { xs: "flex", sm: "none" }, color: "white" }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          // sx={{ backgroundColor: "#FF5722" }}
          // color="#FF5722"
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
