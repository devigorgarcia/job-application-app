import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { IForm } from "../../interfaces/Form.interface";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Form = () => {
  const { registerUser, loginUser } = useContext(AuthContext);
  const [state, setState] = useState(false);

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IForm>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: IForm) => {
    if (state) {
      console.log("Login");
      loginUser(data);
    } else {
      console.log("Cadastro");
      registerUser(data);
      setState(true);
    }
  };

  return (
    <Flex
      flexDir={["column"]}
      p={6}
      m="1"
      w="100%"
      maxW="600px"
      rounded="10px"
      color="blue.900"
    >
      {state ? (
        <Heading textAlign="center">Login</Heading>
      ) : (
        <Heading textAlign="center">Cadastro</Heading>
      )}
      <Divider mt={4} />
      <Flex
        as="form"
        flexDir={["column"]}
        mt="10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <VStack spacing={10} w="100%">
          <Box w="100%">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              bg="gray.100"
              h="52px"
              padding={4}
              {...register("email")}
            />
            {errors.email ? (
              <Text>{errors.email?.message}</Text>
            ) : (
              <Text>fulano@email.com</Text>
            )}
          </Box>
          <Box w="100%">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              bg="gray.100"
              h="52px"
              padding={4}
              {...register("password")}
            />
          </Box>
        </VStack>
        {state ? (
          <Button mt="10" type="submit" colorScheme="blue" h="54px">
            Logar
          </Button>
        ) : (
          <Button mt="10" type="submit" colorScheme="blue" h="54px">
            Cadastrar
          </Button>
        )}
      </Flex>
      <Flex
        width="100%"
        align="center"
        justifyContent="center"
        mt={4}
        flexDir="column"
        gap={5}
      >
        <Text textAlign="center">ou se já for cadastrado</Text>
        <Button h="54px" w="100%" onClick={() => setState(!state)}>
          {state ? "Cadastrar" : "Login"}
        </Button>
      </Flex>
    </Flex>
  );
};
