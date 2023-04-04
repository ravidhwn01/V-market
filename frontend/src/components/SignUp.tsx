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
import { ShopkeeperSchema } from "../schemas/shopkeeper.schema";

import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ShopkeeperSchema),
  });

  const onHandleSubmit = (userSignDetails: FieldValues) => {
    console.log(userSignDetails);
  };

  return (
    <>
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
          <FormControl isInvalid={!!errors["first_name"]?.message}>
            <FormLabel my="1">First Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your First Name"
              {...register("first_name")}
            />
            {errors["first_name"]?.message && (
              <FormErrorMessage>
                {errors["first_name"].message as any}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors["last_name"]?.message}>
            <FormLabel my="1">Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your Last Name"
              {...register("last_name")}
            />
            {errors["last_name"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["last_name"].message as any}{" "}
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
          <FormControl isInvalid={!!errors["confirm_password"]?.message}>
            <FormLabel my="1">Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Your Confirm Password"
              {...register("confirm_password")}
            />
            {errors["confirm_password"]?.message && (
              <FormErrorMessage>
                {" "}
                {errors["confirm_password"].message as any}{" "}
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
        Already account !{" "}
        <Link to={"/login"} color="teal.500">
          {" "}
          Login{" "}
        </Link>
      </Heading>
    </>
  );
}

export default SignUp;
