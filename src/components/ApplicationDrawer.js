import { Close } from "@mui/icons-material";
import { Box, Drawer } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartContents from "./CartContents";
import SummaryAccordian from "./SummaryAccordian";
import Title from "./Title";

const ApplicationDrawer = ({ menuOpen, setMenuOpen }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} anchor="right">
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        gap={"1rem"}
        sx={{ width: "90%", margin: "2rem", position: "relative" }}
      >
        <Close
          onClick={() => setMenuOpen(false)}
          sx={{ position: "absolute", right: "1rem" }}
        />
        {cart.totalQty > 0 ? (
          <Title title="Your Bag" />
        ) : (
          <Title title="Your Bag is Empty" />
        )}
        {cart.totalQty > 0 && <SummaryAccordian />}
        <CartContents />
      </Box>
    </Drawer>
  );
};

export default ApplicationDrawer;
