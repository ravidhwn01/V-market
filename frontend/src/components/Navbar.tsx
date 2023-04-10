import { Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context";

function Navbar() {
  const [showNavbarPosition] = useMediaQuery("(min-width: 700px)");

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <Flex
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
          <Heading
            _hover={{ textDecoration: "underline" }}
            fontSize={"2xl"}
            fontWeight={"medium"}
          >
            {" "}
            Home{" "}
          </Heading>
        </Link>
        <Link to={"/signup"}>
          <Heading
            _hover={{ textDecoration: "underline" }}
            fontSize={"2xl"}
            fontWeight={"medium"}
          >
            {!!user && user.shopName ? user.shopName : "Sign Up"}
          </Heading>
        </Link>
        <Link to={!!user && user.firstName ? "/products" : "/login"}>
          <Heading fontSize={"2xl"} fontWeight={"medium"}>
            {!!user && user.firstName ? user.firstName : "Login"}
          </Heading>
        </Link>
        {!!user && (
          <Link to={!!user && user.firstName ? "/products" : "/login"}>
            <Heading
              _hover={{ textDecoration: "underline" }}
              fontSize={"2xl"}
              fontWeight={"medium"}
              onClick={() => {
                localStorage.removeItem("access_token");
                setUser(undefined);
                navigate("/login");
              }}
            >
              Logout
            </Heading>
          </Link>
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;
