import {
  Box,
  Button,
  Divider,
  Flex,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IAppCard } from "../../../interfaces/Context.interfaces";
import { AiOutlineEdit } from "react-icons/ai";
import { EditModal } from "../../Modals/EditModal";
import { ObsEditModal } from "../../Modals/ObsEditModal";

export const ApplicationCard = ({ application }: IAppCard) => {
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const {
    isOpen: isOpenObsEdit,
    onOpen: onOpenObsEdit,
    onClose: onCloseObsEdit,
  } = useDisclosure();

  const register_date = application?.register_date?.split("T")[0];
  const registerYear = register_date?.split("-")[0];
  const registerMonth = register_date?.split("-")[1];
  const registerDay = register_date?.split("-")[2];
  const fullDateRegister = `${registerDay}/${registerMonth}/${registerYear}`;

  let update_date = application.status?.updated_date?.split("T")[0];

  const updateYear = update_date?.split("-")[0];
  const updateMonth = update_date?.split("-")[1];
  const updateDay = update_date?.split("-")[2];

  const fullDateUpdate = `${updateDay}/${updateMonth}/${updateYear}`;
  return (
    <>
      <Flex
        flexDir={["column"]}
        p="3"
        gap="2"
        border="1px solid"
        maxW={["500px"]}
      >
        <Flex justifyContent={["space-evenly"]} gap={["10"]}>
          <Box maxW={"150px"}>
            <Text>
              <strong>Vaga:</strong>
            </Text>
            <Text>{application.title}</Text>
          </Box>
          <Box>
            <Text>
              <strong>Empresa:</strong>
            </Text>
            <Text>{application.org}</Text>
          </Box>
        </Flex>
        <Divider />
        <Flex justifyContent={["space-evenly"]} gap={["10"]}>
          <Box>
            <Text>
              <strong>Data de candidatura:</strong>
            </Text>
            <Text>{fullDateRegister}</Text>
          </Box>
          <Box>
            <Text>
              <strong>Ultima Atualização:</strong>
            </Text>
            <Text>{fullDateUpdate}</Text>
          </Box>
        </Flex>
        <Divider />
        <Flex align={["center"]} justifyContent={["space-evenly"]}>
          <Text textAlign={["center"]}>
            <strong>Status:</strong>
          </Text>
          <Text>{application?.status?.status}</Text>
          <Button colorScheme="blue" onClick={onOpenEdit}>
            <AiOutlineEdit />
          </Button>
        </Flex>
        <Divider />
        <Text textAlign={["center"]}>
          <strong>Observações: </strong>
          {application.obs}
        </Text>
        <Button
          colorScheme="blue"
          w="50%"
          margin="0 auto"
          onClick={onOpenObsEdit}
        >
          Editar observações
        </Button>
        <Divider />
        <Link
          m="1rem auto"
          target="_blank"
          textAlign="center"
          href={application.link}
        >
          <strong>Acompanhe sua candidatura</strong>
        </Link>
      </Flex>
      {application.status?.status && (
        <EditModal
          isOpen={isOpenEdit}
          onClose={onCloseEdit}
          applicationStatus={application.status}
          applicationTitle={application.title}
          applicationOrg={application.org}
        />
      )}
      <ObsEditModal
        applicationId={application.id}
        isOpen={isOpenObsEdit}
        onClose={onCloseObsEdit}
      />
    </>
  );
};
