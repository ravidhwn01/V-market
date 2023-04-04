import { Box, Center, Flex } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

function PageNotFound() {
  return (
    <Flex justifyContent="center" alignItems="center" w="100vw" h="100vh">
      <Center>
        <Box fontWeight={"bold"} fontSize={"3xl"}>
          Page Not Found
        </Box>
      </Center>
      <Navigate to={"/"} />
    </Flex>
  );
}

export default PageNotFound;
