import { Box, Center, Flex } from "@chakra-ui/react";

function PageNotFound() {
  return (
    <Flex justifyContent="center" alignItems="center" w="100vw" h="100vh">
      <Center>
        <Box fontWeight={"bold"} fontSize={"3xl"}>
          Page Not Found
        </Box>
      </Center>
    </Flex>
  );
}

export default PageNotFound;
