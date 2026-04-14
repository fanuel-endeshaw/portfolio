// import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
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
import {
  Box,
  Stack,
  Typography,
  Button,
  IconButton,
  keyframes,
} from "@mui/material";
// ... (your other imports)

// 1. Define the floating animation
const floating = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-17px); }
  100% { transform: translateY(0px); }
`;

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
          marginLeft: { md: "50px" },
          paddingTop: { md: 12, xs: 7 },
          marginBottom: 17,
        }}
      >
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ flex: 1 }}
        >
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Titan One', sans-serif",
                fontSize: { xs: 41 },
              }}
            >
              Hi, It's <span style={{ color: "#f04e23" }}>Fanuel</span>
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                mb: 1.6,
                mt: 1.2,
                display: "flex",
                gap: "10px",
                fontSize: { xs: "22px" },
                fontFamily: "'Bricolage Grotesque', sans-serif",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                }, // Centering fix for typewriter
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
                      "Odoo Developer",
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
                fontFamily: "'Lilita One', sans-serif",
                mx: { xs: "auto", md: 0 }, // Centers text block on mobile
                textAlign: { xs: "left", md: "left" },
                fontSize: { xs: "15px" },
                // lineHeight: 1.3,
              }}
            >
              I am a React Native Specialist and Fullstack Developer dedicated
              to building slick, production-ready applications from the ground
              up. By combining a passion for fluid mobile interfaces with a
              robust backend foundation in Spring Boot and Node.js, I bridge the
              gap between complex business logic and seamless user experiences.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }} // Stack buttons/icons on small screens
              spacing={2}
              sx={{
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
              }}
            >
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
                    marginTop: { xs: 1.2 },
                    marginBottom: { xs: 1.5 },
                    px: 4,
                    "&:hover": { borderColor: "#fff", color: "#fff" },
                  }}
                >
                  Contact
                </Button>
              </Link>

              <Stack direction="row" spacing={1}>
                {[
                  {
                    icon: <GitHubIcon />,
                    url: "https://github.com/fanuel-endeshaw",
                  },
                  {
                    icon: <LinkedInIcon />,
                    url: "https://linkedin.com/in/fanuel-endeshaw",
                  },
                  {
                    icon: <InstagramIcon />,
                    url: "https://instagram.com/fanuel_en",
                  },
                  { icon: <EmailIcon />, url: "mailto:fanuelite@email.com" },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.url}
                    target="_blank"
                    sx={{
                      color: "#fff",
                      "&:hover": { color: "#f04e23", transform: "scale(1.1)" },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Box>
        </motion.div>

        {/* Image Section with Infinite Float */}
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
              // 2. Apply the animation here
              animation: `${floating} 4s ease-in-out infinite`,
            }}
          >
            <Box
              sx={{
                width: { xs: "260px", md: "400px" },
                height: { xs: "260px", md: "400px" },
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #f04e23",
                boxShadow: "0 0 50px rgba(240, 78, 35, 0.4)",
              }}
            >
              <img
                src="/pic3.jpg"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
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
