import {
  Button,
  Grid,
  GridItem,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import _ from "lodash";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getShopkeeper } from "../api/shopkeeper.api";
import { IShopWithProduct } from "../interfaces/shop.interface";
import Navbar from "./Navbar";

function AllShops() {
  // useQuery hook.
  const { data: shops } = useQuery<IShopWithProduct[]>("shops", getShopkeeper);
  // This key is used to cache the result of the query so that if the same key is used again later, the cached result can be returned instead of making a new request.
  const [isCardViewInCenter] = useMediaQuery("(min-width: 1200px)");

  return (
    <>
      <Navbar />
      <Grid
        templateColumns="repeat(auto-fit, 315px)"
        gap={6}
        mx="24"
        my="8"
        justifyContent={isCardViewInCenter ? "flex-start" : "center"}
      >
        {_.map(shops, (shop) => {
          return (
            <GridItem
              p="6"
              w="100%"
              h="100%"
              mx="15"
              boxShadow={"2xl"}
              borderRadius="8px"
              key={shop.id}
            >
              <Image src={shop.shopImageUrl} />

              <Text fontSize={"2xl"} fontWeight="bold">
                {shop.shopName}
              </Text>
              <Text color="#7A7A7A">{shop.shopDescription} </Text>
              <Button my="2" textAlign={"center"} bg="#aac6ca" size={"sm"}>
                {" "}
                <Link to={`/listofproducts/${shop.id}`}> Visit Shop </Link>
              </Button>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default AllShops;
