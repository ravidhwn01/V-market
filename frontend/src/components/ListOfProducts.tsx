import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
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
import { getAllProducts, getAllProductsForShop } from "../api/product.api";
import { addProductsToExport } from "../api/trade.api";
import { Product } from "../interfaces/shop.interface";
import AddProduct from "./AddProduct";
import Navbar from "./Navbar";
import React, { useContext } from "react";
import { UserContext } from "../context/user.context";

function ListOfProducts() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { shopId } = useParams();
  const [isCardViewInCenter] = useMediaQuery("(min-width: 1200px)");

  const { data: products } = useQuery<Product[]>(
    `products`,
    getAllProductsForShop
    // we are certain that shopId will not be null or undefined at this point.
  );
  const { user, setUser } = useContext(UserContext);
  const addProductToExport = useMutation(addProductsToExport, {
    onSuccess: () => {
      queryClient.refetchQueries(`products`);
      navigate(`/products`);
    },
  });

  const onExportHandler = () => {
    addProductToExport.mutate({
      productId: user?.id,
      exportedShopkeeperId: shopId,
      importedShopkeeper: false,
    });
    setIsOpen(true);
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  return (
    <>
      <Navbar />
      <Flex justifyContent={"flex-end"} gap={1}>
        <Button m="4">
          <Link to={`/exportedproducts/${shopId}`}> Import Products </Link>
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
        {_.map(products, (product) => {
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
                <Button onClick={onExportHandler} bg={"#aac6ca"}>
                  Export
                </Button>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogBody fontSize="lg" fontWeight="bold">
                        Product Exported Successfully.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default ListOfProducts;
