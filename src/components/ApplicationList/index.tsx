import { Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { ApplicationContext } from "../../contexts/ApplicationContext";
import { ApplicationCard } from "./ApplicationCard";

export const ApplicationList = () => {
  const { listApplications, getAllApplication } =
    useContext(ApplicationContext);

  return (
    <Flex flexDir={["column"]}>
      <Heading mb="4" textAlign={["center"]}>
        Lista de candidaturas
      </Heading>
      <Flex
        flexDir={["column", "column", "row"]}
        gap={["4"]}
        p={["4"]}
        justifyContent={["center"]}
      >
        {listApplications.map((application) => {
          return (
            <ApplicationCard key={application.id} application={application} />
          );
        })}
      </Flex>
    </Flex>
  );
};
