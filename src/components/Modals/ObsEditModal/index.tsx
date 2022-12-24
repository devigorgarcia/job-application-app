import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ApplicationContext } from "../../../contexts/ApplicationContext";
import { IUpdateApplicationData } from "../../../interfaces/Context.interfaces";

interface EditModal {
  isOpen: boolean;
  onClose: () => void;
  applicationId: string;
}

export const ObsEditModal = ({ applicationId, isOpen, onClose }: EditModal) => {
  const { editApplication } = useContext(ApplicationContext);
  const [newObs, setNewObs] = useState<IUpdateApplicationData>(
    {} as IUpdateApplicationData
  );

  const onSubmit = (data: IUpdateApplicationData) => {
    editApplication(data, applicationId, onClose);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Atualizar Observação</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl display={"flex"} flexDir={["column"]}>
            <FormLabel>Novo Observação</FormLabel>
            <Textarea
              resize={"none"}
              onChange={(e) => setNewObs({ obs: e.target.value })}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={() => onSubmit(newObs)}>
            Atualizar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
