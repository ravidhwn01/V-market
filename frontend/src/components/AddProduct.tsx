import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver:yupResolver()
  });
  const onHandle = (product: FieldValues) => {
    console.log(product);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onHandle)}>
        <Flex direction={"column"} justifyContent={"center"} w="50%" m="auto">
          <FormControl>
            <FormLabel>Product name</FormLabel>
            <Input type="text" {...register("productName")} />
          </FormControl>
          <FormControl>
            <FormLabel>Quantity </FormLabel>
            <Input type="number" {...register("quantity")} />
          </FormControl>
          <FormControl>
            <FormLabel> Description</FormLabel>
            <Input type="text" {...register("description")} />
          </FormControl>
          <Button mt="2" w={"100%"}>
            Add product
          </Button>
        </Flex>
      </form>
    </>
  );
}

export default AddProduct;
