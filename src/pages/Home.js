import Products from "../components/Products";
import { items } from "../data";

const Home = () => {
  return (
    <>
      <Products items={items} />
    </>
  );
};

export default Home;
