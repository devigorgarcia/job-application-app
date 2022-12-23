import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { ICreateForm } from "../../interfaces/Form.interface";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ThemeDarkContext } from "../../contexts/ThemeContext";

export const CreateForm = () => {
  const { theme } = useContext(ThemeDarkContext);
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email Inválido"),
    password: yup.string().required("Campo Obrigatório"),
  });

  console.log(theme);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ICreateForm>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: ICreateForm) => {
    console.log(data);
  };

  return (
    <Flex
      flexDir={["column"]}
      p={4}
      w="100%"
      maxW="600px"
      rounded="10px"
      // color="blue.900"
    >
      <Flex
        as="form"
        flexDir={["column"]}
        mt="4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <VStack spacing={5} w="100%">
          <Box w="100%">
            <FormLabel>Titulo da vaga</FormLabel>
            <Input
              type="text"
              bg="gray.100"
              h="52px"
              padding={4}
              {...register("title")}
              placeholder="Digite o titulo da vaga"
            />
          </Box>
          <Box w="100%">
            <Text>Empresa</Text>
            <Input
              type="text"
              bg="gray.100"
              h="52px"
              padding={4}
              placeholder="Digita a Empresa"
              {...register("org")}
            />
          </Box>
          <Box w="100%">
            <FormLabel>Senioridade</FormLabel>
            <Select {...register("level")}>
              <option>Selecione a senioridade</option>
              <option value="Junior">Junior</option>
              <option value="Pleno">Pleno</option>
              <option value="Senior">Senior</option>
            </Select>
          </Box>
          <Box w="100%">
            <FormLabel>Escolha o tipo</FormLabel>
            <Select {...register("stack")}>
              <option>Escolha o tipo</option>
              <option value="Front-End">Front-End</option>
              <option value="Back-End">Back-End</option>
              <option value="Full-Stack">Full-Stack</option>
            </Select>
          </Box>
          <Box w="100%">
            <FormLabel>Status</FormLabel>
            <Select {...register("status")}>
              <option>Escolha o status</option>
              <option value="Analise de CV">Analise de CV</option>
              <option value="Teste Fit Cultural">Teste Fit Cultural</option>
              <option value="Teste Técnico">Teste Técnico</option>
              <option value="Entrevista RH">Entrevista RH</option>
              <option value="Entrevista Técnica">Entrevista Técnica</option>
              <option value="Entrevista TL">Entrevista TL</option>
              <option value="Contratado">Contratado</option>
              <option value="Recusado">Recusado</option>
            </Select>
          </Box>
          <Box w="100%">
            <FormLabel>Link</FormLabel>
            <Input
              type="text"
              bg="gray.100"
              h="52px"
              padding={4}
              placeholder="Coloque o link da candidatura"
              {...register("link")}
            />
          </Box>
          <Box w="100%">
            <FormLabel>Observações</FormLabel>
            <Input
              type="text"
              bg="gray.100"
              h="52px"
              padding={4}
              placeholder="Coloque alguma informações Adicionais"
              {...register("obs")}
            />
          </Box>
        </VStack>
        <Button colorScheme={"blue"} mt={"8"} h={"58px"} type="submit">
          Adicionar
        </Button>
      </Flex>
    </Flex>
  );
};
