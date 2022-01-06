import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Heading = styled.h1`
  display: flex;
  justify-content: center;
  color: teal;
`;

const Products = () => {
  return (
    <>
    <Heading>Products</Heading>
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
};

export default Products;
