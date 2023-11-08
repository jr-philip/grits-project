import { Button, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

const Buttons = () => {
  return (
    <Container>
      <Stack direction="row" spacing={0}>
        <Button>Buy</Button>
        <Button>Rent</Button>
        <Button>Sell</Button>
        <Button>Home Loans</Button>
        <Button>Agent Finder</Button>
        <img
          src="./public/house3.jpg"
          alt="house3"
          style={{ width: "53px", height: "54px", marginLeft: "90px" }}
        />
        <Typography
          sx={{ color: "#FFBE67", fontfamily: "Kalam", fontSize: "40px" }}
        >
          Nyumbani
        </Typography>
        <Button sx={{ marginLeft: "auto" }}>Sign in</Button>
      </Stack>
    </Container>
  );
};

export default Buttons;
