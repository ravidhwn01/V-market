import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import _ from "lodash";

import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getAllProduct } from "../api/product.api";
import { IProduct } from "../schemas/shopkeeper.schema";
import AddProduct from "./AddProduct";
import Navbar from "./Navbar";

function ListOfProducts() {
  const { shopId } = useParams();
  const { data } = useQuery<IProduct[]>(`products-${shopId}`, () => {
    return getAllProduct(shopId!);
    // we are certain that shopId will not be null or undefined at this point.
  });
  return (
    <>
      <Navbar />
      <AddProduct />

      <Grid
        templateColumns="repeat(auto-fit, 290px)"
        gap={6}
        m="8"
        justifyContent={"center"}
      >
        {_.map(data, (product, index) => {
          return (
            <GridItem
              p="6"
              w="100%"
              h="100%"
              boxShadow={"2xl"}
              borderRadius="8px"
              key={product.shopkeeperId}
            >
              <Image src={product.productImageUrl} alt="loading..." />

              <Text fontSize={"2xl"} fontWeight="bold">
                {product.productName}
              </Text>
              <Text color="#7A7A7A">{product.description} </Text>
              <Flex justifyContent={"space-between"}>
                <Button bg="none">
                  <span>Quantity: </span> {product.quantity}
                </Button>
                <Button bg={"#aac6ca"}> Export </Button>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default ListOfProducts;
