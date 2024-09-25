import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useRegister from "../../hooks/useRegister";

const schema = yup.object({
  username: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().required(),
});
type RegisterFormData = yup.InferType<typeof schema>;
const RegisterForm = () => {
  const { mutate: signUp, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    signUp(data);
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={6}>
      <HStack>
        <FormControl isInvalid={!!errors.first_name}>
          <Input
            type="text"
            {...register("first_name")}
            placeholder="First name"
          />
          {errors.first_name && (
            <FormErrorMessage>{errors.first_name.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.last_name}>
          <Input
            type="text"
            {...register("last_name")}
            placeholder="Last name"
          />
          {errors.last_name && (
            <FormErrorMessage>{errors.last_name.message}</FormErrorMessage>
          )}
        </FormControl>
      </HStack>
      <FormControl isInvalid={!!errors.email}>
        <Input type="text" {...register("email")} placeholder="Email" />
        {errors.email && (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.username}>
        <Input type="text" {...register("username")} placeholder="Username" />
        {errors.username && (
          <FormErrorMessage>{errors.username.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.password}>
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
    </VStack>
  );
};

export default RegisterForm;
