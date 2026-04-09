import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mdapvzld", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setOpen(true);
        e.target.reset(); // clear form
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Box sx={{ bgcolor: "#000", py: { xs: 6, md: 4 } }} id="contact">
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: 800,
            mb: 4,
            textAlign: "center",
          }}
        >
          Feel Free to <span style={{ color: "#FF5722" }}>Contact</span>
        </Typography>

        {/* Two-column layout */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {/* Left: Contact Info */}
          <Box
            sx={{
              flex: 1,
              bgcolor: "rgba(255,255,255,0.05)",
              p: 4,
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
              color: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#FF5722", fontWeight: 700, mb: 3 }}
            >
              Contact Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              📞 Call: (+251) 977 587 235
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              ✉️ Email: fanuelite@gmail.com
            </Typography>
            <Typography variant="body1">
              📍 Location: Dagmawi Menelik, Bahir Dar, Ethiopia
            </Typography>
          </Box>

          {/* Right: Contact Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              flex: 1,
              bgcolor: "rgba(255,255,255,0.05)",
              p: 4,
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
              color: "#fff",
            }}
          >
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                required
                // variant="contained"
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{
                  input: {
                    color: "#fff",
                  },
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#696868ff",
                  borderRadius: "12px",
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                required
                variant="outlined"
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{
                  input: { color: "#fff" },
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#696868ff",
                  borderRadius: "12px",
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                required
                variant="outlined"
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{
                  textarea: { color: "#fff" },
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#696868ff",
                  borderRadius: "12px",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<EmailIcon />}
                sx={{
                  bgcolor: "#FF5722",
                  "&:hover": {
                    bgcolor: "#e64a19",
                    boxShadow: "0 6px 20px rgba(255,87,34,0.6)",
                  },
                  textTransform: "none",
                  fontWeight: 600,
                  px: 4,
                  py: 1.2,
                  borderRadius: "30px",
                  alignSelf: "flex-start",
                }}
              >
                Send
              </Button>
            </Stack>
          </Box>
        </Stack>

        {/* Social Links */}
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontWeight: 600,
            mt: 6,
            mb: 2,
            textAlign: "center",
          }}
        >
          Connect with me
        </Typography>
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
            href="mailto:fanuelite@gmail.com"
            sx={{ color: "#fff", "&:hover": { color: "#FF5722" } }}
          >
            <EmailIcon />
          </IconButton>
        </Stack>

        {/* Download CV */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="outlined"
            endIcon={<DownloadIcon />}
            href="/eurocv.pdf"
            download
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
            Download CV
          </Button>
        </Box>

        {/* Snackbar Alerts */}
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Message sent successfully!
          </Alert>
        </Snackbar>
        <Snackbar
          open={error}
          autoHideDuration={4000}
          onClose={() => setError(false)}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            Failed to send message. Please try again.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
