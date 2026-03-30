import {
  Box,
  Stack,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import { GitHub, LinkedIn, Instagram, Twitter } from "@mui/icons-material";

import * as React from "react";
import Typewriter from "typewriter-effect";
import About from "../pages/About";
import Skills from "../pages/Skills";
export default function Feed() {
  return (
    <>
      <Stack
        id="home"
        direction={{ xs: "column-reverse", md: "row" }} // Stack on mobile, side-by-side on desktop
        spacing={4}
        sx={{
          bgcolor: "#080808", // Main background color
          color: "white",
          px: { xs: 2, md: 8 },
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          marginLeft: { md: "40px" },
        }}
      >
        {/* Introduction Section */}
        <Box flex={1} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h3" fontWeight="bold">
            Hi, It's <span style={{ color: "#f04e23" }}>Fanuel</span>
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mb: 2,
              display: "flex",
              gap: "10px",
              fontSize: { xs: "24px" },
            }}
          >
            I'm a{" "}
            <Box component={"span"} sx={{ color: "#f04e23" }}>
              <Typewriter
                options={{
                  strings: [
                    "React Native Specialist",
                    "Fullstack Developer",
                    "Spring Boot Expert",
                    "Node.js Architect",
                    "Future Software Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </Box>
          </Typography>

          <Box sx={{ justifyContent: "center", maxWidth: "600px" }}>
            <Typography
              sx={{
                color: "#a0a0a0",
                maxWidth: "500px",
                mb: 3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              I am a React Native Specialist and Fullstack Developer dedicated
              to building slick, production-ready applications from the ground
              up. By combining a passion for fluid mobile interfaces with a
              robust backend foundation in Spring Boot and Node.js, I bridge the
              gap between complex business logic and seamless user experiences.
            </Typography>
          </Box>

          {/* Social Icons */}
          {/* <Stack direction="row" spacing={1} sx={{ mb: 4, justifyContent: { xs: "center", md: "flex-start" } }}>
          {[GitHub, LinkedIn, Instagram, Twitter].map((Icon, index) => (
            <IconButton key={index} sx={{ color: "#f04e23", border: "2px solid #f04e23", p: 1 }}>
              <Icon fontSize="small" />
            </IconButton>
          ))}
        </Stack> */}

          {/* Action Buttons */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
          >
            <Button
              variant="contained"
              sx={{ bgcolor: "#f04e23", borderRadius: "20px", px: 4 }}
            >
              Hire
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#f04e23",
                borderColor: "#f04e23",
                borderRadius: "20px",
                px: 4,
              }}
            >
              Contact
            </Button>
          </Stack>
        </Box>

        {/* Image Section with Glow */}
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: { xs: "280px", md: "400px" },
              height: { xs: "280px", md: "400px" },
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #f04e23",
              boxShadow: "0 0 50px #f04e23", // The "Glow" effect
            }}
          >
            <img
              src="/pic.jpg"
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Stack>

      {/* <Box id="about" sx={{ minHeight: '100vh', pt: 10 ,backgroundColor: 'tomato'}}>
 
</Box> */}
      <About></About>
      <Skills></Skills>
      <Box
        id="services"
        sx={{ minHeight: "100vh", pt: 10, backgroundColor: "white" }}
      >
        {/* Your Services Section Content */}
      </Box>
      <Box
        id="projects"
        sx={{ minHeight: "100vh", pt: 10, backgroundColor: "grey" }}
      >
        {/* Your About Section Content */}
      </Box>
    </>
  );
}
