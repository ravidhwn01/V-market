import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex wrap={"wrap"} justify={"space-between"}>
      <Flex>
        <Box> logo </Box>
        <Text>site name</Text>
      </Flex>

      <Flex justify={"space-evenly"}>
        <Link to={"/"}> Home </Link>
        <Link to={"listofproducts"}>All Products</Link>
        <Link to={"/signup"}>Sign Up</Link>
        <Link to={"/login"}>Login</Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
