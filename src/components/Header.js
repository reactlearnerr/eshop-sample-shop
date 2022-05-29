import { ShoppingBag } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import ApplicationDrawer from "./ApplicationDrawer";
const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header>
        <h2>ShopCart</h2>
        <Box display="flex" alignItems="center">
          <ShoppingBag
            sx={{ cursor: "pointer" }}
            htmlColor="#333"
            onClick={() => setMenuOpen(true)}
          />
          <Typography variant="h6">{cart.totalQty}</Typography>
          <ApplicationDrawer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </Box>
      </header>
    </>
  );
};

export default Header;
