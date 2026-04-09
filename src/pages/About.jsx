import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Collapse,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion } from "framer-motion";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      id="about"
      sx={{
        bgcolor: "#000",
        py: { xs: 8, md: 10 },
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 10 }}
          alignItems="center"
        >
          {/* Left: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ flex: 1 }}
          >
            <Box
              sx={{
                width: "90%",
                maxWidth: { xs: "350px", md: "450px" },
                borderRadius: "40px",
                overflow: "hidden",
                bgcolor: "#1a1a2e",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src="/pic.jpg"
                alt="Fanuel Endeshaw"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </motion.div>

          {/* Right: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ flex: 1 }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  lineHeight: 1.3,
                  fontFamily: "'Lilita One', sans-serif",
                  fontSize: { xs: "1.2rem", md: "2rem" },
                }}
              >
                I am{" "}
                <span style={{ color: "#f04e23" }}>Fanuel Endeshaw Chanie</span>
                , dedicated to crafting impactul digital solutions.
              </Typography>

              <Typography
                sx={{
                  color: "#a0a0a0",
                  mb: 2,
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                }}
              >
                As a Software Engineering student at Bahir Dar University (Poly
                Campus), I specialize in bridging the gap between elegant design
                and high-performance architecture. I bring a solid foundation in
                modern technologies like React Native, Spring Boot, and Node.js.
              </Typography>

              {/* Collapsible Content */}
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography
                  sx={{
                    color: "#a0a0a0",
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: "1.05rem",
                  }}
                >
                  Beyond the classroom at Poly, I spend my time diving deep into
                  full-stack development and exploring scalable system designs.
                  My journey in software engineering is fueled by a commitment
                  to lifelong learning and a desire to build applications that
                  solve real-world problems for users across mobile and web
                  platforms.
                </Typography>
              </Collapse>

              <Button
                variant="contained"
                onClick={handleToggle}
                endIcon={
                  expanded ? <KeyboardArrowUpIcon /> : <ArrowForwardIcon />
                }
                sx={{
                  bgcolor: "#333",
                  color: "#fff",
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  mt: 2,
                  textTransform: "none",
                  transition: "0.3s",
                  "&:hover": {
                    bgcolor: "#f04e23",
                  },
                }}
              >
                {expanded ? "Show Less" : "Read More"}
              </Button>
            </Box>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
