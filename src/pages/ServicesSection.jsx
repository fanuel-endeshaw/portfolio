import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
// Icons
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LayersIcon from "@mui/icons-material/Layers";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import MemoryIcon from "@mui/icons-material/Memory";

const services = [
  {
    title: "Backend Development",
    icon: <StorageIcon sx={{ fontSize: 50 }} />,
    desc: "Scalable architectures with Node.js & Spring Boot. Secure APIs and DB management.",
  },
  {
    title: "Frontend Development",
    icon: <WebIcon sx={{ fontSize: 50 }} />,
    desc: "Responsive UIs using React.js. Prioritizing performance and pixel-perfect design.",
  },
  {
    title: "Mobile App Development",
    icon: <SmartphoneIcon sx={{ fontSize: 50 }} />,
    desc: "Cross-platform iOS/Android apps with React Native for seamless UX.",
  },
  {
    title: "Fullstack Development",
    icon: <LayersIcon sx={{ fontSize: 50 }} />,
    desc: "End-to-end solutions bridging business logic and user experience.",
  },
  {
    title: "ERP Customization",
    icon: <SettingsSuggestIcon sx={{ fontSize: 50 }} />,
    desc: "Tailoring Odoo ERP environments with custom modules and automation.",
  },
  {
    title: "Embedded Software",
    icon: <MemoryIcon sx={{ fontSize: 50 }} />,
    desc: "Firmware for microcontrollers, focusing on IoT and hardware integration.",
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{ bgcolor: "#000", paddingTop: 2, paddingBottom: 10 }}
      id="services"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ color: "#fff", fontWeight: "bold", mb: 6, textAlign: "center" }}
        >
          My <span style={{ color: "#FF5722" }}>Services</span>
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid
              item
              key={index}
              xs={12} // Full width on mobile (1 column)
              md={6} // Half width on desktop (2 columns)
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: "350px",
                  height: "350px",
                  bgcolor: "#111",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  p: 4,
                  borderRadius: "20px",
                  border: "1px solid #222",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    borderColor: "#FF5722",
                    boxShadow: "0px 0px 30px rgba(255, 87, 34, 0.2)",
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Box sx={{ color: "#FF5722", mb: 3 }}>{service.icon}</Box>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#aaa", px: 2 }}>
                  {service.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
