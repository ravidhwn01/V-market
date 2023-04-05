import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
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
        <Link to={"/"}>
          {" "}
          <Heading fontSize={"3xl"} fontWeight={"normal"}>
            {" "}
            Home{" "}
          </Heading>
        </Link>
        <Link to={"/signup"}>
          <Heading fontSize={"3xl"} fontWeight={"medium"}>
            Sign Up
          </Heading>
        </Link>
        <Link to={"/login"}>
          <Heading fontSize={"3xl"} fontWeight={"medium"}>
            Login
          </Heading>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
