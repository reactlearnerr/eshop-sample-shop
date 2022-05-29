import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeItem } from "../redux/CartSlice";

const StyledPaper = styled(Paper)`
  width: 100%;
  gap: 1rem;
  position: relative;
`;

const DeleteItem = styled(IconButton)`
  cursor: pointer;
`;

const CartContents = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const increment = (item) => {
    dispatch(incrementQty(item));
  };
  const decrement = (item) => {
    if (item.qty === 1) dispatch(removeItem(item));
    else dispatch(decrementQty(item));
  };
  return (
    <>
      {cart.cartItems.map((cartItem) => {
        return (
          <StyledPaper key={cartItem.id}>
            <Box
              display="flex"
              gap={"1rem"}
              p={2}
              justifyContent="space-between"
            >
              <Box>
                <img
                  width="150px"
                  height="150px"
                  src={cartItem.img}
                  alt={cartItem.name}
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-around"}
                flexDirection="column"
                p={1}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  gap=".25rem"
                  flexDirection="column"
                  p={1}
                >
                  <Typography fontWeight="bold" variant="body1">
                    {cartItem.name}
                  </Typography>
                  <Typography variant="subtitle2">
                    <b style={{ color: "tomato" }}>Brand: </b>
                    {cartItem.brand}
                  </Typography>
                  <NumberFormat
                    value={cartItem.price}
                    className="foo"
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    renderText={(value, props) => <div {...props}>{value}</div>}
                  />
                </Box>
                <Box display="flex">
                  <NumberFormat
                    value={cartItem.qty * cartItem.price}
                    className="foo"
                    displayType={"text"}
                    decimalScale={2}
                    thousandSeparator={true}
                    prefix={"Total: $"}
                    renderText={(value, props) => <div {...props}>{value}</div>}
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Button onClick={() => increment(cartItem)}>+</Button>
                <Typography fontWeight="bold" variant="body2">
                  {cartItem.qty}
                </Typography>
                <Button onClick={() => decrement(cartItem)}>-</Button>
                <DeleteItem onClick={() => dispatch(removeItem(cartItem))}>
                  <Delete color="error" />
                </DeleteItem>
              </Box>
            </Box>
          </StyledPaper>
        );
      })}
    </>
  );
};

export default CartContents;
