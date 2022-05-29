import { Typography } from "@mui/material";
import React from "react";

const Title = ({ title }) => {
  return (
    <Typography
      m={3}
      variant="h5"
      fontWeight={"bold"}
      sx={{ textDecoration: "underline crimson" }}
    >
      {title}
    </Typography>
  );
};

export default Title;
