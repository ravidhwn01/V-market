import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import _ from "lodash";

import { Products } from "../mocks/listOfProduct.mock";
import Navbar from "./Navbar";
import AddProduct from "./AddProduct";
import { useQuery } from "react-query";
import { getAllProduct } from "../api/product.api";
import { IProduct } from "../schemas/shopkeeper.schema";

function ListOfProducts() {
  const { data, isError, isLoading } = useQuery<IProduct[]>(
    "product",
    getAllProduct
  );
  console.log(data);
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
            <>
              <GridItem
                p="6"
                w="100%"
                h="100%"
                boxShadow={"2xl"}
                borderRadius="8px"
                key={index}
              >
                {/* <Image src={product.} /> */}

                <Text fontSize={"2xl"} fontWeight="bold">
                  {product.productName}
                </Text>
                <Text color="#7A7A7A">{product.description} </Text>
                <Flex justifyContent={"space-between"}>
                  <Button>
                    <span>Quantity: </span> {product.quantity}
                  </Button>
                  <Button> Export </Button>
                </Flex>
              </GridItem>
            </>
          );
        })}
      </Grid>
    </>
  );
}

export default ListOfProducts;
