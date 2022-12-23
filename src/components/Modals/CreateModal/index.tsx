import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { IModalCreate } from "../../../interfaces/Modals.interface";
import { CreateForm } from "../../Form/CreateForm";

export const CreateModal = ({ isOpen, onClose }: IModalCreate) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={"26px"} textAlign="center">
          Cadastar Candidatura
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pt="0">
          <CreateForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
