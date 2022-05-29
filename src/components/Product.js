import { Box, Rating, Button, Paper, Typography } from "@mui/material";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { addItem, incrementQty } from "../redux/CartSlice";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Paper>
        <Box
          display="flex"
          gap=".5rem"
          flexDirection="column"
          alignItems="center"
        >
          <Box className="product-img" p={2}>
            <img width="100%" src={item.img} alt={item.name} />
          </Box>
          <Typography variant="h5">{item.name}</Typography>
          <Typography variant="body1">
            <b style={{ color: "tomato" }}>Brand: </b>
            {item.brand}
          </Typography>
          <h3>
            <NumberFormat
              value={item.price}
              className="unit price"
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              decimalScale={2}
              renderText={(value, props) => <div {...props}>{value}</div>}
            />
          </h3>
          <Box display="flex" alignItems="center">
            <Rating value={item.rating.rate} />({item.rating.count})
          </Box>
          <Box display="flex" alignItems="center" m={2}>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                dispatch(addItem(item));
              }}
            >
              ADD TO CART
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default Product;
