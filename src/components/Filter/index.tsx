import {
  Button,
  Divider,
  Flex,
  Input,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ApplicationContext } from "../../contexts/ApplicationContext";
import { CreateModal } from "../Modals/CreateModal";

export const Filter = () => {
  const { setInputSelect } = useContext(ApplicationContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        flexDir={["column"]}
        mt={["4"]}
        mb="4"
        maxW={"700px"}
        margin={["0 auto"]}
      >
        <Flex flexDir={["column"]}>
          <Input
            margin={["0 auto"]}
            mt={"4"}
            mb={"4"}
            placeholder="Pesquise candidatura/empresa/status"
            width={["90%"]}
            onChange={(e) => setInputSelect(e.target.value)}
          />
          <Flex
            flexDir={["column"]}
            width={["90%"]}
            margin={["0 auto"]}
            gap={["2"]}
          >
            <label>Selecione o status da candidatura</label>
            <Select
              onChange={(e) => setInputSelect(e.target.value)}
              textAlign="center"
            >
              <option value="default">Todas as aplicações</option>
              <option value="Analise de CV">Analise CV</option>
              <option value="Teste Fit Cultural">Teste Fit Cultural</option>
              <option value="Teste Técnico">Teste Técnico</option>
              <option value="Entrevista RH">Entrevista RH</option>
              <option value="Entrevista Técnica">Entrevista Técnica</option>
              <option value="Entrevista TL">Entrevista TL</option>
              <option value="Contratado">Contratado</option>
              <option value="Recusado">Recusado</option>
            </Select>
          </Flex>
        </Flex>
        <Divider mt={"4"} />
        <Flex
          justifyContent={["center"]}
          alignItems={["center"]}
          padding="1rem 0"
        >
          <Button onClick={onOpen} colorScheme="blue">
            Adicionar nova candidatura
          </Button>
        </Flex>
      </Flex>
      <CreateModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
