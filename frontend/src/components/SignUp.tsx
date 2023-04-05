import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IShopkeeper, ShopkeeperSchema } from "../schemas/shopkeeper.schema";

import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { addShopkeeper } from "../api/shopkeeper.api";
import Navbar from "./Navbar";

function SignUp() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IShopkeeper>({
    resolver: yupResolver(ShopkeeperSchema),
  });

  const onHandleSubmit = (userSignDetails: IShopkeeper) => {
    console.log(userSignDetails);
    mutation.mutate(userSignDetails);
  };

  const mutation = useMutation(addShopkeeper, {
    onSuccess: () => {
      console.log("created shopkeeper");
    },
  });

  return (
    <>
      <Navbar />
      <Heading textAlign={"center"} m="3">
        Create Your Account{" "}
      </Heading>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <Flex
          justifyContent={"center"}
          direction={"column"}
          w={"50%"}
          m={"auto"}
        >
          <FormControl isInvalid={!!errors["firstName"]?.message}>
            <FormLabel my="1">First Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your First Name"
              {...register("firstName")}
            />
            {errors["firstName"]?.message && (
              <FormErrorMessage>
                {errors["firstName"].message as any}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors["lastName"]?.message}>
            <FormLabel my="1">Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your Last Name"
              {...register("lastName")}
            />
            {errors["lastName"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["lastName"].message as any}{" "}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors["email"]?.message}>
            <FormLabel my="1">Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter Your Email"
              {...register("email")}
            />
            {errors["email"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["email"].message as any}{" "}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors["password"]?.message}>
            <FormLabel my="1">Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Your Password"
              {...register("password")}
            />
            {errors["password"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["password"].message as any}{" "}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors["confirmPassword"]?.message}>
            <FormLabel my="1">Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Your Confirm Password"
              {...register("confirmPassword")}
            />
            {errors["confirmPassword"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["confirmPassword"].message as any}{" "}
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors["shopName"]?.message}>
            <FormLabel my="1">Shop Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your Shop Name"
              {...register("shopName")}
            />
            {errors["shopName"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["shopName"].message as any}{" "}
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors["shopDescription"]?.message}>
            <FormLabel my="1">Shop Description</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your Shop Description"
              {...register("shopDescription")}
            />
            {errors["shopDescription"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["shopDescription"].message as any}{" "}
              </FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors["shopImageUrl"]?.message}>
            <FormLabel my="1">Shop Image Url</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your Shop Image Url"
              {...register("shopImageUrl")}
            />
            {errors["shopImageUrl"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["shopImageUrl"].message as any}{" "}
              </FormErrorMessage>
            )}
          </FormControl>

          <Button w="100%" mt={4} bg="#aac6ca" type="submit">
            Sign Up
          </Button>
        </Flex>
      </form>

      <Heading textAlign={"center"} mt={"2"} size={"sm"}>
        {" "}
        Already have an account !{" "}
        <Link to={"/login"} color="teal.500">
          {" "}
          Login{" "}
        </Link>
      </Heading>
    </>
  );
}

export default SignUp;
