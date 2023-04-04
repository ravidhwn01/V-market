import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import _ from "lodash";
import { CardData } from "../mocks/shop.mock";

function AllShops() {
  return (
    <>
      <Grid
        templateColumns="repeat(auto-fit, 290px)"
        gap={6}
        m="8"
        justifyContent={"center"}
      >
        {_.map(CardData, (item) => {
          return (
            <>
              <GridItem
                p="6"
                w="100%"
                h="100%"
                boxShadow={"2xl"}
                borderRadius="8px"
              >
                <Image src={item.imgUrl} />

                <Text fontSize={"2xl"} fontWeight="bold">
                  {item.shopName}
                </Text>
                <Text color="#7A7A7A">{item.des} </Text>
              </GridItem>
            </>
          );
        })}
      </Grid>
    </>
  );
}

export default AllShops;
