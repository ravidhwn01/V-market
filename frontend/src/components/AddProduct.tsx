import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { IProduct, ProductSchema } from "../schemas/shopkeeper.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "react-query";
import { addProduct } from "../api/product.api";
import { useNavigate, useParams } from "react-router";

function AddProduct() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { shopId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: yupResolver(ProductSchema),
  });
  const onHandle = (product: IProduct) => {
    console.log(product, shopId);
    addProducts.mutate({ ...product, shopkeeperId: parseInt(shopId!) });
  };

  const addProducts = useMutation(addProduct, {
    onSuccess: () => {
      queryClient.refetchQueries(`products-${shopId}`);
    },
  });
  return (
    <>
      <Heading textAlign={"center"} m="3">
        Add new product
      </Heading>
      <form onSubmit={handleSubmit(onHandle)}>
        <Flex
          justifyContent={"center"}
          direction={"column"}
          w={"50%"}
          m={"auto"}
        >
          <FormControl isInvalid={!!errors["productName"]?.message}>
            <FormLabel my="1">Product name</FormLabel>
            <Input
              type="text"
              placeholder="Enter product name"
              {...register("productName")}
            />
            {errors["productName"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["productName"].message as any}{" "}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors["description"]?.message}>
            <FormLabel my="1">Description</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your description"
              {...register("description")}
            />
            {errors["description"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["description"].message as any}{" "}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors["productImageUrl"]?.message}>
            <FormLabel my="1">Image url</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your product image url"
              {...register("productImageUrl")}
            />
            {errors["productImageUrl"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["productImageUrl"].message as any}{" "}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors["quantity"]?.message}>
            <FormLabel my="1">Quantity</FormLabel>
            <Input
              type="number"
              placeholder="Enter Your quantity"
              {...register("quantity")}
            />
            {errors["quantity"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["quantity"].message as any}{" "}
              </FormErrorMessage>
            )}
          </FormControl>

          <Button w="100%" mt={4} bg="#aac6ca" type="submit">
            Add product
          </Button>
        </Flex>
      </form>
    </>
  );
}

export default AddProduct;
