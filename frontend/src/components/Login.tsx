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
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onHandleSubmit = (loginUserDetail: FieldValues) => {
    console.log(loginUserDetail);
  };

  return (
    <>
      <Navbar />
      <Heading textAlign={"center"} m="3">
        Login{" "}
      </Heading>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <Flex
          justifyContent={"center"}
          direction={"column"}
          w={"50%"}
          m={"auto"}
        >
          <FormControl mb="3" isInvalid={!!errors["email"]?.message}>
            <FormLabel margin={0}>Email</FormLabel>
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
            <FormLabel margin={0}>Password</FormLabel>
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

          <Button w="100%" mt={4} bg="#aac6ca" type="submit">
            Login
          </Button>
        </Flex>
      </form>
      <Heading textAlign={"center"} mt={"2"} size={"sm"}>
        {" "}
        Create new account!{" "}
        <Link to={"/signup"} color="teal.500">
          Sign Up{" "}
        </Link>
      </Heading>
    </>
  );
}

export default Login;
