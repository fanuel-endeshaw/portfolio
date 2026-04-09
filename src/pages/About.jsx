import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const About = () => {
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
          {/* Left: Image/Illustration with fade-in from left */}
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
              }}
            >
              <img
                src="/pic.jpg"
                alt="About Illustration"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </motion.div>

          {/* Right: Content with fade-in from right */}
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
                  // fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.3,
                  fontFamily: "'Lilita One', sans-serif",
                  fontSize: { xs: "1.2rem", md: "2rem" },
                }}
              >
                I am passionate about creating{" "}
                <span style={{ color: "#f04e23" }}>beautiful & functional</span>{" "}
                software that makes a positive impact.
              </Typography>

              <Typography
                sx={{
                  color: "#a0a0a0",
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                }}
              >
                As a software Engineering student passionate about leveraging
                technology to solve real-world problems, I’m excited to
                introduce myself. With strong analytical and problem-solving
                skills, I bring a solid foundation in software Engineering
                principles and modern programming languages like React Native,
                Spring Boot, and Node.js.
              </Typography>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: "#333",
                  color: "#fff",
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#f04e23",
                  },
                }}
              >
                Read More
              </Button>
            </Box>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
