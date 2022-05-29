import { Grid } from "@mui/material";

import Product from "./Product";

const Products = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
          <Product item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
