import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";

const SummaryAccordian = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography fontWeight="600">Cart Summary</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}
      >
        <Typography variant="body1" display={"flex"} gap={".5rem"}>
          <b>Cart Total: </b>
          <NumberFormat
            value={cart.totalAmt}
            className="cart total"
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
            renderText={(value, props) => <div {...props}>{value}</div>}
          />
        </Typography>
        <Typography variant="body1" display={"flex"} gap={".5rem"}>
          <b>Total Cart Items: </b>
          <Typography variant="body1">{cart.totalQty}</Typography>
        </Typography>
        <Typography variant="p">
          Shipping Charges will be calculated after updating the shipping
          address.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default SummaryAccordian;
