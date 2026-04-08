import * as React from "react";
import { useState, useMemo } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import {
  Button,
  CssBaseline,
  Slider,
  Stack,
  TextField,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import NavBar from "./components/NavBar";
import Feed from "./components/Feed";

import { Routes, Route, Navigate } from "react-router-dom";

import { getDesignTokens } from "./theme";

export default function App() {
  const [mode, setMode] = useState("light");
  const [isLoggedIn, setLoggedIn] = useState(true);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // Auth Guard Layout
  // if (!isLoggedIn) {
  //   return (
  //     <ThemeProvider theme={theme}>
  //       <Box
  //         bgcolor={"background.default"}
  //         color={"text.primary"}
  //         minHeight="100vh"
  //       >
  //         <CssBaseline />
  //         <Routes>
  //           <Route
  //             path="/login"
  //             element={<Login setLoggedIn={setLoggedIn} />}
  //           />
  //           <Route path="/signup" element={<Signup />} />
  //           <Route path="*" element={<Navigate to="/login" />} />
  //         </Routes>
  //       </Box>
  //     </ThemeProvider>
  //   );
  // }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box color={"text.primary"} sx={{ backgroundColor: "#000" }}>
          <NavBar setMode={setMode} mode={mode} />
          <Stack
            direction={"row"}
            sx={{ justifyContent: { xs: "center" } }}
            justifyContent={"space-between"}
            gap={2}

            // spacing={2}
          >
            {/* <LeftBar setMode={setMode} mode={mode} /> */}
            <Box
              flex={2}
              sx={{
                padding: "10px 10px",
                marginLeft: 0,
              }}
            >
              <Routes>
                <Route path="/" element={<Feed />} />
              </Routes>
            </Box>
            {/* <RightBar /> */}
          </Stack>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

// export default function App() {
//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
//           Material UI Vite.js example
//         </Typography>
//         <ProTip />
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }
