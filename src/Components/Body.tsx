import {
  Container,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Body = () => {
  const containerStyle = {
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "650px",
    marginTop: "30px",
  };

  const overlayStyle = {
    position: "absolute",
    top: "16%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#000",
  };

  const textField = {
    position: "absolute",
    top: "26%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#000",
    background: "rgba(231, 121, 19, 0.21)",
    width: 432,
  };

  return (
    <Container sx={containerStyle}>
      <img src="./public/keja.jpg" alt="house" style={imageStyle} />
      <Typography variant="h4" sx={overlayStyle}>
        Agents.Tours.Loans.Homes.
      </Typography>
      <Paper sx={textField}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter an adress,neighhood,city or zip code"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px", marginLeft: "181px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default Body;
