import React from "react";
import { Box, Typography, Grid, Container, Paper, Stack } from "@mui/material";

// Categorized Skills Data
const skillGroups = [
  {
    category: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: "https://img.icons8.com/color/96/javascript.png",
      },
      {
        name: "Java",
        icon: "https://img.icons8.com/color/96/java-coffee-cup-logo.png",
      },
      {
        name: "Python",
        icon: "https://img.icons8.com/color/96/python--v1.png",
      },
      {
        name: "C++",
        icon: "https://img.icons8.com/color/96/c-plus-plus-logo.png",
      },
    ],
  },
  {
    category: "Frontend & UI Library",
    skills: [
      {
        name: "React",
        icon: "https://img.icons8.com/color/96/react-native.png",
      },
      {
        name: "Material UI",
        icon: "https://img.icons8.com/color/96/material-ui.png",
      },
    ],
  },
  {
    category: "Mobile Frameworks",
    skills: [
      {
        name: "React Native",
        icon: "https://img.icons8.com/nolan/64/react-native.png",
      },
      {
        name: "Expo",
        icon: "https://img.icons8.com/ios-filled/100/ffffff/expo.png",
      },
    ],
  },
  {
    category: "Desktop Development", // New Category
    skills: [
      {
        name: "JavaFXML",
        icon: "https://img.icons8.com/color/96/java-coffee-cup-logo.png",
      }, // Reusing Java logo or custom FXML icon
    ],
  },
  {
    category: "Enterprise & ERP",
    skills: [
      {
        name: "Odoo ERP",
        icon: "/odoo.svg",
      },
    ],
  },
  {
    category: "Backend & Cloud",
    skills: [
      {
        name: "Spring Boot",
        icon: "https://img.icons8.com/color/96/spring-logo.png",
      },
      { name: "Node.js", icon: "https://img.icons8.com/color/96/nodejs.png" },
      {
        name: "Firebase",
        icon: "https://img.icons8.com/color/96/firebase.png",
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://img.icons8.com/color/96/postgreesql.png",
      },
      { name: "MySQL", icon: "https://img.icons8.com/color/96/mysql-logo.png" },
      { name: "MongoDB", icon: "https://img.icons8.com/color/96/mongodb.png" },
    ],
  },
];

const SkillCard = ({ name, icon }) => (
  <Paper
    elevation={0}
    sx={{
      bgcolor: "#121212",
      p: 3,
      textAlign: "center",
      borderRadius: "16px",
      border: "1px solid #222",
      height: "140px", // Set a fixed height for perfect alignment
      display: "flex",
      minWidth: { lg: "180px" },
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transform: "translateY(-10px)", // Lift effect
        borderColor: "#f04e23",
        boxShadow: "0 10px 20px rgba(240, 78, 35, 0.2)",
      },
    }}
  >
    <Box
      component="img"
      src={icon}
      alt={name}
      sx={{
        width: "auto",
        height: 45, // Fixed height for icons
        maxWidth: "100%",
        mb: 1.5,
        objectFit: "contain",
      }}
    />
    <Typography
      variant="body1"
      sx={{ color: "#fff", fontWeight: 500, fontSize: "0.85rem" }}
    >
      {name}
    </Typography>
  </Paper>
);

const Skills = () => {
  return (
    <Box id="stack" sx={{ bgcolor: "#000", pb: 5, pt: 3, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Stack spacing={1} sx={{ mb: 8, alignItems: "center" }}>
          <Typography
            variant="subtitle1"
            sx={{ color: "#a0a0a0", letterSpacing: 2 }}
          >
            SKILLS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: 700,
              textAlign: "center",
              fontFamily: '"Playfair Display", serif', // Or a script font for that "Working Tools" look
            }}
          >
            Some of My Working Tools
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              bgcolor: "#f04e23",
              borderRadius: 2,
              mt: 2,
            }}
          />
        </Stack>

        {/* Skills Mapping */}
        {skillGroups.map((group) => (
          <Box key={group.category} sx={{ mb: 8 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#f04e23",
                mb: 4,
                fontWeight: 600,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {group.category}
            </Typography>
            <Grid container spacing={3}>
              {group.skills.map((skill) => (
                <Grid item xs={6} sm={4} md={2} key={skill.name}>
                  <SkillCard name={skill.name} icon={skill.icon} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Skills;
