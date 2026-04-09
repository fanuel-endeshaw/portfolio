import { Box, keyframes } from "@mui/material";

// 1. Define the animation "path"
const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px); /* Adjust this for more/less movement */
  }
  100% {
    transform: translateY(0px);
  }
`;

// 2. Apply it to your Image component
const FloatingImage = () => {
  return (
    <Box
      component="img"
      src="pic3.jpg"
      sx={{
        width: { xs: "300px", md: "450px" }, // Example sizes
        borderRadius: "50%",
        border: "4px solid #FE4A23",
        boxShadow: "0 0 20px rgba(254, 74, 35, 0.5)",

        // --- ANIMATION LOGIC ---
        animation: `${float} 3s ease-in-out infinite`,
        // -----------------------
      }}
    />
  );
};
export default FloatingImage;
