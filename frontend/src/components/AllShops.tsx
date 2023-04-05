import { Button, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import _ from "lodash";
import { Shops } from "../mocks/shop.mock";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useQuery } from "react-query";
import { getShopkeeper } from "../api/shopkeeper.api";
import { IShopkeeper } from "../schemas/shopkeeper.schema";

function AllShops() {
  const { data, isLoading, isError } = useQuery<IShopkeeper[]>(
    "shops",
    getShopkeeper
  );
  console.log(data);

  return (
    <>
      <Navbar />
      <Grid
        templateColumns="repeat(auto-fit, 290px)"
        gap={6}
        m="8"
        justifyContent={"center"}
      >
        {_.map(data, (shop, index) => {
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
                <Image src={shop.shopImageUrl} />

                <Text fontSize={"2xl"} fontWeight="bold">
                  {shop.shopName}
                </Text>
                <Text color="#7A7A7A">{shop.shopDescription} </Text>
                <Button my="2" textAlign={"center"} bg={"blue.500"} size={"sm"}>
                  {" "}
                  <Link to={"/listofproducts"}> Visit Shop </Link>
                </Button>
              </GridItem>
            </>
          );
        })}
      </Grid>
    </>
  );
}

export default AllShops;
