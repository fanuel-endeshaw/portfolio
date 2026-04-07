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
      "A robust desktop application for managing car rentals, including booking workflows, inventory tracking, and billing.",
    image: "/car.jpg",
    type: "desktop",
    tech: ["Java", "JavaFX", "MySQL"],
    github: "https://github.com/yourusername/car-rental",
    live: "#",
  },
  {
    title: "Traffic Light Controller",
    category: "Embedded Software",
    description:
      "A hardware-integrated traffic light simulation offering real-time synchronization and sensor-triggered light phasing.",
    image: "/traffic.jpg",
    type: "desktop",
    tech: ["C++", "Arduino", "IoT"],
    github: "https://github.com/yourusername/traffic-light",
    live: "#",
  },
  {
    title: "Live Transcription App",
    category: "React Native",
    description:
      "A mobile application that provides real-time speech-to-text transcription, powered by FastAPI backend services.",
    image: "/live.jpg",
    type: "mobile",
    tech: ["React Native", "FastAPI"],
    github: "https://github.com/yourusername/live-transcription",
    live: "#",
  },
  {
    title: "ReDo Mobile App",
    category: "React Native",
    description:
      "A comprehensive mobile app for task management and habit tracking, offering personalized insights and reminders.",
    image: "/redo.jpg",
    type: "mobile",
    tech: ["React Native", "Expo"],
    github: "https://github.com/yourusername/redo",
    live: "#",
  },
  {
    title: "E-Commerce UI",
    category: "Frontend Development",
    description:
      "A modern, highly responsive e-commerce storefront with dynamic product filtering, smooth cart interactions, and Redux state management.",
    image: "/ecommerce.jpg",
    type: "web",
    tech: ["React", "Material UI", "Redux"],
    github: "https://github.com/yourusername/shop-ui",
    live: "#",
  },
  {
    title: "Real Estate Management",
    category: "Odoo / ERP",
    description:
      "An ERP solution tailored for real estate operations, streamlining property listings, client interactions, and lease management.",
    image: "/realestate.jpg",
    type: "desktop",
    tech: ["Python", "Odoo", "PostgreSQL"],
    github: "https://github.com/yourusername/odoo-estate",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <Box sx={{ bgcolor: "#050505", py: { xs: 5, md: 4 } }} id="projects">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: "900",
            mb: 4,
            letterSpacing: "-0.5px",
            textAlign: "center",
          }}
        >
          Selected <span style={{ color: "#FF5722" }}>Works</span>
        </Typography>
        {/* <Typography
          variant="h6"
          sx={{
            color: "#888",
            fontWeight: "400",
            mb: 5,
            maxWidth: "600px",
          }}
        >
          A collection of my recent projects ranging from mobile applications to embedded systems and enterprise solutions.
        </Typography> */}

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "rgba(255, 255, 255, 0.02)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  "&:hover": {
                    borderColor: "rgba(255, 87, 34, 0.5)",
                    transform: "translateY(-8px)",
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(255,87,34,0.1)",
                    "& .project-overlay": { opacity: 1 },
                    "& .project-image": { transform: "scale(1.05)" },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    pt: "45%",
                    bgcolor: "#000",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    className="project-image"
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit:
                        project.type === "mobile" ? "contain" : "cover",
                      objectPosition: "center",
                      transition: "transform 0.6s ease",
                      ...(project.type === "mobile" && { p: 2 }),
                    }}
                  />

                  {/* Hover Overlay */}
                  <Box
                    className="project-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(255,87,34,0.2) 100%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                      backdropFilter: "blur(2px)",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ mt: "auto", mb: 8 }}
                    >
                      <IconButton
                        href={project.github}
                        target="_blank"
                        sx={{
                          bgcolor: "#fff",
                          color: "#000",
                          width: 48,
                          height: 48,
                          "&:hover": {
                            bgcolor: "#FF5722",
                            color: "#fff",
                            transform: "scale(1.1)",
                          },
                          transition: "all 0.2s ease",
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton
                        href={project.live}
                        target="_blank"
                        sx={{
                          bgcolor: "#fff",
                          color: "#000",
                          width: 48,
                          height: 48,
                          "&:hover": {
                            bgcolor: "#FF5722",
                            color: "#fff",
                            transform: "scale(1.1)",
                          },
                          transition: "all 0.2s ease",
                        }}
                      >
                        <LaunchIcon />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>

                <CardContent
                  sx={{
                    p: 2,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#FF5722",
                      fontWeight: "700",
                      letterSpacing: 2,
                      mb: 0,
                      display: "block",
                      fontSize: "0.65rem",
                    }}
                  >
                    {project.category}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      mb: 0.5,
                      fontSize: "1.1rem",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#aaa",
                      lineHeight: 1.5,
                      mb: 1.5,
                      flexGrow: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
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
                          bgcolor: "rgba(255,255,255,0.05)",
                          color: "#ccc",
                          borderRadius: "8px",
                          fontWeight: 500,
                          fontSize: "0.75rem",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.2)",
              borderRadius: "50px",
              py: 1.5,
              px: 4,
              fontSize: "1rem",
              textTransform: "none",
              fontWeight: 600,
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "#FF5722",
                bgcolor: "rgba(255,87,34,0.1)",
                transform: "translateX(4px)",
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
