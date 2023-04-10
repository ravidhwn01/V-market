import {
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import _ from "lodash";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getAllProducts } from "../api/product.api";
import { addProductsToExport } from "../api/trade.api";
import { Product } from "../interfaces/shop.interface";
import AddProduct from "./AddProduct";
import Navbar from "./Navbar";

function MyProducts() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isCardViewInCenter] = useMediaQuery("(min-width: 1200px)");

  const { data } = useQuery<Product[]>(`products`, () => {
    return getAllProducts();
    // we are certain that shopId will not be null or undefined at this point.
  });

  const addProductToExport = useMutation(addProductsToExport, {
    onSuccess: () => {
      queryClient.refetchQueries(`products`);
      navigate(`/products`);
    },
  });

  return (
    <>
      <Navbar />
      <Flex justifyContent={"flex-end"} gap={1}>
        <Button m="4">
          <Link to={`/exported-products`}> Import Products </Link>
        </Button>
        <Button m="4" bg={"#aac6ca"}>
          <AddProduct />
        </Button>
      </Flex>

      <Grid
        templateColumns="repeat(auto-fit, 315px)"
        gap={6}
        mx="24"
        my="8"
        justifyContent={isCardViewInCenter ? "flex-start" : "center"}
      >
        {_.map(data, (product) => {
          const { id } = product;
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
                <Button
                  onClick={() =>
                    addProductToExport.mutate({
                      productId: id,
                      importedShopkeeper: false,
                    })
                  }
                  bg={"#aac6ca"}
                >
                  Export
                </Button>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default MyProducts;
