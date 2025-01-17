import { Box, Container, Grid2, styled, Typography } from "@mui/material";

import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton";
import "./hero.css";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
    border: `1px solid #ffffff`,
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box position="relative">{/* <Box>ANIMAÇÃO VEM AQUI</Box> */}</Box>
            <StyledImg src={Avatar} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <Typography color="#ffffff" variant="h1" textAlign={"center"}>
              Mateus Andrade
            </Typography>
            <Typography color="#ffffff" variant="h2" textAlign={"center"}>
              I'm a Software Engineer
            </Typography>
            <Grid2
              container
              display="flex"
              justifyContent={"center"}
              spacing={3}
            >
              <Grid2
                sx={{
                  justifyContent: "center",
                  display: "flex",
                }}
                size={{ xs: 12, md: 4 }}
              >
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid2>

              <Grid2
                sx={{
                  justifyContent: "center",
                  display: "flex",
                }}
                size={{ xs: 12, md: 4 }}
              >
                <StyledButton>
                  <EmailIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </StyledHero>
  );
};

export default Hero;
