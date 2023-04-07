import { Button } from "@chakra-ui/button";
import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import * as _ from "lodash";
import { useQuery, useQueryClient } from "react-query";
import { getAllExportedProducts, importProduct } from "../api/trade.api";

import { Image } from "@chakra-ui/image";
import { useParams } from "react-router";
import { IExportedProduct } from "../interfaces/exportedProduct.interface";
import Navbar from "./Navbar";
import { useMediaQuery } from "@chakra-ui/react";

function ExportedProducts() {
  const { shopkeeperId } = useParams();
  console.log(shopkeeperId);
  const queryClient = useQueryClient();
  const [isCardViewInCenter] = useMediaQuery("(min-width: 1200px)");

  const { data } = useQuery<IExportedProduct[]>(
    `exportedProduct-${shopkeeperId}`,
    getAllExportedProducts
  );

  return (
    <>
      <Navbar />
      <Flex direction={"column"}>
        <Heading textAlign="center" my="3">
          You can import products to your shop by one click
        </Heading>
        <Grid
          templateColumns="repeat(auto-fit, 315px)"
          gap={6}
          mx="24"
          my="8"
          justifyContent={isCardViewInCenter ? "flex-start" : "center"}
        >
          {_.map(data, (allExportedProduct) => {
            return (
              <GridItem
                p="6"
                w="100%"
                h="100%"
                boxShadow={"2xl"}
                borderRadius="8px"
                key={allExportedProduct.id}
              >
                <Image
                  src={allExportedProduct.product.productImageUrl}
                  alt="loading..."
                />

                <Text fontSize={"2xl"} fontWeight="bold">
                  {allExportedProduct.product.productName}
                </Text>
                <Text color="#7A7A7A">
                  {allExportedProduct.product.description}{" "}
                </Text>

                <Button
                  onClick={() => {
                    importProduct(
                      allExportedProduct.id,
                      parseInt(shopkeeperId!)
                    );
                  }}
                  w="100%"
                  bg={"#aac6ca"}
                >
                  {" "}
                  Import{" "}
                </Button>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </>
  );
}

export default ExportedProducts;
