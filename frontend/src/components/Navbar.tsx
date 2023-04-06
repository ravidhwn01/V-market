import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export interface IShopId {
  id?: number;
}

function Navbar(props: IShopId) {
  const { id } = props;
  const navigate = useNavigate();
  const [showNavbarPosition] = useMediaQuery("(min-width: 700px)");
  return (
    <Flex
      // position="fixed"
      justifyContent={"space-between"}
      w="100%"
      p="6"
      fontSize={"2xl"}
      flexDir={showNavbarPosition ? "row" : "column"}
      bg={"#aac6ca"}
    >
      <Flex gap="5">
        <Link to={"/"}>
          <Image
            height="10px"
            borderRadius="full"
            boxSize="40px"
            src="https://cdn4.vectorstock.com/i/1000x1000/70/83/shop-store-icon-vector-30737083.jpg"
            alt="Loading..."
          />
        </Link>
        <Link to={"/"}>
          <Text fontWeight={"extrabold"} color={"green.800"}>
            Vmarket
          </Text>
        </Link>
      </Flex>

      <Flex gap="6" flexWrap="wrap">
        <Link to={"/"}>
          {" "}
          <Heading fontSize={"2xl"} fontWeight={"normal"}>
            {" "}
            Home{" "}
          </Heading>
        </Link>
        <Link to={`/exportedproducts/${id}`}>
          {" "}
          <Heading fontSize={"2xl"} fontWeight={"normal"}>
            Import Products
          </Heading>
        </Link>
        <Link to={"/signup"}>
          <Heading fontSize={"2xl"} fontWeight={"medium"}>
            Sign Up
          </Heading>
        </Link>
        <Link to={"/login"}>
          <Heading fontSize={"2xl"} fontWeight={"medium"}>
            Login
          </Heading>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
