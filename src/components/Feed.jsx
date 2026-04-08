import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import About from "../pages/About";
import Skills from "../pages/Skills";
import ServicesSection from "../pages/ServicesSection";
import ProjectsSection from "../pages/ProjectsSection";
import Contact from "../pages/Contact";
import { Link } from "react-scroll";
import SpiralImage from "./SpiralImage";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import DownloadIcon from "@mui/icons-material/Download";

export default function Feed() {
  return (
    <>
      <Stack
        id="home"
        direction={{ xs: "column-reverse", md: "row" }}
        spacing={4}
        sx={{
          bgcolor: "#000",
          color: "white",
          px: { xs: 2, md: 10 },
          alignItems: "center",
          justifyContent: "center",
          // height: "95vh",
          marginLeft: { md: "50px" },
          paddingTop: 9,
          marginBottom: 17,
        }}
      >
        {/* Introduction Section with fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ flex: 1 }}
        >
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
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
              I'm a
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

            <Typography
              sx={{
                color: "#a0a0a0",
                maxWidth: "500px",
                mb: 3,
                textAlign: { xs: "left", md: "left" },
              }}
            >
              I am a React Native Specialist and Fullstack Developer dedicated
              to building slick, production-ready applications from the ground
              up. By combining a passion for fluid mobile interfaces with a
              robust backend foundation in Spring Boot and Node.js, I bridge the
              gap between complex business logic and seamless user experiences.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            >
              {/* <Button
                variant="contained"
                sx={{ bgcolor: "#f04e23", borderRadius: "20px", px: 4 }}
              >
                Hire
              </Button> */}
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
              >
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
              </Link>
              <Stack direction="row" spacing={2} justifyContent="center" mb={4}>
                <IconButton
                  href="https://github.com/fanuel-endeshaw"
                  target="_blank"
                  sx={{ color: "#fff", "&:hover": { color: "#FF5722" } }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/fanuel-endeshaw"
                  target="_blank"
                  sx={{ color: "#fff", "&:hover": { color: "#FF5722" } }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://instagram.com/fanuel_en"
                  target="_blank"
                  sx={{ color: "#fff", "&:hover": { color: "#FF5722" } }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="mailto:fanuelite@email.com"
                  sx={{ color: "#fff", "&:hover": { color: "#FF5722" } }}
                >
                  <EmailIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </motion.div>

        {/* Image Section with glow + fade-in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ flex: 1 }}
        >
          <Box
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
                boxShadow: "0 0 50px #f04e23", // Glow effect
              }}
            >
              <img
                src="/pic.jpg"
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </motion.div>
      </Stack>

      {/* Other sections */}
      <About />
      <Skills />
      <ServicesSection />
      <ProjectsSection />
      <Contact />
    </>
  );
}
