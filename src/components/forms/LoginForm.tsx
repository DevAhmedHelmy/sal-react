import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useLogin from "../../hooks/useLogin";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
});
type LoginFormData = yup.InferType<typeof schema>;
const LoginForm = () => {
  const { mutate: login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    login(data);
  };

  return (
    <Box
      as="form"
     
     
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={!!errors.username}>
        <FormLabel>Username</FormLabel>
        <Input type="text" {...register("username")} placeholder="Username" />
        {errors.username && (
          <FormErrorMessage>{errors.username.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.password}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        {errors.password && (
          <FormErrorMessage>{errors.password.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button mt={4} isLoading={isPending} type="submit">
        Sign in
      </Button>
    </Box>
  );
};

export default LoginForm;
