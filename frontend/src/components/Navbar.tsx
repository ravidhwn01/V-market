import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showNavbarPosition] = useMediaQuery("(min-width: 700px)");
  return (
    <Flex
      justifyContent={"space-between"}
      w="100%"
      p="6"
      fontSize={"2xl"}
      flexDir={showNavbarPosition ? "row" : "column"}
    >
      <Flex gap="5">
        <Image
          height="10px"
          borderRadius="full"
          boxSize="40px"
          src="https://cdn4.vectorstock.com/i/1000x1000/70/83/shop-store-icon-vector-30737083.jpg"
          alt="Loading..."
        />
        <Text fontWeight={"extrabold"} color={"green.800"}>
          Vmarket
        </Text>
      </Flex>

      <Flex gap="5" flexWrap="wrap">
        <Link to={"/"}> Home </Link>
        <Link to={"listofproducts"}>All Products</Link>
        <Link to={"/signup"}>Sign Up</Link>
        <Link to={"/login"}>Login</Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
