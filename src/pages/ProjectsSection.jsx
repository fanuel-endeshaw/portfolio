import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  Card,
  CardMedia,
  Stack,
  CardContent,
  Chip,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const projects = [
  {
    title: "Car Rental System",
    category: "Desktop / JavaFX",
    description:
      "A robust desktop application for managing car rentals, including  inventory tracking, with reporting.",
    image: "/car.jpg",
    type: "desktop",
    tech: ["Java", "JavaFX", "MySQL"],
    github: "https://github.com/fanuel-endeshaw/java-gui",
    live: "",
  },
  {
    title: "Traffic Light Controller",
    category: "Embedded Software",
    description:
      "A hardware-integrated traffic light simulation offering real-time synchronization and sensor-triggered light phasing.",
    image: "/traffic.jpg",
    type: "desktop",
    tech: ["C++", "Atmega32", "IoT"],
    github:
      "https://github.com/fanuel-endeshaw/Embedded-Software-Engineering/tree/main/Embedded%20traffic%20light",
    live: "",
  },
  {
    title: "Real Estate Management",
    category: "Odoo / ERP",
    description: "ERP solution for managing properties and clients.",
    image: "/real.png",
    type: "desktop",
    tech: ["Python", "Odoo", "PostgreSQL"],
    github: "",
    live: "",
  },
  {
    title: "Live Transcription App",
    category: "React Native",
    description: "A real-time transcription mobile app.",
    image: "/live.jpg",
    type: "mobile",
    tech: ["React Native", "FastAPI"],
    github:
      "https://github.com/fanuel-endeshaw/react-native/tree/main/mlProject",
    live: "",
  },
  // {
  //   title: "ReDo Mobile App",
  //   category: "React Native",
  //   description:
  //     "Task management and habit tracking app with personalized insights.",
  //   image: "/redo.jpg",
  //   type: "mobile",
  //   tech: ["React Native", "Expo"],
  //   github: "#",
  //   live: "#",
  // },
  {
    title: "E-Commerce UI",
    category: "Frontend",
    description:
      "Responsive e-commerce UI with filtering and smooth cart interactions.",
    image: "/ecom.png",
    type: "mobile",
    tech: ["React", "MUI", "Redux"],
    github:
      "https://github.com/fanuel-endeshaw/react-native/tree/main/smartEcommerceUi",
    live: "",
  },
];

const ProjectsSection = () => {
  return (
    <Box
      sx={{ bgcolor: "#050505", paddingTop: 2, paddingBottom: 10 }}
      id="projects"
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            fontWeight: 800,
            mb: 4,
            textAlign: "center",
          }}
        >
          Selected <span style={{ color: "#FF5722" }}>Works</span>
        </Typography>

        {/* Grid */}
        <Grid container spacing={7} sx={{ justifyContent: "center" }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={12} md={6} key={index}>
              <Card
                sx={{
                  height: "360px",
                  width: { md: "400px" },
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "rgba(255,255,255,0.03)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                    borderColor: "rgba(255,87,34,0.4)",

                    "& .project-overlay": {
                      opacity: 1,
                    },
                    "& .project-image": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                {/* IMAGE */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: project.type === "mobile" ? "3/4" : "16/9",
                    bgcolor: "#0a0a0a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  {/* Glow for mobile */}
                  {project.type === "mobile" && (
                    <Box
                      sx={{
                        position: "absolute",
                        width: "70%",
                        height: "70%",
                        background: "rgba(255,87,34,0.15)",
                        filter: "blur(50px)",
                        borderRadius: "50%",
                      }}
                    />
                  )}

                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                    sx={{
                      width: project.type === "mobile" ? "60%" : "100%",
                      height: project.type === "mobile" ? "85%" : "100%",
                      objectFit:
                        project.type === "mobile" ? "contain" : "cover",
                      borderRadius: project.type === "mobile" ? "16px" : 0,
                      boxShadow:
                        project.type === "mobile"
                          ? "0 8px 20px rgba(0,0,0,0.6)"
                          : "none",
                      transition: "transform 0.5s ease",
                    }}
                  />

                  {/* Category Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      bgcolor: "rgba(0,0,0,0.6)",
                      color: "#FF5722",
                      px: 1.2,
                      py: 0.4,
                      borderRadius: "999px",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {project.category}
                  </Box>

                  {/* Overlay */}
                  <Box
                    className="project-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1.5,
                      opacity: 0,
                      transition: "0.3s ease",
                    }}
                  >
                    <IconButton
                      href={project.github}
                      target="_blank"
                      size="small"
                      sx={{
                        bgcolor: "#fff",
                        color: "#000",
                        "&:hover": {
                          bgcolor: "#FF5722",
                          color: "#fff",
                        },
                      }}
                    >
                      <GitHubIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                      href={project.live}
                      target="_blank"
                      size="small"
                      sx={{
                        bgcolor: "#fff",
                        color: "#000",
                        "&:hover": {
                          bgcolor: "#FF5722",
                          color: "#fff",
                        },
                      }}
                    >
                      <LaunchIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>

                {/* CONTENT */}
                <CardContent
                  sx={{
                    p: 1.5,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      mb: 0.3,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#aaa",
                      fontSize: "0.8rem",
                      lineHeight: 1.3,
                      mb: 0.8,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Tech */}
                  <Stack
                    direction="row"
                    spacing={0.5}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mt: "auto" }}
                  >
                    {project.tech.map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.06)",
                          color: "#ddd",
                          borderRadius: "999px",
                          fontSize: "0.65rem",
                          height: "20px",
                        }}
                      />
                    ))}
                  </Stack>

                  {/* CTA */}
                  <Button
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 0.5,
                      color: "#FF5722",
                      textTransform: "none",
                      fontSize: "0.75rem",
                      alignSelf: "flex-start",
                    }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.2)",
              borderRadius: "50px",
              py: 1,
              px: 3,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
              "&:hover": {
                borderColor: "#FF5722",
                bgcolor: "rgba(255,87,34,0.1)",
              },
            }}
          >
            View Full Archive
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
