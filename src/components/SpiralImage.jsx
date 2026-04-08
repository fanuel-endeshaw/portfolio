import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const SpiralImage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: { xs: "280px", md: "400px" },
        height: { xs: "280px", md: "400px" },
      }}
    >
      {/* Profile Image with Glow */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid #f04e23",
          boxShadow: "0 0 50px #f04e23",
          position: "relative",
          zIndex: 2,
        }}
      >
        <img
          src="/pic.jpg"
          alt="Profile"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      {/* Spiral 1 */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-30px",
          left: "-30px",
          width: "calc(100% + 60px)",
          height: "calc(100% + 60px)",
          borderRadius: "50%",
          border: "2px dashed #f04e23",
          zIndex: 1,
        }}
      />

      {/* Spiral 2 */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-60px",
          left: "-60px",
          width: "calc(100% + 120px)",
          height: "calc(100% + 120px)",
          borderRadius: "50%",
          border: "2px dashed #fff",
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default SpiralImage;
