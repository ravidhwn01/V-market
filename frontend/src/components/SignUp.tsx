import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(UserSignUpSchema),
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
          <FormControl>
            <FormLabel my="1">First Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your First Name"
              {...register("name.first_name")}
            />
          </FormControl>
          <FormControl>
            <FormLabel my="1">Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your Last Name"
              {...register("name.last_name")}
            />
          </FormControl>
          <FormControl>
            <FormLabel my="1">Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter Your Email"
              {...register("email")}
            />
          </FormControl>
          <FormControl>
            <FormLabel my="1">Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Your Password"
              {...register("password")}
            />
          </FormControl>
          <FormControl>
            <FormLabel my="1">Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Your Confirm Password"
              {...register("confirm_password")}
            />
          </FormControl>
          <Button w="100%" mt={4} bg="#aac6ca" type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </>
  );
}

export default SignUp;
