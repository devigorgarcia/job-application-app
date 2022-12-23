import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { IModalEdit } from "../../../interfaces/Modals.interface";

export const EditModal = ({
  isOpen,
  onClose,
  applicationStatus,
  applicationTitle,
  applicationOrg,
}: IModalEdit) => {
  
  const { editStatus } = useContext(ApplicationContext);
  const [newStatus, setNewStatus] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Atualizar Status</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir={["column"]} gap="4" mb="4">
            <Heading size={["md"]}>{applicationTitle}</Heading>
            <Text>
              <strong>Empresa:</strong> {applicationOrg}
            </Text>
          </Flex>
          <FormControl display={"flex"} flexDir={["column"]}>
            <FormLabel>Novo Status</FormLabel>
            <Select onChange={(e) => setNewStatus(e.target.value)}>
              <option value="default">{applicationStatus.status}</option>
              <option value="Analise de CV">Analise de CV</option>
              <option value="Teste Fit Cultural">Teste Fit Cultural</option>
              <option value="Teste Técnico">Teste Técnico</option>
              <option value="Entrevista RH">Entrevista RH</option>
              <option value="Entrevista Técnica">Entrevista Técnica</option>
              <option value="Entrevista TL">Entrevista TL</option>
              <option value="Contratado">Contratado</option>
              <option value="Recusado">Recusado</option>
            </Select>
            <Button
              onClick={() => editStatus(newStatus, applicationStatus.id, onClose)}
              alignSelf="center"
              colorScheme={"blue"}
              mt={"4"}
            >
              Atualizar
            </Button>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
