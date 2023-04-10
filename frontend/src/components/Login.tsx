import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useMutation } from "react-query";
import { loginShopkeeperRequest } from "../api/login-api";
import { ILoginUser } from "../interfaces/loginDetails.interface";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/user.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../schemas/login-schema";
import { cloneWith } from "lodash";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: yupResolver(LoginSchema),
  });

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const onHandleSubmit = (loginUserDetail: ILoginUser) => {
    console.log(loginUserDetail);
    loginShopkeeperMutation.mutate(loginUserDetail);
  };

  const loginShopkeeperMutation = useMutation(loginShopkeeperRequest, {
    onSuccess: (data) => {
      console.log(data.user);
      setUser(data.user);
      setIsOpen(true);
      navigate("/products");
    },
    onError: (err) => {
      setIsError(true);
    },
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const [isError, setIsError] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

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
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogBody fontSize="lg" fontWeight="bold">
                  Login Successfully.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>
      </form>
      <Link to={"/signup"} color="teal.500">
        <Heading textAlign={"center"} mt={"2"} size={"sm"}>
          {" "}
          Create new account! Sign Up{" "}
        </Heading>
      </Link>
      {isError ? (
        <Heading textAlign="center" size="md" style={{ color: "red" }}>
          User does not exist for the following login credentials
        </Heading>
      ) : (
        ""
      )}
    </>
  );
}

export default Login;
