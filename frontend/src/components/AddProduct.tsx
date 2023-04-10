import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
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
    addProducts.mutate({ ...product });
  };

  const addProducts = useMutation(addProduct, {
    onSuccess: () => {
      queryClient.refetchQueries(`products`);
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button bg={"none"} onClick={onOpen}>
        {" "}
        Add product
      </Button>

      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="3">
          <form onSubmit={handleSubmit(onHandle)}>
            <ModalHeader>
              <Heading>Add new product</Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex justifyContent={"center"} direction={"column"}>
                <FormControl
                  mb="3"
                  isInvalid={!!errors["productName"]?.message}
                >
                  <FormLabel margin={0} my="1">
                    Product name
                  </FormLabel>
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
                <FormControl
                  mb="3"
                  isInvalid={!!errors["description"]?.message}
                >
                  <FormLabel margin={0} my="1">
                    Description
                  </FormLabel>
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
                <FormControl
                  mb="3"
                  isInvalid={!!errors["productImageUrl"]?.message}
                >
                  <FormLabel margin={0} my="1">
                    Image url
                  </FormLabel>
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
                <FormControl mb="3" isInvalid={!!errors["quantity"]?.message}>
                  <FormLabel margin={0} my="1">
                    Quantity
                  </FormLabel>
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
              </Flex>

              <Flex justifyContent="flex-end" my="5">
                <Button
                  _hover={{ bg: "red", color: "white" }}
                  mr={3}
                  onClick={onClose}
                >
                  Close
                </Button>
                <Button bg="#aac6ca" type="submit" onClick={onClose}>
                  Add product
                </Button>
              </Flex>
            </ModalBody>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddProduct;
